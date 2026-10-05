(() => {
  const nested = location.pathname.split('/').includes('Enlaces');
  const base = nested ? '../' : './';
  const collaborators = [
    { href: 'https://chophouse.cr/', label: 'Chop House, Tamarindo', external: true },
    { href: 'Enlaces/capitan-suizo.html', label: 'Capitán Suizo, Tamarindo' },
    { href: 'Enlaces/casa-maderas.html', label: 'Casa de Maderas, Palm Beach “Casitas”' },
    { href: 'Enlaces/red-door.html', label: 'Red Door, Tamarindo' },
    { href: 'Enlaces/occidental.html', label: 'Hotel Occidental Tamarindo, Langosta' },
    { href: 'https://eternoveranoco.com/', label: 'Eterno Verano, Tamarindo', external: true },
    { href: 'https://www.club33cr.com/', label: 'Club 33 Surf Shop', external: true }
  ];
  const collaboratorLinks = collaborators.map(({ href, label, external }) =>
    `<a href="${external ? href : `${base}${href}`}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${label}</a>`
  ).join('');
  const sharedHeader = `<header class="topbar service-topbar site-shared-header"><a class="social-link instagram-link" href="https://www.instagram.com/wavepointcr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram WavePoint"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="instagram-dot" cx="17.5" cy="6.5" r="1"/></svg></a><div class="container nav"><a class="shared-brand" href="${base}index.html" aria-label="WavePoint inicio"><img src="${base}assets/wavepoint-logo.png" alt="WavePoint" /></a><nav class="navlinks" aria-label="Navegación principal"><a href="${base}index.html#inicio">Inicio</a><a href="${base}guia-playas.html">Guía turística</a><a href="${base}index.html#servicios">Servicios</a><a href="${base}index.html#nosotros">Nosotros</a><div class="dropdown"><a class="dropbtn" href="${base}index.html#aliados">Colaboradores ▾</a><div class="menu">${collaboratorLinks}</div></div></nav><button aria-label="Abrir menú" class="hamb" id="hamb" type="button">☰</button></div></header><div aria-hidden="true" class="mobile-panel" id="mobilePanel"><div class="mobile-panel-head"><img alt="WavePoint" src="${base}assets/wavepoint-logo.png"/><button aria-label="Cerrar menú" class="mobile-close" id="mobileClose" type="button">×</button></div><nav class="mobile-menu"><a href="${base}index.html#inicio">Inicio</a><a href="${base}guia-playas.html">Guía turística</a><a href="${base}index.html#servicios">Servicios</a><a href="${base}index.html#nosotros">Nosotros</a><div class="mobile-dropdown"><a class="mobile-dropdown-link" href="${base}index.html#aliados">Colaboradores</a><button class="mobile-dropdown-toggle" type="button" aria-label="Abrir colaboradores">▾</button><div class="mobile-submenu">${collaboratorLinks}</div></div><a class="mobile-instagram-link" href="https://www.instagram.com/wavepointcr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram WavePoint"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="instagram-dot" cx="17.5" cy="6.5" r="1"/></svg><span>Instagram</span><span aria-hidden="true">↗</span></a></nav></div>`;

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
