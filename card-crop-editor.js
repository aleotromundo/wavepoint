(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('editor-encuadres') !== '1') return;

  const STORAGE_KEY = 'wavepoint-card-crop-confirmed-v1';
  const cards = [...document.querySelectorAll('#servicios .service-grid-catalog > .service-card:not(.service-card-pack)')]
    .map(card => {
      const image = card.querySelector('.service-img img');
      if (!image) return null;
      const title = card.querySelector('.service-body h3')?.textContent.trim() || image.alt || image.src;
      const key = image.getAttribute('src');
      const position = getPosition(getComputedStyle(image).objectPosition);
      return {
        card,
        frame: image.closest('.service-img'),
        image,
        key,
        title,
        initial: { zoom: 1, ...position },
        current: { zoom: 1, ...position }
      };
    })
    .filter(Boolean);

  if (!cards.length) return;

  let confirmed = {};
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    confirmed = saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {};
  } catch (error) {
    console.error('No se pudieron leer los encuadres guardados.', error);
  }

  const editor = document.createElement('aside');
  editor.className = 'card-crop-editor';
  editor.setAttribute('aria-label', 'Editor temporal de encuadres');
  editor.innerHTML = `
    <div class="card-crop-editor-heading">
      <strong>Editor de encuadres</strong>
      <button type="button" class="card-crop-editor-close" aria-label="Salir del editor">×</button>
    </div>
    <label class="card-crop-editor-field">Tarjeta
      <select class="card-crop-editor-select"></select>
    </label>
    <label class="card-crop-editor-field">Zoom <output data-value="zoom"></output>
      <input type="range" min="100" max="250" step="1" value="100" data-control="zoom">
    </label>
    <label class="card-crop-editor-field">Horizontal <output data-value="x"></output>
      <input type="range" min="0" max="100" step="1" value="50" data-control="x">
    </label>
    <label class="card-crop-editor-field">Vertical <output data-value="y"></output>
      <input type="range" min="0" max="100" step="1" value="50" data-control="y">
    </label>
    <div class="card-crop-editor-actions">
      <button type="button" data-action="confirm">Confirmar esta foto</button>
      <button type="button" data-action="reset">Restablecer</button>
      <button type="button" data-action="export">Copiar confirmados</button>
    </div>
    <p class="card-crop-editor-status" role="status" aria-live="polite">Arrastrá la foto para moverla. Confirmá cada encuadre.</p>
    <textarea class="card-crop-editor-export" aria-label="Encuadres confirmados para copiar" hidden readonly></textarea>
  `;
  document.body.append(editor);
  document.body.classList.add('card-crop-editor-active');

  const select = editor.querySelector('.card-crop-editor-select');
  const status = editor.querySelector('.card-crop-editor-status');
  const exportField = editor.querySelector('.card-crop-editor-export');
  const controls = Object.fromEntries(
    [...editor.querySelectorAll('[data-control]')].map(input => [input.dataset.control, input])
  );
  const outputs = Object.fromEntries(
    [...editor.querySelectorAll('[data-value]')].map(output => [output.dataset.value, output])
  );
  let activeIndex = 0;
  let dragStart = null;

  cards.forEach((item, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = `${confirmed[item.key] ? '✓ ' : ''}${item.title}`;
    select.append(option);
    if (confirmed[item.key]) {
      item.current = normalize(confirmed[item.key]);
      apply(item);
    }

    item.frame.classList.add('card-crop-editor-frame');
    item.image.draggable = false;
    item.image.addEventListener('load', () => apply(item));
    item.image.addEventListener('pointerdown', event => {
      if (activeIndex !== index || event.button !== 0 || !item.image.naturalWidth) return;
      event.preventDefault();
      item.image.setPointerCapture(event.pointerId);
      dragStart = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
      item.frame.classList.add('is-dragging');
    });
    item.image.addEventListener('pointermove', event => {
      if (!dragStart || dragStart.pointerId !== event.pointerId) return;
      const bounds = item.frame.getBoundingClientRect();
      const coverScale = Math.max(bounds.width / item.image.naturalWidth, bounds.height / item.image.naturalHeight);
      const overflowX = Math.max(0, item.image.naturalWidth * coverScale - bounds.width) * item.current.zoom;
      const overflowY = Math.max(0, item.image.naturalHeight * coverScale - bounds.height) * item.current.zoom;
      if (overflowX > 0) item.current.x = clamp(item.current.x - (event.clientX - dragStart.x) / overflowX * 100);
      if (overflowY > 0) item.current.y = clamp(item.current.y - (event.clientY - dragStart.y) / overflowY * 100);
      dragStart.x = event.clientX;
      dragStart.y = event.clientY;
      apply(item);
      syncControls();
    });
    const endDrag = event => {
      if (!dragStart || dragStart.pointerId !== event.pointerId) return;
      dragStart = null;
      item.frame.classList.remove('is-dragging');
    };
    item.image.addEventListener('pointerup', endDrag);
    item.image.addEventListener('pointercancel', endDrag);
    item.card.querySelector('.service-image-link')?.addEventListener('click', event => event.preventDefault());
  });

  function getPosition(value) {
    const values = value.match(/[\d.]+%/g) || [];
    return { x: values[0] ? Number.parseFloat(values[0]) : 50, y: values[1] ? Number.parseFloat(values[1]) : 50 };
  }

  function normalize(value) {
    return {
      zoom: clamp(Number(value.zoom) || 1, 1, 2.5),
      x: clamp(Number(value.x) || 0),
      y: clamp(Number(value.y) || 0)
    };
  }

  function clamp(value, min = 0, max = 100) {
    return Math.min(max, Math.max(min, value));
  }

  function apply(item) {
    item.image.style.objectPosition = `${item.current.x}% ${item.current.y}%`;
    item.image.style.transform = `scale(${item.current.zoom})`;
  }

  function syncControls() {
    const item = cards[activeIndex];
    controls.zoom.value = String(Math.round(item.current.zoom * 100));
    controls.x.value = String(Math.round(item.current.x));
    controls.y.value = String(Math.round(item.current.y));
    outputs.zoom.value = `${controls.zoom.value}%`;
    outputs.x.value = `${controls.x.value}%`;
    outputs.y.value = `${controls.y.value}%`;
    cards.forEach((card, index) => card.card.classList.toggle('card-crop-editor-selected', index === activeIndex));
    status.textContent = confirmed[item.key]
      ? 'Esta foto ya está confirmada. Podés seguir ajustándola y confirmar de nuevo.'
      : 'Arrastrá la foto para moverla. Confirmá cada encuadre.';
    exportField.hidden = true;
  }

  function selectCard(index) {
    activeIndex = index;
    const item = cards[activeIndex];
    item.current = confirmed[item.key] ? normalize(confirmed[item.key]) : { ...item.initial };
    select.value = String(activeIndex);
    apply(item);
    item.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    syncControls();
  }

  select.addEventListener('change', () => selectCard(Number(select.value)));
  Object.entries(controls).forEach(([name, input]) => {
    input.addEventListener('input', () => {
      const item = cards[activeIndex];
      item.current[name] = name === 'zoom' ? Number(input.value) / 100 : Number(input.value);
      apply(item);
      syncControls();
    });
  });

  editor.querySelector('[data-action="confirm"]').addEventListener('click', () => {
    const item = cards[activeIndex];
    confirmed[item.key] = { ...item.current };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(confirmed));
      select.options[activeIndex].textContent = `✓ ${item.title}`;
      status.textContent = `Encuadre confirmado para «${item.title}» en este navegador.`;
      exportField.hidden = true;
    } catch (error) {
      status.textContent = 'No se pudo guardar. Revisá el almacenamiento del navegador e intentá de nuevo.';
      console.error('No se pudo guardar el encuadre confirmado.', error);
    }
  });

  editor.querySelector('[data-action="reset"]').addEventListener('click', () => {
    const item = cards[activeIndex];
    item.current = { ...item.initial };
    delete confirmed[item.key];
    apply(item);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(confirmed));
      select.options[activeIndex].textContent = item.title;
      syncControls();
    } catch (error) {
      status.textContent = 'No se pudo guardar el restablecimiento. Revisá el almacenamiento del navegador.';
      console.error('No se pudo guardar el restablecimiento del encuadre.', error);
    }
  });

  editor.querySelector('[data-action="export"]').addEventListener('click', async () => {
    const result = Object.fromEntries(
      Object.entries(confirmed).map(([key, value]) => [key, normalize(value)])
    );
    if (!Object.keys(result).length) {
      status.textContent = 'Todavía no confirmaste ningún encuadre.';
      return;
    }
    exportField.value = JSON.stringify(result, null, 2);
    exportField.hidden = false;
    exportField.focus();
    exportField.select();
    try {
      await navigator.clipboard.writeText(exportField.value);
      status.textContent = 'Encuadres copiados. Cuando termines, avisame y los incorporo al sitio.';
    } catch (error) {
      status.textContent = 'Seleccioné el texto para copiarlo manualmente con Ctrl+C.';
      console.info('El navegador no permitió copiar automáticamente los encuadres.', error);
    }
  });

  editor.querySelector('.card-crop-editor-close').addEventListener('click', () => {
    window.location.href = `${window.location.pathname}#servicios`;
  });

  window.addEventListener('resize', () => cards.forEach(item => apply(item)));
  document.querySelectorAll('#servicios .service-grid-catalog > .service-card:not(.service-card-pack) .service-img img')
    .forEach(image => image.style.setProperty('transition', 'none', 'important'));
  selectCard(0);
})();
