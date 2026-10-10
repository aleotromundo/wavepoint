(() => {
  'use strict';

  const catalog = Array.isArray(window.WAVEPOINT_PHOTO_CATALOG) ? window.WAVEPOINT_PHOTO_CATALOG : [];
  const state = { root: null, selected: new Map(), changes: [], objectUrls: [] };
  const $ = (id) => document.getElementById(id);
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[char]);
  const pathUrl = (path) => path.split('/').map((part) => encodeURIComponent(part)).join('/');
  const formatBytes = (bytes) => bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  const formatName = (entry) => entry.label || entry.path.split('/').pop();

  function setGlobalStatus(message, type = '') {
    const node = $('globalStatus');
    node.textContent = message;
    node.className = `status ${type}`.trim();
  }

  function setCardStatus(card, message, type = '') {
    const node = card.querySelector('.photo-status');
    node.textContent = message;
    node.className = `photo-status ${type}`.trim();
  }

  function populateFilters() {
    const groups = [...new Set(catalog.map((entry) => entry.group))].sort((a, b) => a.localeCompare(b));
    $('groupFilter').insertAdjacentHTML('beforeend', groups.map((group) => `<option value="${esc(group)}">${esc(group)}</option>`).join(''));
    $('assetCount').textContent = `${catalog.length} fotos catalogadas`;
  }

  function filteredCatalog() {
    const query = $('searchInput').value.trim().toLowerCase();
    const group = $('groupFilter').value;
    const format = $('formatFilter').value;
    return catalog.filter((entry) => {
      const haystack = `${entry.path} ${entry.label} ${entry.group}`.toLowerCase();
      return (!query || haystack.includes(query)) && (group === 'all' || entry.group === group) && (format === 'all' || entry.format === format);
    });
  }

  function render() {
    const entries = filteredCatalog();
    const catalogNode = $('catalog');
    catalogNode.innerHTML = '';
    $('emptyState').hidden = entries.length > 0;
    $('assetCount').textContent = `${entries.length} de ${catalog.length} fotos`;
    const template = $('photoCardTemplate');
    entries.forEach((entry) => {
      const card = template.content.cloneNode(true);
      const article = card.querySelector('.photo-card');
      article.dataset.path = entry.path;
      article.querySelector('.photo-preview').src = pathUrl(entry.path);
      article.querySelector('.photo-preview').alt = formatName(entry);
      article.querySelector('.format-badge').textContent = entry.format.toUpperCase();
      article.querySelector('.photo-group').textContent = entry.group;
      article.querySelector('h3').textContent = formatName(entry);
      article.querySelector('.photo-size').textContent = `${entry.width}×${entry.height}`;
      article.querySelector('.photo-path').textContent = entry.path;
      article.querySelector('.photo-open').href = pathUrl(entry.path);
      article.querySelector('.photo-input').addEventListener('change', (event) => selectFile(entry, article, event));
      article.querySelector('.write-button').addEventListener('click', () => writeReplacement(entry, article));
      article.querySelector('.download-button').addEventListener('click', () => downloadReplacement(entry, article));
      catalogNode.appendChild(card);
    });
  }

  async function selectFile(entry, card, event) {
    const file = event.target.files?.[0];
    const writeButton = card.querySelector('.write-button');
    if (!file) { state.selected.delete(entry.path); writeButton.disabled = true; return; }
    if (!file.type.startsWith('image/')) { setCardStatus(card, 'Elegí un archivo de imagen.', 'error'); writeButton.disabled = true; return; }
    state.selected.set(entry.path, file);
    writeButton.disabled = false;
    setCardStatus(card, `${file.name} listo para convertir a WebP.`);
    const preview = card.querySelector('.photo-preview');
    const url = URL.createObjectURL(file);
    state.objectUrls.push(url);
    preview.src = url;
  }

  async function decodeImage(file) {
    if ('createImageBitmap' in window) {
      try { return await createImageBitmap(file, { imageOrientation: 'from-image' }); } catch (_) { /* fallback below */ }
    }
    return new Promise((resolve, reject) => {
      const image = new Image();
      const url = URL.createObjectURL(file);
      image.onload = () => { URL.revokeObjectURL(url); resolve(image); };
      image.onerror = () => { URL.revokeObjectURL(url); reject(new Error('El navegador no pudo leer este formato de imagen.')); };
      image.src = url;
    });
  }

  async function convertToWebP(file) {
    const image = await decodeImage(file);
    const width = image.width || image.naturalWidth;
    const height = image.height || image.naturalHeight;
    if (!width || !height) throw new Error('La imagen no tiene dimensiones válidas.');
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d', { alpha: true });
    context.drawImage(image, 0, 0, width, height);
    if (typeof image.close === 'function') image.close();
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', .88));
    if (!blob) throw new Error('Este navegador no pudo generar WebP.');
    return { blob, width, height };
  }

  async function getDirectoryHandle(root, parts, create = false) {
    let current = root;
    for (const part of parts) current = await current.getDirectoryHandle(part, { create });
    return current;
  }

  async function writeBlob(root, path, blob) {
    const parts = path.split('/');
    const fileName = parts.pop();
    const directory = await getDirectoryHandle(root, parts, true);
    const handle = await directory.getFileHandle(fileName, { create: true });
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
  }

  async function readText(root, path) {
    const parts = path.split('/');
    const name = parts.pop();
    const dir = await getDirectoryHandle(root, parts);
    const file = await (await dir.getFileHandle(name)).getFile();
    return file.text();
  }

  async function replaceReferences(root, entry) {
    if (!entry.refs?.length || entry.path === entry.target) return [];
    const replacements = [];
    const oldPath = entry.path;
    const newPath = entry.target;
    for (const filePath of entry.refs) {
      try {
        const original = await readText(root, filePath);
        const variants = [oldPath, `/${oldPath}`, `../${oldPath}`];
        let updated = original;
        variants.forEach((variant) => { updated = updated.split(variant).join(variant.replace(oldPath, newPath)); });
        if (updated === original) continue;
        const parts = filePath.split('/');
        const name = parts.pop();
        const dir = await getDirectoryHandle(root, parts);
        const handle = await dir.getFileHandle(name);
        const writable = await handle.createWritable();
        await writable.write(updated);
        await writable.close();
        replacements.push(filePath);
      } catch (_) { /* a missing optional reference must not block the image write */ }
    }
    return replacements;
  }

  function downloadBlob(blob, path) {
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = path.split('/').pop();
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function prepareReplacement(entry, card) {
    const file = state.selected.get(entry.path);
    if (!file) throw new Error('Primero elegí una foto nueva.');
    setCardStatus(card, 'Convirtiendo a WebP…');
    const result = await convertToWebP(file);
    return result;
  }

  async function downloadReplacement(entry, card) {
    try {
      const result = await prepareReplacement(entry, card);
      downloadBlob(result.blob, entry.target);
      setCardStatus(card, `Descargada: ${entry.target} · ${formatBytes(result.blob.size)}`, 'success');
    } catch (error) { setCardStatus(card, error.message || 'No se pudo convertir la imagen.', 'error'); }
  }

  async function writeReplacement(entry, card) {
    if (!state.root) {
      setCardStatus(card, 'Elegí primero la carpeta raíz del repositorio.', 'error');
      return;
    }
    const button = card.querySelector('.write-button');
    button.disabled = true;
    try {
      const result = await prepareReplacement(entry, card);
      await writeBlob(state.root, entry.target, result.blob);
      const updatedRefs = await replaceReferences(state.root, entry);
      const change = { source: fileNameOf(state.selected.get(entry.path)), original: entry.path, target: entry.target, width: result.width, height: result.height, bytes: result.blob.size, updatedReferences: updatedRefs, at: new Date().toISOString() };
      state.changes = [...state.changes.filter((item) => item.original !== entry.path), change];
      $('downloadManifest').disabled = false;
      setCardStatus(card, `Guardada en ${entry.target} · ${formatBytes(result.blob.size)}${updatedRefs.length ? ` · ${updatedRefs.length} referencia(s) actualizada(s)` : ''}`, 'success');
    } catch (error) { setCardStatus(card, error.message || 'No se pudo guardar en el repositorio.', 'error'); }
    finally { button.disabled = false; }
  }

  function fileNameOf(file) { return file?.name || 'imagen seleccionada'; }

  async function chooseFolder() {
    if (!window.showDirectoryPicker) {
      setGlobalStatus('Tu navegador no permite escritura directa. Usá “Solo descargar WebP”.', 'error');
      return;
    }
    try {
      const handle = await window.showDirectoryPicker({ mode: 'readwrite' });
      if (!handle) return;
      state.root = handle;
      $('connectionState').textContent = 'Repositorio conectado';
      $('connectionState').classList.add('connected');
      setGlobalStatus('Listo: las fotos se pueden guardar en sus rutas exactas.', 'success');
    } catch (error) { if (error.name !== 'AbortError') setGlobalStatus('No se pudo acceder a esa carpeta.', 'error'); }
  }

  function downloadManifest() {
    const payload = { generatedAt: new Date().toISOString(), note: 'Cambios generados por dashboard.html. Revisar visualmente antes de borrar la herramienta.', changes: state.changes };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    downloadBlob(blob, `wavepoint-photo-changes-${new Date().toISOString().slice(0, 10)}.json`);
  }

  $('chooseFolder').addEventListener('click', chooseFolder);
  $('downloadManifest').addEventListener('click', downloadManifest);
  $('searchInput').addEventListener('input', render);
  $('groupFilter').addEventListener('change', render);
  $('formatFilter').addEventListener('change', render);
  populateFilters();
  render();
})();
