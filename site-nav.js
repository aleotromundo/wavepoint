(() => {
  const nested = location.pathname.split('/').includes('Enlaces');
  const base = nested ? '../' : './';
  const sharedHeader = `<header class="topbar service-topbar site-shared-header"><a class="social-link instagram-link" href="https://www.instagram.com/wavepointcr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram WavePoint"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="instagram-dot" cx="17.5" cy="6.5" r="1"/></svg></a><div class="container nav"><a class="shared-brand" href="${base}index.html" aria-label="WavePoint inicio"><img src="${base}assets/wavepoint-logo.png" alt="WavePoint" /></a><nav class="navlinks" aria-label="Navegación principal"><a href="${base}index.html#inicio">Inicio</a><a href="${base}guia-playas.html">Guía turística</a><a href="${base}service.html#servicios">Servicios</a><a href="${base}Enlaces/nostros.html">Nosotros</a><div class="dropdown"><a class="dropbtn" href="${base}index.html#aliados">Colaboradores ▾</a><div class="menu"><a href="${base}Enlaces/capitan-suizo.html">Capitán Suizo, Tamarindo</a><a href="${base}Enlaces/red-door.html">Red Door, Tamarindo</a><a href="${base}Enlaces/occidental.html">Hotel Occidental Tamarindo, Langosta</a><a href="${base}Enlaces/casa-maderas.html">Casa de Maderas, Palm Beach “Casitas”</a></div></div></nav><button aria-label="Abrir menú" class="hamb" id="hamb" type="button">☰</button></div></header><div aria-hidden="true" class="mobile-panel" id="mobilePanel"><div class="mobile-panel-head"><img alt="WavePoint" src="${base}assets/wavepoint-logo.png"/><button aria-label="Cerrar menú" class="mobile-close" id="mobileClose" type="button">×</button></div><nav class="mobile-menu"><a href="${base}index.html#inicio">Inicio</a><a href="${base}guia-playas.html">Guía turística</a><a href="${base}service.html#servicios">Servicios</a><a href="${base}Enlaces/nostros.html">Nosotros</a><div class="mobile-dropdown"><a class="mobile-dropdown-link" href="${base}index.html#aliados">Colaboradores</a><button class="mobile-dropdown-toggle" type="button" aria-label="Abrir colaboradores">▾</button><div class="mobile-submenu"><a href="${base}Enlaces/capitan-suizo.html">Capitán Suizo, Tamarindo</a><a href="${base}Enlaces/red-door.html">Red Door, Tamarindo</a><a href="${base}Enlaces/occidental.html">Hotel Occidental Tamarindo, Langosta</a><a href="${base}Enlaces/casa-maderas.html">Casa de Maderas, Palm Beach “Casitas”</a></div></div></nav></div>`;

  if (!document.querySelector('.site-shared-header')) {
    document.querySelector('.collab-nav')?.remove();
    document.body.insertAdjacentHTML('afterbegin', sharedHeader);
  }
  const panel = document.getElementById('mobilePanel');
  const open = document.getElementById('hamb');
  const close = document.getElementById('mobileClose');
  if (!panel || !open || !close) return;
  const setOpen = (isOpen) => {
    panel.classList.toggle('show', isOpen);
    panel.setAttribute('aria-hidden', String(!isOpen));
    open.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };
  open.addEventListener('click', () => setOpen(true));
  close.addEventListener('click', () => setOpen(false));
  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  panel.querySelector('.mobile-dropdown-toggle')?.addEventListener('click', () => panel.querySelector('.mobile-dropdown')?.classList.toggle('is-open'));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setOpen(false); });
})();
