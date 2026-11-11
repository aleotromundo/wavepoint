(() => {
  const STORAGE_KEY = 'wavepoint-lang';

  const normalizeLang = lang => lang === 'es' ? 'es' : (lang === 'pt' || lang === 'pt-BR') ? 'pt-BR' : 'en';
  const readLang = () => {
    try { return normalizeLang(localStorage.getItem(STORAGE_KEY) || window.WAVEPOINT_PT_BR?.initialLanguage); }
    catch (error) { return normalizeLang(window.WAVEPOINT_PT_BR?.initialLanguage); }
  };
  const saveLang = lang => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (error) { /* storage unavailable: language lasts for this page only */ }
  };

  const SWITCHER = '<div aria-label="Language selector" class="lang-switcher">'
    + '<button aria-label="Português do Brasil" title="Português do Brasil" class="lang-toggle" data-lang-toggle data-lang-option="pt" type="button"><span class="lang-flag lang-flag-pt" aria-hidden="true"><svg viewBox="0 0 36 36" role="img"><defs><clipPath id="flag-br-clip"><circle cx="18" cy="18" r="18"/></clipPath></defs><g clip-path="url(#flag-br-clip)"><path fill="#009c3b" d="M0 0h36v36H0z"/><path fill="#ffdf00" d="M18 3 34 18 18 33 2 18Z"/><circle cx="18" cy="18" r="7" fill="#002776"/><path d="M12 16.5c3.7-2.1 8.3-2.1 12 0" fill="none" stroke="#fff" stroke-width="1.2"/></g></svg></span></button>'
    + '<button aria-label="Switch to English" title="English" class="lang-toggle" data-lang-toggle data-lang-option="en" type="button" aria-pressed="true"><span class="lang-flag lang-flag-en" aria-hidden="true"><svg viewBox="0 0 36 36" role="img"><defs><clipPath id="flag-en-clip"><circle cx="18" cy="18" r="18"/></clipPath></defs><g clip-path="url(#flag-en-clip)"><path fill="#23447c" d="M0 0h36v36H0z"/><path fill="#fff" d="m0 0 36 22v7L0 7zm36 0L0 22v7L36 7z"/><path fill="#c83b48" d="m0 0 36 22v3L0 3zm36 0L0 22v3L36 3z"/><path fill="#fff" d="M13 0h10v36H13zM0 13h36v10H0z"/><path fill="#c83b48" d="M15.5 0h5v36h-5zM0 15.5h36v5H0z"/></g></svg></span></button>'
    + '<button aria-label="Cambiar a español" title="Español" class="lang-toggle" data-lang-toggle data-lang-option="es" type="button" aria-pressed="false"><span class="lang-flag lang-flag-es" aria-hidden="true"><svg viewBox="0 0 36 36" role="img"><defs><clipPath id="flag-es-clip"><circle cx="18" cy="18" r="18"/></clipPath></defs><g clip-path="url(#flag-es-clip)"><path fill="#aa151b" d="M0 0h36v36H0z"/><path fill="#f1bf00" d="M0 9h36v18H0z"/></g></svg></span></button>'
    + '</div>';

  // Navigation and footer strings shared by every page. Nodes that already carry data-i18n
  // belong to script.js, so they are skipped here.
  const TEXTS = [
    { selector: '.navlinks > a[href$="#inicio"], .mobile-menu > a[href$="#inicio"]', es: 'Inicio', en: 'Home', 'pt-BR': 'Início' },
    { selector: '.navlinks > a[href$="guia-playas.html"], .mobile-menu > a[href$="guia-playas.html"]', es: 'Guía turística', en: 'Tourist guide', 'pt-BR': 'Guia local' },
    { selector: '.navlinks > a[href$="#servicios"], .mobile-menu > a[href$="#servicios"]', es: 'Explorá experiencias', en: 'Explore experiences', 'pt-BR': 'Explore experiências' },
    { selector: '.navlinks > a[href$="#nosotros"], .mobile-menu > a[href$="#nosotros"]', es: 'Nosotros', en: 'About us', 'pt-BR': 'Sobre nós' },
    { selector: '.about-opening-copy > h2', es: '¿Quiénes somos?', en: 'Who are we?', 'pt-BR': 'Quem somos?' },
    { selector: '.navlinks .dropbtn', es: 'Colaboradores ▾', en: 'Partners ▾', 'pt-BR': 'Parceiros ▾' },
    { selector: '.mobile-dropdown-link', es: 'Colaboradores', en: 'Partners', 'pt-BR': 'Parceiros' },
    { selector: '.service-page-footer a[href$="index.html"]:not(.footer-logo-link):not(.logo-return)', es: '← Volver a WavePoint', en: '← Back to WavePoint', 'pt-BR': '← Voltar à WavePoint' },
    { selector: '.service-page-footer a[href$="index.html#servicios"]', es: '← Volver a explorar experiencias', en: '← Back to Explore experiences', 'pt-BR': '← Voltar a explorar experiências' }
  ];
  // Accessible names. They are only updated where the attribute already exists.
  const LABELS = [
    { selector: '.navlinks', attr: 'aria-label', es: 'Navegación principal', en: 'Main navigation', 'pt-BR': 'Navegação principal' },
    { selector: '.hamb', attr: 'aria-label', es: 'Abrir menú', en: 'Open menu', 'pt-BR': 'Abrir menu' },
    { selector: '.mobile-close', attr: 'aria-label', es: 'Cerrar menú', en: 'Close menu', 'pt-BR': 'Fechar menu' },
    { selector: '.mobile-dropdown-toggle', attr: 'aria-label', es: 'Abrir colaboradores', en: 'Open partners', 'pt-BR': 'Abrir parceiros' },
    { selector: '.shared-brand', attr: 'aria-label', es: 'WavePoint inicio', en: 'WavePoint home', 'pt-BR': 'Início da WavePoint' },
    { selector: '.lang-switcher', attr: 'aria-label', es: 'Selector de idioma', en: 'Language selector', 'pt-BR': 'Seletor de idioma' }
  ];
  const portugueseText = window.WAVEPOINT_PT_BR?.staticText || {};
  const portugueseAlt = window.WAVEPOINT_PT_BR?.staticAlt || {};
  const originalPortugueseTextNodes = new Map();

  const ensureSwitcher = () => {
    if (document.querySelector('[data-lang-toggle]')) return;
    const header = document.querySelector('header.topbar');
    if (!header) return;
    const nav = header.querySelector('.nav');
    if (nav) nav.insertAdjacentHTML('beforebegin', SWITCHER);
    else header.insertAdjacentHTML('beforeend', SWITCHER);
  };

  const reorderOptions = lang => {
    const order = ['pt', 'en', 'es'];
    const selected = lang === 'es' ? 'es' : lang === 'pt-BR' ? 'pt' : 'en';
    const selectedIndex = order.indexOf(selected);
    const arranged = [order[(selectedIndex + 2) % 3], selected, order[(selectedIndex + 1) % 3]];
    document.querySelectorAll('.lang-switcher').forEach(switcher => {
      const buttons = [...switcher.querySelectorAll('[data-lang-option]')];
      const before = new Map(buttons.map(button => [button.dataset.langOption, button.getBoundingClientRect()]));
      const options = new Map(buttons.map(button => [button.dataset.langOption, button]));
      const arrangedButtons = arranged.map(option => options.get(option)).filter(Boolean);
      switcher.replaceChildren(...arrangedButtons);
      options.forEach((button, option) => {
        const oldRect = before.get(option);
        const newRect = button.getBoundingClientRect();
        if (window.scrollY > 24 || !oldRect || (oldRect.left === newRect.left && oldRect.top === newRect.top)) return;
        button._langMoveAnimation?.cancel();
        button._langMoveAnimation = button.animate([
          { transform: `translate(${oldRect.left - newRect.left}px, ${oldRect.top - newRect.top}px)` },
          { transform: '' }
        ], { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)' });
      });
    });
  };

  const syncScrollState = () => {
    const isScrolled = window.scrollY > 24;
    document.querySelectorAll('.lang-switcher').forEach(switcher => {
      switcher.classList.toggle('is-scrolled', isScrolled);
      if (!isScrolled) switcher.classList.remove('is-expanded');
      const isExpanded = isScrolled && switcher.classList.contains('is-expanded');
      switcher.querySelectorAll('[data-lang-option]').forEach(button => {
        const isCollapsedOption = isScrolled && !isExpanded && button.dataset.selected !== 'true';
        button.setAttribute('aria-hidden', String(isCollapsedOption));
        if (isCollapsedOption) button.setAttribute('tabindex', '-1');
        else button.removeAttribute('tabindex');
        if (button.dataset.selected === 'true') {
          if (isScrolled) {
            button.setAttribute('aria-expanded', String(isExpanded));
            button.setAttribute('aria-label', isExpanded
              ? (button.dataset.langOption === 'es' ? 'Español seleccionado. Ocultar idiomas' : button.dataset.langOption === 'pt' ? 'Português selecionado. Ocultar idiomas' : 'English selected. Hide languages')
              : (button.dataset.langOption === 'es' ? 'Español seleccionado. Mostrar idiomas' : button.dataset.langOption === 'pt' ? 'Português selecionado. Mostrar idiomas' : 'English selected. Show languages'));
          } else {
            button.removeAttribute('aria-expanded');
            button.setAttribute('aria-label', button.dataset.langOption === 'es' ? 'Español seleccionado' : button.dataset.langOption === 'pt' ? 'Português selecionado' : 'English selected');
          }
        }
      });
    });
  };

  const apply = lang => {
    const activeLang = normalizeLang(lang);
    const selectedOption = activeLang === 'pt-BR' ? 'pt' : activeLang;
    if (activeLang !== 'pt-BR') {
      originalPortugueseTextNodes.forEach((value, node) => { node.nodeValue = value; });
      originalPortugueseTextNodes.clear();
    }
    document.documentElement.lang = activeLang;
    document.querySelectorAll('[data-lang-toggle]').forEach(button => {
      const option = button.dataset.langOption;
      const isSelected = option === selectedOption;
      button.removeAttribute('data-language');
      button.dataset.selected = String(isSelected);
      if (option === 'pt') {
        button.setAttribute('aria-label', isSelected ? 'Português selecionado' : 'Mudar para português do Brasil');
        button.removeAttribute('aria-disabled');
        button.setAttribute('aria-pressed', String(isSelected));
      } else {
        button.setAttribute('aria-label', option === selectedOption
          ? (option === 'es' ? 'Español seleccionado' : 'English selected')
          : (option === 'es' ? 'Cambiar a español' : 'Switch to English'));
        button.setAttribute('aria-pressed', String(isSelected));
      }
    });
    reorderOptions(activeLang);
    syncScrollState();
    TEXTS.forEach(item => document.querySelectorAll(item.selector).forEach(node => {
      if (!node.hasAttribute('data-i18n') && !node.hasAttribute('data-copy-en')) node.textContent = item[activeLang];
    }));
    document.querySelectorAll('[data-copy-en][data-copy-es]').forEach(node => {
      const englishText = node.getAttribute('data-copy-en');
      const text = activeLang === 'pt-BR'
        ? node.getAttribute('data-copy-pt') || portugueseText[englishText]
        : node.getAttribute(`data-copy-${activeLang}`);
      if (text != null) node.textContent = text;
    });
    document.querySelectorAll('[data-alt-en][data-alt-es]').forEach(node => {
      const alt = node.getAttribute(activeLang === 'pt-BR' ? 'data-alt-pt' : `data-alt-${activeLang}`);
      if (alt !== null) node.setAttribute('alt', alt);
      else if (activeLang === 'pt-BR' && portugueseAlt[node.getAttribute('data-alt-en')]) node.setAttribute('alt', portugueseAlt[node.getAttribute('data-alt-en')]);
    });
    document.querySelectorAll('[data-content-en][data-content-es]').forEach(node => {
      const content = node.getAttribute(activeLang === 'pt-BR' ? 'data-content-pt' : `data-content-${activeLang}`);
      if (content !== null) node.setAttribute('content', content);
      else if (activeLang === 'pt-BR' && portugueseText[node.getAttribute('data-content-en')]) node.setAttribute('content', portugueseText[node.getAttribute('data-content-en')]);
    });
    document.querySelectorAll('[data-aria-label-en][data-aria-label-es]').forEach(node => {
      const label = node.getAttribute(activeLang === 'pt-BR' ? 'data-aria-label-pt' : `data-aria-label-${activeLang}`);
      if (label !== null) node.setAttribute('aria-label', label);
      else if (activeLang === 'pt-BR' && portugueseText[node.getAttribute('data-aria-label-en')]) node.setAttribute('aria-label', portugueseText[node.getAttribute('data-aria-label-en')]);
    });
    document.querySelectorAll('[data-title-en][data-title-es]').forEach(node => {
      const title = node.getAttribute(activeLang === 'pt-BR' ? 'data-title-pt' : `data-title-${activeLang}`);
      if (title !== null) node.setAttribute('title', title);
      else if (activeLang === 'pt-BR' && portugueseText[node.getAttribute('data-title-en')]) node.setAttribute('title', portugueseText[node.getAttribute('data-title-en')]);
    });
    LABELS.forEach(item => document.querySelectorAll(item.selector).forEach(node => {
      if (node.hasAttribute(item.attr)) node.setAttribute(item.attr, item[activeLang]);
    }));
    if (activeLang === 'pt-BR') {
      const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let textNode;
      while ((textNode = textNodes.nextNode())) {
        const parent = textNode.parentElement;
        const value = textNode.nodeValue;
        const trimmed = value.trim();
        if (!trimmed || parent?.closest('[data-copy-en], [data-i18n]') || !portugueseText[trimmed]) continue;
        const start = value.indexOf(trimmed);
        originalPortugueseTextNodes.set(textNode, value);
        textNode.nodeValue = `${value.slice(0, start)}${portugueseText[trimmed]}${value.slice(start + trimmed.length)}`;
      }
    }
  };

  const toggle = event => {
    const next = event.currentTarget.dataset.langOption === 'pt' ? 'pt-BR' : event.currentTarget.dataset.langOption;
    const switcher = event.currentTarget.closest('.lang-switcher');
    const activeLang = event.currentTarget.dataset.selected === 'true';
    if (window.scrollY > 24 && activeLang) {
      switcher.classList.toggle('is-expanded');
      syncScrollState();
      return;
    }
    selectLanguage(next, switcher);
  };

  const selectLanguage = (lang, switcher) => {
    const keepExpanded = window.scrollY > 24 && switcher?.classList.contains('is-expanded');
    saveLang(lang);
    apply(lang);
    if (keepExpanded) {
      switcher?.classList.add('is-expanded');
      syncScrollState();
    }
    window.dispatchEvent(new CustomEvent('wavepoint:languagechange', { detail: { lang } }));
  };

  ensureSwitcher();
  const gestures = new WeakMap();
  const languageOrder = ['en', 'es', 'pt-BR'];
  document.querySelectorAll('.lang-switcher').forEach(switcher => {
    let suppressClickUntil = 0;
    switcher.addEventListener('pointerdown', event => {
      if (!event.isPrimary || (event.pointerType !== 'touch' && event.pointerType !== 'pen')) return;
      gestures.set(switcher, { x: event.clientX, y: event.clientY });
    });
    switcher.addEventListener('pointerup', event => {
      const start = gestures.get(switcher);
      gestures.delete(switcher);
      if (!start) return;
      const deltaX = event.clientX - start.x;
      const deltaY = event.clientY - start.y;
      if (Math.abs(deltaX) < 30 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;
      suppressClickUntil = Date.now() + 500;
      const currentIndex = languageOrder.indexOf(readLang());
      const direction = deltaX < 0 ? 1 : -1;
      const nextIndex = (currentIndex + direction + languageOrder.length) % languageOrder.length;
      selectLanguage(languageOrder[nextIndex], switcher);
    });
    switcher.addEventListener('pointercancel', () => gestures.delete(switcher));
    switcher.addEventListener('click', event => {
      if (Date.now() >= suppressClickUntil) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    }, true);
  });
  document.querySelectorAll('[data-lang-toggle]').forEach(button => button.addEventListener('click', toggle));
  window.addEventListener('scroll', syncScrollState, { passive: true });
  const initialLang = readLang();
  apply(initialLang);
  window.dispatchEvent(new CustomEvent('wavepoint:languagechange', { detail: { lang: initialLang } }));
})();
