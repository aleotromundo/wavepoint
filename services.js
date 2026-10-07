(() => {
const WHATSAPP = '543517397525';
const services = [
{
id: 'alojamiento-experiencias', number: '01', eyebrow: 'ESTADÍAS · HOTELES', title: 'Estadías y hoteles',
cardText: 'Hoteles y alojamientos frente al mar para cada tipo de viaje.',
description: 'Encontrá una opción de alojamiento que se adapte a tu presupuesto, el tamaño de tu grupo y el ritmo de tu estadía en Tamarindo. Estas tarifas están expresadas en dólares estadounidenses (USD), por noche. WavePoint consulta disponibilidad y condiciones con el alojamiento antes de acercarte una propuesta.',
images: [
'assets/img/hotels/stayandhotels5_resultado.webp',
'assets/img/hotels/stayandhotels6_resultado.webp',
'assets/img/hotels/stayandhotels1_resultado.webp',
'assets/img/hotels/stayandhotels2_resultado.webp',
'assets/img/hotels/stayandhotels3_resultado.webp',
'assets/img/hotels/stayandhotels4_resultado.webp',
'assets/img/hotels/stayandhotels_resultado.webp'
],
imageAlts: [
'Alojamiento tropical de madera con pasarela exterior',
'Habitación luminosa con acceso al jardín',
'Tamalodge entre jardines tropicales',
'Casa de madera con pasarela exterior',
'Alojamiento de madera con piscina rodeada de vegetación',
'Habitación luminosa con acceso al jardín',
'Sala de estar de un alojamiento'
],
imageAltsEn: [
'Tropical wooden accommodation with an outdoor walkway',
'Bright guest room opening onto the garden',
'Tamalodge among tropical gardens',
'Wooden house with an outdoor walkway',
'Wooden accommodation with a pool surrounded by greenery',
'Bright guest room opening onto the garden',
'Living room in an accommodation'
],
accommodationOptions: [
{
category: 'OPCIÓN ECONÓMICA', name: 'Hotel Tamalodge',
price: 'USD 50', priceNote: 'por habitación · por noche',
summary: 'Una habitación privada con baño privado para una estadía simple y funcional.',
images: ['assets/img/stays/tamalodge/guesthouse.jpg', 'assets/img/stays/tamalodge/pool.jpg', 'assets/img/stays/tamalodge/cover.jpg'],
imageAlt: 'Alojamiento tropical con jardín y piscina',
imageAlts: ['Alojamiento rodeado de vegetación tropical', 'Piscina rodeada de jardines tropicales', 'Entrada de Hotel Tamalodge entre jardines'],
imageAltsEn: ['Accommodation surrounded by tropical greenery', 'Pool surrounded by tropical gardens', 'Hotel Tamalodge entrance among the gardens'],
details: ['Habitación privada con baño privado.'],
amenities: ['Piscina', 'Cocina compartida', 'WiFi', 'Mesa de ping-pong']
},
{
category: 'OPCIÓN MEDIA', name: 'Casa Aura',
price: 'USD 80–210', priceNote: 'por unidad · por noche',
summary: 'Alojamiento frente al mar con habitaciones, apartamentos y desayuno incluido según la unidad.',
images: [],
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
images: ['assets/img/stays/casa-maderas/cover.jpg', 'assets/img/stays/casa-maderas/house.jpg', 'assets/img/stays/casa-maderas/aerial.jpg'],
imageAlt: 'Casa de alojamiento frente a la playa',
imageAlts: ['Vista aérea de Casa de Maderas junto a Playa Grande', 'Casa de Maderas rodeada de vegetación tropical', 'Piscina y entorno natural de Casa de Maderas'],
imageAltsEn: ['Aerial view of Casa de Maderas beside Playa Grande', 'Casa de Maderas surrounded by tropical greenery', 'Pool and natural surroundings at Casa de Maderas'],
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
images: ['assets/img/stays/capitan-suizo/cover.jpg', 'assets/img/stays/capitan-suizo/beach.jpg'],
imageAlt: 'Vista aérea del hotel Capitán Suizo junto a la playa',
imageAlts: ['Vista aérea del hotel Capitán Suizo junto a la playa', 'Playa frente a Capitán Suizo'],
imageAltsEn: ['Aerial view of Hotel Capitan Suizo beside the beach', 'Beach in front of Capitan Suizo'],
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
],
en: {
eyebrow: 'STAYS · HOTELS',
title: 'Stays and Hotels',
cardText: 'Hotels and seaside stays for every type of trip.',
description: 'Find a place to stay that suits your budget, group size and pace during your time in Tamarindo. These rates are shown in US dollars (USD) per night. WavePoint checks availability and conditions with the property before sending you a proposal.',
questions: {
stay_dates: { label: 'When would you like to stay?', fields: ['Arrival', 'Departure'] },
accommodation_type: { label: 'What accommodation are you interested in?', options: ['Hotel Tamalodge', 'Casa Aura', 'Casa Madera', 'Capitán Suizo', 'I want recommendations'] },
group_size: { label: 'How many people would be traveling?' },
nightly_budget: { label: 'What is your approximate budget per night for the whole group?' },
experiences: { label: 'Which experiences would you like to add?', options: ['Surf', 'Surf coaching', 'Witch’s Rock', 'Snorkel', 'Catamaran', 'Yoga', 'ATV', 'I still don’t know'] }
}
}
},
{
id: 'clases-de-surf', number: '02', eyebrow: 'CLASES DE SURF · TAMARINDO', title: 'Clases de surf',
cardText: 'Contanos tu nivel y qué te gustaría aprender. Te ayudamos a encontrar una clase que te quede bien.',
description: 'Las clases están pensadas para que cada persona entre al agua con una guía simple, segura y cercana. Adaptamos la sesión al nivel del grupo, al estado del mar y a lo que querés conseguir: desde probar el surf por primera vez hasta ordenar tus bases y ganar confianza. También te orientamos con la tabla adecuada si todavía no tenés equipo.',
images: [
'assets/img/optimized/surf-lesson-woman.webp',
'assets/img/optimized/surf-lesson-wave.webp',
'assets/img/optimized/surf-photography.webp',
'assets/img/optimized/surf-coaching.webp'
],
imageAlts: [
'Alumna practicando surf en Tamarindo',
'Dos surfistas practicando en una ola en Tamarindo',
'Surfera tomando una ola en Tamarindo',
'Surfista entrenando en una ola en Tamarindo'
],
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
eyebrow: 'SURF LESSONS · TAMARINDO',
title: 'Surf lessons',
cardText: 'Tell us your level and what you’d like to learn. We’ll find a lesson that fits.',
description: 'Lessons are designed so everyone gets in the water with simple, safe and friendly guidance. We adapt the session to your group’s level, the sea conditions and what you want to achieve: from trying surfing for the first time to building your basics and gaining confidence. We’ll also help you choose the right board if you don’t have equipment yet.',
imageAlts: [
'Student practicing surfing in Tamarindo',
'Two surfers practicing on a wave in Tamarindo',
'Surfer riding a wave in Tamarindo',
'Surfer training on a wave in Tamarindo'
],
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
id: 'surf-coaching', number: '03', eyebrow: 'ENTRENAMIENTO · PROGRESO', title: 'Entrenamiento de surf',
cardText: 'Entrenamiento personalizado con video-análisis y estrategias para llevar tu surf al siguiente nivel.',
description: 'Llevá tu surf al siguiente nivel con un entrenamiento personalizado. Análisis de técnica, video-coaching y estrategias para mejorar tu rendimiento en el agua con la ayuda de entrenadores expertos.',
includes: ['Sesión de video de tu sesión', 'Análisis con un instructor personalizado en tu idioma', 'Video de recuerdo'],
images: ['assets/legacy/DSC02807.jpg', 'assets/legacy/FC0F6C9F-D8FA-446B-89A7-AC3D195117B1.jpeg'],
imageAlts: ['Surfista surcando una ola sobre una tabla roja', 'Surfista practicando una maniobra'],
questions: [
{ id: 'current_surf_level', label: '¿Cuál es tu nivel actual de surf?', type: 'choice', options: ['Principiante', 'Intermedio', 'Avanzado'] },
{ id: 'improvement_goal', label: '¿Qué te gustaría mejorar?', type: 'textarea', placeholder: 'Cuéntanos brevemente.' },
{ id: 'session_schedule', label: '¿Qué horario vas a tener tu sesión?', type: 'choice', options: ['Mañana', 'Medio día', 'Tarde'] },
{ id: 'analysis_time', label: '¿A qué hora te gustaría tener tu análisis?', type: 'choice', options: ['Inmediatamente después', 'Más tarde el mismo día', 'Al día siguiente'] },
{ id: 'own_board', label: '¿Traerás tu propia tabla?', type: 'choice', options: ['Sí', 'No'] }
],
en: {
eyebrow: 'COACHING · PROGRESSION',
title: 'Surf coaching',
cardText: 'Personalized coaching with video analysis and strategies to take your surfing to the next level.',
description: 'Take your surfing to the next level with personalized coaching. Technique analysis, video coaching and strategies to improve your performance in the water with expert coaches.',
imageAlts: ['Surfer riding a wave on a red board', 'Surfer practicing a maneuver'],
includes: ['Video review of your session', 'Personalized analysis with an instructor in your language', 'Memory video'],
questions: {
current_surf_level: { label: 'What is your current surfing level?', options: ['Beginner', 'Intermediate', 'Advanced'] },
improvement_goal: { label: 'What would you like to improve?', placeholder: 'Tell us briefly.' },
session_schedule: { label: 'What time will your session be?', options: ['Morning', 'Midday', 'Afternoon'] },
analysis_time: { label: 'When would you like to receive your analysis?', options: ['Right after', 'Later the same day', 'The next day'] },
own_board: { label: 'Will you bring your own board?', options: ['Yes', 'No'] }
}
}
},
{
id: 'yoga', number: '06', eyebrow: 'BIENESTAR · PAUSA', title: 'Yoga',
cardText: 'Yoga en Tamarindo · Un espacio para respirar.',
description: 'El yoga puede ser una forma de despertar el cuerpo, bajar el ritmo después del surf o regalarte una pausa durante el viaje. Buscamos la modalidad y el formato que mejor encajen con tu grupo: una clase compartida, una sesión privada o una práctica adaptada a una experiencia previa y a necesidades puntuales.',
images: [
'assets/img/optimized/yoga-beach-woman.jpg',
'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80',
'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80'
],
imageAlts: ['Mujer practicando yoga frente al mar en la playa', 'Persona practicando yoga', 'Persona practicando meditación'],
includes: ['Mats de yoga', 'Clases grupales o privadas', 'Adaptación según tu nivel y energía'],
questions: [
{ id: 'yoga_experience', label: '¿Qué experiencia tienes con el yoga?', type: 'choice', options: ['Primera vez', 'Algo de experiencia', 'Practico regularmente'] },
{ id: 'yoga_format', label: '¿Prefieres una clase grupal o privada?', type: 'choice', options: ['Grupal', 'Privada', 'Cualquiera de las dos'] },
{ id: 'yoga_notes', label: '¿Hay algo que quieras que el instructor tenga en cuenta para adaptar la sesión?', type: 'textarea', placeholder: 'Opcional', optional: true }
],
en: {
eyebrow: 'WELLNESS · PAUSE',
title: 'Yoga',
cardText: 'Yoga in Tamarindo · A little space to breathe.',
description: 'Take a pause, enjoy the movement and make time for yourself. Whether you’re stepping onto the mat for the first time or continuing a practice you love, WavePoint helps you find a session that suits your experience. Connect with local instructors and explore group or private classes during your stay.',
questions: {
  yoga_experience: { label: 'What is your experience with yoga?', options: ['First time', 'Some experience', 'I practice regularly'] },
  yoga_format: { label: 'Would you prefer a group or private class?', options: ['Group', 'Private', 'Either is fine'] },
  yoga_notes: { label: 'Is there anything you want the instructor to keep in mind to adapt the session?', placeholder: 'Optional' }
},
includes: ['Yoga mats', 'Group or private classes', 'Adapted to your level and energy'],
imageAlts: ['Woman practicing yoga on a beach by the ocean', 'Person practicing yoga', 'Person practicing meditation']
}
},
{
id: 'snorkel-catamaran', number: '05', eyebrow: 'MAR · NAVEGACIÓN', title: 'Snorkel y catamarán',
cardText: 'Elegí entre explorar bajo el agua, navegar la costa o combinar las dos experiencias.',
description: 'Una salida al mar puede ser tranquila, exploradora o un poco de ambas. Te ayudamos a comparar tour de snorkel, paseo en catamarán y opciones combinadas según disponibilidad. Para cuidar la experiencia de todo el grupo, consultamos cantidad de personas, comodidad nadando y cualquier necesidad alimentaria antes de acercarte una opción compartida o privada.',
images: ['assets/img/optimized/snorkel-turtle.webp', 'assets/legacy/catalinas.jpg'],
imageAlts: ['Persona haciendo snorkel junto a una tortuga marina sobre un arrecife', 'Aguas y arrecife de las Islas Catalina'],
imageAltsEn: ['Snorkeler swimming near a sea turtle above a coral reef', 'Clear water and reef around the Catalina Islands'],
questions: [
{ id: 'sea_experience', label: '¿Qué experiencia te interesa?', type: 'choice', options: ['Tour de snorkel', 'Paseo en catamarán', 'Catamarán con snorkel, si está disponible'] },
{ id: 'departure_type', label: '¿Prefieres una salida compartida o privada?', type: 'choice', options: ['Compartida', 'Privada', 'Quiero comparar ambas'] },
{ id: 'snorkel_people', label: '¿Cuántas personas quieren hacer snorkel?', type: 'number', optional: true },
{ id: 'swimming_comfort', label: '¿Todas se sienten cómodas nadando en el mar?', type: 'choice', options: ['Sí', 'No', 'Quisiera consultar antes'], optional: true },
{ id: 'dietary_needs', label: '¿Hay alergias alimentarias o necesidades dietéticas que debamos comunicar?', type: 'textarea', placeholder: 'Opcional', optional: true }
],
en: {
eyebrow: 'SEA · SAILING',
title: 'Snorkeling & catamaran',
cardText: 'Choose between exploring underwater, sailing along the coast or combining both experiences.',
description: 'A day on the water can be calm, adventurous or a bit of both. We help you compare snorkel tours, catamaran rides and combined options based on availability. To protect the experience for the whole group, we check group size, swimming comfort and any dietary needs before sending a private or shared option.',
questions: {
sea_experience: { label: 'What experience are you interested in?', options: ['Snorkel tour', 'Catamaran cruise', 'Catamaran with snorkel, if available'] },
departure_type: { label: 'Would you prefer a shared or private outing?', options: ['Shared', 'Private', 'I want to compare both'] },
snorkel_people: { label: 'How many people want to snorkel?' },
swimming_comfort: { label: 'Are everyone comfortable swimming in the sea?', options: ['Yes', 'No', 'I’d like to check first'] },
dietary_needs: { label: 'Are there any food allergies or dietary needs we should share?', placeholder: 'Optional' }
},
imageAlts: ['Snorkeler swimming near a sea turtle above a coral reef', 'Clear water and reef around the Catalina Islands']
}
},
{
id: 'roca-bruja', number: '04', eyebrow: 'VIAJE DE SURF · AVENTURA', title: 'Roca Bruja',
cardText: 'Un día de surf en barco con guías locales que conocen la zona.',
lead: 'Algunos surf trips te acompañan mucho después de tu última ola.',
description: 'Salí en barco hacia Roca Bruja y compartí un día de surf con guías locales que conocen la zona. Desde el viaje hasta el tiempo en el agua, la experiencia la dan el océano, tu grupo y las personas que te guían.',
coordination: 'WavePoint ayuda a coordinar los detalles, teniendo en cuenta el nivel de surf de tu grupo y las condiciones.',
galleryAlt: 'Olas y costa de Guanacaste',
images: ['assets/img/optimized/witch-rock-surf-trip.webp', 'assets/legacy/hermosa.jpg'],
imageAlts: ['Ola rompiendo frente a la formación rocosa de Roca Bruja', 'Costa y olas de Guanacaste'],
imageAltsEn: ['Breaking wave in front of the rock formation at Witch’s Rock', 'Waves and coastline in Guanacaste'],
questions: [
{ id: 'group_size', label: '¿Cuántas personas se suman?', type: 'headcount', fields: [{ id: 'adults', label: 'Adultos' }, { id: 'children', label: 'Niños' }], note: 'Si se suman niños, contanos sus edades para consultar los requisitos del proveedor.', agesLabel: 'Edades de los niños', agesPlaceholder: 'Ej.: 8 y 11' },
{ id: 'group_levels', label: '¿Qué nivel de surf tienen los participantes?', type: 'textarea', placeholder: 'Indica el nivel de cada uno.' },
{ id: 'own_boards', label: '¿Todos llevarán su propia tabla?', type: 'choice', options: ['Sí', 'No'] },
{ id: 'board_count', label: 'Si alguien necesita tabla, ¿cuántas necesitan?', type: 'number', optional: true },
{ id: 'date_flexibility', label: '¿Pueden cambiar de fecha si las condiciones del mar lo requieren?', type: 'choice', options: ['Sí', 'No'] }
],
en: {
eyebrow: 'SURF TRIP · ADVENTURE',
title: 'Witch’s Rock Surf Trip',
cardText: 'A day of surf by boat with local guides who know the area.',
lead: 'Some surf trips stay with you long after your last wave.',
description: 'Head out by boat to Roca Bruja and share a day of surf with local guides who know the area. From the journey out to the time in the water, the experience is shaped by the ocean, your group and the people guiding you.',
coordination: 'WavePoint helps coordinate the details, taking your group’s surf level and the conditions into account.',
galleryAlt: 'Waves and coastline in Guanacaste',
imageAlts: ['Breaking wave in front of the rock formation at Witch’s Rock', 'Waves and coastline in Guanacaste'],
questions: {
group_size: { label: 'How many people are joining?', fields: [{ id: 'adults', label: 'Adults' }, { id: 'children', label: 'Children' }], note: 'If children are joining, please tell us their ages so we can check the provider’s requirements.', agesLabel: 'Children’s ages', agesPlaceholder: 'e.g. 8 and 11' },
group_levels: { label: 'What is each participant’s surf level?', placeholder: 'Please share everyone’s level.' },
own_boards: { label: 'Will everyone bring their own board?', options: ['Yes', 'No'] },
board_count: { label: 'If anyone needs a board, how many?' },
date_flexibility: { label: 'Can you change the date if sea conditions require it?', options: ['Yes', 'No'] }
}
}
},
{
id: 'surf-fotografia', number: '08', eyebrow: 'FOTOGRAFÍA DE SURF', title: 'Fotos de surf',
cardText: 'Tu tiempo en el agua, capturado.',
description: 'Tu primera ola, un giro que venís trabajando o una sesión compartida con amigos: cada surfista tiene momentos que vale la pena guardar. WavePoint te conecta con fotógrafos locales de surf para capturarlos, así vos podés enfocarte en las olas y llevarte un pedacito de Tamarindo.',
images: ['assets/img/optimized/surf-photographer-wave.jpg', 'assets/photo-service.jpg'],
imageAlts: ['Fotógrafo de surf en el agua con una cámara frente a una ola'],
imageAltsEn: ['Surf photographer in the water with a camera beside a breaking wave'],
questions: [],
submitLabel: 'RESERVÁ TU SESIÓN ↗',
en: {
eyebrow: 'SURF PHOTOGRAPHY',
title: 'Surf Photography',
cardText: 'Your time in the water, captured.',
description: 'Your first wave, a turn you’ve been working on or a session shared with friends—every surfer has moments worth keeping. WavePoint connects you with local surf photographers to capture yours, so you can focus on the waves and take a little of Tamarindo home with you.',
imageAlts: ['Surf photographer in the water with a camera beside a breaking wave'],
submitLabel: 'BOOK YOUR SESSION ↗',
questions: {}
}
},
{
id: 'surfskate', number: '09', eyebrow: 'SURFSKATE · PROGRESO', title: 'Clases de surfskate',
cardText: 'Encontrá tu flow en tierra.',
description: 'Explorá tus giros, ganá confianza sobre la tabla y empezá a sentir movimientos que después podés llevar al agua. Ya sea que pruebes el surfskate por primera vez o quieras sumarlo a tu práctica de surf, WavePoint te conecta con instructores locales para encontrar una sesión acorde a tu nivel.',
includes: ['Tabla de surfskate para la sesión', 'Casco y protecciones'],
images: ['assets/img/optimized/surfskate.webp'],
questions: [],
submitLabel: 'CONSULTAR UNA CLASE ↗',
en: {
eyebrow: 'SURFSKATE · PROGRESSION',
title: 'Surfskate Lessons',
cardText: 'Find your flow on land.',
description: 'Explore your turns, build confidence on the board and get a feel for movements you can bring into the water. Whether you’re trying surfskate for the first time or adding to your surf practice, WavePoint connects you with local instructors for a session that suits your level.',
includes: ['Surfskate board for the session', 'Helmet and protective pads'],
submitLabel: 'ASK ABOUT A LESSON ↗',
questions: {}
}
},
{
id: 'atv', number: '07', eyebrow: 'TIERRA · AVENTURA', title: 'Tours en cuatriciclo — ATV',
cardText: 'Un poco de aventura más allá de la playa.',
description: 'Salí con guías locales y descubrí los alrededores de Tamarindo en cuatriciclo. Tomá el paisaje, disfrutá el recorrido y compartí la aventura con la gente con la que viajas. WavePoint te ayuda a encontrar un tour que se adapte a tu grupo, con la ruta y los detalles confirmados antes de salir.',
images: ['assets/img/optimized/atv-forest-tour.jpg'],
imageAlts: ['Conductor en un cuatriciclo por un sendero selvático'],
imageAltsEn: ['Rider driving an ATV along a dense jungle trail'],
questions: [
{ id: 'drivers', label: '¿Cuántas personas quieren conducir?', type: 'number' },
{ id: 'passengers', label: '¿Cuántas irían como acompañantes?', type: 'number' },
{ id: 'driver_ages', label: '¿Qué edades tienen quienes quieren conducir?', type: 'text', placeholder: 'Ej.: 24, 31 y 42' },
{ id: 'licenses', label: '¿Quienes quieren conducir tienen licencia de conducir vigente?', type: 'choice', options: ['Todos', 'Algunos', 'Ninguno'] }
],
en: {
eyebrow: 'LAND · ADVENTURE',
title: 'ATV Tours in Tamarindo',
cardText: 'A little adventure beyond the beach.',
description: 'Head out with local guides and discover the surroundings of Tamarindo on an ATV. Take in the scenery, enjoy the ride and share the adventure with the people you’re traveling with. WavePoint helps you find a tour that suits your group, with the route and details confirmed before you go.',
imageAlts: ['Rider driving an ATV along a dense jungle trail'],
questions: {
drivers: { label: 'How many people want to drive?' },
passengers: { label: 'How many would be passengers?' },
driver_ages: { label: 'What are the ages of the drivers?', placeholder: 'e.g. 24, 31 and 42' },
licenses: { label: 'Do the drivers have a valid driver’s license?', options: ['Everyone', 'Some', 'None'] }
}
}
},
{
id: 'pack-ajustable', number: '11', eyebrow: 'DIFERENCIADOS · EXPERIENCIA A MEDIDA', title: 'Pack ajustable',
cardText: 'Armá tu propia experiencia combinando alojamiento, surf, bienestar y aventura según el ritmo de tu viaje.',
description: 'Armá tu propia experiencia combinando alojamiento, surf, bienestar y aventura según el ritmo de tu viaje. Contanos qué te interesa y WavePoint consulta una propuesta ajustada a tus fechas, tu grupo y tus prioridades.',
images: ['assets/ally-capitan.jpg'],
questions: [
{ id: 'pack_activities', label: '¿Qué te gustaría combinar en tu experiencia?', type: 'multi', options: ['Alojamiento', 'Surf lessons', 'Surf coaching', 'Witch’s Rock Surf Trip', 'Snorkel y catamarán', 'Yoga', 'ATV tours', 'Fotos de surf', 'Clases de surfskate', 'Retreats'] },
{ id: 'pack_dates', label: '¿Cuándo sería tu viaje?', type: 'dates', fields: ['Llegada', 'Salida'], optional: true },
{ id: 'pack_notes', label: '¿Qué debería tener en cuenta el operador?', type: 'textarea', placeholder: 'Cantidad de personas, preferencias o necesidades especiales.', optional: true }
],
en: {
eyebrow: 'CUSTOM · TAILORED EXPERIENCE',
title: 'Custom pack',
cardText: 'Build your own experience by combining the activities that fit your trip.',
description: 'Create your own experience by combining accommodation, surf, wellness and adventure according to the pace of your trip. Tell us what interests you and WavePoint will request a tailored proposal based on your dates, group and priorities.',
questions: {
pack_activities: { label: 'What would you like to combine in your experience?', options: ['Accommodation', 'Surf lessons', 'Surf coaching', 'Witch’s Rock Surf Trip', 'Snorkeling & catamaran', 'Yoga', 'ATV tours', 'Surf Photography', 'Surfskate lessons', 'Retreats'] },
pack_dates: { label: 'When would your trip be?', fields: ['Arrival', 'Departure'] },
pack_notes: { label: 'What should the operator keep in mind?', placeholder: 'Number of people, preferences or special needs.' }
}
}
},
{
id: 'retiros', number: '10', eyebrow: 'RETIROS · EXPERIENCIAS', title: 'Retiros',
cardText: 'Elegí una pausa con intención: surf, descanso, movimiento y comunidad en un mismo viaje.',
description: 'WavePoint Retiros nace de nuestro amor por el surf, la naturaleza y el estilo de vida costero. Son experiencias diseñadas para reconectar contigo mismo, con el mar y con una comunidad vibrante, en uno de los destinos más mágicos de Costa Rica: Tamarindo. Estos retiros están pensados para quienes buscan más que unas vacaciones: buscan transformación, conexión y aventura.',
images: [
'assets/img/optimized/retreat-canva-cover.webp',
'assets/img/optimized/retreat-canva-destination-town.webp',
'assets/img/optimized/retreat-canva-destination-coast.webp',
'assets/img/optimized/retreat-canva-stay-pool.webp',
'assets/img/optimized/retreat-canva-stay-aerial.webp',
'assets/img/optimized/retreat-canva-stay-lounge.webp',
'assets/img/optimized/retreat-canva-stay-coast.webp',
'assets/img/optimized/retreat-canva-yoga-studio.webp',
'assets/img/optimized/retreat-canva-yoga-beach.webp',
'assets/img/optimized/retreat-canva-surf-avellanas.webp',
'assets/img/optimized/retreat-canva-surf-grande.webp',
'assets/img/optimized/retreat-canva-surf-tamarindo.webp',
'assets/img/optimized/retreat-canva-surf-nosara.webp',
'assets/img/optimized/retreat-canva-witch-rock-1.webp',
'assets/img/optimized/retreat-canva-witch-rock-2.webp',
'assets/img/optimized/retreat-canva-coaching-team.webp',
'assets/img/optimized/retreat-canva-surf-photo-1.webp',
'assets/img/optimized/retreat-canva-surf-photo-2.webp',
'assets/img/optimized/retreat-canva-wave-background.webp'
],
imageAlts: [
'Vista aérea de una playa y la costa de Tamarindo',
'Vista aérea de un pueblo costero y su playa',
'Vista aérea de la costa tropical y el mar',
'Piscina y alojamiento de Casa Maderas',
'Casa Maderas rodeada de palmeras',
'Sala de estar de Casa Maderas',
'Vista aérea de Casa Maderas junto a la costa',
'Clase grupal de yoga en un espacio abierto',
'Grupo practicando yoga al aire libre junto a la playa',
'Surfista tomando una ola en Guanacaste',
'Surfista surcando una ola en Costa Rica',
'Surfista surcando una ola en Tamarindo',
'Surfista tomando una ola en Guanacaste',
'Surfista bajo la formación rocosa de Roca Bruja',
'Surfista tomando una ola frente a Roca Bruja',
'Grupo realizando ejercicios de entrenamiento de surf',
'Surfista surcando una ola en Costa Rica',
'Surfista sobre su tabla en el mar',
'Ola turquesa vista desde el aire, como fondo decorativo'
],
imageAltsEn: [
'Aerial view of a beach and coastline in Tamarindo',
'Aerial view of a coastal town and beach',
'Aerial view of a tropical coastline and ocean',
'Pool and accommodation at Casa Maderas',
'Casa Maderas surrounded by palm trees',
'Lounge at Casa Maderas',
'Aerial view of Casa Maderas by the coast',
'Group yoga class in an open-air space',
'Group practicing yoga outdoors by the beach',
'Surfer riding a wave in Guanacaste',
'Surfer riding a wave in Costa Rica',
'Surfer riding a wave in Tamarindo',
'Surfer riding a wave in Guanacaste',
'Surfer beneath the rock formation at Witch’s Rock',
'Surfer riding a wave in front of Witch’s Rock',
'Group doing surf training exercises',
'Surfer riding a wave in Costa Rica',
'Surfer on a board in the ocean',
'Turquoise wave seen from above, used as a decorative background'
],
retreatDetails: {
aboutHeading: '¿Qué son los retiros WavePoint?',
about: 'En WavePoint Retiros te llevamos a vivir días de pura conexión con el mar, el cuerpo y la naturaleza, en uno de los destinos más especiales del surf en Costa Rica. Diseñamos cada experiencia para que no tengas que preocuparte por nada: solo llegar, surfear y disfrutar.',
destinationHeading: 'Los retiros en Tamarindo',
destination: 'Tamarindo es uno de los destinos más consistentes y completos para surfear en Costa Rica. Con olas los 365 días del año, clima cálido todo el tiempo y una variedad de picos ideales para todos los niveles, es el lugar perfecto tanto para aprender como para perfeccionar tu surf. Desde beach breaks suaves hasta secciones más potentes, este pueblo costero lo tiene todo: energía, naturaleza y comunidad surfista.',
stayHeading: 'Descansá en Casa Maderas',
stay: 'Hospedaje frente al mar en uno de los lugares más tranquilos de la zona. La ola que todos los días adorna el paisaje y una travesía en barco a Tamarindo hacen de este lugar un gran punto de partida para un retiro de surf.',
yogaHeading: 'Clases de yoga y breathwork',
yoga: [
'Comenzamos las mañanas o terminamos el día con prácticas guiadas que equilibran cuerpo y mente. El yoga y el breathwork (respiración consciente) te preparan para el surf, aumentan tu energía y te conectan con vos mismo. También ofrecemos talleres de meditación al atardecer para sumergirte en paz y serenidad.',
'Después de actividades revitalizantes, relajate en nuestro espacio común, donde compartir experiencias es clave. Disfrutá de una cena saludable mientras compartís risas y experiencias.',
'Nuestros instructores de yoga te preparan día a día para entrar al agua con más confianza y flexibilidad para los nuevos desafíos.'
],
surfTripsHeading: 'Surf trips guiados a las mejores olas de la zona',
surfTrips: 'Te llevamos a conocer y surfear los mejores picos del área en un horario privado, con todas las tablas incluidas y un profesor local experto en la zona.',
surfHeading: 'Surf coaching, fotos y videoanálisis',
surf: 'No solo vas a surfear, vas a mejorar. Nuestro equipo de coaches te acompaña en cada sesión con feedback personalizado. Además, documentamos tu progreso con fotos profesionales dentro y fuera del agua, y analizamos cada sesión para enfocarnos en los puntos a mejorar en la técnica y hacer de la experiencia algo enriquecedor.',
boatHeading: 'Tour en barco a Roca Bruja',
boat: 'Una aventura imperdible: navegamos hacia uno de los destinos más icónicos del surf costarricense. Una experiencia intensa, rodeada de naturaleza salvaje, olas y paisajes que no se olvidan en el Parque Nacional Santa Rosa, hogar de la mítica Roca Bruja.',
summaryHeading: 'Resumen del paquete',
facts: [
{ label: 'Hospedaje', value: 'Casa de Madera' },
{ label: 'Duración', value: '7 noches / 8 días' },
{ label: 'Capacidad', value: 'Mínimo 8 · máximo 10 personas' },
{ label: 'Nivel', value: 'Intermedio' },
{ label: 'Modalidad', value: 'Surf trip grupal' },
{ label: 'Ubicación', value: 'Tamarindo, Costa Rica' },
{ label: 'Precio', value: 'USD 1.900 por persona' }
],
includedHeading: 'Incluye',
included: [
'6 desayunos',
'5 almuerzos',
'5 cenas',
'1 merienda',
'3 sesiones de yoga con instructor',
'Traslados de llegada y salida al aeropuerto',
'3 traslados a Tamarindo',
'1 traslado de ida a Nosara',
'1 traslado a Playa Avellanas',
'Traslado de ida y vuelta a Roca Bruja',
'Traslado en barco para cruzar a Tamarindo',
'1 clase de surfskate con instructor',
'5 sesiones de surf con instructor',
'7 noches de alojamiento grupal en Casa de Madera'
],
notIncludedHeading: 'No incluye',
notIncluded: ['Pasajes aéreos', 'Seguro de viaje', 'Comidas libres o no incluidas en el itinerario', 'Gastos personales'],
conditionsHeading: 'A tener en cuenta',
conditions: [
'La salida se confirma al alcanzar el mínimo de 8 personas.',
'El itinerario y las actividades pueden cambiar según el oleaje y las condiciones climáticas.'
],
itineraryHeading: 'Itinerario · 8 días',
itinerary: [
{ title: 'Día 1: Llegada a Costa Rica', activities: ['Recepción en el Aeropuerto Internacional Juan Santamaría.', 'Traslado al hospedaje en Tamarindo.', 'Presentación del grupo, merienda y charla sobre el itinerario.', 'Atardecer frente al mar.', 'Traslado de ida y vuelta al centro de Tamarindo para conocer el pueblo.', 'Cena libre (no incluida).'] },
{ title: 'Día 2: Surf trip a Nosara', activities: ['Traslado a Nosara con desayuno a bordo.', 'Surf en Playa Guiones con instructor.', 'Almuerzo incluido en una soda local.', 'Clase de surfskate en el skatepark de Nosara.', 'Regreso al hospedaje.', 'Cena incluida.'] },
{ title: 'Día 3: Playa Grande', activities: ['Yoga grupal por la mañana para activar el cuerpo.', 'Desayuno incluido.', 'Caminata a Playa Grande.', 'Sesión de surf con instructores locales.', 'Almuerzo incluido en Playa Grande.', 'Atardecer y fogón.', 'Noche de pizzas incluida.'] },
{ title: 'Día 4: Avellanas', activities: ['Desayuno incluido.', 'Traslado a Playa Avellanas.', 'Surf con instructor.', 'Almuerzo de burritos en la playa incluido.', 'Regreso al hospedaje.', 'Atardecer y videoanálisis.', 'Noche de tacos.'] },
{ title: 'Día 5: Roca Bruja', activities: ['Salida hacia Roca Bruja a las 5:00 a. m.', 'Sesión de surf y fotografía en Roca Bruja.', 'Instructor acompañante incluido.', 'Desayuno y almuerzo a bordo del barco.', 'Regreso al alojamiento.', 'Traslado a Tamarindo para cenar y recorrer el pueblo.', 'Cena libre (no incluida).'] },
{ title: 'Día 6: Tamarindo', activities: ['Desayuno incluido.', 'Sesión matutina de yoga, estiramientos y breathwork.', 'Traslado en barco a Tamarindo.', 'Sesión de surf con instructor.', 'Regreso al hospedaje.', 'Atardecer y videoanálisis.', 'Cena de asado incluida.'] },
{ title: 'Día 7: Surf y despedida', activities: ['Yoga grupal por la mañana con instructor local.', 'Desayuno incluido.', 'Sesión de surf grupal frente al hospedaje.', 'Almuerzo incluido.', 'Traslado a Tamarindo para disfrutar del atardecer.', 'Última sesión de videoanálisis.', 'Cena de despedida incluida.'] },
{ title: 'Día 8: Regreso', activities: ['Desayuno incluido.', 'Traslado al aeropuerto.', 'Fin del surf trip.'] }
]
},
questions: [
{ id: 'retreat_choice', label: '¿Qué retiro te interesa?', type: 'choice', options: ['Surf trip grupal en Tamarindo · 7 noches / 8 días · USD 1.900 por persona', 'Quiero recomendaciones'] },
{ id: 'retreat_surf_level', label: 'Si el retiro incluye surf: ¿cuál es tu nivel?', type: 'choice', options: ['Primera vez', 'Principiante', 'Intermedio', 'Avanzado'], optional: true },
{ id: 'room_type', label: '¿Qué tipo de habitación prefieres?', type: 'choice', options: ['Compartida', 'Privada', 'Cualquiera de las dos'], optional: true },
{ id: 'retreat_needs', label: '¿Hay alguna necesidad de alimentación o alojamiento que debamos tener en cuenta?', type: 'textarea', placeholder: 'Opcional', optional: true }
],
en: {
eyebrow: 'RETREATS · EXPERIENCES',
title: 'Retreats',
cardText: 'Choose a pause with intention: surf, rest, movement and community in one trip.',
description: 'WavePoint Retreats grew from our love of surfing, nature and the coastal way of life. These experiences are designed to help you reconnect with yourself, the ocean and a vibrant community in Tamarindo, one of Costa Rica’s most magical destinations. They are for people looking for more than a vacation: transformation, connection and adventure.',
imageAlts: [
'Aerial view of a beach and coastline in Tamarindo',
'Aerial view of a coastal town and beach',
'Aerial view of a tropical coastline and ocean',
'Pool and accommodation at Casa Maderas',
'Casa Maderas surrounded by palm trees',
'Lounge at Casa Maderas',
'Aerial view of Casa Maderas by the coast',
'Group yoga class in an open-air space',
'Group practicing yoga outdoors by the beach',
'Surfer riding a wave in Guanacaste',
'Surfer riding a wave in Costa Rica',
'Surfer riding a wave in Tamarindo',
'Surfer riding a wave in Guanacaste',
'Surfer beneath the rock formation at Witch’s Rock',
'Surfer riding a wave in front of Witch’s Rock',
'Group doing surf training exercises',
'Surfer riding a wave in Costa Rica',
'Surfer on a board in the ocean',
'Turquoise wave seen from above, used as a decorative background'
],
retreatDetails: {
aboutHeading: 'What are WavePoint retreats?',
about: 'WavePoint Retreats brings you days of connection with the ocean, your body and nature in one of Costa Rica’s most special surf destinations. We design each experience so you can simply arrive, surf and enjoy.',
destinationHeading: 'Retreats in Tamarindo',
destination: 'Tamarindo is one of Costa Rica’s most consistent and complete surf destinations. With waves throughout the year, warm weather and a variety of breaks for different levels, it is a great place to learn or improve your surfing. From gentle beach breaks to more powerful sections, this coastal town brings together energy, nature and a surf community.',
stayHeading: 'Stay at Casa Maderas',
stay: 'Oceanfront accommodation in one of the area’s most peaceful spots. With a wave in the landscape and a boat crossing to Tamarindo, it makes a welcoming base for a surf retreat.',
yogaHeading: 'Yoga and breathwork',
yoga: [
'Start your mornings or end your day with guided practices that balance body and mind. Yoga and breathwork prepare you for surfing, boost your energy and help you reconnect with yourself. Sunset meditation workshops invite you to slow down and find peace.',
'After energizing activities, relax in our shared space, where sharing experiences is part of the journey. Enjoy a healthy dinner and good conversation.',
'Our yoga instructors help you feel more confident and flexible in the water, ready for new challenges.'
],
surfTripsHeading: 'Guided surf trips to the best waves in the area',
surfTrips: 'We take you to explore and surf the area’s best breaks in a private session, with all boards included and an experienced local instructor.',
surfHeading: 'Surf coaching, photos and video analysis',
surf: 'You will not only surf; you will improve. Our coaching team gives you personalized feedback in each session. We also document your progress with professional photos in and out of the water, and review each session to focus on technique and make the experience more rewarding.',
boatHeading: 'Boat trip to Witch’s Rock',
boat: 'An unforgettable adventure: we head by boat to one of Costa Rica’s most iconic surf destinations. Surrounded by wild nature, waves and unforgettable scenery in Santa Rosa National Park, home of Witch’s Rock.',
summaryHeading: 'Package overview',
facts: [
{ label: 'Accommodation', value: 'Casa de Madera' },
{ label: 'Duration', value: '7 nights / 8 days' },
{ label: 'Group size', value: 'Minimum 8 · maximum 10 people' },
{ label: 'Level', value: 'Intermediate' },
{ label: 'Format', value: 'Group surf trip' },
{ label: 'Location', value: 'Tamarindo, Costa Rica' },
{ label: 'Price', value: 'USD 1,900 per person' }
],
includedHeading: 'Included',
included: [
'6 breakfasts',
'5 lunches',
'5 dinners',
'1 snack',
'3 instructor-led yoga sessions',
'Airport transfers on arrival and departure',
'3 transfers to Tamarindo',
'One-way transfer to Nosara',
'Transfer to Playa Avellanas',
'Round-trip transfer to Witch’s Rock',
'Boat crossing to Tamarindo',
'1 surfskate lesson with an instructor',
'5 surf sessions with an instructor',
'7 nights of shared accommodation at Casa de Madera'
],
notIncludedHeading: 'Not included',
notIncluded: ['Airfare', 'Travel insurance', 'Meals marked as not included in the itinerary', 'Personal expenses'],
conditionsHeading: 'Please note',
conditions: [
'The trip is confirmed once the minimum of 8 participants is reached.',
'The itinerary and activities may change depending on the swell and weather conditions.'
],
itineraryHeading: 'Itinerary · 8 days',
itinerary: [
{ title: 'Day 1: Arrival in Costa Rica', activities: ['Welcome at Juan Santamaría International Airport.', 'Transfer to the accommodation in Tamarindo.', 'Meet the group, enjoy a snack and go over the itinerary.', 'Sunset by the ocean.', 'Round-trip transfer to downtown Tamarindo to explore the town.', 'Dinner on your own (not included).'] },
{ title: 'Day 2: Surf trip to Nosara', activities: ['Transfer to Nosara with breakfast on board.', 'Surf at Playa Guiones with an instructor.', 'Lunch at a local soda restaurant included.', 'Surfskate lesson at the Nosara skatepark.', 'Return to the accommodation.', 'Dinner included.'] },
{ title: 'Day 3: Playa Grande', activities: ['Morning group yoga to get the body moving.', 'Breakfast included.', 'Walk to Playa Grande.', 'Surf session with local instructors.', 'Lunch in Playa Grande included.', 'Sunset and a bonfire.', 'Pizza night included.'] },
{ title: 'Day 4: Avellanas', activities: ['Breakfast included.', 'Transfer to Playa Avellanas.', 'Surf with an instructor.', 'Burrito lunch on the beach included.', 'Return to the accommodation.', 'Sunset and video analysis.', 'Taco night.'] },
{ title: 'Day 5: Witch’s Rock', activities: ['Depart for Witch’s Rock at 5:00 a.m.', 'Surf and photography session at Witch’s Rock.', 'Accompanying instructor included.', 'Breakfast and lunch on board the boat.', 'Return to the accommodation.', 'Transfer to Tamarindo for dinner and an evening in town.', 'Dinner on your own (not included).'] },
{ title: 'Day 6: Tamarindo', activities: ['Breakfast included.', 'Morning yoga, stretching and breathwork.', 'Boat transfer to Tamarindo.', 'Surf session with an instructor.', 'Return to the accommodation.', 'Sunset and video analysis.', 'Barbecue dinner included.'] },
{ title: 'Day 7: Surf and farewell', activities: ['Morning group yoga with a local instructor.', 'Breakfast included.', 'Group surf session in front of the accommodation.', 'Lunch included.', 'Transfer to Tamarindo to enjoy the sunset.', 'Final video analysis session.', 'Farewell dinner included.'] },
{ title: 'Day 8: Departure', activities: ['Breakfast included.', 'Transfer to the airport.', 'End of the surf trip.'] }
]
},
questions: {
retreat_choice: { label: 'Which retreat are you interested in?', options: ['Group surf trip in Tamarindo · 7 nights / 8 days · USD 1,900 per person', 'I want recommendations'] },
retreat_surf_level: { label: 'If the retreat includes surf: what is your level?', options: ['First time', 'Beginner', 'Intermediate', 'Advanced'] },
room_type: { label: 'What room type do you prefer?', options: ['Shared', 'Private', 'Either is fine'] },
retreat_needs: { label: 'Are there any dietary or accommodation needs we should keep in mind?', placeholder: 'Optional' }
}
}
}
];
const serviceOrder = ['alojamiento-experiencias', 'clases-de-surf', 'surf-coaching', 'roca-bruja', 'snorkel-catamaran', 'yoga', 'atv', 'surf-fotografia', 'surfskate', 'pack-ajustable', 'retiros'];
services.sort((left, right) => serviceOrder.indexOf(left.id) - serviceOrder.indexOf(right.id));
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&', '<': '<', '>': '>', '"': '"', "'": "'" }[char]));
const getService = () => { const id = new URLSearchParams(location.search).get('service'); return services.find(item => item.id === id) || services[0]; };
let lang = (() => { try { return localStorage.getItem('wavepoint-lang') === 'es' ? 'es' : 'en'; } catch (error) { return 'en'; } })();
const hasEn = service => lang === 'en' && Boolean(service.en);
const localizeService = service => {
if (!hasEn(service)) return service;
const { questions: questionsEn = {}, ...rest } = service.en;
return { ...service, ...rest, questions: service.questions.map(question => ({ ...question, ...(questionsEn[question.id] || {}) })) };
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
const uiFor = service => hasEn(service) ? FORM_UI.en : FORM_UI.es;
const inputId = (service, question) => `${service.id}-${question.id}`;
const PACK_SERVICE_CARDS = {
'Alojamiento': { title: { es: 'Estadías y hoteles', en: 'Stays & hotels' }, detail: { es: 'Un lugar cómodo y algo más para vivir Tamarindo.', en: 'A comfortable place to enjoy Tamarindo even more.' }, image: 'assets/img/hotels/stayandhotels5_resultado.webp' },
'Accommodation': { title: { es: 'Estadías y hoteles', en: 'Stays & hotels' }, detail: { es: 'Un lugar cómodo y algo más para vivir Tamarindo.', en: 'A comfortable place to enjoy Tamarindo even more.' }, image: 'assets/img/hotels/stayandhotels5_resultado.webp' },
'Surf lessons': { title: { es: 'Clases de surf', en: 'Surf lessons' }, detail: { es: 'Tu primera ola o el siguiente paso.', en: 'Your first wave or the next step.' }, image: 'assets/img/optimized/surf-lesson-woman.webp' },
'Clases de surf': { title: { es: 'Clases de surf', en: 'Surf lessons' }, detail: { es: 'Tu primera ola o el siguiente paso.', en: 'Your first wave or the next step.' }, image: 'assets/img/optimized/surf-lesson-woman.webp' },
'Surf coaching': { title: { es: 'Surf coaching', en: 'Surf coaching' }, detail: { es: 'Entrenamiento personalizado con video-análisis.', en: 'Personalized coaching with video analysis.' }, image: 'assets/legacy/DSC02807.jpg' },
'Entrenamiento de surf': { title: { es: 'Surf coaching', en: 'Surf coaching' }, detail: { es: 'Entrenamiento personalizado con video-análisis.', en: 'Personalized coaching with video analysis.' }, image: 'assets/legacy/DSC02807.jpg' },
'Yoga': { title: { es: 'Yoga', en: 'Yoga' }, detail: { es: 'Bajá el ritmo y encontrá tu pausa.', en: 'A little space to breathe.' }, image: 'assets/img/optimized/yoga-beach-woman.jpg' },
'Witch’s Rock Surf Trip': { title: { es: 'Roca Bruja', en: 'Witch’s Rock Surf Trip' }, detail: { es: 'Una salida guiada a un spot inolvidable.', en: 'A guided outing to an unforgettable spot.' }, image: 'assets/img/optimized/witch-rock-surf-trip.webp' },
'Roca Bruja': { title: { es: 'Roca Bruja', en: 'Witch’s Rock Surf Trip' }, detail: { es: 'Una salida guiada a un spot inolvidable.', en: 'A guided outing to an unforgettable spot.' }, image: 'assets/img/optimized/witch-rock-surf-trip.webp' },
'Fotos de surf': { title: { es: 'Fotos de surf', en: 'Surf Photography' }, detail: { es: 'Tus mejores olas, capturadas por fotógrafos locales.', en: 'Your best waves, captured by local photographers.' }, image: 'assets/img/optimized/surf-photographer-wave.jpg' },
'Surf Photography': { title: { es: 'Fotos de surf', en: 'Surf Photography' }, detail: { es: 'Tus mejores olas, capturadas por fotógrafos locales.', en: 'Your best waves, captured by local photographers.' }, image: 'assets/img/optimized/surf-photographer-wave.jpg' },
'Snorkeling & catamaran': { title: { es: 'Snorkel y catamarán', en: 'Snorkeling & catamaran' }, detail: { es: 'Mar, navegación y tiempo para explorar.', en: 'Sea, sailing and time to explore.' }, image: 'assets/img/optimized/snorkel-turtle.webp' },
'Snorkel y catamarán': { title: { es: 'Snorkel y catamarán', en: 'Snorkeling & catamaran' }, detail: { es: 'Mar, navegación y tiempo para explorar.', en: 'Sea, sailing and time to explore.' }, image: 'assets/img/optimized/snorkel-turtle.webp' },
'ATV tours': { title: { es: 'Tours en cuatriciclo — ATV', en: 'ATV tours' }, detail: { es: 'Aventura y caminos de Guanacaste.', en: 'Adventure and trails in Guanacaste.' }, image: 'assets/img/optimized/atv-forest-tour.jpg' },
'Tours en cuatriciclo — ATV': { title: { es: 'Tours en cuatriciclo — ATV', en: 'ATV tours' }, detail: { es: 'Aventura y caminos de Guanacaste.', en: 'Adventure and trails in Guanacaste.' }, image: 'assets/img/optimized/atv-forest-tour.jpg' },
'Clases de surfskate': { title: { es: 'Clases de surfskate', en: 'Surfskate Lessons' }, detail: { es: 'Encontrá tu flow en tierra.', en: 'Find your flow on land.' }, image: 'assets/img/optimized/surfskate.webp' },
'Surfskate lessons': { title: { es: 'Clases de surfskate', en: 'Surfskate Lessons' }, detail: { es: 'Encontrá tu flow en tierra.', en: 'Find your flow on land.' }, image: 'assets/img/optimized/surfskate.webp' },
'Retreats': { title: { es: 'Retiros', en: 'Retreats' }, detail: { es: 'Un viaje con programa, descanso y comunidad.', en: 'A trip with a program, rest, and community.' }, image: 'assets/img/optimized/retreat-canva-cover.webp' },
'Retiros': { title: { es: 'Retiros', en: 'Retreats' }, detail: { es: 'Un viaje con programa, descanso y comunidad.', en: 'A trip with a program, rest, and community.' }, image: 'assets/img/optimized/retreat-canva-cover.webp' }
};
function renderQuestion(service, question) {
const id = inputId(service, question);
const optional = question.optional ? `<span class="detail-optional">${uiFor(service).optional}</span>` : '';
if (service.id === 'pack-ajustable' && question.id === 'pack_activities') {
const packIntro = lang === 'en' ? 'Choose two or more cards and we’ll build a custom experience for you.' : 'Elegí dos o más tarjetas y armamos una experiencia a tu medida.';
return `<fieldset class="detail-question pack-question"><legend>${esc(question.label)} ${optional}</legend><p class="pack-question-intro">${packIntro}</p><div class="pack-service-grid">${question.options.map(option => { const card = PACK_SERVICE_CARDS[option] || PACK_SERVICE_CARDS[Object.keys(PACK_SERVICE_CARDS).find(key => key.toLowerCase() === option.toLowerCase())]; const cardTitle = typeof card?.title === 'string' ? card.title : (card?.title?.[lang] || card?.title?.es || ''); const cardDetail = typeof card?.detail === 'string' ? card.detail : (card?.detail?.[lang] || card?.detail?.es || ''); const cardImage = card?.image || ''; return `<label class="pack-service-card"><input type="checkbox" name="${question.id}" value="${esc(option)}" /><span class="pack-service-image"><img src="${cardImage}" alt="" loading="lazy" /><span class="pack-service-check" aria-hidden="true">✓</span></span><span class="pack-service-copy"><strong>${esc(cardTitle)}</strong><small>${esc(cardDetail)}</small></span></label>`; }).join('')}</div><p class="pack-selection-count" data-pack-selection>${lang === 'en' ? '0 experiences selected' : '0 experiencias seleccionadas'}</p></fieldset>`;
}
if (question.type === 'headcount') return `<fieldset class="detail-question headcount-question"><legend>${esc(question.label)} ${optional}</legend><div class="detail-date-grid">${question.fields.map((field, index) => `<label for="${id}-${field.id}">${esc(field.label)}<input id="${id}-${field.id}" name="${question.id}-${field.id}" type="number" min="${index === 0 ? 1 : 0}" step="1" inputmode="numeric" placeholder="${index === 0 ? '1' : '0'}" required /></label>`).join('')}</div><p class="headcount-note">${esc(question.note)}</p><label class="headcount-ages" for="${id}-ages"><span>${esc(question.agesLabel)} <span class="detail-optional">${uiFor(service).optional}</span></span><input id="${id}-ages" name="${question.id}-ages" type="text" placeholder="${esc(question.agesPlaceholder)}" /></label></fieldset>`;
if (question.type === 'dates') return `<fieldset class="detail-question"><legend>${esc(question.label)} ${optional}</legend><div class="detail-date-grid">${question.fields.map(field => `<label for="${id}-${field}">${esc(field)}<input id="${id}-${field}" name="${question.id}-${field}" type="date" ${question.optional ? '' : 'required'} /></label>`).join('')}</div></fieldset>`;
if (question.type === 'choice' || question.type === 'multi') return `<fieldset class="detail-question"><legend>${esc(question.label)} ${optional}</legend><div class="detail-options">${question.options.map((option, index) => `<label class="detail-option"><input type="${question.type === 'multi' ? 'checkbox' : 'radio'}" name="${question.id}" value="${esc(option)}" ${question.type === 'choice' && index === 0 && !question.optional ? 'required' : ''} /><span>${esc(option)}</span></label>`).join('')}</div></fieldset>`;
const type = question.type === 'number' ? 'number' : question.type === 'money' ? 'text' : 'text';
return `<label class="detail-question detail-field" for="${id}"><span>${esc(question.label)} ${optional}</span><${question.type === 'textarea' ? 'textarea' : 'input'} id="${id}" name="${question.id}" type="${type}" placeholder="${esc(question.placeholder || '')}" ${question.optional ? '' : 'required'}></${question.type === 'textarea' ? 'textarea' : 'input'}></label>`;
}
function renderAccommodationOption(option, index) {
const gallery = option.images.map((image, imageIndex) => {
const localizedAlt = lang === 'en' ? option.imageAltsEn?.[imageIndex] : option.imageAlts?.[imageIndex];
return `<img src="${image}" alt="${esc(localizedAlt || `${option.imageAlt} · ${lang === 'en' ? 'view' : 'vista'} ${imageIndex + 1}`)}" loading="lazy" />`;
}).join('');
const details = option.details.map(detail => `<li>${esc(detail)}</li>`).join('');
const amenities = option.amenities.map(item => `<li>${esc(item)}</li>`).join('');
const detailsHeading = lang === 'en' ? 'Options & rates' : 'Opciones y tarifas';
const amenitiesHeading = lang === 'en' ? 'Services & conditions' : 'Servicios y condiciones';
return `<article class="accommodation-card accommodation-card-${index + 1}"><div class="accommodation-gallery">${gallery}</div><div class="accommodation-card-body"><p class="accommodation-category">${esc(option.category)}</p><div class="accommodation-card-title"><h3>${esc(option.name)}</h3><div class="accommodation-price"><strong>${esc(option.price)}</strong><span>${esc(option.priceNote)}</span></div></div><p class="accommodation-summary">${esc(option.summary)}</p><div class="accommodation-columns"><div><h4>${detailsHeading}</h4><ul>${details}</ul></div><div><h4>${amenitiesHeading}</h4><ul>${amenities}</ul></div></div></div></article>`;
}
function renderAccommodationStory(service) {
const isEn = lang === 'en';
const gallery = service.images.slice(1).map((image, index) => `<img src="${esc(image)}" alt="${esc((isEn ? service.imageAltsEn?.[index + 1] : service.imageAlts?.[index + 1]) || `${uiFor(service).galleryAlt} ${index + 2}`)}" loading="lazy" />`).join('');
return `<p class="service-page-kicker">${isEn ? 'ACCOMMODATIONS IN TAMARINDO' : 'ALOJAMIENTOS EN TAMARINDO'}</p><h2>${isEn ? 'Accommodation options in Tamarindo' : 'Opciones de alojamiento en Tamarindo'}</h2><p>${esc(service.description)}</p><div class="detail-gallery accommodation-photo-gallery">${gallery}</div><div class="accommodation-rate-note"><strong>${isEn ? 'Rates in USD' : 'Tarifas en USD'}</strong><span>${isEn ? 'All rates are shown in US dollars (USD) per night.' : 'Todas las tarifas están expresadas en dólares estadounidenses (USD), por noche.'}</span></div><div class="accommodation-grid">${service.accommodationOptions.map(renderAccommodationOption).join('')}</div>`;
}
function renderSurfLessonStory(service) {
const ui = uiFor(service);
const isEn = lang === 'en';
const gallery = service.images.slice(1).map((image, index) => `<img src="${image}" alt="${esc(service.imageAlts?.[index + 1] || `${ui.galleryAlt} ${index + 2}`)}" loading="lazy" />`).join('');
return `<p class="service-page-kicker">${isEn ? 'SURF LESSONS · TAMARINDO' : 'CLASES DE SURF · TAMARINDO'}</p><h2>${isEn ? 'Ready to surf?' : '¿Listo para surfear?'}</h2><p class="surf-lesson-lead">${isEn ? 'Tell us your level and what you’d like to learn. We’ll find a lesson that fits.' : 'Contanos tu nivel y qué te gustaría aprender. Te ayudamos a encontrar una clase que te quede bien.'}</p><p class="surf-lesson-description">${esc(service.description)}</p><div class="detail-gallery surf-lesson-gallery">${gallery}</div><div class="surf-lesson-survey-intro"><span class="surf-lesson-survey-mark">02</span><div><p class="service-page-kicker">${isEn ? 'SURF LESSONS · QUICK CHECK-IN' : 'CLASES DE SURF · CONSULTA RÁPIDA'}</p><h3>${ui.surveyHeading}</h3><p>${ui.surveyText}</p><button class="surf-survey-open" type="button" data-open-surf-survey>${ui.surveyOpen} <span aria-hidden="true">↗</span></button></div></div>`;
}
function renderWitchRockStory(service) {
const isEn = lang === 'en';
const kicker = isEn ? 'SURF TRIP · ADVENTURE' : 'VIAJE DE SURF · AVENTURA';
return `<p class="service-page-kicker">${kicker}</p><h2>${esc(service.lead)}</h2><p>${esc(service.description)}</p><p>${esc(service.coordination)}</p><div class="detail-gallery witch-rock-gallery"><img src="${service.images[1]}" alt="${esc(service.galleryAlt)}" loading="lazy" /></div>`;
}
function renderSurfPhotographyStory(service) {
const kicker = lang === 'en' ? 'SURF PHOTOGRAPHY · TAMARINDO' : 'FOTOGRAFÍA DE SURF · TAMARINDO';
const gallery = service.images.map((image, index) => `<img src="${esc(image)}" alt="${esc(service.imageAlts?.[index] || `${service.title} · ${lang === 'en' ? 'photo' : 'foto'} ${index + 1}`)}" loading="lazy" />`).join('');
return `<p class="service-page-kicker">${kicker}</p><p>${esc(service.description)}</p><div class="detail-gallery">${gallery}</div>`;
}
function renderSurfskateStory(service) {
const kicker = 'SURFSKATE · TAMARINDO';
const gallery = service.images.map((image, index) => `<img src="${esc(image)}" alt="${esc(service.imageAlts?.[index] || `${service.title} · ${lang === 'en' ? 'photo' : 'foto'} ${index + 1}`)}" loading="lazy" />`).join('');
return `<p class="service-page-kicker">${kicker}</p><h2>${esc(service.cardText)}</h2><p>${esc(service.description)}</p>${service.includes ? `<div class="service-includes"><h3>${lang === 'en' ? 'Includes' : 'Incluye'}</h3><ul>${service.includes.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>` : ''}<div class="detail-gallery">${gallery}</div>`;
}
function renderRetreatStory(service) {
const details = service.retreatDetails;
const isEn = lang === 'en';
const facts = details.facts.map(fact => `<div class="retreat-fact"><dt>${esc(fact.label)}</dt><dd>${esc(fact.value)}</dd></div>`).join('');
const included = details.included.map(item => `<li>${esc(item)}</li>`).join('');
const notIncluded = details.notIncluded.map(item => `<li>${esc(item)}</li>`).join('');
const conditions = details.conditions.map(item => `<li>${esc(item)}</li>`).join('');
const itinerary = details.itinerary.map((day, index) => `<article class="retreat-day"><span class="retreat-day-number">${String(index + 1).padStart(2, '0')}</span><div><h4>${esc(day.title)}</h4><ul>${day.activities.map(activity => `<li>${esc(activity)}</li>`).join('')}</ul></div></article>`).join('');
const photo = index => `<img src="${esc(service.images[index])}" alt="${esc((isEn ? service.imageAltsEn?.[index] : service.imageAlts?.[index]) || `${service.title} · ${lang === 'en' ? 'photo' : 'foto'} ${index + 1}`)}" loading="lazy" />`;
const photoGrid = (indexes, className) => `<div class="retreat-photo-grid ${className}">${indexes.map(photo).join('')}</div>`;
const introAlt = esc((isEn ? service.imageAltsEn?.[0] : service.imageAlts?.[0]) || (isEn ? 'Sunset on the coast of Costa Rica' : 'Atardecer en la costa de Costa Rica'));
const priceFact = details.facts.find(fact => fact.label === (isEn ? 'Price' : 'Precio')) || details.facts[details.facts.length - 1];
const durationFact = details.facts.find(fact => fact.label === (isEn ? 'Duration' : 'Duración'));
return `<div class="retreat-editorial">
  <section class="retreat-cover">
    <div class="retreat-cover-copy">
      <p class="retreat-cover-kicker">${isEn ? 'WAVEPOINT RETREATS · TAMARINDO' : 'WAVEPOINT RETIROS · TAMARINDO'}</p>
      <h2>${esc(details.aboutHeading)}</h2>
      <p class="retreat-intro">${esc(service.description)}</p>
      <p class="retreat-cover-about">${esc(details.about)}</p>
      <div class="retreat-cover-facts">${durationFact ? `<span>${esc(durationFact.value)}</span>` : ''}<span>${esc(priceFact.value)}</span></div>
    </div>
    <figure class="retreat-cover-image"><img src="${esc(service.images[0])}" alt="${introAlt}" loading="eager" /></figure>
  </section>
  <div class="retreat-experience-grid">
    <section class="retreat-experience-card retreat-destination-card">
      ${photoGrid([1, 2], 'retreat-destination-photos')}
      <div><p class="retreat-card-kicker">${isEn ? 'THE DESTINATION' : 'EL DESTINO'}</p><h3>${esc(details.destinationHeading)}</h3><p>${esc(details.destination)}</p></div>
    </section>
    <section class="retreat-experience-card retreat-stay-card">
      ${photoGrid([3, 4, 5, 6], 'retreat-stay-photos')}
      <div><p class="retreat-card-kicker">${isEn ? 'A PLACE TO UNWIND' : 'UN LUGAR PARA DESCANSAR'}</p><h3>${esc(details.stayHeading)}</h3><p>${esc(details.stay)}</p></div>
    </section>
    <section class="retreat-experience-card retreat-yoga-card">
      ${photoGrid([7, 8], 'retreat-yoga-photos')}
      <div><p class="retreat-card-kicker">${isEn ? 'MOVE & RESET' : 'MOVIMIENTO Y PAUSA'}</p><h3>${esc(details.yogaHeading)}</h3>${details.yoga.map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}</div>
    </section>
    <section class="retreat-experience-card retreat-surf-trips-card">
      ${photoGrid([9, 10, 11, 12], 'retreat-surf-trip-photos')}
      <div><p class="retreat-card-kicker">${isEn ? 'GUIDED SURF TRIPS' : 'SURF TRIPS GUIADOS'}</p><h3>${esc(details.surfTripsHeading)}</h3><p>${esc(details.surfTrips)}</p></div>
    </section>
    <section class="retreat-experience-card retreat-boat-card">
      ${photoGrid([13, 14], 'retreat-boat-photos')}
      <div><p class="retreat-card-kicker">${isEn ? 'BOAT TRIP · ADVENTURE' : 'TOUR EN BARCO · AVENTURA'}</p><h3>${esc(details.boatHeading)}</h3><p>${esc(details.boat)}</p></div>
    </section>
    <section class="retreat-experience-card retreat-surf-card">
      ${photoGrid([15, 16, 17], 'retreat-coaching-photos')}
      <div><p class="retreat-card-kicker">${isEn ? 'COACHING · PHOTOS · VIDEO ANALYSIS' : 'COACHING · FOTOS · VIDEOANÁLISIS'}</p><h3>${esc(details.surfHeading)}</h3><p>${esc(details.surf)}</p></div>
    </section>
  </div>
  <section class="retreat-summary">
    <p class="retreat-card-kicker">${isEn ? 'THE DETAILS' : 'LOS DETALLES'}</p>
    <h3>${esc(details.summaryHeading)}</h3>
    <dl class="retreat-summary-grid">${facts}</dl>
    <div class="retreat-lists">
      <section class="retreat-list retreat-list-included"><h4>${esc(details.includedHeading)}</h4><ul>${included}</ul></section>
      <section class="retreat-list"><h4>${esc(details.notIncludedHeading)}</h4><ul>${notIncluded}</ul></section>
    </div>
    <section class="retreat-conditions"><h4>${esc(details.conditionsHeading)}</h4><ul>${conditions}</ul></section>
  </section>
  <section class="retreat-itinerary-section">
    <p class="retreat-card-kicker">${isEn ? 'THE JOURNEY' : 'EL RECORRIDO'}</p>
    <h3>${esc(details.itineraryHeading)}</h3>
    <div class="retreat-itinerary">${itinerary}</div>
  </section>
</div>`;
}
function render(service) {
const ui = uiFor(service);
document.documentElement.lang = lang;
document.title = `${service.title} · WavePoint`;
document.body.classList.toggle('accommodation-detail-page', service.id === 'alojamiento-experiencias');
document.body.style.setProperty('--service-detail-image', `url(${JSON.stringify(service.images[0])})`);
const position = services.findIndex(item => item.id === service.id);
const prevService = services[(position - 1 + services.length) % services.length];
const nextService = services[(position + 1) % services.length];
const arrowLabel = { es: ['Servicio anterior', 'Servicio siguiente'], en: ['Previous service', 'Next service'] }[lang];
const heroArrows = `<nav class="detail-hero-arrows" aria-label="${lang === 'en' ? 'Browse services' : 'Recorrer servicios'}"><a class="detail-arrow detail-arrow-prev" href="service-detail.html?service=${prevService.id}" rel="prev" aria-label="${arrowLabel[0]}: ${esc(prevService.title)}" title="${esc(prevService.title)}"><svg viewBox="0 0 24 40" aria-hidden="true" focusable="false"><path d="M19 3 4 20l15 17"/></svg></a><a class="detail-arrow detail-arrow-next" href="service-detail.html?service=${nextService.id}" rel="next" aria-label="${arrowLabel[1]}: ${esc(nextService.title)}" title="${esc(nextService.title)}"><svg viewBox="0 0 24 40" aria-hidden="true" focusable="false"><path d="M5 3l15 17L5 37"/></svg></a></nav>`;
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
: service.id === 'roca-bruja'
? renderWitchRockStory(service)
: service.id === 'surf-fotografia'
? renderSurfPhotographyStory(service)
: service.id === 'surfskate'
? renderSurfskateStory(service)
: service.id === 'retiros'
? renderRetreatStory(service)
: `<p class="service-page-kicker">${lang === 'en' ? 'THE EXPERIENCE' : 'LA EXPERIENCIA'}</p><h2>${lang === 'en' ? 'A plan designed for your trip.' : 'Un plan pensado para tu viaje.'}</h2><p>${esc(service.description)}</p>${service.includes ? `<div class="service-includes"><h3>${lang === 'en' ? 'Includes' : 'Incluye'}</h3><ul>${service.includes.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>` : ''}<div class="detail-gallery">${service.images.map((image, index) => `<img src="${esc(image)}" alt="${esc(service.imageAlts?.[index] || `${service.title} · ${lang === 'en' ? 'photo' : 'foto'} ${index + 1}`)}" loading="lazy" />`).join('')}</div>`;
const surfSurveyModal = service.id === 'clases-de-surf' ? `<dialog class="surf-survey-modal" id="surfSurveyModal" aria-labelledby="surfSurveyTitle"><div class="surf-survey-modal-shell"><div class="surf-survey-modal-head"><div><p class="service-page-kicker">${lang === 'en' ? 'READY TO SURF?' : '¿LISTO PARA SURFEAR?'}</p><h2 id="surfSurveyTitle">${ui.modalTitle}</h2><p>${ui.modalText}</p></div><button class="surf-survey-close" type="button" data-close-surf-survey aria-label="${ui.modalClose}">×</button></div><div id="surfSurveyModalBody"></div></div></dialog>` : '';
document.getElementById('serviceDetailRoot').innerHTML = `<section class="detail-hero">${heroArrows}<div class="container detail-hero-content"><p class="service-page-kicker">${esc(service.eyebrow)}</p><p class="detail-index">${String(position + 1).padStart(2, '0')} / ${services.length}</p><h1>${esc(service.title)}</h1><p class="detail-hero-intro">${esc(service.cardText)}</p></div></section><section class="detail-content"><div class="container detail-layout"><article class="detail-story${service.id === 'retiros' ? ' detail-story-retreats' : ''}">${story}</article><aside class="detail-request" id="detailRequestPanel"><div class="detail-request-head"><p class="service-page-kicker">${lang === 'en' ? 'BOOK REQUEST' : 'SOLICITUD'}</p><h2>${ui.requestTitle}</h2><p>${ui.requestText}</p></div><form id="serviceRequestForm" novalidate>${formQuestions}<label class="detail-question detail-field" for="request-contact"><span>${ui.extraLabel} <span class="detail-optional">${ui.optional}</span></span><textarea id="request-contact" name="request-contact" placeholder="${ui.extraPlaceholder}"></textarea></label><button class="detail-submit" type="submit">${esc(service.submitLabel || ui.submit)}</button><p class="detail-form-note">${ui.note}</p><p class="detail-error" id="detailError" role="alert"></p></form></aside></div></section>${surfSurveyModal}`;
if (service.id === 'pack-ajustable') {
const packGrid = document.querySelector('.pack-service-grid');
const count = document.querySelector('[data-pack-selection]');
const updatePackCount = () => {
const selected = packGrid ? packGrid.querySelectorAll('input:checked').length : 0;
if (count) count.textContent = lang === 'en'
? (selected === 1 ? '1 experience selected' : `${selected} experiences selected`)
: `${selected} ${selected === 1 ? 'experiencia seleccionada' : 'experiencias seleccionadas'}`;
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
if (question.type === 'headcount') {
const parts = question.fields.map(field => { const value = form.elements[`${question.id}-${field.id}`]?.value.trim(); return value ? `${field.label}: ${value}` : ''; }).filter(Boolean);
const ages = form.elements[`${question.id}-ages`]?.value.trim();
if (parts.length) lines.push(`${question.label} ${parts.join(' / ')}`);
if (ages) lines.push(`${question.agesLabel}: ${ages}`);
return;
}
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
