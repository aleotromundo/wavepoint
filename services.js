(() => {
  const WHATSAPP = '543517397525';
  const services = [
    {
      id: 'alojamiento-experiencias', number: '01', eyebrow: 'ESTADÃAS Â· HOTELES', title: 'Stays and Hotels',
      cardText: 'Hoteles y alojamientos frente al mar para cada tipo de viaje.',
      description: 'EncontrÃ¡ una opciÃ³n de alojamiento que se adapte a tu presupuesto, el tamaÃ±o de tu grupo y el ritmo de tu estadÃ­a en Tamarindo. Estas tarifas estÃ¡n expresadas en dÃ³lares estadounidenses (USD), por noche. WavePoint consulta disponibilidad y condiciones con el alojamiento antes de acercarte una propuesta.',
      images: ['assets/legacy/B_03.jpg', 'assets/legacy/Playa_23.jpg', 'assets/capitan.jpg'],
      accommodationOptions: [
        {
          category: 'OPCIÃ“N ECONÃ“MICA', name: 'Hotel Tamalodge',
          price: 'USD 50', priceNote: 'por habitaciÃ³n Â· por noche',
          summary: 'Una habitaciÃ³n privada con baÃ±o privado para una estadÃ­a simple y funcional.',
          images: ['assets/legacy/B_03.jpg', 'assets/legacy/Piscina_16.jpg'],
          imageAlt: 'Alojamiento tropical con jardÃ­n y piscina',
          details: ['HabitaciÃ³n privada con baÃ±o privado.'],
          amenities: ['Piscina', 'Cocina compartida', 'WiFi', 'Mesa de ping-pong']
        },
        {
          category: 'OPCIÃ“N MEDIA', name: 'Casa Aura',
          price: 'USD 80â€“210', priceNote: 'por unidad Â· por noche',
          summary: 'Alojamiento frente al mar con habitaciones, apartamentos y desayuno incluido segÃºn la unidad.',
          images: ['assets/legacy/OTAMA_VIEW_30.jpg', 'assets/legacy/OTAMA_GAST_102.jpg', 'assets/legacy/Playa_23.jpg'],
          imageAlt: 'Alojamiento frente al mar con piscina y espacios interiores',
          details: [
            'HabitaciÃ³n doble â€” USD 80 Â· baÃ±o privado Â· desayuno incluido Â· 1 habitaciÃ³n.',
            'HabitaciÃ³n cuÃ¡druple â€” USD 120 Â· una cama matrimonial y una litera Â· baÃ±o privado Â· desayuno incluido Â· 3 habitaciones.',
            'HabitaciÃ³n cuÃ¡druple con terraza â€” USD 130 Â· dos camas matrimoniales Â· baÃ±o privado Â· terraza Â· desayuno incluido Â· 1 habitaciÃ³n.',
            'Apartamento completo â€” USD 210 Â· capacidad para 8 personas Â· dos habitaciones con camas matrimoniales y literas Â· un baÃ±o Â· living y cocina Â· 2 apartamentos.'
          ],
          amenities: ['Frente al mar', 'Desayuno incluido segÃºn la unidad']
        },
        {
          category: 'OPCIÃ“N GRUPAL', name: 'Casa Madera',
          price: 'USD 250â€“500', priceNote: 'por noche Â· hasta 10 personas',
          summary: 'Una casa frente al mar para grupos, con tarifas que cambian segÃºn la temporada.',
          images: ['assets/ally-casa.jpg', 'assets/legacy/Playa_23.jpg', 'assets/legacy/B_03.jpg'],
          imageAlt: 'Casa de alojamiento frente a la playa',
          details: [
            '24 de diciembre al 2 de enero: USD 500 Â· estadÃ­a mÃ­nima de 5 noches.',
            '2 de enero al 2 de febrero: USD 400 Â· estadÃ­a mÃ­nima de 5 noches.',
            '3 de febrero al 30 de abril: USD 350 Â· estadÃ­a mÃ­nima de 3 noches Â· excepto Semana Santa.',
            '1 al 15 de julio: USD 350 Â· estadÃ­a mÃ­nima de 3 noches.',
            '1 de octubre al 30 de noviembre: USD 250 Â· estadÃ­a mÃ­nima de 2 noches.',
            'Resto de las fechas: USD 300 Â· estadÃ­a mÃ­nima de 2 noches.'
          ],
          amenities: ['Frente al mar', 'Tarifas para hasta 10 personas, incluidos adultos y niÃ±os', 'MÃ¡ximo de 5 personas adicionales Â· capacidad total de 15 personas', 'Semana Santa: consultar tarifas especiales']
        },
        {
          category: 'OPCIÃ“N DELUXE', name: 'CapitÃ¡n Suizo',
          price: 'USD 600', priceNote: 'por noche Â· consultar disponibilidad',
          summary: 'Hotel frente a la playa con servicios de bienestar, piscina y espacios para disfrutar la estadÃ­a.',
          images: ['assets/capitan.jpg', 'assets/ally-capitan.jpg', 'assets/legacy/Piscina_16.jpg'],
          imageAlt: 'Playa frente a CapitÃ¡n Suizo',
          details: ['Tarifa: USD 600 por noche.', 'Consultar disponibilidad.'],
          amenities: ['Hotel ubicado frente a la playa', 'Piscina al aire libre', 'Spa y servicio de masajes', 'Jardines', 'Salas de reuniones', 'Tiendas', 'Estacionamiento privado', 'WiFi en el centro de negocios']
        }
      ],
      questions: [
        { id: 'stay_dates', label: 'Â¿CuÃ¡ndo quieres alojarte?', type: 'dates', fields: ['Llegada', 'Salida'] },
        { id: 'accommodation_type', label: 'Â¿QuÃ© alojamiento te interesa?', type: 'choice', options: ['Hotel Tamalodge', 'Casa Aura', 'Casa Madera', 'CapitÃ¡n Suizo', 'Quiero recomendaciones'] },
        { id: 'group_size', label: 'Â¿CuÃ¡ntas personas viajarÃ­an?', type: 'number' },
        { id: 'nightly_budget', label: 'Â¿CuÃ¡l es tu presupuesto aproximado por noche para todo el grupo?', type: 'money', optional: true },
        { id: 'experiences', label: 'Â¿QuÃ© experiencias te gustarÃ­a sumar?', type: 'multi', options: ['Surf', 'Surf coaching', 'Roca Bruja', 'Snorkel', 'CatamarÃ¡n', 'Yoga', 'ATV', 'TodavÃ­a no lo sÃ©'] }
      ]
    },
    {
      id: 'clases-de-surf', number: '02', eyebrow: 'SURF Â· LESSONS', title: 'Ready to Surf?',
      cardText: 'Tell us your level and what youâ€™d like to learn. Weâ€™ll find a lesson that fits.',
      description: 'Las clases estÃ¡n pensadas para que cada persona entre al agua con una guÃ­a simple, segura y cercana. Adaptamos la sesiÃ³n al nivel del grupo, al estado del mar y a lo que querÃ©s conseguir: desde probar el surf por primera vez hasta ordenar tus bases y ganar confianza. TambiÃ©n te orientamos con la tabla adecuada si todavÃ­a no tenÃ©s equipo.',
      images: ['assets/legacy/DSC02807.jpg', 'assets/legacy/clase-surf.jpeg', 'assets/legacy/A7833108-3E71-4EAC-830C-057BD7B5B0BD.jpeg'],
      questions: [
        { id: 'surf_level', label: 'Â¿CuÃ¡l es tu nivel de surf?', type: 'choice', options: ['Primera vez', 'Principiante', 'Intermedio', 'Avanzado'] },
        { id: 'lesson_goal', label: 'Â¿QuÃ© te gustarÃ­a aprender?', type: 'choice', options: ['Probar el surf', 'Mejorar las bases', 'Trabajar una habilidad especÃ­fica'] },
        { id: 'group_size', label: 'Â¿CuÃ¡ntos son?', type: 'number' },
        { id: 'origin', label: 'Â¿De dÃ³nde nos visitan?', type: 'text', placeholder: 'Ciudad y paÃ­s' },
        { id: 'preferred_fruit', label: 'Â¿QuÃ© fruta prefieren comer despuÃ©s de la clase?', type: 'multi', options: ['PiÃ±a', 'Bananas', 'Mangos', 'Cocos'] },
        { id: 'preferred_schedule', label: 'Â¿QuÃ© horarios prefieren?', type: 'choice', options: ['AM', 'Medio dÃ­a', 'Tarde'] },
        { id: 'board_need', label: 'Â¿NecesitarÃ¡n una tabla?', type: 'choice', options: ['SÃ­', 'No, llevamos la nuestra', 'Necesitamos asesoramiento'] }
      ],
      en: {
        description: 'Lessons are designed so everyone gets in the water with simple, safe and friendly guidance. We adapt the session to your groupâ€™s level, the sea conditions and what you want to achieve: from trying surfing for the first time to building your basics and gaining confidence. Weâ€™ll also help you choose the right board if you donâ€™t have equipment yet.',
        questions: {
          surf_level: { label: 'Whatâ€™s your surfing level?', options: ['First time', 'Beginner', 'Intermediate', 'Advanced'] },
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
      id: 'surf-coaching' , number: '03', eyebrow: 'ENTRENAMIENTO Â· PROGRESO', title: 'Surf coaching',
      cardText: 'Entrenamiento personalizado con video-anÃ¡lisis y estrategias para llevar tu surf al siguiente nivel.',
      description: 'LlevÃ¡ tu surf al siguiente nivel con un entrenamiento personalizado. AnÃ¡lisis de tÃ©cnica, video-coaching y estrategias para mejorar tu rendimiento en el agua con la ayuda de entrenadores expertos.',
includes: ['SesiÃ³n de video de tu sesiÃ³n', 'AnÃ¡lisis con un instructor personalizado en tu idioma', 'Video de recuerdo'],
      images: ['assets/legacy/_GSK8664.jpg', 'assets/legacy/FC0F6C9F-D8FA-446B-89A7-AC3D195117B1.jpeg'],
      questions: [
        { id: 'current_surf_level', label: 'Â¿CuÃ¡l es tu nivel actual de surf?', type: 'choice', options: ['Principiante', 'Intermedio', 'Avanzado'] },
        { id: 'improvement_goal', label: 'Â¿QuÃ© te gustarÃ­a mejorar?', type: 'textarea', placeholder: 'CuÃ©ntanos brevemente.' },
        { id: 'coaching_package', label: 'Â¿QuÃ© te gustarÃ­a incluir?', type: 'choice', options: ['Solo coaching', 'Coaching y fotografÃ­as', 'Coaching y videoanÃ¡lisis', 'Coaching, fotografÃ­as y videoanÃ¡lisis'] },
        { id: 'own_board', label: 'Â¿TraerÃ¡s tu propia tabla?', type: 'choice', options: ['SÃ­', 'No'] }
      ]
    },
    {
      id: 'roca-bruja', number: '04', eyebrow: 'SURF TRIP Â· AVENTURA', title: 'Surf trip a Roca Bruja',
      cardText: 'PlanificÃ¡ una salida a uno de los spots mÃ¡s especiales de la costa con logÃ­stica local.',
      description: 'Roca Bruja exige mirar el mar, la logÃ­stica y el grupo como un todo. Coordinamos la consulta con informaciÃ³n sobre niveles, tablas y flexibilidad de fechas para que el operador pueda evaluar la salida de forma responsable. Las condiciones pueden pedir cambios: por eso este primer paso nos ayuda a buscar una ventana que tenga sentido para quienes viajan y para el ocÃ©ano.',
      images: ['assets/legacy/bruja.jpg', 'assets/legacy/avellanas.jpg'],
      questions: [
        { id: 'group_levels', label: 'Â¿QuÃ© nivel de surf tienen los participantes?', type: 'textarea', placeholder: 'Indica el nivel de cada uno.' },
        { id: 'own_boards', label: 'Â¿Todos llevarÃ¡n su propia tabla?', type: 'choice', options: ['SÃ­', 'No'] },
        { id: 'board_count', label: 'Si alguien necesita tabla, Â¿cuÃ¡ntas necesitan?', type: 'number', optional: true },
        { id: 'date_flexibility', label: 'Â¿Pueden cambiar de fecha si las condiciones del mar lo requieren?', type: 'choice', options: ['SÃ­', 'No'] }
      ]
    },
    {
      id: 'snorkel-catamaran', number: '05', eyebrow: 'MAR Â· NAVEGACIÃ“N', title: 'Snorkel y catamarÃ¡n',
      cardText: 'ElegÃ­ entre explorar bajo el agua, navegar la costa o combinar las dos experiencias.',
      description: 'Una salida al mar puede ser tranquila, exploradora o un poco de ambas. Te ayudamos a comparar tour de snorkel, paseo en catamarÃ¡n y opciones combinadas segÃºn disponibilidad. Para cuidar la experiencia de todo el grupo, consultamos cantidad de personas, comodidad nadando y cualquier necesidad alimentaria antes de acercarte una opciÃ³n compartida o privada.',
      images: ['assets/legacy/conchal.jpg', 'assets/legacy/catalinas.jpg'],
      questions: [
        { id: 'sea_experience', label: 'Â¿QuÃ© experiencia te interesa?', type: 'choice', options: ['Tour de snorkel', 'Paseo en catamarÃ¡n', 'CatamarÃ¡n con snorkel, si estÃ¡ disponible'] },
        { id: 'departure_type', label: 'Â¿Prefieres una salida compartida o privada?', type: 'choice', options: ['Compartida', 'Privada', 'Quiero comparar ambas'] },
        { id: 'snorkel_people', label: 'Â¿CuÃ¡ntas personas quieren hacer snorkel?', type: 'number', optional: true },
        { id: 'swimming_comfort', label: 'Â¿Todas se sienten cÃ³modas nadando en el mar?', type: 'choice', options: ['SÃ­', 'No', 'Quisiera consultar antes'], optional: true },
        { id: 'dietary_needs', label: 'Â¿Hay alergias alimentarias o necesidades dietÃ©ticas que debamos comunicar?', type: 'textarea', placeholder: 'Opcional', optional: true }
      ]
    },
    {
      id: 'yoga', number: '06', eyebrow: 'BIENESTAR Â· PAUSA', title: 'Yoga',
      cardText: 'EncontrÃ¡ una prÃ¡ctica que acompaÃ±e tu viaje, desde una primera vez hasta una sesiÃ³n profunda.',
      description: 'El yoga puede ser una forma de despertar el cuerpo, bajar el ritmo despuÃ©s del surf o regalarte una pausa durante el viaje. Buscamos la modalidad y el formato que mejor encajen con tu grupo: una clase compartida, una sesiÃ³n privada o una prÃ¡ctica adaptada a una experiencia previa y a necesidades puntuales.',
      images: ['assets/legacy/OTAMA_HEAL_21.jpg'],
      questions: [
        { id: 'yoga_experience', label: 'Â¿QuÃ© experiencia tienes con el yoga?', type: 'choice', options: ['Primera vez', 'Algo de experiencia', 'Practico regularmente'] },
        { id: 'yoga_format', label: 'Â¿Prefieres una clase grupal o privada?', type: 'choice', options: ['Grupal', 'Privada', 'Cualquiera de las dos'] },
        { id: 'yoga_notes', label: 'Â¿Hay algo que quieras que el instructor tenga en cuenta para adaptar la sesiÃ³n?', type: 'textarea', placeholder: 'Opcional', optional: true }
      ]
    },
    {
      id: 'atv', number: '07', eyebrow: 'TIERRA Â· AVENTURA', title: 'Tours en cuatriciclo â€” ATV',
      cardText: 'RecorrÃ© los caminos de Guanacaste con una consulta previa sobre participantes y requisitos.',
      description: 'Los tours en ATV son una manera intensa y divertida de salir de la playa y conocer el paisaje alrededor de Tamarindo. Antes de recomendarte una opciÃ³n, necesitamos entender cuÃ¡ntas personas quieren conducir, quiÃ©nes irÃ­an como acompaÃ±antes y quÃ© edades tienen los conductores. WavePoint consulta estos datos con el operador para confirmar los requisitos de participaciÃ³n antes de avanzar.',
      images: ['assets/legacy/rincon.jpg'],
      questions: [
        { id: 'drivers', label: 'Â¿CuÃ¡ntas personas quieren conducir?', type: 'number' },
        { id: 'passengers', label: 'Â¿CuÃ¡ntas irÃ­an como acompaÃ±antes?', type: 'number' },
        { id: 'driver_ages', label: 'Â¿QuÃ© edades tienen quienes quieren conducir?', type: 'text', placeholder: 'Ej.: 24, 31 y 42' },
        { id: 'licenses', label: 'Â¿Quienes quieren conducir tienen licencia de conducir vigente?', type: 'choice', options: ['Todos', 'Algunos', 'Ninguno'] }
      ]
    },
    {
      id: 'retiros', number: '08', eyebrow: 'RETIROS Â· EXPERIENCIAS', title: 'Retiros',
      cardText: 'ElegÃ­ una pausa con intenciÃ³n: surf, descanso, movimiento y comunidad en un mismo viaje.',
      description: 'Un retiro es una experiencia con su propio ritmo. Te ayudamos a encontrar una propuesta que combine las actividades que te interesan con el tipo de habitaciÃ³n y acompaÃ±amiento que necesitÃ¡s. Si incluye surf, saber tu nivel nos permite consultar mejor; y si tenÃ©s necesidades de alimentaciÃ³n o alojamiento, podÃ©s compartirlas desde el inicio para buscar una opciÃ³n que te haga sentir cÃ³modo.',
      images: ['assets/legacy/ocotal.jpg', 'assets/legacy/IMG_1269.jpeg', 'assets/legacy/Restaurante_1.jpg'],
      questions: [
        { id: 'retreat_choice', label: 'Â¿QuÃ© retiro te interesa?', type: 'choice', options: ['Selecciona un retiro', 'Quiero recomendaciones'] },
        { id: 'retreat_surf_level', label: 'Si el retiro incluye surf: Â¿cuÃ¡l es tu nivel?', type: 'choice', options: ['Primera vez', 'Principiante', 'Intermedio', 'Avanzado'], optional: true },
        { id: 'room_type', label: 'Â¿QuÃ© tipo de habitaciÃ³n prefieres?', type: 'choice', options: ['Compartida', 'Privada', 'Cualquiera de las dos'], optional: true },
        { id: 'retreat_needs', label: 'Â¿Hay alguna necesidad de alimentaciÃ³n o alojamiento que debamos tener en cuenta?', type: 'textarea', placeholder: 'Opcional', optional: true }
      ]
    },
    {
      id: 'buceo', number: '09', eyebrow: 'MAR Â· EXPLORACIÃ“N', title: 'Buceo',
      cardText: 'Discover Tamarindo underwater with a local diving experience.',
      description: 'ConocÃ© las opciones de buceo disponibles en Tamarindo y consultÃ¡ con el operador local cuÃ¡l experiencia se adapta mejor a tu grupo y a las condiciones del dÃ­a.',
      images: ['assets/surf-service.jpg'],
      questions: [
        { id: 'dive_experience', label: 'Â¿QuÃ© experiencia de buceo te interesa?', type: 'choice', options: ['Quiero recomendaciones', 'Buceo recreativo', 'Quiero consultar disponibilidad'] },
        { id: 'dive_level', label: 'Â¿QuÃ© experiencia tienes buceando?', type: 'choice', options: ['Primera vez', 'Principiante', 'Con experiencia'], optional: true },
        { id: 'dive_people', label: 'Â¿CuÃ¡ntas personas participarÃ­an?', type: 'number' }
      ]
    },
    {
      id: 'pack-ajustable', number: '10', eyebrow: 'DIFERENCIADOS Â· EXPERIENCIA A MEDIDA', title: 'Pack ajustable',
      cardText: 'Build your own experience by combining the activities that fit your trip.',
      description: 'ArmÃ¡ tu propia experiencia combinando alojamiento, surf, bienestar y aventura segÃºn el ritmo de tu viaje. Contanos quÃ© te interesa y WavePoint consulta una propuesta ajustada a tus fechas, tu grupo y tus prioridades.',
      images: ['assets/after-guide.jpg'],
      questions: [
        { id: 'pack_activities', label: 'Â¿QuÃ© te gustarÃ­a combinar en tu experiencia?', type: 'multi', options: ['Alojamiento', 'Surf lessons', 'Surf coaching', 'Yoga', 'Witchâ€™s Rock surf trip', 'Snorkeling & catamaran', 'Buceo', 'ATV tours', 'Retreats'] },
        { id: 'pack_dates', label: 'Â¿CuÃ¡ndo serÃ­a tu viaje?', type: 'dates', fields: ['Llegada', 'Salida'], optional: true },
        { id: 'pack_notes', label: 'Â¿QuÃ© deberÃ­a tener en cuenta el operador?', type: 'textarea', placeholder: 'Cantidad de personas, preferencias o necesidades especiales.', optional: true }
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
      requestTitle: 'Contanos quÃ© estÃ¡s buscando.',
      requestText: 'RespondÃ© estas preguntas y abrÃ­ WhatsApp con una solicitud ordenada para el encargado.',
      nameLabel: 'Â¿CÃ³mo te llamÃ¡s?', namePlaceholder: 'Tu nombre',
      extraLabel: 'Â¿Hay algo mÃ¡s que quieras contarnos?', extraPlaceholder: 'Fechas, cantidad de personas u otra informaciÃ³n Ãºtil',
      submit: 'Armar solicitud en WhatsApp â†—',
      note: 'Se abrirÃ¡ WhatsApp con tus respuestas listas para revisar antes de enviar.',
      error: 'CompletÃ¡ las respuestas necesarias para continuar.',
      waIntro: 'Hola WavePoint, quiero consultar por:', waName: 'Nombre:', waExtra: 'InformaciÃ³n adicional:', waThanks: 'Gracias. Quedo atento/a.',
      galleryAlt: 'Clases de surf Â· imagen',
      surveyHeading: 'Llena nuestra pequeÃ±a encuesta',
      surveyText: 'Con estas respuestas podemos preparar una consulta mÃ¡s clara para el instructor y hacer que la clase se sienta hecha para ustedes.',
      surveyOpen: 'Completar encuesta',
      modalTitle: 'Tu clase empieza acÃ¡.',
      modalText: 'CompletÃ¡ la encuesta y prepararemos una consulta a medida para tu grupo.',
      modalClose: 'Cerrar encuesta'
    },
    en: {
      optional: 'Optional',
      requestTitle: 'Tell us what youâ€™re looking for.',
      requestText: 'Answer these questions and open WhatsApp with an organized request for the person in charge.',
      nameLabel: 'Whatâ€™s your name?', namePlaceholder: 'Your name',
      extraLabel: 'Anything else youâ€™d like to tell us?', extraPlaceholder: 'Dates, number of people or any other useful information',
      submit: 'Build request on WhatsApp â†—',
      note: 'WhatsApp will open with your answers ready to review before sending.',
      error: 'Please complete the required answers to continue.',
      waIntro: 'Hi WavePoint, Iâ€™d like to ask about:', waName: 'Name:', waExtra: 'Additional information:', waThanks: 'Thank you. Looking forward to your reply.',
      galleryAlt: 'Surf lessons Â· image',
      surveyHeading: 'Fill out our quick survey',
      surveyText: 'With these answers we can prepare a clearer request for the instructor and make the lesson feel made for you.',
      surveyOpen: 'Complete the survey',
      modalTitle: 'Your lesson starts here.',
      modalText: 'Complete the survey and weâ€™ll prepare a request tailored to your group.',
      modalClose: 'Close survey'
    }
  };
  const uiFor = service => isSurfEn(service) ? FORM_UI.en : FORM_UI.es;
  const inputId = (service, question) => `${service.id}-${question.id}`;
  const PACK_SERVICE_CARDS = {
    'Alojamiento': { title: 'Stay & experience', detail: 'Un lugar cÃ³modo y algo mÃ¡s para vivir Tamarindo.', image: 'assets/legacy/OTAMA_VIEW_30.jpg' },
    'Surf lessons': { title: 'Surf lessons', detail: 'Tu primera ola o el siguiente paso.', image: 'assets/legacy/DSC02807.jpg' },
    'Surf coaching': { title: 'Surf coaching', detail: 'Entrenamiento personalizado con video-anÃ¡lisis.', image: 'assets/surf-coaching-cover.jpg' },
    'Yoga': { title: 'Yoga', detail: 'BajÃ¡ el ritmo y encontrÃ¡ tu pausa.', image: 'assets/legacy/OTAMA_HEAL_21.jpg' },
    'Witchâ€™s Rock surf trip': { title: 'Witchâ€™s Rock', detail: 'Una salida guiada a un spot inolvidable.', image: 'assets/legacy/bruja.jpg' },
    'Snorkeling & catamaran': { title: 'Snorkeling & catamaran', detail: 'Mar, navegaciÃ³n y tiempo para explorar.', image: 'assets/legacy/conchal.jpg' },
    'Buceo': { title: 'Diving', detail: 'DescubrÃ­ el mundo bajo la superficie.', image: 'assets/surf-service.jpg' },
    'ATV tours': { title: 'ATV tours', detail: 'Aventura y caminos de Guanacaste.', image: 'assets/legacy/rincon.jpg' },
    'Retreats': { title: 'Retreats', detail: 'Un viaje con programa, descanso y comunidad.', image: 'assets/legacy/ocotal.jpg' }
  };
  function renderQuestion(service, question) {
    const id = inputId(service, question);
    const optional = question.optional ? `<span class="detail-optional">${uiFor(service).optional}</span>` : '';
    if (service.id === 'pack-ajustable' && question.id === 'pack_activities') return `<fieldset class="detail-question pack-question"><legend>${esc(question.label)} ${optional}</legend><p class="pack-question-intro">ElegÃ­ dos o mÃ¡s tarjetas y armamos una experiencia a tu medida.</p><div class="pack-service-grid">${question.options.map(option => { const card = PACK_SERVICE_CARDS[option]; return `<label class="pack-service-card"><input type="checkbox" name="${question.id}" value="${esc(option)}" /><span class="pack-service-image"><img src="${card.image}" alt="" loading="lazy" /><span class="pack-service-check" aria-hidden="true">âœ“</span></span><span class="pack-service-copy"><strong>${esc(card.title)}</strong><small>${esc(card.detail)}</small></span></label>`; }).join('')}</div><p class="pack-selection-count" data-pack-selection>0 experiencias seleccionadas</p></fieldset>`;
    if (question.type === 'dates') return `<fieldset class="detail-question"><legend>${esc(question.label)} ${optional}</legend><div class="detail-date-grid">${question.fields.map(field => `<label for="${id}-${field}">${esc(field)}<input id="${id}-${field}" name="${question.id}-${field}" type="date" ${question.optional ? '' : 'required'} /></label>`).join('')}</div></fieldset>`;
    if (question.type === 'choice' || question.type === 'multi') return `<fieldset class="detail-question"><legend>${esc(question.label)} ${optional}</legend><div class="detail-options">${question.options.map((option, index) => `<label class="detail-option"><input type="${question.type === 'multi' ? 'checkbox' : 'radio'}" name="${question.id}" value="${esc(option)}" ${question.type === 'choice' && index === 0 && !question.optional ? 'required' : ''} /><span>${esc(option)}</span></label>`).join('')}</div></fieldset>`;
    const type = question.type === 'number' ? 'number' : question.type === 'money' ? 'text' : 'text';
    return `<label class="detail-question detail-field" for="${id}"><span>${esc(question.label)} ${optional}</span><${question.type === 'textarea' ? 'textarea' : 'input'} id="${id}" name="${question.id}" type="${type}" placeholder="${esc(question.placeholder || '')}" ${question.optional ? '' : 'required'}></${question.type === 'textarea' ? 'textarea' : 'input'}></label>`;
  }
  function renderAccommodationOption(option, index) {
    const gallery = option.images.map((image, imageIndex) => `<img src="${image}" alt="${esc(option.imageAlt)} Â· vista ${imageIndex + 1}" loading="lazy" />`).join('');
    const details = option.details.map(detail => `<li>${esc(detail)}</li>`).join('');
    const amenities = option.amenities.map(item => `<li>${esc(item)}</li>`).join('');
    return `<article class="accommodation-card accommodation-card-${index + 1}"><div class="accommodation-gallery">${gallery}</div><div class="accommodation-card-body"><p class="accommodation-category">${esc(option.category)}</p><div class="accommodation-card-title"><h3>${esc(option.name)}</h3><div class="accommodation-price"><strong>${esc(option.price)}</strong><span>${esc(option.priceNote)}</span></div></div><p class="accommodation-summary">${esc(option.summary)}</p><div class="accommodation-columns"><div><h4>Opciones y tarifas</h4><ul>${details}</ul></div><div><h4>Servicios y condiciones</h4><ul>${amenities}</ul></div></div></div></article>`;
  }
  function renderAccommodationStory(service) {
    return `<p class="service-page-kicker">ALOJAMIENTOS EN TAMARINDO</p><h2>Opciones de alojamiento en Tamarindo</h2><p>${esc(service.description)}</p><div class="accommodation-rate-note"><strong>Tarifas en USD</strong><span>Todas las tarifas estÃ¡n expresadas en dÃ³lares estadounidenses (USD), por noche.</span></div><div class="accommodation-grid">${service.accommodationOptions.map(renderAccommodationOption).join('')}</div>`;
  }
  function renderSurfLessonStory(service) {
    const ui = uiFor(service);
    const gallery = service.images.map((image, index) => `<img src="${image}" alt="${ui.galleryAlt} ${index + 1}" loading="lazy" />`).join('');
    return `<p class="service-page-kicker">SURF LESSONS Â· TAMARINDO</p><h2>Ready to surf?</h2><p class="surf-lesson-lead">Tell us your level and what youâ€™d like to learn. Weâ€™ll find a lesson that fits.</p><p class="surf-lesson-description">${esc(service.description)}</p><div class="detail-gallery surf-lesson-gallery">${gallery}</div><div class="surf-lesson-survey-intro"><span class="surf-lesson-survey-mark">02</span><div><p class="service-page-kicker">SURF LESSONS Â· QUICK CHECK-IN</p><h3>${ui.surveyHeading}</h3><p>${ui.surveyText}</p><button class="surf-survey-open" type="button" data-open-surf-survey>${ui.surveyOpen} <span aria-hidden="true">â†—</span></button></div></div>`;
  }
  function render(service) {
    const ui = uiFor(service);
    document.documentElement.lang = lang;
    document.title = `${service.title} Â· WavePoint`;
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
        : `<p class="service-page-kicker">LA EXPERIENCIA</p><h2>Un plan pensado para tu viaje.</h2><p>${esc(service.description)}</p>${service.includes ? `<div class="service-includes"><h3>Incluye</h3><ul>${service.includes.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>` : ''}<div class="detail-gallery">${service.images.map((image, index) => `<img src="${image}" alt="${esc(service.title)} Â· imagen ${index + 1}" loading="lazy" />`).join('')}</div>`;
    const surfSurveyModal = service.id === 'clases-de-surf' ? `<dialog class="surf-survey-modal" id="surfSurveyModal" aria-labelledby="surfSurveyTitle"><div class="surf-survey-modal-shell"><div class="surf-survey-modal-head"><div><p class="service-page-kicker">READY TO SURF?</p><h2 id="surfSurveyTitle">${ui.modalTitle}</h2><p>${ui.modalText}</p></div><button class="surf-survey-close" type="button" data-close-surf-survey aria-label="${ui.modalClose}">Ã—</button></div><div id="surfSurveyModalBody"></div></div></dialog>` : '';
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

