(() => {
  const WHATSAPP = '543517397525';
  const services = [
    {
      id: 'stay-experience', number: '01', eyebrow: 'STAY · EXPERIENCE', title: 'Stay & experience',
      cardText: 'Choose your accommodation and add experiences to your stay.',
      description: 'Tamarindo is best enjoyed when your accommodation and plans match your pace. Share your dates, the type of stay you need and the experiences you want to add, and WavePoint will coordinate with local partners to suggest a clear plan without wasting time.',
      images: ['assets/legacy/OTAMA_VIEW_30.jpg', 'assets/legacy/Piscina_16.jpg', 'assets/legacy/Playa_23.jpg'],
      questions: [
        { id: 'stay_dates', label: 'When do you want to stay?', type: 'dates', fields: ['Arrival', 'Departure'] },
        { id: 'accommodation_type', label: 'What type of accommodation do you prefer?', type: 'choice', options: ['Room', 'Full house', 'Need recommendations'] },
        { id: 'nightly_budget', label: 'What is your approximate nightly budget for the whole group?', type: 'money', optional: true },
        { id: 'experiences', label: 'Which experiences would you like to add?', type: 'multi', options: ['Surf lessons', 'Surf coaching', 'Witch’s Rock surf trip', 'Snorkeling & catamaran', 'Yoga', 'ATV tours', 'Retreats', 'Still deciding'] }
      ]
    },
    {
      id: 'surf-lessons', number: '02', eyebrow: 'SURF · LESSONS', title: 'Surf lessons',
      cardText: 'Your first wave or your next step. Find a lesson that fits your level.',
      description: 'The lesson is designed to guide each person with clarity, safety and encouragement. We adapt the session to the level of the group, the sea conditions and the goal: first-time surfing, improving foundations or building confidence before the next session.',
      images: ['assets/legacy/DSC02807.jpg', 'assets/legacy/clase-surf.jpeg'],
      questions: [
        { id: 'surf_level', label: 'What is your surf level?', type: 'choice', options: ['First time', 'Beginner', 'Intermediate', 'Advanced'] },
        { id: 'lesson_goal', label: 'What would you like to achieve with the lesson?', type: 'choice', options: ['Try surfing', 'Improve the basics', 'Work on a specific skill'] },
        { id: 'board_need', label: 'Do you need a board?', type: 'choice', options: ['Yes', 'No, I have mine', 'I need advice'] }
      ]
    },
    {
      id: 'surf-coaching', number: '03', eyebrow: 'SURF · COACHING', title: 'Surf coaching',
      cardText: 'Work on your surfing with coaching and optional photos or video analysis.',
      description: 'Coaching starts before paddling out: we understand what you want to improve and build a focused session around it. During the session we watch your decisions, positioning and technique, then turn those observations into concrete feedback. You can add photos or video analysis to review the session and see progress more clearly.',
      images: ['assets/legacy/_GSK8664.jpg', 'assets/legacy/FC0F6C9F-D8FA-446B-89A7-AC3D195117B1.jpeg'],
      questions: [
        { id: 'current_surf_level', label: 'What is your current surf level?', type: 'choice', options: ['Beginner', 'Intermediate', 'Advanced'] },
        { id: 'improvement_goal', label: 'What would you like to improve?', type: 'textarea', placeholder: 'Tell us briefly.' },
        { id: 'coaching_package', label: 'What would you like to include?', type: 'choice', options: ['Coaching only', 'Coaching and photos', 'Coaching and video analysis', 'Coaching, photos and video analysis'] },
        { id: 'own_board', label: 'Will you bring your own board?', type: 'choice', options: ['Yes', 'No'] }
      ]
    },
    {
      id: 'yoga', number: '04', eyebrow: 'YOGA', title: 'Yoga',
      cardText: 'Tell us your experience and preferred time to find a suitable session.',
      description: 'Yoga can be a way to wake up the body, slow down after surfing or create a pause during the trip. We adapt the format to your group: a shared class, a private session or a practice designed for your experience and timing.',
      images: ['assets/legacy/OTAMA_HEAL_21.jpg'],
      questions: [
        { id: 'yoga_experience', label: 'What is your experience with yoga?', type: 'choice', options: ['First time', 'Some experience', 'I practice regularly'] },
        { id: 'yoga_format', label: 'Do you prefer a group or private session?', type: 'choice', options: ['Group', 'Private', 'Any of the two'] },
        { id: 'yoga_notes', label: 'Is there anything the instructor should keep in mind?', type: 'textarea', placeholder: 'Optional', optional: true }
      ]
    },
    {
      id: 'witchs-rock', number: '05', eyebrow: 'SURF TRIP · ADVENTURE', title: "Witch's Rock surf trip",
      cardText: 'Request a guided surf trip with details matched to your group and the conditions.',
      description: 'This trip requires looking at the sea, logistics and the group as a whole. We coordinate the request with information about levels, boards and date flexibility so the operator can evaluate the day responsibly and choose the right window.',
      images: ['assets/legacy/bruja.jpg', 'assets/legacy/avellanas.jpg'],
      questions: [
        { id: 'group_levels', label: 'What surf level do the participants have?', type: 'textarea', placeholder: 'Indicate each level.' },
        { id: 'own_boards', label: 'Will everyone bring their own board?', type: 'choice', options: ['Yes', 'No'] },
        { id: 'board_count', label: 'If someone needs a board, how many are needed?', type: 'number', optional: true },
        { id: 'date_flexibility', label: 'Can the date change if the sea conditions require it?', type: 'choice', options: ['Yes', 'No'] }
      ]
    },
    {
      id: 'snorkeling-catamaran', number: '06', eyebrow: 'SNORKEL · CATAMARAN', title: 'Snorkeling & catamaran',
      cardText: 'Compare boat experiences, snorkeling options and time on the coast.',
      description: 'A day on the water can be relaxed, exploratory or a bit of both. We help compare snorkel tours, catamaran rides and combination options according to availability, while checking group size, comfort in the water and dietary needs before recommending a private or shared outing.',
      images: ['assets/legacy/conchal.jpg', 'assets/legacy/catalinas.jpg'],
      questions: [
        { id: 'sea_experience', label: 'What experience are you interested in?', type: 'choice', options: ['Snorkel tour', 'Catamaran ride', 'Catamaran with snorkel, if available'] },
        { id: 'departure_type', label: 'Do you prefer a shared or private departure?', type: 'choice', options: ['Shared', 'Private', 'I want to compare both'] },
        { id: 'snorkel_people', label: 'How many people want to snorkel?', type: 'number', optional: true },
        { id: 'swimming_comfort', label: 'Are everyone comfortable swimming in the sea?', type: 'choice', options: ['Yes', 'No', 'Need to check first'], optional: true },
        { id: 'dietary_needs', label: 'Any allergies or dietary requirements to mention?', type: 'textarea', placeholder: 'Optional', optional: true }
      ]
    },
    {
      id: 'buceo', number: '07', eyebrow: 'DIVE · COAST', title: 'Buceo',
      cardText: 'Explore the coast with a guided dive experience adapted to your group.',
      description: 'A guided dive can be a relaxing way to discover the coast from a different angle. We check the group size, the level of comfort in the water and the best option available so the recommendation is safe, simple and well adapted to your trip.',
      images: ['assets/legacy/conchal.jpg'],
      questions: [
        { id: 'dive_group', label: 'How many people want to dive?', type: 'number' },
        { id: 'dive_experience', label: 'What is the experience level of the group?', type: 'choice', options: ['First time', 'Some experience', 'Experienced'] },
        { id: 'dive_date', label: 'Which date do you have in mind?', type: 'dates', fields: ['Date'] }
      ]
    },
    {
      id: 'atv', number: '08', eyebrow: 'ATV · ADVENTURE', title: 'ATV tours',
      cardText: 'Check your details and the operator\'s participation requirements.',
      description: 'ATV tours are a fun way to leave the beach and explore the terrain around Tamarindo. Before recommending a route, we confirm how many people want to drive, how many would be passengers and what ages are involved so the operator can validate participation requirements.',
      images: ['assets/legacy/rincon.jpg'],
      questions: [
        { id: 'drivers', label: 'How many people want to drive?', type: 'number' },
        { id: 'passengers', label: 'How many would be passengers?', type: 'number' },
        { id: 'driver_ages', label: 'What ages are the drivers?', type: 'text', placeholder: 'e.g. 24, 31 and 42' },
        { id: 'licenses', label: 'Do the drivers have a valid driver\'s license?', type: 'choice', options: ['All of them', 'Some of them', 'None of them'] }
      ]
    },
    {
      id: 'retiros', number: '09', eyebrow: 'RETREATS · GROUP GETAWAYS', title: 'Retreats',
      cardText: 'Explore hosted group trips with a planned program and stay.',
      description: 'Retreats combine surf, rest, movement and community in one trip. We help match the style of the retreat, your surf level and your accommodation preferences so the recommendation fits the pace and needs of the whole group.',
      images: ['assets/legacy/ocotal.jpg', 'assets/legacy/IMG_1269.jpeg', 'assets/legacy/Restaurante_1.jpg'],
      questions: [
        { id: 'retreat_choice', label: 'Which retreat are you interested in?', type: 'choice', options: ['Select a retreat', 'I want recommendations'] },
        { id: 'retreat_surf_level', label: 'If the retreat includes surf: what is your level?', type: 'choice', options: ['First time', 'Beginner', 'Intermediate', 'Advanced'], optional: true },
        { id: 'room_type', label: 'What room type do you prefer?', type: 'choice', options: ['Shared', 'Private', 'Either'], optional: true },
        { id: 'retreat_needs', label: 'Any food or lodging needs we should keep in mind?', type: 'textarea', placeholder: 'Optional', optional: true }
      ]
    }
  ];

  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;' }[char]));
  const getService = () => { const id = new URLSearchParams(location.search).get('service'); return services.find(item => item.id === id) || services[0]; };
  const inputId = (service, question) => `${service.id}-${question.id}`;
  function renderQuestion(service, question) {
    const id = inputId(service, question);
    const optional = question.optional ? '<span class="detail-optional">Opcional</span>' : '';
    if (question.type === 'dates') return `<fieldset class="detail-question"><legend>${esc(question.label)} ${optional}</legend><div class="detail-date-grid">${question.fields.map(field => `<label for="${id}-${field}">${esc(field)}<input id="${id}-${field}" name="${question.id}-${field}" type="date" ${question.optional ? '' : 'required'} /></label>`).join('')}</div></fieldset>`;
    if (question.type === 'choice' || question.type === 'multi') return `<fieldset class="detail-question"><legend>${esc(question.label)} ${optional}</legend><div class="detail-options">${question.options.map((option, index) => `<label class="detail-option"><input type="${question.type === 'multi' ? 'checkbox' : 'radio'}" name="${question.id}" value="${esc(option)}" ${question.type === 'choice' && index === 0 && !question.optional ? 'required' : ''} /><span>${esc(option)}</span></label>`).join('')}</div></fieldset>`;
    const type = question.type === 'number' ? 'number' : question.type === 'money' ? 'text' : 'text';
    return `<label class="detail-question detail-field" for="${id}"><span>${esc(question.label)} ${optional}</span><${question.type === 'textarea' ? 'textarea' : 'input'} id="${id}" name="${question.id}" type="${type}" placeholder="${esc(question.placeholder || '')}" ${question.optional ? '' : 'required'}></${question.type === 'textarea' ? 'textarea' : 'input'}></label>`;
  }
  function render(service) {
    document.title = `${service.title} · WavePoint`;
    document.getElementById('serviceDetailRoot').innerHTML = `<section class="detail-hero" style="--detail-hero:url('${service.images[0]}')"><div class="container detail-hero-content"><p class="service-page-kicker">${esc(service.eyebrow)}</p><p class="detail-index">${service.number} / 11</p><h1>${esc(service.title)}</h1><p class="detail-hero-intro">${esc(service.cardText)}</p></div></section><section class="detail-content"><div class="container detail-layout"><article class="detail-story"><p class="service-page-kicker">LA EXPERIENCIA</p><h2>Un plan pensado para tu viaje.</h2><p>${esc(service.description)}</p><div class="detail-gallery">${service.images.map((image, index) => `<img src="${image}" alt="${esc(service.title)} · imagen ${index + 1}" loading="lazy" />`).join('')}</div></article><aside class="detail-request"><div class="detail-request-head"><p class="service-page-kicker">BOOK REQUEST</p><h2>Contanos qué estás buscando.</h2><p>Respondé estas preguntas y abrí WhatsApp con una solicitud ordenada para el encargado.</p></div><form id="serviceRequestForm" novalidate>${service.questions.map(question => renderQuestion(service, question)).join('')}<label class="detail-question detail-field" for="request-name"><span>¿Cómo te llamás? <span class="detail-optional">Opcional</span></span><input id="request-name" name="request-name" type="text" placeholder="Tu nombre" /></label><label class="detail-question detail-field" for="request-contact"><span>¿Hay algo más que quieras contarnos? <span class="detail-optional">Opcional</span></span><textarea id="request-contact" name="request-contact" placeholder="Fechas, cantidad de personas u otra información útil"></textarea></label><button class="detail-submit" type="submit">Armar solicitud en WhatsApp ↗</button><p class="detail-form-note">Se abrirá WhatsApp con tus respuestas listas para revisar antes de enviar.</p><p class="detail-error" id="detailError" role="alert"></p></form></aside></div></section>`;
    document.getElementById('serviceRequestForm').addEventListener('submit', event => submitRequest(event, service));
  }
  function submitRequest(event, service) {
    event.preventDefault();
    const form = event.currentTarget;
    const error = document.getElementById('detailError');
    if (!form.checkValidity()) { form.reportValidity(); error.textContent = 'Completá las respuestas necesarias para continuar.'; return; }
    const lines = [`Hola WavePoint, quiero consultar por: ${service.title}`, ''];
    service.questions.forEach(question => {
      const values = [...form.querySelectorAll(`[name="${question.id}"], [name^="${question.id}-"]`)].map(input => input.type === 'checkbox' || input.type === 'radio' ? (input.checked ? input.value : '') : input.value).filter(Boolean);
      if (values.length) lines.push(`${question.label} ${values.join(' / ')}`);
    });
    const name = form.elements['request-name']?.value.trim();
    const extra = form.elements['request-contact']?.value.trim();
    if (name) lines.push(`Nombre: ${name}`);
    if (extra) lines.push(`Información adicional: ${extra}`);
    lines.push('', 'Gracias. Quedo atento/a.');
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
  }
  render(getService());
})();
