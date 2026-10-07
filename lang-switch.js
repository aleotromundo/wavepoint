(() => {
  const ua = navigator.userAgent || '';
  const safariStable = /AppleWebKit/i.test(ua)
    && /Safari/i.test(ua)
    && /Apple Computer/i.test(navigator.vendor || '')
    && !/CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);
  document.documentElement.classList.toggle('safari-stable', safariStable);
  const STORAGE_KEY = 'wavepoint-lang';

  const readLang = () => {
    try { return localStorage.getItem(STORAGE_KEY) === 'es' ? 'es' : 'en'; } catch (error) { return 'en'; }
  };
  const saveLang = lang => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (error) { /* storage unavailable: language lasts for this page only */ }
  };

  // Same markup as the selector on index.html, so every page shows the identical control.
  const SWITCHER = '<div aria-label="Selector de idioma" class="lang-switcher">'
    + '<button aria-label="Switch to Spanish" class="lang-toggle" data-lang-toggle data-language="en" type="button" aria-pressed="true">'
    + '<svg class="flag-us" aria-hidden="true" viewBox="0 0 36 36"><defs><clipPath id="flag-us-clip"><circle cx="18" cy="18" r="18"/></clipPath></defs><g clip-path="url(#flag-us-clip)"><path fill="#fff" d="M0 0h36v36H0z"/><path fill="#c83b48" d="M0 0h36v3H0zm0 6h36v3H0zm0 6h36v3H0zm0 6h36v3H0zm0 6h36v3H0zm0 6h36v3H0"/><path fill="#244979" d="M0 0h17v19H0z"/><g fill="#fff"><circle cx="3" cy="3" r=".8"/><circle cx="8" cy="3" r=".8"/><circle cx="13" cy="3" r=".8"/><circle cx="5.5" cy="6.5" r=".8"/><circle cx="10.5" cy="6.5" r=".8"/><circle cx="3" cy="10" r=".8"/><circle cx="8" cy="10" r=".8"/><circle cx="13" cy="10" r=".8"/><circle cx="5.5" cy="13.5" r=".8"/><circle cx="10.5" cy="13.5" r=".8"/><circle cx="3" cy="17" r=".8"/><circle cx="8" cy="17" r=".8"/><circle cx="13" cy="17" r=".8"/></g></g></svg>'
    + '<svg class="flag-uk" aria-hidden="true" viewBox="0 0 36 36"><defs><clipPath id="flag-uk-clip"><circle cx="18" cy="18" r="18"/></clipPath></defs><g clip-path="url(#flag-uk-clip)"><path fill="#23447c" d="M0 0h36v36H0z"/><path fill="#fff" d="m0 0 36 22v7L0 7zm36 0L0 22v7L36 7z"/><path fill="#c83b48" d="m0 0 36 22v3L0 3zm36 0L0 22v3L36 3z"/><path fill="#fff" d="M13 0h10v36H13zM0 13h36v10H0z"/><path fill="#c83b48" d="M15.5 0h5v36h-5zM0 15.5h36v5H0z"/></g></svg>'
    + '</button></div>';

  // Navigation and footer strings shared by every page. Nodes that already carry data-i18n
  // belong to script.js, so they are skipped here.
  const TEXTS = [
    { selector: '.navlinks > a[href$="#inicio"], .mobile-menu > a[href$="#inicio"]', es: 'Inicio', en: 'Home' },
    { selector: '.navlinks > a[href$="guia-playas.html"], .mobile-menu > a[href$="guia-playas.html"]', es: 'Guía turística', en: 'Tourist guide' },
    { selector: '.navlinks > a[href$="#servicios"], .mobile-menu > a[href$="#servicios"]', es: 'Servicios', en: 'Services' },
    { selector: '.navlinks > a[href$="#nosotros"], .mobile-menu > a[href$="#nosotros"]', es: 'Nosotros', en: 'About us' },
    { selector: '.about-opening-copy > h2', es: '¿Quiénes somos?', en: 'Who are we?' },
    { selector: '.navlinks .dropbtn', es: 'Colaboradores ▾', en: 'Partners ▾' },
    { selector: '.mobile-dropdown-link', es: 'Colaboradores', en: 'Partners' },
    { selector: '.service-page-footer a[href$="index.html"]:not(.footer-logo-link)', es: '← Volver a WavePoint', en: '← Back to WavePoint' },
    { selector: '.service-page-footer a[href$="index.html#servicios"]', es: '← Volver a Servicios', en: '← Back to Services' }
  ];
  // Accessible names. They are only updated where the attribute already exists.
  const LABELS = [
    { selector: '.navlinks', attr: 'aria-label', es: 'Navegación principal', en: 'Main navigation' },
    { selector: '.hamb', attr: 'aria-label', es: 'Abrir menú', en: 'Open menu' },
    { selector: '.mobile-close', attr: 'aria-label', es: 'Cerrar menú', en: 'Close menu' },
    { selector: '.mobile-dropdown-toggle', attr: 'aria-label', es: 'Abrir colaboradores', en: 'Open partners' },
    { selector: '.shared-brand', attr: 'aria-label', es: 'WavePoint inicio', en: 'WavePoint home' },
    { selector: '.lang-switcher', attr: 'aria-label', es: 'Selector de idioma', en: 'Language selector' }
  ];

  const ensureSwitcher = () => {
    if (document.querySelector('[data-lang-toggle]')) return;
    const header = document.querySelector('header.topbar');
    if (!header) return;
    const nav = header.querySelector('.nav');
    if (nav) nav.insertAdjacentHTML('beforebegin', SWITCHER);
    else header.insertAdjacentHTML('beforeend', SWITCHER);
  };

  const apply = lang => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-toggle]').forEach(button => {
      const isSpanish = lang === 'es';
      button.dataset.language = lang;
      button.setAttribute('aria-label', isSpanish ? 'Cambiar a inglés' : 'Switch to Spanish');
      button.setAttribute('aria-pressed', String(!isSpanish));
    });
    TEXTS.forEach(item => document.querySelectorAll(item.selector).forEach(node => {
      if (!node.hasAttribute('data-i18n') && !node.hasAttribute('data-copy-en')) node.textContent = item[lang];
    }));
    document.querySelectorAll('[data-copy-en][data-copy-es]').forEach(node => {
      const text = node.getAttribute(`data-copy-${lang}`);
      if (text !== null) node.textContent = text;
    });
    document.querySelectorAll('[data-alt-en][data-alt-es]').forEach(node => {
      const alt = node.getAttribute(`data-alt-${lang}`);
      if (alt !== null) node.setAttribute('alt', alt);
    });
    document.querySelectorAll('[data-content-en][data-content-es]').forEach(node => {
      const content = node.getAttribute(`data-content-${lang}`);
      if (content !== null) node.setAttribute('content', content);
    });
    document.querySelectorAll('[data-aria-label-en][data-aria-label-es]').forEach(node => {
      const label = node.getAttribute(`data-aria-label-${lang}`);
      if (label !== null) node.setAttribute('aria-label', label);
    });
    document.querySelectorAll('[data-title-en][data-title-es]').forEach(node => {
      const title = node.getAttribute(`data-title-${lang}`);
      if (title !== null) node.setAttribute('title', title);
    });
    LABELS.forEach(item => document.querySelectorAll(item.selector).forEach(node => {
      if (node.hasAttribute(item.attr)) node.setAttribute(item.attr, item[lang]);
    }));
  };

  const toggle = () => {
    const next = readLang() === 'es' ? 'en' : 'es';
    saveLang(next);
    apply(next);
    window.dispatchEvent(new CustomEvent('wavepoint:languagechange', { detail: { lang: next } }));
  };

  ensureSwitcher();
  document.querySelectorAll('[data-lang-toggle]').forEach(button => button.addEventListener('click', toggle));
  apply(readLang());
})();
