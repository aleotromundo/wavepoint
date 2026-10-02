(() => {
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
