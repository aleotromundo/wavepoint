(() => {
  const STORAGE_KEY = 'wavepoint-content-overrides-v1';

  function readOverrides() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return value && typeof value === 'object' ? value : {};
    } catch (_) {
      return {};
    }
  }

  function applyText(overrides, lang) {
    const text = overrides.text || {};
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      const value = text[key]?.[lang];
      if (typeof value === 'string' && value.trim()) node.textContent = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      const value = text[key]?.[lang];
      if (typeof value === 'string' && value.trim()) node.setAttribute('placeholder', value);
    });
  }

  function applyImages(overrides) {
    const images = overrides.images || {};
    document.querySelectorAll('img[src]').forEach((node) => {
      const source = node.dataset.wavepointOriginalSrc || node.getAttribute('src');
      if (!source) return;
      node.dataset.wavepointOriginalSrc = source;
      const value = images[source];
      if (typeof value === 'string' && value.trim()) node.setAttribute('src', value.trim());
    });
  }

  function apply() {
    const overrides = readOverrides();
    const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
    applyText(overrides, lang);
    applyImages(overrides);
  }

  apply();
  window.addEventListener('wavepoint:languagechange', apply);
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) apply();
  });
  window.WavepointContentOverrides = { apply, read: readOverrides, storageKey: STORAGE_KEY };
})();
