(() => {
  const WHATSAPP = '543517397525';
  const services = [
    {
      id: 'alojamiento-experiencias', number: '01', eyebrow: 'ESTADÍAS · EXPERIENCIAS', title: 'Alojamiento y experiencias',
      cardText: 'Armá una estadía a tu medida: dónde dormir, qué surfear y qué sumar a tu viaje.',
      description: 'Tamarindo se disfruta mejor cuando el alojamiento y los planes tienen el mismo ritmo que tu viaje. Te ayudamos a encontrar una opción cómoda para tu grupo y a combinarla con experiencias de mar, bienestar y aventura. Contanos tus fechas, el tipo de espacio que imaginás y qué te gustaría vivir; WavePoint consulta disponibilidad con aliados locales y te devuelve una propuesta clara para decidir sin perder tiempo.',
      images: ['assets/legacy/OTAMA_VIEW_30.jpg', 'assets/legacy/Piscina_16.jpg', 'assets/legacy/Playa_23.jpg'],
      questions: [
        { id: 'stay_dates', label: '¿Cuándo quieres alojarte?', type: 'dates', fields: ['Llegada', 'Salida'] },
        { id: 'accommodation_type', label: '¿Qué tipo de alojamiento prefieres?', type: 'choice', options: ['Habitación', 'Casa completa', 'Quiero recomendaciones'] },
        { id: 'nightly_budget', label: '¿Cuál es tu presupuesto aproximado por noche para todo el grupo?', type: 'money', optional: true },
        { id: 'experiences', label: '¿Qué experiencias te gustaría sumar?', type: 'multi', options: ['Surf', 'Surf coaching', 'Roca Bruja', 'Snorkel', 'Catamarán', 'Yoga', 'ATV', 'Todavía no lo sé'] }
      ]
    },
    {
      id: 'clases-de-surf', number: '02', eyebrow: 'AGUA · APRENDIZAJE', title: 'Clases de surf',
      cardText: 'Una primera ola, mejores bases o una habilidad puntual con instructores locales.',
      description: 'Las clases están pensadas para que cada persona entre al agua con una guía simple, segura y cercana. Adaptamos la sesión al nivel del grupo, al estado del mar y a lo que querés conseguir: desde probar el surf por primera vez hasta ordenar tus bases y ganar confianza. También te orientamos con la tabla adecuada si todavía no tenés equipo.',
      images: ['assets/legacy/DSC02807.jpg', 'assets/legacy/playa-ventanas.jpg', 'assets/legacy/surfskate.png'],
      questions: [
        { id: 'surf_level', label: '¿Cuál es tu nivel de surf?', type: 'choice', options: ['Primera vez', 'Principiante', 'Intermedio', 'Avanzado'] },
        { id: 'lesson_goal', label: '¿Qué te gustaría conseguir con la clase?', type: 'choice', options: ['Probar el surf', 'Mejorar las bases', 'Trabajar una habilidad específica'] },
        { id: 'board_need', label: '¿Necesitarás una tabla?', type: 'choice', options: ['Sí', 'No, llevo la mía', 'Necesito asesoramiento'] }
      ]
    },
    {
      id: 'surf-coaching', number: '03', eyebrow: 'ENTRENAMIENTO · PROGRESO', title: 'Surf coaching',
      cardText: 'Observación personalizada, objetivos concretos y herramientas para progresar en el agua.',
      description: 'El coaching empieza antes de entrar al agua: entendemos qué sentís que querés mejorar y armamos una sesión con foco. Durante la práctica observamos tu toma de decisiones, técnica y relación con la ola; después transformamos esas observaciones en indicaciones concretas. Podés sumar fotografías o videoanálisis para volver sobre la sesión y ver tu progreso con más claridad.',
      images: ['assets/legacy/_GSK8664.jpg', 'assets/legacy/DSC_0258-5.jpeg', 'assets/legacy/FC0F6C9F-D8FA-446B-89A7-AC3D195117B1.jpeg'],
      questions: [
        { id: 'current_surf_level', label: '¿Cuál es tu nivel actual de surf?', type: 'choice', options: ['Principiante', 'Intermedio', 'Avanzado'] },
        { id: 'improvement_goal', label: '¿Qué te gustaría mejorar?', type: 'textarea', placeholder: 'Cuéntanos brevemente.' },
        { id: 'coaching_package', label: '¿Qué te gustaría incluir?', type: 'choice', options: ['Solo coaching', 'Coaching y fotografías', 'Coaching y videoanálisis', 'Coaching, fotografías y videoanálisis'] },
        { id: 'own_board', label: '¿Traerás tu propia tabla?', type: 'choice', options: ['Sí', 'No'] }
      ]
    },
    {
      id: 'roca-bruja', number: '04', eyebrow: 'SURF TRIP · AVENTURA', title: 'Surf trip a Roca Bruja',
      cardText: 'Planificá una salida a uno de los spots más especiales de la costa con logística local.',
      description: 'Roca Bruja exige mirar el mar, la logística y el grupo como un todo. Coordinamos la consulta con información sobre niveles, tablas y flexibilidad de fechas para que el operador pueda evaluar la salida de forma responsable. Las condiciones pueden pedir cambios: por eso este primer paso nos ayuda a buscar una ventana que tenga sentido para quienes viajan y para el océano.',
      images: ['assets/legacy/bruja.jpg', 'assets/legacy/avellanas.jpg', 'assets/legacy/rincon.jpg'],
      questions: [
        { id: 'group_levels', label: '¿Qué nivel de surf tienen los participantes?', type: 'textarea', placeholder: 'Indica el nivel de cada uno.' },
        { id: 'own_boards', label: '¿Todos llevarán su propia tabla?', type: 'choice', options: ['Sí', 'No'] },
        { id: 'board_count', label: 'Si alguien necesita tabla, ¿cuántas necesitan?', type: 'number', optional: true },
        { id: 'date_flexibility', label: '¿Pueden cambiar de fecha si las condiciones del mar lo requieren?', type: 'choice', options: ['Sí', 'No'] }
      ]
    },
    {
      id: 'snorkel-catamaran', number: '05', eyebrow: 'MAR · NAVEGACIÓN', title: 'Snorkel y catamarán',
      cardText: 'Elegí entre explorar bajo el agua, navegar la costa o combinar las dos experiencias.',
      description: 'Una salida al mar puede ser tranquila, exploradora o un poco de ambas. Te ayudamos a comparar tour de snorkel, paseo en catamarán y opciones combinadas según disponibilidad. Para cuidar la experiencia de todo el grupo, consultamos cantidad de personas, comodidad nadando y cualquier necesidad alimentaria antes de acercarte una opción compartida o privada.',
      images: ['assets/legacy/conchal.jpg', 'assets/legacy/catalinas.jpg', 'assets/legacy/B_03.jpg'],
      questions: [
        { id: 'sea_experience', label: '¿Qué experiencia te interesa?', type: 'choice', options: ['Tour de snorkel', 'Paseo en catamarán', 'Catamarán con snorkel, si está disponible'] },
        { id: 'departure_type', label: '¿Prefieres una salida compartida o privada?', type: 'choice', options: ['Compartida', 'Privada', 'Quiero comparar ambas'] },
        { id: 'snorkel_people', label: '¿Cuántas personas quieren hacer snorkel?', type: 'number', optional: true },
        { id: 'swimming_comfort', label: '¿Todas se sienten cómodas nadando en el mar?', type: 'choice', options: ['Sí', 'No', 'Quisiera consultar antes'], optional: true },
        { id: 'dietary_needs', label: '¿Hay alergias alimentarias o necesidades dietéticas que debamos comunicar?', type: 'textarea', placeholder: 'Opcional', optional: true }
      ]
    },
    {
      id: 'yoga', number: '06', eyebrow: 'BIENESTAR · PAUSA', title: 'Yoga',
      cardText: 'Encontrá una práctica que acompañe tu viaje, desde una primera vez hasta una sesión profunda.',
      description: 'El yoga puede ser una forma de despertar el cuerpo, bajar el ritmo después del surf o regalarte una pausa durante el viaje. Buscamos la modalidad y el formato que mejor encajen con tu grupo: una clase compartida, una sesión privada o una práctica adaptada a una experiencia previa y a necesidades puntuales.',
      images: ['assets/legacy/OTAMA_HEAL_21.jpg', 'assets/legacy/IMG_1270.jpeg', 'assets/legacy/IMG_1271.jpeg'],
      questions: [
        { id: 'yoga_experience', label: '¿Qué experiencia tienes con el yoga?', type: 'choice', options: ['Primera vez', 'Algo de experiencia', 'Practico regularmente'] },
        { id: 'yoga_format', label: '¿Prefieres una clase grupal o privada?', type: 'choice', options: ['Grupal', 'Privada', 'Cualquiera de las dos'] },
        { id: 'yoga_notes', label: '¿Hay algo que quieras que el instructor tenga en cuenta para adaptar la sesión?', type: 'textarea', placeholder: 'Opcional', optional: true }
      ]
    },
    {
      id: 'atv', number: '07', eyebrow: 'TIERRA · AVENTURA', title: 'Tours en cuatriciclo — ATV',
      cardText: 'Recorré los caminos de Guanacaste con una consulta previa sobre participantes y requisitos.',
      description: 'Los tours en ATV son una manera intensa y divertida de salir de la playa y conocer el paisaje alrededor de Tamarindo. Antes de recomendarte una opción, necesitamos entender cuántas personas quieren conducir, quiénes irían como acompañantes y qué edades tienen los conductores. WavePoint consulta estos datos con el operador para confirmar los requisitos de participación antes de avanzar.',
      images: ['assets/legacy/Aerial_02.jpg', 'assets/legacy/lasbaulas.jpg', 'assets/legacy/danta1.jpg'],
      questions: [
        { id: 'drivers', label: '¿Cuántas personas quieren conducir?', type: 'number' },
        { id: 'passengers', label: '¿Cuántas irían como acompañantes?', type: 'number' },
        { id: 'driver_ages', label: '¿Qué edades tienen quienes quieren conducir?', type: 'text', placeholder: 'Ej.: 24, 31 y 42' },
        { id: 'licenses', label: '¿Quienes quieren conducir tienen licencia de conducir vigente?', type: 'choice', options: ['Todos', 'Algunos', 'Ninguno'] }
      ]
    },
    {
      id: 'retiros', number: '08', eyebrow: 'RETIROS · EXPERIENCIAS', title: 'Retiros',
      cardText: 'Elegí una pausa con intención: surf, descanso, movimiento y comunidad en un mismo viaje.',
      description: 'Un retiro es una experiencia con su propio ritmo. Te ayudamos a encontrar una propuesta que combine las actividades que te interesan con el tipo de habitación y acompañamiento que necesitás. Si incluye surf, saber tu nivel nos permite consultar mejor; y si tenés necesidades de alimentación o alojamiento, podés compartirlas desde el inicio para buscar una opción que te haga sentir cómodo.',
      images: ['assets/legacy/ocotal.jpg', 'assets/legacy/IMG_1269.jpeg', 'assets/legacy/Restaurante_1.jpg'],
      questions: [
        { id: 'retreat_choice', label: '¿Qué retiro te interesa?', type: 'choice', options: ['Selecciona un retiro', 'Quiero recomendaciones'] },
        { id: 'retreat_surf_level', label: 'Si el retiro incluye surf: ¿cuál es tu nivel?', type: 'choice', options: ['Primera vez', 'Principiante', 'Intermedio', 'Avanzado'], optional: true },
        { id: 'room_type', label: '¿Qué tipo de habitación prefieres?', type: 'choice', options: ['Compartida', 'Privada', 'Cualquiera de las dos'], optional: true },
        { id: 'retreat_needs', label: '¿Hay alguna necesidad de alimentación o alojamiento que debamos tener en cuenta?', type: 'textarea', placeholder: 'Opcional', optional: true }
      ]
    },
    {
      id: 'fotos-surf', number: '09', eyebrow: 'SURF · FOTOGRAFÍA', title: 'Fotos de surf',
      cardText: 'Llevate un recuerdo de tu sesión con fotografías tomadas desde la playa.',
      description: 'Capturá tus mejores momentos en el agua con fotografías profesionales desde la orilla. Una forma de volver a mirar tus maniobras y llevarte imágenes de la sesión.',
      images: ['assets/photo-service.jpg', 'assets/after-photos.jpg', 'assets/legacy/fotodesurf.jpg'],
      questions: [
        { id: 'surf_photo_date', label: '¿Qué día será la sesión?', type: 'dates', fields: ['Fecha'] },
        { id: 'surf_photo_group', label: '¿Cuántas personas quieren fotografiarse?', type: 'number' },
        { id: 'surf_photo_level', label: '¿Qué nivel de surf tienen?', type: 'choice', options: ['Primera vez', 'Principiante', 'Intermedio', 'Avanzado'] }
      ]
    },
    {
      id: 'fotografia-acuatica', number: '10', eyebrow: 'SURF · FOTOGRAFÍA EN EL AGUA', title: 'Fotografía acuática de surf',
      cardText: 'Imágenes de surf desde dentro del agua, en plena sesión.',
      description: 'Viví una sesión fotográfica dentro del agua. Fotógrafos especializados se sumergen para capturar la experiencia desde una perspectiva cercana a la ola.',
      images: ['assets/legacy/fotoacuatica.jpg', 'assets/capitan.jpg'],
      questions: [
        { id: 'water_photo_date', label: '¿Qué día será la sesión?', type: 'dates', fields: ['Fecha'] },
        { id: 'water_photo_group', label: '¿Cuántas personas participarían?', type: 'number' },
        { id: 'water_photo_level', label: '¿Cuál es tu nivel de surf?', type: 'choice', options: ['Principiante', 'Intermedio', 'Avanzado'] }
      ]
    },
    {
      id: 'surfskate', number: '11', eyebrow: 'SURF · ENTRENAMIENTO EN TIERRA', title: 'Clases de surfskate',
      cardText: 'Practicá giros, estabilidad y fluidez fuera del agua.',
      description: 'Mejorá tu estilo y técnica en tierra firme con sesiones de surfskate. Un entrenamiento para trabajar giros, estabilidad y fluidez antes de entrar al agua, para distintas edades y niveles.',
      images: ['assets/legacy/surfskate.png'],
      questions: [
        { id: 'surfskate_level', label: '¿Qué experiencia tienes con el surfskate?', type: 'choice', options: ['Primera vez', 'Algo de experiencia', 'Practico regularmente'] },
        { id: 'surfskate_goal', label: '¿Qué te gustaría trabajar?', type: 'textarea', placeholder: 'Opcional', optional: true },
        { id: 'surfskate_own_board', label: '¿Tienes surfskate propio?', type: 'choice', options: ['Sí', 'No', 'Quiero consultar'], optional: true }
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
