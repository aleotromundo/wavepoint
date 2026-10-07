(() => {
  const STORAGE_KEY = 'wavepoint-independent-editor-v1';
  const SESSION_KEY = 'wavepoint-admin-session';
  const MAX_UPLOAD = 4 * 1024 * 1024;
  const state = { lang: localStorage.getItem('wavepoint-editor-lang') === 'en' ? 'en' : 'es', mode: false, selected: null, translations: { es: {}, en: {} }, data: readData() };
  const $ = (id) => document.getElementById(id);
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  function readData() { try { const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); return value && typeof value === 'object' ? value : {}; } catch (_) { return {}; } }
  function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data)); }
  function keyFor(node) { return node.dataset.editorKey || node.dataset.i18n || node.dataset.editorFreeKey; }
  function isEditableText(node) { return node.matches('[data-i18n], [data-editor-free-key]') && !node.matches('script,style,svg,[aria-hidden="true"]'); }
  function originalText(node, lang) { const key = keyFor(node); return state.translations[lang]?.[key] ?? node.dataset[`editorOriginal${lang === 'es' ? 'Es' : 'En'}`] ?? node.textContent.trim(); }
  function currentText(node, lang) { const key = keyFor(node); return state.data.text?.[key]?.[lang] ?? originalText(node, lang); }

  function injectChrome() {
    document.body.insertAdjacentHTML('afterbegin', `<div id="editorChrome" class="editor-chrome"><div class="editor-brand"><strong>WAVEPOINT</strong><span>Editor paralelo · copia local</span></div><div class="editor-controls"><button id="editMode" type="button">Activar edición</button><button id="editorLanguage" type="button">${state.lang === 'es' ? 'ES / EN' : 'EN / ES'}</button><button id="editorSave" type="button">Guardar</button><button id="editorReset" type="button">Restaurar</button><a href="admin.html">Salir</a></div></div><aside id="editorPanel" class="editor-panel" aria-label="Propiedades del elemento" hidden></aside><div id="editorToast" class="editor-toast" role="status" aria-live="polite"></div>`);
    document.body.classList.add('has-editor-chrome');
    $('editMode').addEventListener('click', toggleMode);
    $('editorLanguage').addEventListener('click', toggleLanguage);
    $('editorSave').addEventListener('click', () => { saveData(); toast('Cambios guardados en este navegador'); });
    $('editorReset').addEventListener('click', resetAll);
  }

  async function loadTranslations() {
    try {
      const source = await fetch('../script.js', { cache: 'no-store' }).then((response) => response.text());
      const start = source.indexOf('const translations =');
      if (start < 0) return;
      const open = source.indexOf('{', start); let depth = 0; let quote = null; let escaped = false; let end = -1;
      for (let i = open; i < source.length; i += 1) { const char = source[i]; if (quote) { if (escaped) escaped = false; else if (char === '\\') escaped = true; else if (char === quote) quote = null; continue; } if (char === "'" || char === '"' || char === '`') { quote = char; continue; } if (char === '{') depth += 1; if (char === '}') { depth -= 1; if (!depth) { end = i + 1; break; } } }
      if (end > open) state.translations = Function(`return (${source.slice(open, end)})`)();
    } catch (_) { /* Visible text remains available as fallback. */ }
  }

  function markEditableNodes() {
    const seen = new Map();
    document.querySelectorAll('[data-i18n], h1, h2, h3, h4, p, .navlinks > a, .btn, .weather-heading, .w-label, .after-card-cta').forEach((node) => {
      if (!isEditableText(node) && !node.matches('h1,h2,h3,h4,p,.navlinks > a,.btn,.weather-heading,.w-label,.after-card-cta')) return;
      if (node.closest('#editorChrome, #editorPanel')) return;
      if (!node.textContent.trim() || node.children.length > 2 || node.matches('.weather-state,.w-value,#temp,#wind,#waveHeight,#localTime')) return;
      let key = node.dataset.i18n || node.dataset.editorFreeKey;
      if (!key) { const base = node.className || node.tagName.toLowerCase(); key = `free-${base}-${node.textContent.trim().slice(0, 30)}`; node.dataset.editorFreeKey = key; }
      if (seen.has(key)) { node.dataset.editorKey = `${key}-${seen.get(key) + 1}`; seen.set(key, seen.get(key) + 1); } else { node.dataset.editorKey = key; seen.set(key, 0); }
      node.dataset.editorOriginalEs = node.textContent.trim();
      node.dataset.editorOriginalEn = state.translations.en?.[key] || node.textContent.trim();
      node.classList.add('editor-editable');
    });
  }

  function applyText() {
    document.querySelectorAll('[data-editor-key]').forEach((node) => { if (!node.classList.contains('editor-dynamic')) node.textContent = currentText(node, state.lang); });
  }
  function applyImages() {
    document.querySelectorAll('img[data-editor-image]').forEach((image) => {
      const original = image.dataset.editorOriginalSrc;
      const value = state.data.images?.[original];
      image.classList.toggle('editor-image-removed', value?.removed === true);
      image.style.visibility = value?.removed === true ? 'hidden' : '';
      image.setAttribute('src', value?.src || original);
    });
  }
  function attachImageMetadata() { const seen = new Set(); document.querySelectorAll('img[src]').forEach((image) => { if (image.closest('#editorChrome, #editorPanel')) return; const src = image.getAttribute('src'); if (!src || seen.has(src)) return; seen.add(src); image.dataset.editorImage = 'true'; image.dataset.editorOriginalSrc = src; image.classList.add('editor-image-editable'); }); applyImages(); }
  function toggleMode() { state.mode = !state.mode; document.body.classList.toggle('editor-mode', state.mode); $('editMode').textContent = state.mode ? 'Salir de edición' : 'Activar edición'; if (!state.mode) closePanel(); }
  function toggleLanguage() { state.lang = state.lang === 'es' ? 'en' : 'es'; localStorage.setItem('wavepoint-editor-lang', state.lang); document.documentElement.lang = state.lang; applyText(); $('editorLanguage').textContent = state.lang === 'es' ? 'ES / EN' : 'EN / ES'; if (state.selected?.kind === 'text') openTextPanel(state.selected.node); }
  function openTextPanel(node) { state.selected = { kind: 'text', node }; const key = keyFor(node); $('editorPanel').hidden = false; $('editorPanel').innerHTML = `<div class="panel-top"><span>Texto editable</span><button type="button" data-close>×</button></div><p class="editor-key">${esc(key)}</p><label>Español<textarea data-editor-value="es">${esc(state.data.text?.[key]?.es ?? originalText(node, 'es'))}</textarea></label><label>English<textarea data-editor-value="en">${esc(state.data.text?.[key]?.en ?? originalText(node, 'en'))}</textarea></label><button class="panel-save" type="button" data-apply-text>Aplicar texto</button>`; $('editorPanel').querySelector('[data-close]').addEventListener('click', closePanel); $('editorPanel').querySelector('[data-apply-text]').addEventListener('click', () => { state.data.text ||= {}; state.data.text[key] = { es: $('editorPanel').querySelector('[data-editor-value="es"]').value, en: $('editorPanel').querySelector('[data-editor-value="en"]').value }; saveData(); applyText(); toast('Texto actualizado'); }); }
  function imageChoices(current) { const sources = [...new Set([...document.querySelectorAll('img[data-editor-image]')].map((image) => image.dataset.editorOriginalSrc))]; return sources.map((src) => `<button type="button" class="image-choice ${src === current ? 'active' : ''}" data-image-choice="${esc(src)}"><img src="${esc(src)}" alt=""><span>${esc(src.split('/').pop())}</span></button>`).join(''); }
  function openImagePanel(image) { state.selected = { kind: 'image', node: image }; const original = image.dataset.editorOriginalSrc; const selected = state.data.images?.[original]; const current = selected?.src || original; $('editorPanel').hidden = false; $('editorPanel').innerHTML = `<div class="panel-top"><span>Imagen editable</span><button type="button" data-close>×</button></div><p class="editor-key">Imagen original: ${esc(original)}</p><div class="image-current"><img src="${esc(current)}" alt=""></div><label>Cargar desde tu dispositivo<input id="editorUpload" type="file" accept="image/*"></label><div class="image-actions"><button type="button" data-remove-image>Quitar imagen</button><button type="button" data-restore-image>Dejar original</button></div><p class="choices-title">Imágenes ya existentes en el sitio</p><div class="image-choices">${imageChoices(current)}</div>`; $('editorPanel').querySelector('[data-close]').addEventListener('click', closePanel); $('editorPanel').querySelector('[data-remove-image]').addEventListener('click', () => setImage(original, { removed: true })); $('editorPanel').querySelector('[data-restore-image]').addEventListener('click', () => setImage(original, null)); $('editorPanel').querySelector('#editorUpload').addEventListener('change', (event) => { const file = event.target.files[0]; if (!file || !file.type.startsWith('image/') || file.size > MAX_UPLOAD) { toast('Elegí una imagen válida de hasta 4 MB'); return; } const reader = new FileReader(); reader.onload = () => setImage(original, { src: reader.result }); reader.readAsDataURL(file); }); $('editorPanel').querySelectorAll('[data-image-choice]').forEach((button) => button.addEventListener('click', () => setImage(original, { src: button.dataset.imageChoice }))); }
  function setImage(original, value) { state.data.images ||= {}; if (value) state.data.images[original] = value; else delete state.data.images[original]; saveData(); applyImages(); if (state.selected?.node) openImagePanel(state.selected.node); toast(value?.removed ? 'Imagen quitada' : 'Imagen actualizada'); }
  function closePanel() { $('editorPanel').hidden = true; state.selected = null; }
  function resetAll() { if (!confirm('¿Restaurar todos los textos e imágenes de esta copia local?')) return; state.data = {}; saveData(); applyText(); applyImages(); closePanel(); toast('Copia restaurada'); }
  function toast(message) { $('editorToast').textContent = message; $('editorToast').classList.add('show'); setTimeout(() => $('editorToast').classList.remove('show'), 2200); }
  document.addEventListener('click', (event) => { if (!state.mode || event.target.closest('#editorChrome, #editorPanel')) return; const image = event.target.closest('img[data-editor-image]'); if (image) { event.preventDefault(); event.stopPropagation(); openImagePanel(image); return; } const text = event.target.closest('[data-editor-key]'); if (text) { event.preventDefault(); event.stopPropagation(); openTextPanel(text); } }, true);
  document.addEventListener('wavepoint:languagechange', (event) => { state.lang = event.detail?.lang || state.lang; localStorage.setItem('wavepoint-editor-lang', state.lang); applyText(); if (state.selected?.kind === 'text') openTextPanel(state.selected.node); });

  async function boot() { if (sessionStorage.getItem(SESSION_KEY) !== 'ok') { window.location.replace('admin.html'); return; } injectChrome(); await loadTranslations(); markEditableNodes(); attachImageMetadata(); applyText(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
