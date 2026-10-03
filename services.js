(() => {
  const WHATSAPP = '543517397525';
  const services = [
    {
      id: 'alojamiento-experiencias', number: '01', eyebrow: 'ESTADÍAS · HOTELES', title: 'Stays and Hotels',
      cardText: 'Hoteles y alojamientos frente al mar para cada tipo de viaje.',
      description: 'Encontrá una opción de alojamiento que se adapte a tu presupuesto, el tamaño de tu grupo y el ritmo de tu estadía en Tamarindo. Estas tarifas están expresadas en dólares estadounidenses (USD), por noche. WavePoint consulta disponibilidad y condiciones con el alojamiento antes de acercarte una propuesta.',
      images: ['assets/legacy/B_03.jpg', 'assets/legacy/Playa_23.jpg', 'assets/capitan.jpg'],
      accommodationOptions: [
        {
          category: 'OPCIÓN ECONÓMICA', name: 'Hotel Tamalodge',
          price: 'USD 50', priceNote: 'por habitación · por noche',
          summary: 'Una habitación privada con baño privado para una estadía simple y funcional.',
          images: ['assets/legacy/B_03.jpg', 'assets/legacy/Piscina_16.jpg'],
          imageAlt: 'Alojamiento tropical con jardín y piscina',
          details: ['Habitación privada con baño privado.'],
          amenities: ['Piscina', 'Cocina compartida', 'WiFi', 'Mesa de ping-pong']
        },
        {
          category: 'OPCIÓN MEDIA', name: 'Casa Aura',
          price: 'USD 80–210', priceNote: 'por unidad · por noche',
          summary: 'Alojamiento frente al mar con habitaciones, apartamentos y desayuno incluido según la unidad.',
          images: ['assets/legacy/OTAMA_VIEW_30.jpg', 'assets/legacy/OTAMA_GAST_102.jpg', 'assets/legacy/Playa_23.jpg'],
          imageAlt: 'Alojamiento frente al mar con piscina y espacios interiores',
          details: [
            'Habitación doble — USD 80 · baño privado · desayuno incluido · 1 habitación.',
            'Habitación cuádruple — USD 120 · una cama matrimonial y una litera · baño privado · desayuno incluido · 3 habitaciones.',
            'Habitación cuádruple con terraza — USD 130 · dos camas matrimoniales · baño privado · terraza · desayuno incluido · 1 habitación.',
            'Apartamento completo — USD 210 · capacidad para 8 personas · dos habitaciones con camas matrimoniales y literas · un baño · living y cocina · 2 apartamentos.'
          ],
          amenities: ['Frente al mar', 'Desayuno incluido según la unidad']
        },
        {
          category: 'OPCIÓN GRUPAL', name: 'Casa Madera',
          price: 'USD 250–500', priceNote: 'por noche · hasta 10 personas',
          summary: 'Una casa frente al mar para grupos, con tarifas que cambian según la temporada.',
          images: ['assets/ally-casa.jpg', 'assets/legacy/Playa_23.jpg', 'assets/legacy/B_03.jpg'],
          imageAlt: 'Casa de alojamiento frente a la playa',
          details: [
            '24 de diciembre al 2 de enero: USD 500 · estadía mínima de 5 noches.',
            '2 de enero al 2 de febrero: USD 400 · estadía mínima de 5 noches.',
            '3 de febrero al 30 de abril: USD 350 · estadía mínima de 3 noches · excepto Semana Santa.',
            '1 al 15 de julio: USD 350 · estadía mínima de 3 noches.',
            '1 de octubre al 30 de noviembre: USD 250 · estadía mínima de 2 noches.',
            'Resto de las fechas: USD 300 · estadía mínima de 2 noches.'
          ],
          amenities: ['Frente al mar', 'Tarifas para hasta 10 personas, incluidos adultos y niños', 'Máximo de 5 personas adicionales · capacidad total de 15 personas', 'Semana Santa: consultar tarifas especiales']
        },
        {
          category: 'OPCIÓN DELUXE', name: 'Capitán Suizo',
          price: 'USD 600', priceNote: 'por noche · consultar disponibilidad',
          summary: 'Hotel frente a la playa con servicios de bienestar, piscina y espacios para disfrutar la estadía.',
          images: ['assets/capitan.jpg', 'assets/ally-capitan.jpg', 'assets/legacy/Piscina_16.jpg'],
          imageAlt: 'Playa frente a Capitán Suizo',
          details: ['Tarifa: USD 600 por noche.', 'Consultar disponibilidad.'],
          amenities: ['Hotel ubicado frente a la playa', 'Piscina al aire libre', 'Spa y servicio de masajes', 'Jardines', 'Salas de reuniones', 'Tiendas', 'Estacionamiento privado', 'WiFi en el centro de negocios']
        }
      ],
      questions: [
        { id: 'stay_dates', label: '¿Cuándo quieres alojarte?', type: 'dates', fields: ['Llegada', 'Salida'] },
        { id: 'accommodation_type', label: '¿Qué alojamiento te interesa?', type: 'choice', options: ['Hotel Tamalodge', 'Casa Aura', 'Casa Madera', 'Capitán Suizo', 'Quiero recomendaciones'] },
        { id: 'group_size', label: '¿Cuántas personas viajarían?', type: 'number' },
        { id: 'nightly_budget', label: '¿Cuál es tu presupuesto aproximado por noche para todo el grupo?', type: 'money', optional: true },
        { id: 'experiences', label: '¿Qué experiencias te gustaría sumar?', type: 'multi', options: ['Surf', 'Surf coaching', 'Roca Bruja', 'Snorkel', 'Catamarán', 'Yoga', 'ATV', 'Todavía no lo sé'] }
      ]
    },
    {
      id: 'clases-de-surf', number: '02', eyebrow: 'SURF · LESSONS', title: 'Ready to Surf?',
      cardText: 'Tell us your level and what you’d like to learn. We’ll find a lesson that fits.',
      description: 'Las clases están pensadas para que cada persona entre al agua con una guía simple, segura y cercana. Adaptamos la sesión al nivel del grupo, al estado del mar y a lo que querés conseguir: desde probar el surf por primera vez hasta ordenar tus bases y ganar confianza. También te orientamos con la tabla adecuada si todavía no tenés equipo.',
      images: ['assets/legacy/DSC02807.jpg', 'assets/legacy/clase-surf.jpeg', 'assets/legacy/A7833108-3E71-4EAC-830C-057BD7B5B0BD.jpeg'],
      questions: [
        { id: 'surf_level', label: '¿Cuál es tu nivel de surf?', type: 'choice', options: ['Primera vez', 'Principiante', 'Intermedio', 'Avanzado'] },
        { id: 'lesson_goal', label: '¿Qué te gustaría aprender?', type: 'choice', options: ['Probar el surf', 'Mejorar las bases', 'Trabajar una habilidad específica'] },
        { id: 'group_size', label: '¿Cuántos son?', type: 'number' },
        { id: 'origin', label: '¿De dónde nos visitan?', type: 'text', placeholder: 'Ciudad y país' },
        { id: 'preferred_fruit', label: '¿Qué fruta prefieren comer después de la clase?', type: 'multi', options: ['Piña', 'Bananas', 'Mangos', 'Cocos'] },
        { id: 'preferred_schedule', label: '¿Qué horarios prefieren?', type: 'choice', options: ['AM', 'Medio día', 'Tarde'] },
        { id: 'board_need', label: '¿Necesitarán una tabla?', type: 'choice', options: ['Sí', 'No, llevamos la nuestra', 'Necesitamos asesoramiento'] }
      ],
      en: {
        description: 'Lessons are designed so everyone gets in the water with simple, safe and friendly guidance. We adapt the session to your group’s level, the sea conditions and what you want to achieve: from trying surfing for the first time to building your basics and gaining confidence. We’ll also help you choose the right board if you don’t have equipment yet.',
        questions: {
          surf_level: { label: 'What’s your surfing level?', options: ['First time', 'Beginner', 'Intermediate', 'Advanced'] },
          lesson_goal: { label: 'What would you like to learn?', options: ['Try surfing', 'Improve the basics', 'Work on a specific skill'] },
          group_size: { label: 'How many of you are there?' },
          origin: { label: 'Where are you visiting from?', placeholder: 'City and country' },
          preferred_fruit: { label: 'Which fruit would you like to eat after the lesson?', options: ['Pineapple', 'Bananas', 'Mangoes', 'Coconuts'] },
          preferred_schedule: { label: 'What times do you prefer?', options: ['AM', 'Midday', 'Afternoon'] },
          board_need: { label: 'Will you need a board?', options: ['Yes', 'No, we bring our own', 'We need advice'] }
        }
      }
    },
    {
      id: 'surf-coaching' , number: '03', eyebrow: 'ENTRENAMIENTO · PROGRESO', title: 'Surf coaching',
      cardText: 'Entrenamiento personalizado con video-análisis y estrategias para llevar tu surf al siguiente nivel.',
      description: 'Llevá tu surf al siguiente nivel con un entrenamiento personalizado. Análisis de técnica, video-coaching y estrategias para mejorar tu rendimiento en el agua con la ayuda de entrenadores expertos.',
includes: ['Sesión de video de tu sesión', 'Análisis con un instructor personalizado en tu idioma', 'Video de recuerdo'],
      images: ['assets/surf-coaching-cover.jpg', 'assets/surf-coaching-detail.jpg'],
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
      images: ['assets/legacy/bruja.jpg', 'assets/legacy/avellanas.jpg'],
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
      images: ['assets/legacy/conchal.jpg', 'assets/legacy/catalinas.jpg'],
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
      images: ['assets/legacy/OTAMA_HEAL_21.jpg'],
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
      images: ['assets/legacy/rincon.jpg'],
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
      id: 'buceo', number: '09', eyebrow: 'MAR · EXPLORACIÓN', title: 'Buceo',
      cardText: 'Discover Tamarindo underwater with a local diving experience.',
      description: 'Conocé las opciones de buceo disponibles en Tamarindo y consultá con el operador local cuál experiencia se adapta mejor a tu grupo y a las condiciones del día.',
      images: ['assets/surf-service.jpg'],
      questions: [
        { id: 'dive_experience', label: '¿Qué experiencia de buceo te interesa?', type: 'choice', options: ['Quiero recomendaciones', 'Buceo recreativo', 'Quiero consultar disponibilidad'] },
        { id: 'dive_level', label: '¿Qué experiencia tienes buceando?', type: 'choice', options: ['Primera vez', 'Principiante', 'Con experiencia'], optional: true },
        { id: 'dive_people', label: '¿Cuántas personas participarían?', type: 'number' }
      ]
    },
    {
      id: 'pack-ajustable', number: '10', eyebrow: 'DIFERENCIADOS · EXPERIENCIA A MEDIDA', title: 'Pack ajustable',
      cardText: 'Build your own experience by combining the activities that fit your trip.',
      description: 'Armá tu propia experiencia combinando alojamiento, surf, bienestar y aventura según el ritmo de tu viaje. Contanos qué te interesa y WavePoint consulta una propuesta ajustada a tus fechas, tu grupo y tus prioridades.',
      images: ['assets/after-guide.jpg'],
      questions: [
        { id: 'pack_activities', label: '¿Qué te gustaría combinar en tu experiencia?', type: 'multi', options: ['Alojamiento', 'Surf lessons', 'Surf coaching', 'Yoga', 'Witch’s Rock surf trip', 'Snorkeling & catamaran', 'Buceo', 'ATV tours', 'Retreats'] },
        { id: 'pack_dates', label: '¿Cuándo sería tu viaje?', type: 'dates', fields: ['Llegada', 'Salida'], optional: true },
        { id: 'pack_notes', label: '¿Qué debería tener en cuenta el operador?', type: 'textarea', placeholder: 'Cantidad de personas, preferencias o necesidades especiales.', optional: true }
      ]
    }
  ];

  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;' }[char]));
  const getService = () => { const id = new URLSearchParams(location.search).get('service'); return services.find(item => item.id === id) || services[0]; };
  let lang = (() => { try { return localStorage.getItem('wavepoint-lang') === 'en' ? 'en' : 'es'; } catch (error) { return 'es'; } })();
  const isSurfEn = service => lang === 'en' && service.id === 'clases-de-surf';
  const localizeService = service => {
    if (!isSurfEn(service) || !service.en) return service;
    return { ...service, description: service.en.description, questions: service.questions.map(question => ({ ...question, ...(service.en.questions[question.id] || {}) })) };
  };
  const FORM_UI = {
    es: {
      optional: 'Opcional',
      requestTitle: 'Contanos qué estás buscando.',
      requestText: 'Respondé estas preguntas y abrí WhatsApp con una solicitud ordenada para el encargado.',
      nameLabel: '¿Cómo te llamás?', namePlaceholder: 'Tu nombre',
      extraLabel: '¿Hay algo más que quieras contarnos?', extraPlaceholder: 'Fechas, cantidad de personas u otra información útil',
      submit: 'Armar solicitud en WhatsApp ↗',
      note: 'Se abrirá WhatsApp con tus respuestas listas para revisar antes de enviar.',
      error: 'Completá las respuestas necesarias para continuar.',
      waIntro: 'Hola WavePoint, quiero consultar por:', waName: 'Nombre:', waExtra: 'Información adicional:', waThanks: 'Gracias. Quedo atento/a.',
      galleryAlt: 'Clases de surf · imagen',
      surveyHeading: 'Llena nuestra pequeña encuesta',
      surveyText: 'Con estas respuestas podemos preparar una consulta más clara para el instructor y hacer que la clase se sienta hecha para ustedes.',
      surveyOpen: 'Completar encuesta',
      modalTitle: 'Tu clase empieza acá.',
      modalText: 'Completá la encuesta y prepararemos una consulta a medida para tu grupo.',
      modalClose: 'Cerrar encuesta'
    },
    en: {
      optional: 'Optional',
      requestTitle: 'Tell us what you’re looking for.',
      requestText: 'Answer these questions and open WhatsApp with an organized request for the person in charge.',
      nameLabel: 'What’s your name?', namePlaceholder: 'Your name',
      extraLabel: 'Anything else you’d like to tell us?', extraPlaceholder: 'Dates, number of people or any other useful information',
      submit: 'Build request on WhatsApp ↗',
      note: 'WhatsApp will open with your answers ready to review before sending.',
      error: 'Please complete the required answers to continue.',
      waIntro: 'Hi WavePoint, I’d like to ask about:', waName: 'Name:', waExtra: 'Additional information:', waThanks: 'Thank you. Looking forward to your reply.',
      galleryAlt: 'Surf lessons · image',
      surveyHeading: 'Fill out our quick survey',
      surveyText: 'With these answers we can prepare a clearer request for the instructor and make the lesson feel made for you.',
      surveyOpen: 'Complete the survey',
      modalTitle: 'Your lesson starts here.',
      modalText: 'Complete the survey and we’ll prepare a request tailored to your group.',
      modalClose: 'Close survey'
    }
  };
  const uiFor = service => isSurfEn(service) ? FORM_UI.en : FORM_UI.es;
  const inputId = (service, question) => `${service.id}-${question.id}`;
  const PACK_SERVICE_CARDS = {
    'Alojamiento': { title: 'Stay & experience', detail: 'Un lugar cómodo y algo más para vivir Tamarindo.', image: 'assets/legacy/OTAMA_VIEW_30.jpg' },
    'Surf lessons': { title: 'Surf lessons', detail: 'Tu primera ola o el siguiente paso.', image: 'assets/legacy/DSC02807.jpg' },
    'Surf coaching': { title: 'Surf coaching', detail: 'Entrenamiento personalizado con video-análisis.', image: 'assets/surf-coaching-cover.jpg' },
    'Yoga': { title: 'Yoga', detail: 'Bajá el ritmo y encontrá tu pausa.', image: 'assets/legacy/OTAMA_HEAL_21.jpg' },
    'Witch’s Rock surf trip': { title: 'Witch’s Rock', detail: 'Una salida guiada a un spot inolvidable.', image: 'assets/legacy/bruja.jpg' },
    'Snorkeling & catamaran': { title: 'Snorkeling & catamaran', detail: 'Mar, navegación y tiempo para explorar.', image: 'assets/legacy/conchal.jpg' },
    'Buceo': { title: 'Diving', detail: 'Descubrí el mundo bajo la superficie.', image: 'assets/surf-service.jpg' },
    'ATV tours': { title: 'ATV tours', detail: 'Aventura y caminos de Guanacaste.', image: 'assets/legacy/rincon.jpg' },
    'Retreats': { title: 'Retreats', detail: 'Un viaje con programa, descanso y comunidad.', image: 'assets/legacy/ocotal.jpg' }
  };
  function renderQuestion(service, question) {
    const id = inputId(service, question);
    const optional = question.optional ? `<span class="detail-optional">${uiFor(service).optional}</span>` : '';
    if (service.id === 'pack-ajustable' && question.id === 'pack_activities') return `<fieldset class="detail-question pack-question"><legend>${esc(question.label)} ${optional}</legend><p class="pack-question-intro">Elegí dos o más tarjetas y armamos una experiencia a tu medida.</p><div class="pack-service-grid">${question.options.map(option => { const card = PACK_SERVICE_CARDS[option]; return `<label class="pack-service-card"><input type="checkbox" name="${question.id}" value="${esc(option)}" /><span class="pack-service-image"><img src="${card.image}" alt="" loading="lazy" /><span class="pack-service-check" aria-hidden="true">✓</span></span><span class="pack-service-copy"><strong>${esc(card.title)}</strong><small>${esc(card.detail)}</small></span></label>`; }).join('')}</div><p class="pack-selection-count" data-pack-selection>0 experiencias seleccionadas</p></fieldset>`;
    if (question.type === 'dates') return `<fieldset class="detail-question"><legend>${esc(question.label)} ${optional}</legend><div class="detail-date-grid">${question.fields.map(field => `<label for="${id}-${field}">${esc(field)}<input id="${id}-${field}" name="${question.id}-${field}" type="date" ${question.optional ? '' : 'required'} /></label>`).join('')}</div></fieldset>`;
    if (question.type === 'choice' || question.type === 'multi') return `<fieldset class="detail-question"><legend>${esc(question.label)} ${optional}</legend><div class="detail-options">${question.options.map((option, index) => `<label class="detail-option"><input type="${question.type === 'multi' ? 'checkbox' : 'radio'}" name="${question.id}" value="${esc(option)}" ${question.type === 'choice' && index === 0 && !question.optional ? 'required' : ''} /><span>${esc(option)}</span></label>`).join('')}</div></fieldset>`;
    const type = question.type === 'number' ? 'number' : question.type === 'money' ? 'text' : 'text';
    return `<label class="detail-question detail-field" for="${id}"><span>${esc(question.label)} ${optional}</span><${question.type === 'textarea' ? 'textarea' : 'input'} id="${id}" name="${question.id}" type="${type}" placeholder="${esc(question.placeholder || '')}" ${question.optional ? '' : 'required'}></${question.type === 'textarea' ? 'textarea' : 'input'}></label>`;
  }
  function renderAccommodationOption(option, index) {
    const gallery = option.images.map((image, imageIndex) => `<img src="${image}" alt="${esc(option.imageAlt)} · vista ${imageIndex + 1}" loading="lazy" />`).join('');
    const details = option.details.map(detail => `<li>${esc(detail)}</li>`).join('');
    const amenities = option.amenities.map(item => `<li>${esc(item)}</li>`).join('');
    return `<article class="accommodation-card accommodation-card-${index + 1}"><div class="accommodation-gallery">${gallery}</div><div class="accommodation-card-body"><p class="accommodation-category">${esc(option.category)}</p><div class="accommodation-card-title"><h3>${esc(option.name)}</h3><div class="accommodation-price"><strong>${esc(option.price)}</strong><span>${esc(option.priceNote)}</span></div></div><p class="accommodation-summary">${esc(option.summary)}</p><div class="accommodation-columns"><div><h4>Opciones y tarifas</h4><ul>${details}</ul></div><div><h4>Servicios y condiciones</h4><ul>${amenities}</ul></div></div></div></article>`;
  }
  function renderAccommodationStory(service) {
    return `<p class="service-page-kicker">ALOJAMIENTOS EN TAMARINDO</p><h2>Opciones de alojamiento en Tamarindo</h2><p>${esc(service.description)}</p><div class="accommodation-rate-note"><strong>Tarifas en USD</strong><span>Todas las tarifas están expresadas en dólares estadounidenses (USD), por noche.</span></div><div class="accommodation-grid">${service.accommodationOptions.map(renderAccommodationOption).join('')}</div>`;
  }
  function renderSurfLessonStory(service) {
    const ui = uiFor(service);
    const gallery = service.images.map((image, index) => `<img src="${image}" alt="${ui.galleryAlt} ${index + 1}" loading="lazy" />`).join('');
    return `<p class="service-page-kicker">SURF LESSONS · TAMARINDO</p><h2>Ready to surf?</h2><p class="surf-lesson-lead">Tell us your level and what you’d like to learn. We’ll find a lesson that fits.</p><p class="surf-lesson-description">${esc(service.description)}</p><div class="detail-gallery surf-lesson-gallery">${gallery}</div><div class="surf-lesson-survey-intro"><span class="surf-lesson-survey-mark">02</span><div><p class="service-page-kicker">SURF LESSONS · QUICK CHECK-IN</p><h3>${ui.surveyHeading}</h3><p>${ui.surveyText}</p><button class="surf-survey-open" type="button" data-open-surf-survey>${ui.surveyOpen} <span aria-hidden="true">↗</span></button></div></div>`;
  }
  function render(service) {
    const ui = uiFor(service);
    document.documentElement.lang = lang;
    document.title = `${service.title} · WavePoint`;
    const nameField = service.id === 'clases-de-surf'
      ? `<label class="detail-question detail-field" for="request-name"><span>${ui.nameLabel}</span><input id="request-name" name="request-name" type="text" placeholder="${ui.namePlaceholder}" required /></label>`
      : `<label class="detail-question detail-field" for="request-name"><span>${ui.nameLabel} <span class="detail-optional">${ui.optional}</span></span><input id="request-name" name="request-name" type="text" placeholder="${ui.namePlaceholder}" /></label>`;
    const formQuestions = service.id === 'clases-de-surf'
      ? `${nameField}${service.questions.map(question => renderQuestion(service, question)).join('')}`
      : `${service.questions.map(question => renderQuestion(service, question)).join('')}${nameField}`;
    const story = service.id === 'alojamiento-experiencias'
      ? renderAccommodationStory(service)
      : service.id === 'clases-de-surf'
        ? renderSurfLessonStory(service)
        : `<p class="service-page-kicker">LA EXPERIENCIA</p><h2>Un plan pensado para tu viaje.</h2><p>${esc(service.description)}</p>${service.includes ? `<div class="service-includes"><h3>Incluye</h3><ul>${service.includes.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>` : ''}<div class="detail-gallery">${service.images.map((image, index) => `<img src="${image}" alt="${esc(service.title)} · imagen ${index + 1}" loading="lazy" />`).join('')}</div>`;
    const surfSurveyModal = service.id === 'clases-de-surf' ? `<dialog class="surf-survey-modal" id="surfSurveyModal" aria-labelledby="surfSurveyTitle"><div class="surf-survey-modal-shell"><div class="surf-survey-modal-head"><div><p class="service-page-kicker">READY TO SURF?</p><h2 id="surfSurveyTitle">${ui.modalTitle}</h2><p>${ui.modalText}</p></div><button class="surf-survey-close" type="button" data-close-surf-survey aria-label="${ui.modalClose}">×</button></div><div id="surfSurveyModalBody"></div></div></dialog>` : '';
    document.getElementById('serviceDetailRoot').innerHTML = `<section class="detail-hero" style="--detail-hero:url('${service.images[0]}')"><div class="container detail-hero-content"><p class="service-page-kicker">${esc(service.eyebrow)}</p><p class="detail-index">${service.number} / ${services.length}</p><h1>${esc(service.title)}</h1><p class="detail-hero-intro">${esc(service.cardText)}</p></div></section><section class="detail-content"><div class="container detail-layout"><article class="detail-story">${story}</article><aside class="detail-request" id="detailRequestPanel"><div class="detail-request-head"><p class="service-page-kicker">BOOK REQUEST</p><h2>${ui.requestTitle}</h2><p>${ui.requestText}</p></div><form id="serviceRequestForm" novalidate>${formQuestions}<label class="detail-question detail-field" for="request-contact"><span>${ui.extraLabel} <span class="detail-optional">${ui.optional}</span></span><textarea id="request-contact" name="request-contact" placeholder="${ui.extraPlaceholder}"></textarea></label><button class="detail-submit" type="submit">${ui.submit}</button><p class="detail-form-note">${ui.note}</p><p class="detail-error" id="detailError" role="alert"></p></form></aside></div></section>${surfSurveyModal}`;
    if (service.id === 'pack-ajustable') {
      const packGrid = document.querySelector('.pack-service-grid');
      const count = document.querySelector('[data-pack-selection]');
      const updatePackCount = () => {
        const selected = packGrid ? packGrid.querySelectorAll('input:checked').length : 0;
        if (count) count.textContent = `${selected} ${selected === 1 ? 'experiencia seleccionada' : 'experiencias seleccionadas'}`;
      };
      packGrid?.addEventListener('change', updatePackCount);
    }
    const requestForm = document.getElementById('serviceRequestForm');
    if (service.id === 'clases-de-surf') {
      const modal = document.getElementById('surfSurveyModal');
      const modalBody = document.getElementById('surfSurveyModalBody');
      const requestPanel = document.getElementById('detailRequestPanel');
      const openSurvey = document.querySelector('[data-open-surf-survey]');
      const restoreForm = () => { if (requestForm && requestPanel && requestForm.parentElement === modalBody) requestPanel.appendChild(requestForm); };
      openSurvey?.addEventListener('click', () => { modalBody.appendChild(requestForm); modal.showModal(); });
      modal?.querySelector('[data-close-surf-survey]')?.addEventListener('click', () => { restoreForm(); modal.close(); });
      modal?.addEventListener('cancel', restoreForm);
      modal?.addEventListener('close', restoreForm);
    }
    requestForm.addEventListener('submit', event => submitRequest(event, service));
  }
  function submitRequest(event, service) {
    event.preventDefault();
    const form = event.currentTarget;
    const ui = uiFor(service);
    const error = document.getElementById('detailError');
    if (!form.checkValidity()) { form.reportValidity(); error.textContent = ui.error; return; }
    const lines = [`${ui.waIntro} ${service.title}`, ''];
    const name = form.elements['request-name']?.value.trim();
    const extra = form.elements['request-contact']?.value.trim();
    if (service.id === 'clases-de-surf' && name) lines.push(`${ui.waName} ${name}`);
    service.questions.forEach(question => {
      const values = [...form.querySelectorAll(`[name="${question.id}"], [name^="${question.id}-"]`)].map(input => input.type === 'checkbox' || input.type === 'radio' ? (input.checked ? input.value : '') : input.value).filter(Boolean);
      if (values.length) lines.push(`${question.label} ${values.join(' / ')}`);
    });
    if (service.id !== 'clases-de-surf' && name) lines.push(`${ui.waName} ${name}`);
    if (extra) lines.push(`${ui.waExtra} ${extra}`);
    lines.push('', ui.waThanks);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
  }
  render(localizeService(getService()));
  window.addEventListener('wavepoint:languagechange', event => {
    lang = event.detail.lang === 'en' ? 'en' : 'es';
    render(localizeService(getService()));
  });
})();
