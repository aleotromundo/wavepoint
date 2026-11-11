(() => {
  const params = new URLSearchParams(window.location.search);
  const target = document.querySelector('#servicios .services-background-logo');
  if (!target) return;

  const STORAGE_KEY = 'wavepoint-services-logo-placement-editor-v1';
  const forceOpen = params.get('ajustar-logo') === '1';
  let alreadyShown = false;
  try {
    alreadyShown = localStorage.getItem(STORAGE_KEY) === 'shown';
  } catch (error) {
    console.info('No se pudo leer el estado del ajustador del logo.', error);
  }
  if (alreadyShown && !forceOpen) return;

  const state = { x: 0, y: 0, scale: 1 };
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const round = value => Math.round(value * 10) / 10;
  const format = value => Number.isInteger(value) ? String(value) : value.toFixed(1);

  const editor = document.createElement('dialog');
  editor.className = 'logo-placement-editor';
  editor.setAttribute('aria-labelledby', 'logoPlacementEditorTitle');
  editor.innerHTML = `
    <div class="logo-placement-editor-card">
      <div class="logo-placement-editor-head">
        <div>
          <p class="logo-placement-editor-kicker">AJUSTE TEMPORAL</p>
          <h2 id="logoPlacementEditorTitle">Ubicá el logo de Servicios</h2>
        </div>
        <button type="button" class="logo-placement-editor-close" data-logo-editor-close aria-label="Cerrar ajustador">×</button>
      </div>
      <p class="logo-placement-editor-help">Arrastrá el logo directamente o usá los controles. Pasame los valores que queden abajo para fijarlos en el sitio.</p>
      <div class="logo-placement-editor-controls">
        <label>Horizontal <output data-logo-output="x">0</output><input type="range" data-logo-control="x" min="-400" max="400" step="1" value="0"></label>
        <label>Vertical <output data-logo-output="y">0</output><input type="range" data-logo-control="y" min="-300" max="300" step="1" value="0"></label>
        <label>Tamaño <output data-logo-output="scale">1</output><input type="range" data-logo-control="scale" min="0.5" max="1.8" step="0.01" value="1"></label>
      </div>
      <div class="logo-placement-editor-readout" role="status" aria-live="polite">
        <code data-logo-readout>target=services-background-logo · x=0px · y=0px · scale=1</code>
        <button type="button" data-logo-copy>Copiar valores</button>
      </div>
      <div class="logo-placement-editor-actions">
        <button type="button" class="logo-placement-editor-reset" data-logo-reset>Restablecer</button>
        <button type="button" class="logo-placement-editor-done" data-logo-editor-close>Listo</button>
      </div>
    </div>
  `;
  document.body.append(editor);
  document.body.classList.add('logo-placement-editor-active');

  const controls = Object.fromEntries([...editor.querySelectorAll('[data-logo-control]')].map(input => [input.dataset.logoControl, input]));
  const outputs = Object.fromEntries([...editor.querySelectorAll('[data-logo-output]')].map(output => [output.dataset.logoOutput, output]));
  const readout = editor.querySelector('[data-logo-readout]');
  let drag = null;

  function apply() {
    target.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale})`;
    Object.entries(controls).forEach(([name, input]) => { input.value = String(state[name]); });
    Object.entries(outputs).forEach(([name, output]) => { output.textContent = name === 'scale' ? format(state[name]) : `${format(state[name])}px`; });
    readout.textContent = `target=services-background-logo · x=${format(state.x)}px · y=${format(state.y)}px · scale=${format(state.scale)}`;
  }

  function close() {
    try { localStorage.setItem(STORAGE_KEY, 'shown'); } catch (error) { console.info('No se pudo guardar el estado del ajustador.', error); }
    editor.close();
    document.body.classList.remove('logo-placement-editor-active');
  }

  Object.entries(controls).forEach(([name, input]) => {
    input.addEventListener('input', () => {
      state[name] = name === 'scale' ? Number(input.value) : Number(input.value);
      apply();
    });
  });

  editor.querySelector('[data-logo-reset]').addEventListener('click', () => {
    state.x = 0;
    state.y = 0;
    state.scale = 1;
    apply();
  });

  editor.querySelector('[data-logo-copy]').addEventListener('click', async event => {
    const value = readout.textContent;
    try {
      await navigator.clipboard.writeText(value);
      event.currentTarget.textContent = 'Copiado';
      window.setTimeout(() => { event.currentTarget.textContent = 'Copiar valores'; }, 1600);
    } catch (error) {
      event.currentTarget.textContent = 'Copiá el texto de arriba';
      console.info('El navegador no permitió copiar los valores del logo.', error);
    }
  });

  editor.querySelectorAll('[data-logo-editor-close]').forEach(button => button.addEventListener('click', close));
  editor.addEventListener('cancel', event => { event.preventDefault(); close(); });
  editor.addEventListener('click', event => { if (event.target === editor) close(); });

  target.addEventListener('pointerdown', event => {
    if (!document.body.classList.contains('logo-placement-editor-active') || event.button !== 0) return;
    event.preventDefault();
    target.setPointerCapture(event.pointerId);
    drag = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
    target.classList.add('is-placement-dragging');
  });
  target.addEventListener('pointermove', event => {
    if (!drag || drag.pointerId !== event.pointerId) return;
    state.x = clamp(round(state.x + event.clientX - drag.x), -400, 400);
    state.y = clamp(round(state.y + event.clientY - drag.y), -300, 300);
    drag.x = event.clientX;
    drag.y = event.clientY;
    apply();
  });
  const endDrag = event => {
    if (!drag || drag.pointerId !== event.pointerId) return;
    drag = null;
    target.classList.remove('is-placement-dragging');
  };
  target.addEventListener('pointerup', endDrag);
  target.addEventListener('pointercancel', endDrag);

  apply();
  try { localStorage.setItem(STORAGE_KEY, 'shown'); } catch (error) { console.info('No se pudo guardar la apertura del ajustador.', error); }
  if (typeof editor.showModal === 'function') editor.showModal();
  else editor.setAttribute('open', '');
})();
