(() => {
  const WHATSAPP = '543517397525';
  const RATE_BY_GUESTS = {
    'surf-lessons': [70, 65, 60, 55, 50, 50],
    'surf-coaching': [45, 45, 45, 45, 45, 45],
    'surf-photography': [70, 65, 60, 55, 50, 45],
    surfskate: [50, 50, 50, 50, 50, 50]
  };
  const experiences = [
    { id: 'stays', image: 'https://cdn.pixabay.com/photo/2014/03/24/10/17/beach-293826_1280.jpg', dateMode: 'range', title: { es: 'Estadías y hoteles', en: 'Stays and Hotels' }, description: { es: 'Encontrá alojamiento para tu estadía.', en: 'Find a place to stay during your trip.' } },
    { id: 'surf-lessons', image: 'https://cdn.pixabay.com/photo/2018/12/01/21/33/surfers-3850272_1280.jpg', title: { es: 'Clases de surf', en: 'Surf lessons' }, description: { es: 'Una clase adaptada al nivel de tu grupo.', en: 'A surf lesson tailored to your group’s level.' } },
    { id: 'surf-coaching', image: 'https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_1280.jpg', title: { es: 'Surf coaching', en: 'Surf coaching' }, description: { es: 'Entrenamiento y análisis para mejorar tu surf.', en: 'Coaching and feedback to help you progress.' } },
    { id: 'witch-rock', image: 'https://cdn.pixabay.com/photo/2024/02/18/15/59/sea-8581529_1280.jpg', title: { es: 'Roca Bruja', en: 'Witch’s Rock Surf Trip' }, description: { es: 'Una salida de surf por barco.', en: 'A surf trip by boat.' } },
    { id: 'snorkel-catamaran', image: 'https://cdn.pixabay.com/photo/2012/02/23/08/57/woman-15840_1280.jpg', title: { es: 'Snorkel y catamarán', en: 'Snorkeling and catamaran' }, description: { es: 'Explorá el mar o navegá la costa.', en: 'Explore underwater or sail along the coast.' } },
    { id: 'yoga', image: 'https://cdn.pixabay.com/photo/2016/11/18/15/05/beach-1835213_1280.jpg', title: { es: 'Yoga', en: 'Yoga' }, description: { es: 'Sumá una pausa a tu viaje.', en: 'Make room for a pause in your trip.' } },
    { id: 'atv', image: 'https://cdn.pixabay.com/photo/2023/04/18/18/38/atv-7935771_1280.jpg', title: { es: 'Tours en cuatriciclo — ATV', en: 'ATV tours' }, description: { es: 'Descubrí Guanacaste en cuatriciclo.', en: 'Explore Guanacaste by ATV.' } },
    { id: 'surf-photography', image: 'https://cdn.pixabay.com/photo/2018/10/17/11/57/beach-3753801_1280.jpg', title: { es: 'Fotos de surf', en: 'Surf Photography' }, description: { es: 'Guardá los momentos de tu sesión.', en: 'Keep the memories from your surf session.' } },
    { id: 'surfskate', image: 'https://cdn.pixabay.com/photo/2016/11/29/14/28/skateboard-1870039_1280.jpg', title: { es: 'Clases de surfskate', en: 'Surfskate Lessons' }, description: { es: 'Encontrá tu flow en tierra.', en: 'Find your flow on land.' } },
    { id: 'retreats', image: 'https://cdn.pixabay.com/photo/2022/01/17/09/10/retreat-6944181_1280.jpg', title: { es: 'Retiros', en: 'Retreats' }, description: { es: 'Surf, descanso, movimiento y comunidad.', en: 'Surf, rest, movement and community.' } }
  ];
  const COPY = {
    es: {
      eyebrow: 'DISEÑÁ TU VIAJE',
      title: 'Tu viaje, a tu manera.',
      intro: '¿Viajás con amigos, planeás un viaje de surf o buscás dónde alojarte y sumar algunas actividades? Contanos tus fechas, cuántos son y qué te interesa. Armaremos una propuesta según la disponibilidad.',
      sectionTitle: 'Armá tu viaje por Tamarindo',
      sectionIntro: 'Elegí las experiencias que querés incluir. Agregá fechas y cuántas personas van a participar en cada una; las sumamos a una sola solicitud.',
      add: 'Agregar a mi viaje',
      added: 'Agregado ✓',
      date: 'Fecha preferida',
      checkIn: 'Llegada',
      checkOut: 'Salida',
      guests: 'Cantidad de personas',
      estimate: 'Estimado para esta experiencia',
      quote: 'Precio a confirmar',
      trip: 'Tu viaje',
      empty: 'Todavía no agregaste experiencias.',
      selected: 'Experiencias elegidas',
      remove: 'Quitar',
      guestsShort: 'personas',
      estimated: 'Estimado del viaje',
      noEstimate: 'A confirmar',
      totalNote: 'El total suma solo las experiencias con tarifas de referencia. Las demás se confirman con WavePoint.',
      priceNote: 'Precios y disponibilidad serán confirmados por el equipo de WavePoint antes de cualquier pago.',
      continue: 'Continuar a la solicitud',
      selectError: 'Agregá al menos una experiencia para continuar.',
      detailsError: 'Completá las fechas y la cantidad de personas de cada experiencia elegida.',
      invalidDates: 'La fecha de salida debe ser posterior a la de llegada.',
      name: 'Tu nombre (opcional)',
      namePlaceholder: '¿Cómo te llamás?',
      requestExtra: '¿Algo más que debamos saber? (opcional)',
      extraPlaceholder: 'Preferencias o información útil para tu viaje',
      waIntro: 'Hola WavePoint, quiero armar mi viaje a Tamarindo:',
      waDate: 'Fecha preferida',
      waCheckIn: 'Llegada',
      waCheckOut: 'Salida',
      waGuests: 'Personas',
      waEstimate: 'Estimado',
      waQuote: 'Precio a confirmar',
      waName: 'Nombre',
      waExtra: 'Información adicional',
      imageAlt: 'Imagen de',
      currency: 'USD'
    },
    en: {
      eyebrow: 'PLAN YOUR TRIP',
      title: 'Your trip, your way.',
      intro: 'Travelling with friends, planning a surf trip or looking for a place to stay with a few activities? Tell us your dates, group size and interests. We’ll put together a proposal based on what’s available.',
      sectionTitle: 'Build your Tamarindo trip',
      sectionIntro: 'Choose the experiences you’d like to include. Add dates and the number of people for each one, and we’ll put everything into one booking request.',
      add: 'Add to my trip',
      added: 'Added ✓',
      date: 'Preferred date',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Number of guests',
      estimate: 'Estimated price for this experience',
      quote: 'Price to be confirmed',
      trip: 'Your trip',
      empty: 'You haven’t added any experiences yet.',
      selected: 'Selected experiences',
      remove: 'Remove',
      guestsShort: 'guests',
      estimated: 'Estimated trip total',
      noEstimate: 'To be confirmed',
      totalNote: 'The total includes only experiences with reference rates. WavePoint will confirm the others.',
      priceNote: 'Prices and availability will be confirmed by the WavePoint team before payment.',
      continue: 'Continue to booking request',
      selectError: 'Add at least one experience to continue.',
      detailsError: 'Add dates and guest counts for every selected experience.',
      invalidDates: 'Check-out must be after check-in.',
      name: 'Your name (optional)',
      namePlaceholder: 'What’s your name?',
      requestExtra: 'Anything else we should know? (optional)',
      extraPlaceholder: 'Preferences or useful information for your trip',
      waIntro: 'Hi WavePoint, I’d like to plan my Tamarindo trip:',
      waDate: 'Preferred date',
      waCheckIn: 'Check-in',
      waCheckOut: 'Check-out',
      waGuests: 'Guests',
      waEstimate: 'Estimate',
      waQuote: 'Price to be confirmed',
      waName: 'Name',
      waExtra: 'Additional information',
      imageAlt: 'Photo of',
      currency: 'USD'
    }
  };
  let lang = (() => {
    try { return localStorage.getItem('wavepoint-lang') === 'en' ? 'en' : 'es'; }
    catch (error) { return 'es'; }
  })();
  const selected = new Map();
  const drafts = new Map(experiences.map(experience => [experience.id, { start: '', end: '', guests: '1' }]));
  let customerName = '';
  let customerExtra = '';
  const root = document.getElementById('tripBuilderRoot');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const priceFor = (id, guests) => {
    const rates = RATE_BY_GUESTS[id];
    if (!rates || !Number.isInteger(guests) || guests < 1) return null;
    return rates[Math.min(guests, 6) - 1];
  };
  const money = amount => new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-CR', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
  const formatDate = date => date
    ? new Date(`${date}T12:00:00`).toLocaleDateString(lang === 'en' ? 'en-US' : 'es-CR', { year: 'numeric', month: 'short', day: 'numeric' })
    : '';
  const dateInputs = experience => experience.dateMode === 'range'
    ? `<div class="trip-input-pair"><label>${COPY[lang].checkIn}<input type="date" data-date="start" value="${esc(drafts.get(experience.id).start)}" /></label><label>${COPY[lang].checkOut}<input type="date" data-date="end" value="${esc(drafts.get(experience.id).end)}" /></label></div>`
    : `<label>${COPY[lang].date}<input type="date" data-date="start" value="${esc(drafts.get(experience.id).start)}" /></label>`;
  const renderCards = () => experiences.map(experience => {
    const state = selected.get(experience.id);
    const guests = drafts.get(experience.id).guests;
    const price = priceFor(experience.id, Number(guests));
    const copy = COPY[lang];
    return `<article class="trip-experience${state ? ' is-added' : ''}" data-experience="${experience.id}">
      <div class="trip-experience-image"><img src="${experience.image}" alt="${esc(copy.imageAlt)} ${esc(experience.title[lang])}" loading="lazy" /></div>
      <div class="trip-experience-content">
        <h3>${esc(experience.title[lang])}</h3>
        <p>${esc(experience.description[lang])}</p>
        <div class="trip-experience-fields">${dateInputs(experience)}<label>${copy.guests}<input type="number" min="1" step="1" inputmode="numeric" data-guests value="${esc(guests)}" /></label></div>
        <p class="trip-experience-price"><span>${copy.estimate}</span><strong>${price === null ? copy.quote : money(price)}</strong></p>
        <button class="trip-add-button" type="button" data-add aria-pressed="${Boolean(state)}">${state ? copy.added : copy.add}</button>
      </div>
    </article>`;
  }).join('');
  const renderSummary = () => {
    const copy = COPY[lang];
    const list = [...selected.entries()];
    let total = 0;
    const rows = list.map(([id, state]) => {
      const experience = experiences.find(item => item.id === id);
      const price = priceFor(id, Number(state.guests));
      if (price !== null) total += price;
      const dates = experience.dateMode === 'range'
        ? `${copy.checkIn}: ${formatDate(state.start) || '—'} · ${copy.checkOut}: ${formatDate(state.end) || '—'}`
        : `${copy.date}: ${formatDate(state.start) || '—'}`;
      return `<li class="trip-summary-item">
        <div><strong>${esc(experience.title[lang])}</strong><span>${esc(dates)} · ${esc(state.guests)} ${copy.guestsShort}</span></div>
        <div class="trip-summary-price">${price === null ? `<span>${copy.noEstimate}</span>` : `<strong>${money(price)}</strong>`}<button type="button" data-remove="${id}">${copy.remove}</button></div>
      </li>`;
    });
    const invalidDates = list.some(([id, state]) => {
      const experience = experiences.find(item => item.id === id);
      return experience.dateMode === 'range' && state.start && state.end && state.end <= state.start;
    });
    const needsDetails = list.some(([id, state]) => {
      const experience = experiences.find(item => item.id === id);
      const guests = Number(state.guests);
      return !state.start || (experience.dateMode === 'range' && !state.end) || !Number.isInteger(guests) || guests < 1 || (experience.dateMode === 'range' && state.end <= state.start);
    });
    const requestError = invalidDates ? copy.invalidDates : list.length && needsDetails ? copy.detailsError : '';
    return `<div class="trip-summary-head"><p class="trip-kicker">${copy.selected}</p><h2>${copy.trip}</h2></div>
      ${list.length ? `<ul class="trip-summary-list">${rows.join('')}</ul>` : `<p class="trip-summary-empty">${copy.empty}</p>`}
      <div class="trip-summary-total"><span>${copy.estimated}</span><strong>${list.some(([id, state]) => priceFor(id, Number(state.guests)) !== null) ? money(total) : copy.noEstimate}</strong></div>
      <p class="trip-summary-note">${copy.totalNote}</p>
      <p class="trip-confirm-note">${copy.priceNote}</p>
      <label class="trip-contact-field">${copy.name}<input type="text" data-name value="${esc(customerName)}" placeholder="${copy.namePlaceholder}" /></label>
      <label class="trip-contact-field">${copy.requestExtra}<textarea data-extra placeholder="${copy.extraPlaceholder}">${esc(customerExtra)}</textarea></label>
      <p class="trip-request-error" role="alert" aria-live="assertive">${requestError}</p>
      <button class="trip-continue-button" type="button" data-continue ${!list.length || needsDetails ? 'disabled' : ''}>${copy.continue}</button>`;
  };
  const render = () => {
    const copy = COPY[lang];
    document.documentElement.lang = lang;
    document.title = `${copy.title} · WavePoint`;
    root.innerHTML = `<section class="trip-builder-hero">
      <div class="trip-builder-hero-image" aria-hidden="true"></div>
      <div class="container trip-builder-hero-content"><p class="trip-kicker">${copy.eyebrow}</p><h1>${copy.title}</h1><p>${copy.intro}</p></div>
    </section>
    <section class="trip-builder-main"><div class="container">
      <header class="trip-builder-heading"><p class="trip-kicker">WAVEPOINT · TAMARINDO</p><h2>${copy.sectionTitle}</h2><p>${copy.sectionIntro}</p></header>
      <div class="trip-builder-layout"><div class="trip-experience-grid">${renderCards()}</div><aside class="trip-summary" aria-label="${copy.trip}" id="tripSummary">${renderSummary()}</aside></div>
    </div></section>`;
  };
  const updateSummary = () => {
    const summary = document.getElementById('tripSummary');
    if (!summary) return;
    summary.innerHTML = renderSummary();
  };
  root.addEventListener('input', event => {
    if (event.target.matches('[data-name]')) { customerName = event.target.value; return; }
    if (event.target.matches('[data-extra]')) { customerExtra = event.target.value; return; }
    const card = event.target.closest('[data-experience]');
    if (!card) return;
    const draft = drafts.get(card.dataset.experience);
    if (event.target.matches('[data-date]')) draft[event.target.dataset.date] = event.target.value;
    if (event.target.matches('[data-guests]')) draft.guests = event.target.value;
    const state = selected.get(card.dataset.experience);
    if (state) Object.assign(state, draft);
    const price = priceFor(card.dataset.experience, Number(draft.guests));
    const priceText = card.querySelector('.trip-experience-price strong');
    if (priceText) priceText.textContent = price === null ? COPY[lang].quote : money(price);
    updateSummary();
  });
  root.addEventListener('click', event => {
    const card = event.target.closest('[data-experience]');
    if (event.target.matches('[data-add]') && card) {
      const id = card.dataset.experience;
      if (selected.has(id)) selected.delete(id);
      else selected.set(id, { ...drafts.get(id) });
      render();
      return;
    }
    const remove = event.target.closest('[data-remove]');
    if (remove) {
      selected.delete(remove.dataset.remove);
      render();
      return;
    }
    if (!event.target.matches('[data-continue]')) return;
    const error = root.querySelector('.trip-request-error');
    const chosen = [...selected.entries()];
    if (!chosen.length) { error.textContent = COPY[lang].selectError; return; }
    const invalidDates = chosen.some(([id, state]) => {
      const experience = experiences.find(item => item.id === id);
      return experience.dateMode === 'range' && state.start && state.end && state.end <= state.start;
    });
    const incomplete = chosen.some(([id, state]) => {
      const experience = experiences.find(item => item.id === id);
      const guests = Number(state.guests);
      return !state.start || (experience.dateMode === 'range' && !state.end) || !Number.isInteger(guests) || guests < 1 || (experience.dateMode === 'range' && state.end <= state.start);
    });
    if (invalidDates) { error.textContent = COPY[lang].invalidDates; return; }
    if (incomplete) { error.textContent = COPY[lang].detailsError; return; }
    const lines = [COPY[lang].waIntro, ''];
    chosen.forEach(([id, state]) => {
      const experience = experiences.find(item => item.id === id);
      const price = priceFor(id, Number(state.guests));
      lines.push(`• ${experience.title[lang]}`);
      if (experience.dateMode === 'range') lines.push(`  ${COPY[lang].waCheckIn}: ${formatDate(state.start)} · ${COPY[lang].waCheckOut}: ${formatDate(state.end)}`);
      else lines.push(`  ${COPY[lang].waDate}: ${formatDate(state.start)}`);
      lines.push(`  ${COPY[lang].waGuests}: ${state.guests}`);
      lines.push(`  ${price === null ? COPY[lang].waQuote : `${COPY[lang].waEstimate}: ${money(price)}`}`);
    });
    const name = customerName.trim();
    const extra = customerExtra.trim();
    if (name) lines.push('', `${COPY[lang].waName}: ${name}`);
    if (extra) lines.push(`${COPY[lang].waExtra}: ${extra}`);
    lines.push('', COPY[lang].priceNote);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
  });
  render();
  window.addEventListener('wavepoint:languagechange', event => {
    lang = event.detail.lang === 'en' ? 'en' : 'es';
    render();
  });
})();
