(() => {
  const WHATSAPP = '543517397525';
  const RATE_BY_GUESTS = {
    'surf-lessons': [70, 65, 60, 55, 50, 50],
    'surf-coaching': [45, 45, 45, 45, 45, 45],
    'surf-photography': [70, 65, 60, 55, 50, 45],
    surfskate: [50, 50, 50, 50, 50, 50]
  };
  const experiences = [
    { id: 'stays', image: 'assets/img/hotels/stayandhotels6_resultado.webp', imageAlt: { es: 'Alojamiento tropical junto a la playa con piscina', en: 'Tropical beachfront accommodation with a pool' }, dateMode: 'range', title: { es: 'Estadías y hoteles', en: 'Stays and Hotels' }, description: { es: 'Encontrá alojamiento para tu estadía.', en: 'Find a place to stay during your trip.' } },
    { id: 'surf-lessons', image: 'assets/legacy/clase-surf.jpeg', imageAlt: { es: 'Instructor de surf con alumnos durante una clase en Tamarindo', en: 'Surf instructor with students during a lesson in Tamarindo' }, title: { es: 'Clases de surf', en: 'Surf lessons' }, description: { es: 'Una clase adaptada al nivel de tu grupo.', en: 'A surf lesson tailored to your group’s level.' } },
    { id: 'surf-coaching', image: 'assets/img/optimized/surf-coaching.webp', title: { es: 'Surf coaching', en: 'Surf coaching' }, description: { es: 'Entrenamiento y análisis para mejorar tu surf.', en: 'Coaching and feedback to help you progress.' } },
    { id: 'witch-rock', image: 'assets/img/optimized/witch-rock.webp', title: { es: 'Roca Bruja', en: 'Witch’s Rock Surf Trip' }, description: { es: 'Una salida de surf por barco.', en: 'A surf trip by boat.' } },
    { id: 'snorkel-catamaran', image: 'assets/img/optimized/snorkel-catalinas.webp', title: { es: 'Snorkel y catamarán', en: 'Snorkeling and catamaran' }, description: { es: 'Explorá el mar o navegá la costa.', en: 'Explore underwater or sail along the coast.' } },
    { id: 'yoga', image: 'assets/img/optimized/yoga-wellness.webp', title: { es: 'Yoga', en: 'Yoga' }, description: { es: 'Sumá una pausa a tu viaje.', en: 'Make room for a pause in your trip.' } },
    { id: 'atv', image: 'assets/img/optimized/rincon-adventure.webp', title: { es: 'Tours en cuatriciclo — ATV', en: 'ATV tours' }, description: { es: 'Descubrí Guanacaste en cuatriciclo.', en: 'Explore Guanacaste by ATV.' } },
    { id: 'surf-photography', image: 'assets/img/optimized/surf-photography.webp', title: { es: 'Fotos de surf', en: 'Surf Photography' }, description: { es: 'Guardá los momentos de tu sesión.', en: 'Keep the memories from your surf session.' } },
    { id: 'surfskate', image: 'assets/img/optimized/surfskate.webp', title: { es: 'Clases de surfskate', en: 'Surfskate Lessons' }, description: { es: 'Encontrá tu flow en tierra.', en: 'Find your flow on land.' } },
    { id: 'retreats', image: 'assets/img/optimized/retreat-evening.webp', title: { es: 'Retiros', en: 'Retreats' }, description: { es: 'Surf, descanso, movimiento y comunidad.', en: 'Surf, rest, movement and community.' } }
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
      cartCaption: 'Tu próxima aventura empieza acá.',
      itemCount: 'experiencia',
      itemsCount: 'experiencias',
      empty: 'Tu carrito está listo para la aventura.',
      emptyTip: 'Sumá las experiencias que te entusiasmen y las vas a ver acá.',
      selected: 'Experiencias elegidas',
      remove: 'Quitar',
      guestsShort: 'persona',
      guestsShortPlural: 'personas',
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
      cartCaption: 'Your next adventure starts here.',
      itemCount: 'experience',
      itemsCount: 'experiences',
      empty: 'Your cart is ready for an adventure.',
      emptyTip: 'Add the experiences you love and they’ll show up here.',
      selected: 'Selected experiences',
      remove: 'Remove',
      guestsShort: 'guest',
      guestsShortPlural: 'guests',
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
      <div class="trip-experience-image"><img src="${experience.image}" alt="${esc(experience.imageAlt?.[lang] || `${copy.imageAlt} ${experience.title[lang]}`)}" loading="lazy" /></div>
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
    const rows = list.map(([id, state], index) => {
      const experience = experiences.find(item => item.id === id);
      const price = priceFor(id, Number(state.guests));
      if (price !== null) total += price;
      const dates = experience.dateMode === 'range'
        ? `${copy.checkIn}: ${formatDate(state.start) || '—'} · ${copy.checkOut}: ${formatDate(state.end) || '—'}`
        : `${copy.date}: ${formatDate(state.start) || '—'}`;
      return `<li class="trip-summary-item">
        <span class="trip-summary-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
        <div class="trip-summary-item-copy"><strong>${esc(experience.title[lang])}</strong><span>${esc(dates)}</span><span>${esc(state.guests)} ${Number(state.guests) === 1 ? copy.guestsShort : copy.guestsShortPlural}</span></div>
        <div class="trip-summary-price">${price === null ? `<span>${copy.noEstimate}</span>` : `<strong>${money(price)}</strong>`}<button type="button" data-remove="${id}" aria-label="${esc(copy.remove)}: ${esc(experience.title[lang])}">${copy.remove}</button></div>
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
    return `<div class="trip-cart-top">
        <div class="trip-summary-head"><p class="trip-kicker">${copy.selected}</p><h2>${copy.trip}</h2><p class="trip-cart-caption">${copy.cartCaption}</p></div>
        <div class="trip-cart-illustration" aria-hidden="true">
          <svg viewBox="0 0 112 96" focusable="false">
            <path class="trip-cart-spark" d="M18 17v9m-4.5-4.5h9M91 15v8m-4 0h8" />
            <path class="trip-cart-board" d="M29 10c4-5 8-7 12-7s8 2 12 7L42 50 29 10Z" />
            <path class="trip-cart-board-stripe" d="m34 19 16 5m-20 5 16 5" />
            <path class="trip-cart-basket" d="M25 45h66l-7 29H33l-8-29Z" />
            <path class="trip-cart-basket-top" d="M20 43h76" />
            <path class="trip-cart-grid" d="m43 48 4 21m13-21v21m13-21-4 21" />
            <circle class="trip-cart-wheel" cx="42" cy="83" r="5" />
            <circle class="trip-cart-wheel" cx="77" cy="83" r="5" />
          </svg>
        </div>
        <span class="trip-cart-count" aria-live="polite">${list.length} ${list.length === 1 ? copy.itemCount : copy.itemsCount}</span>
      </div>
      ${list.length ? `<ul class="trip-summary-list">${rows.join('')}</ul>` : `<div class="trip-summary-empty"><span aria-hidden="true">✦</span><p>${copy.empty}</p><small>${copy.emptyTip}</small></div>`}
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
      <div class="trip-builder-hero-image" aria-hidden="true">
        <video class="trip-builder-hero-video" autoplay loop muted playsinline poster="assets/img/optimized/retreat-tamarindo.webp" tabindex="-1">
          <source src="assets/videohero0.mp4" type="video/mp4" />
        </video>
      </div>
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
  const updateExperienceCards = () => {
    const grid = root.querySelector('.trip-experience-grid');
    if (grid) grid.innerHTML = renderCards();
  };
  const animateBoardIntoCart = sourceRect => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const destination = root.querySelector('.trip-cart-illustration');
    if (!destination) return;
    const targetRect = destination.getBoundingClientRect();
    const board = document.createElement('div');
    board.className = 'trip-flying-board';
    board.setAttribute('aria-hidden', 'true');
    board.innerHTML = '<svg viewBox="0 0 88 30" focusable="false"><path d="M4 15C13 5 25 2 44 2s31 3 40 13c-9 10-21 13-40 13S13 25 4 15Z"/><path d="m27 5 34 20M22 9l24 14" /></svg>';
    board.style.left = `${sourceRect.left + sourceRect.width / 2 - 44}px`;
    board.style.top = `${sourceRect.top + sourceRect.height / 2 - 15}px`;
    document.body.append(board);
    const deltaX = targetRect.left + targetRect.width / 2 - sourceRect.left - sourceRect.width / 2;
    const deltaY = targetRect.top + targetRect.height / 2 - sourceRect.top - sourceRect.height / 2;
    const animation = board.animate([
      { transform: 'translate(0, 0) rotate(-20deg) scale(.68)', opacity: 1 },
      { transform: `translate(${deltaX * .58}px, ${deltaY * .58 - 74}px) rotate(155deg) scale(.92)`, opacity: 1, offset: .72 },
      { transform: `translate(${deltaX}px, ${deltaY}px) rotate(350deg) scale(.12)`, opacity: 0 }
    ], { duration: 760, easing: 'cubic-bezier(.2,.8,.25,1)' });
    animation.onfinish = () => {
      board.remove();
      destination.classList.add('is-catching');
      window.setTimeout(() => destination.classList.remove('is-catching'), 620);
    };
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
      else {
        const sourceRect = event.target.getBoundingClientRect();
        selected.set(id, { ...drafts.get(id) });
        updateExperienceCards();
        updateSummary();
        animateBoardIntoCart(sourceRect);
        return;
      }
      updateExperienceCards();
      updateSummary();
      return;
    }
    const remove = event.target.closest('[data-remove]');
    if (remove) {
      selected.delete(remove.dataset.remove);
      updateExperienceCards();
      updateSummary();
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
  const heroMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const syncHeroVideoMotion = () => {
    const video = root.querySelector('.trip-builder-hero-video');
    if (!video) return;
    if (heroMotion.matches) {
      video.pause();
      return;
    }
    if (video.paused) video.play().catch(error => console.error('Trip-builder background video could not play.', error));
  };
  syncHeroVideoMotion();
  heroMotion.addEventListener('change', syncHeroVideoMotion);
  window.addEventListener('wavepoint:languagechange', event => {
    lang = event.detail.lang === 'en' ? 'en' : 'es';
    render();
    syncHeroVideoMotion();
  });
})();
