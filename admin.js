(() => {
  const STORAGE_KEY = 'wavepoint-content-overrides-v1';
  const SESSION_KEY = 'wavepoint-admin-session';
  const state = { lang: 'es', page: 'index.html', catalog: { text: [], images: [] }, overrides: readOverrides() };
  const $ = (id) => document.getElementById(id);

  function readOverrides() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}; } catch (_) { return {}; } }
  function writeOverrides() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.overrides)); }
  function esc(value) { return String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function slug(value) { return String(value).replace(/[^a-z0-9_-]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').slice(0, 50); }
  function currentText(key, lang, original = '') { return state.overrides.text?.[key]?.[lang] ?? original; }

  async function apiLogin(password) {
    const response = await fetch('/api/admin-auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || 'No se pudo iniciar sesión');
    return data;
  }

  function showEditor() { $('loginView').hidden = true; $('editorView').hidden = false; loadCatalog(); }
  function logout() { sessionStorage.removeItem(SESSION_KEY); location.reload(); }

  async function loadCatalog() {
    $('textFields').innerHTML = '<p class="empty">Cargando campos…</p>';
    $('imageFields').innerHTML = '<p class="empty">Cargando imágenes…</p>';
    const response = await fetch(state.page, { cache: 'no-store' });
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const texts = new Map();
    doc.querySelectorAll('[data-i18n], [data-i18n-placeholder]').forEach((node) => {
      const key = node.dataset.i18n || node.dataset.i18nPlaceholder;
      if (!texts.has(key)) texts.set(key, { key, original: node.dataset.i18nPlaceholder ? node.getAttribute('placeholder') : node.textContent.trim() });
    });
    const images = new Map();
    doc.querySelectorAll('img[src]').forEach((node) => {
      const src = node.getAttribute('src');
      if (!src || src.startsWith('data:') || src.startsWith('http')) return;
      if (!images.has(src)) images.set(src, { src, alt: node.getAttribute('alt') || '' });
    });
    state.catalog = { text: [...texts.values()].sort((a,b) => a.key.localeCompare(b.key)), images: [...images.values()].sort((a,b) => a.src.localeCompare(b.src)) };
    render();
  }

  function render() {
    const query = $('searchInput').value.trim().toLowerCase();
    const textItems = state.catalog.text.filter((item) => `${item.key} ${item.original}`.toLowerCase().includes(query));
    const imageItems = state.catalog.images.filter((item) => `${item.src} ${item.alt}`.toLowerCase().includes(query));
    $('textCount').textContent = `${textItems.length} / ${state.catalog.text.length}`;
    $('imageCount').textContent = `${imageItems.length} / ${state.catalog.images.length}`;
    $('textFields').innerHTML = textItems.length ? textItems.map((item) => {
      const value = currentText(item.key, state.lang, item.original);
      return `<div class="field"><label for="text-${slug(item.key)}">${esc(item.key)}</label><textarea id="text-${slug(item.key)}" data-text-key="${esc(item.key)}">${esc(value)}</textarea><small>Original: ${esc(item.original)}</small></div>`;
    }).join('') : '<p class="empty">No hay textos que coincidan.</p>';
    $('imageFields').innerHTML = imageItems.length ? imageItems.map((item, index) => {
      const value = state.overrides.images?.[item.src] || item.src;
      return `<div class="field"><label for="image-${index}">${esc(item.alt || 'Imagen sin alt')}</label><input id="image-${index}" data-image-key="${esc(item.src)}" value="${esc(value)}" placeholder="URL o ruta de imagen" /><small title="${esc(item.src)}">Original: ${esc(item.src)}</small>${value ? `<img class="image-preview" src="${esc(value)}" alt="" loading="lazy" onerror="this.style.display='none'" />` : ''}</div>`;
    }).join('') : '<p class="empty">No hay imágenes que coincidan.</p>';
  }

  function collect() {
    state.overrides.text ||= {};
    state.overrides.images ||= {};
    document.querySelectorAll('[data-text-key]').forEach((field) => {
      const key = field.dataset.textKey;
      state.overrides.text[key] ||= {};
      state.overrides.text[key][state.lang] = field.value;
    });
    document.querySelectorAll('[data-image-key]').forEach((field) => {
      const key = field.dataset.imageKey;
      if (field.value.trim() && field.value.trim() !== key) state.overrides.images[key] = field.value.trim();
      else delete state.overrides.images[key];
    });
    writeOverrides();
  }

  function save() { collect(); $('saveStatus').textContent = `Guardado ${new Date().toLocaleTimeString()}`; setTimeout(() => { $('saveStatus').textContent = ''; }, 3000); }
  function download() { collect(); const blob = new Blob([JSON.stringify(state.overrides, null, 2)], { type: 'application/json' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `wavepoint-overrides-${new Date().toISOString().slice(0,10)}.json`; link.click(); URL.revokeObjectURL(link.href); }
  function importFile(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const value = JSON.parse(reader.result); if (!value || typeof value !== 'object') throw new Error(); state.overrides = value; writeOverrides(); render(); $('saveStatus').textContent = 'Importado correctamente'; } catch (_) { $('saveStatus').textContent = 'JSON inválido'; } }; reader.readAsText(file); event.target.value = ''; }
  function reset() { if (!confirm('¿Restaurar todos los textos e imágenes originales en este navegador?')) return; state.overrides = {}; writeOverrides(); render(); $('saveStatus').textContent = 'Restaurado'; }

  $('loginForm').addEventListener('submit', async (event) => { event.preventDefault(); $('loginError').textContent = ''; const button = event.currentTarget.querySelector('button'); button.disabled = true; try { await apiLogin($('password').value); sessionStorage.setItem(SESSION_KEY, 'ok'); showEditor(); } catch (error) { $('loginError').textContent = error.message; } finally { button.disabled = false; } });
  $('logoutButton').addEventListener('click', logout); $('saveButton').addEventListener('click', save); $('exportButton').addEventListener('click', download); $('importInput').addEventListener('change', importFile); $('resetButton').addEventListener('click', reset); $('searchInput').addEventListener('input', render); $('pageSelect').addEventListener('change', (event) => { collect(); state.page = event.target.value; loadCatalog(); });
  document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => { collect(); state.lang = button.dataset.lang; document.querySelectorAll('[data-lang]').forEach((item) => item.classList.toggle('active', item === button)); render(); }));
  if (sessionStorage.getItem(SESSION_KEY) === 'ok') showEditor();
})();
