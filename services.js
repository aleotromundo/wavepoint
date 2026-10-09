(() => {
const WHATSAPP = '50660399194';
const services = [
{
id: 'alojamiento-experiencias', number: '01', eyebrow: 'ESTADÍAS · HOTELES', title: 'Estadías y hoteles',
cardText: 'Hoteles y alojamientos frente al mar para cada tipo de viaje.',
description: 'Encontrá una opción de alojamiento que se adapte a tu presupuesto, el tamaño de tu grupo y el ritmo de tu estadía en Tamarindo. Estas tarifas están expresadas en dólares estadounidenses (USD), por noche. WavePoint consulta disponibilidad y condiciones con el alojamiento antes de acercarte una propuesta.',
images: [
'assets/img/stays/unverified/hotels/stayandhotels5_resultado.webp',
'assets/img/stays/unverified/hotels/stayandhotels6_resultado.webp',
'assets/img/stays/tamalodge/cover.webp',
'assets/img/stays/unverified/hotels/stayandhotels2_resultado.webp',
'assets/img/stays/unverified/hotels/stayandhotels3_resultado.webp',
'assets/img/stays/casa-aura/stayandhotels4_resultado.webp',
'assets/img/stays/unverified/hotels/stayandhotels_resultado.webp'
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
id: 'tamalodge',
category: 'OPCIÓN ECONÓMICA', name: 'Hotel Tamalodge',
price: 'USD 50', priceNote: 'por habitación · por noche',
summary: 'Una habitación privada con baño privado para una estadía simple y funcional.',
images: ['assets/img/stays/tamalodge/cover.webp', 'assets/img/stays/tamalodge/room-with-kitchen.jpg', 'assets/img/stays/tamalodge/simple-room.jpg'],
imageAlt: 'Entrada de Hotel Tamalodge entre jardines',
imageAlts: ['Entrada de Hotel Tamalodge entre jardines', 'Habitación de Hotel Tamalodge con cocina', 'Habitación sencilla de Hotel Tamalodge'],
imageAltsEn: ['Hotel Tamalodge entrance among the gardens', 'Hotel Tamalodge room with a kitchen', 'Simple room at Hotel Tamalodge'],
details: ['Habitación privada con baño privado.'],
amenities: ['Piscina', 'Cocina compartida', 'WiFi', 'Mesa de ping-pong'],
en: {
category: 'BUDGET OPTION',
priceNote: 'per room · per night',
summary: 'A private room with a private bathroom for a simple, functional stay.',
details: ['Private room with a private bathroom.'],
amenities: ['Pool', 'Shared kitchen', 'WiFi', 'Ping-pong table']
}
},
{
id: 'casa-aura',
category: 'OPCIÓN MEDIA', name: 'Casa Aura',
price: 'USD 80–210', priceNote: 'por unidad · por noche',
summary: 'Alojamiento frente al mar con habitaciones, apartamentos y desayuno incluido según la unidad.',
images: [
'assets/img/stays/casa-aura/casa-aura-exterior.webp',
'assets/img/stays/casa-aura/casa-aura-common-area.webp',
'assets/img/stays/casa-aura/stayandhotels4_resultados.webp'
],
imageAlt: 'Entrada de Casa Aura en Tamarindo',
imageAlts: ['Entrada de Casa Aura en Tamarindo', 'Área común de madera de Casa Aura', 'Interior de Casa Aura con sala y cocina'],
imageAltsEn: ['Casa Aura entrance in Tamarindo', 'Casa Aura wooden common area', 'Casa Aura living room and kitchen'],
details: [
'Habitación doble — USD 80 · baño privado · desayuno incluido · 1 habitación.',
'Habitación cuádruple — USD 120 · una cama matrimonial y una litera · baño privado · desayuno incluido · 3 habitaciones.',
'Habitación cuádruple con terraza — USD 130 · dos camas matrimoniales · baño privado · terraza · desayuno incluido · 1 habitación.',
'Apartamento completo — USD 210 · capacidad para 8 personas · dos habitaciones con camas matrimoniales y literas · un baño · living y cocina · 2 apartamentos.'
],
amenities: ['Frente al mar', 'Desayuno incluido según la unidad'],
en: {
category: 'MID-RANGE OPTION',
priceNote: 'per unit · per night',
summary: 'Beachfront accommodation with rooms, apartments, and breakfast included depending on the unit.',
details: [
'Double room — USD 80 · private bathroom · breakfast included · 1 room.',
'Quadruple room — USD 120 · one double bed and one bunk bed · private bathroom · breakfast included · 3 rooms.',
'Quadruple room with terrace — USD 130 · two double beds · private bathroom · terrace · breakfast included · 1 room.',
'Full apartment — USD 210 · sleeps 8 · two bedrooms with double beds and bunk beds · one bathroom · living room and kitchen · 2 apartments.'
],
amenities: ['Beachfront', 'Breakfast included depending on the unit']
}
},
{
id: 'casa-madera',
category: 'OPCIÓN GRUPAL', name: 'Casa Madera',
price: 'USD 250–500', priceNote: 'por noche · hasta 10 personas',
summary: 'Una casa frente al mar para grupos, con tarifas que cambian según la temporada.',
images: ['assets/img/stays/casa-maderas/cover.webp', 'assets/img/stays/casa-maderas/house.webp', 'assets/img/stays/casa-maderas/aerial.webp'],
imageAlt: 'Casa de alojamiento frente a la playa',
imageAlts: ['Casa de Maderas rodeada de vegetación tropical', 'Casa de Maderas con piscina y jardines tropicales', 'Vista aérea de Casa de Maderas junto a Playa Grande'],
imageAltsEn: ['Casa de Maderas surrounded by tropical greenery', 'Casa de Maderas with a pool and tropical gardens', 'Aerial view of Casa de Maderas beside Playa Grande'],
details: [
'24 de diciembre al 2 de enero: USD 500 · estadía mínima de 5 noches.',
'2 de enero al 2 de febrero: USD 400 · estadía mínima de 5 noches.',
'3 de febrero al 30 de abril: USD 350 · estadía mínima de 3 noches · excepto Semana Santa.',
'1 al 15 de julio: USD 350 · estadía mínima de 3 noches.',
'1 de octubre al 30 de noviembre: USD 250 · estadía mínima de 2 noches.',
'Resto de las fechas: USD 300 · estadía mínima de 2 noches.'
],
amenities: ['Frente al mar', 'Tarifas para hasta 10 personas, incluidos adultos y niños', 'Máximo de 5 personas adicionales · capacidad total de 15 personas', 'Semana Santa: consultar tarifas especiales'],
en: {
category: 'GROUP OPTION',
priceNote: 'per night · up to 10 guests',
summary: 'A beachfront house for groups, with rates that vary by season.',
details: [
'December 24 to January 2: USD 500 · 5-night minimum stay.',
'January 2 to February 2: USD 400 · 5-night minimum stay.',
'February 3 to April 30: USD 350 · 3-night minimum stay · except Easter week.',
'July 1 to 15: USD 350 · 3-night minimum stay.',
'October 1 to November 30: USD 250 · 2-night minimum stay.',
'All other dates: USD 300 · 2-night minimum stay.'
],
amenities: ['Beachfront', 'Rates include up to 10 guests, adults and children', 'Up to 5 additional guests · 15 guests total', 'Ask about special Easter week rates']
}
},
{
id: 'capitan-suizo',
category: 'OPCIÓN DELUXE', name: 'Capitán Suizo',
price: 'USD 600', priceNote: 'por noche · consultar disponibilidad',
summary: 'Hotel frente a la playa con servicios de bienestar, piscina y espacios para disfrutar la estadía.',
images: ['assets/img/stays/capitan-suizo/cover.webp', 'assets/img/stays/capitan-suizo/capitan.webp', 'assets/img/stays/capitan-suizo/beachfront-bungalow.webp'],
imageAlt: 'Vista aérea del hotel Capitán Suizo junto a la playa',
imageAlts: ['Vista aérea del hotel Capitán Suizo junto a la playa', 'Bungalow de Capitán Suizo rodeado de jardines tropicales', 'Interior de bungalow frente a la playa en Capitán Suizo'],
imageAltsEn: ['Aerial view of Hotel Capitan Suizo beside the beach', 'Capitán Suizo bungalow surrounded by tropical gardens', 'Interior of a beachfront bungalow at Capitán Suizo'],
details: ['Tarifa: USD 600 por noche.', 'Consultar disponibilidad.'],
amenities: ['Hotel ubicado frente a la playa', 'Piscina al aire libre', 'Spa y servicio de masajes', 'Jardines', 'Salas de reuniones', 'Tiendas', 'Estacionamiento privado', 'WiFi en el centro de negocios'],
en: {
category: 'DELUXE OPTION',
priceNote: 'per night · check availability',
summary: 'A beachfront hotel with wellness services, a pool, and spaces to enjoy your stay.',
details: ['Rate: USD 600 per night.', 'Please check availability.'],
amenities: ['Beachfront hotel', 'Outdoor pool', 'Spa and massage services', 'Gardens', 'Meeting rooms', 'Shops', 'Private parking', 'WiFi in the business center']
}
}
],
questions: [
{ id: 'stay_dates', label: '¿Cuándo quieres alojarte?', type: 'dates', fields: ['Llegada', 'Salida'] },
{ id: 'accommodation_type', label: '¿Qué alojamiento te interesa?', type: 'choice', options: ['Hotel Tamalodge', 'Casa Aura', 'Casa Madera', 'Capitán Suizo', 'Quiero recomendaciones'] },
{ id: 'group_size', label: '¿Cuántas personas viajarían?', type: 'number' },
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
experiences: { label: 'Which experiences would you like to add?', options: ['Surf', 'Surf coaching', 'Witch’s Rock', 'Snorkel', 'Catamaran', 'Yoga', 'ATV', 'I still don’t know'] }
}
}
},
{
id: 'clases-de-surf', number: '02', eyebrow: 'CLASES DE SURF · TAMARINDO', title: 'Clases de surf',
cardText: 'Contanos tu nivel y qué te gustaría aprender. Te ayudamos a encontrar una clase que te quede bien.',
description: 'Las clases están pensadas para que cada persona entre al agua con una guía simple, segura y cercana. Adaptamos la sesión al nivel del grupo, al estado del mar y a lo que querés conseguir: desde probar el surf por primera vez hasta ordenar tus bases y ganar confianza. También te orientamos con la tabla adecuada si todavía no tenés equipo.',
images: [
'assets/img/services/surf-lessons/surf-lesson-woman.webp',
'assets/img/services/surf-lessons/optimized/surf-lesson-group.webp',
'assets/img/services/surf-lessons/surf-photography.webp',
'assets/img/services/surf-coaching/surf-coaching.webp'
],
imageAlts: [
'Alumna practicando surf en Tamarindo',
'Dos surfistas practicando juntos en una ola en Tamarindo',
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
'Two surfers practicing together on a wave in Tamarindo',
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
images: ['assets/img/services/surf-coaching/surf-coaching-group-beach.webp', 'assets/img/services/surf-photography/surf-coaching-session.webp', 'assets/img/services/surf-coaching/surf-coaching-tamarindo-surf-camp.webp'],
imageAlts: ['Tres surfistas saltando con sus tablas en la playa', 'Surfista surcando una ola sobre una tabla roja', 'Grupo de surfistas reuniéndose con sus tablas en la playa de Tamarindo'],
imageAltsEn: ['Three surfers jumping with their boards on the beach', 'Surfer riding a wave on a red board', 'Group of surfers gathering with their boards on Tamarindo Beach'],
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
imageAlts: ['Surfer riding a wave on a red board', 'Three surfers sharing a beach session with their boards', 'Group of surfers gathering with their boards on Tamarindo Beach'],
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
'assets/img/services/yoga/yoga-coastal-pose.webp',
'assets/img/services/yoga/yoga-group-meditation.webp',
'assets/img/services/yoga/yoga-retreat-group-class.webp'
],
imageAlts: ['Mujer practicando una postura de yoga frente al mar', 'Grupo meditando dentro de un rancho tropical con techo de paja', 'Clase grupal de yoga en un espacio abierto entre palmeras'],
imageAltsEn: ['Woman practicing a yoga pose beside the sea', 'Group meditating in a thatched-roof tropical pavilion', 'Group yoga class in an open-air space among palm trees'],
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
imageAlts: ['Woman meditating on the beach by the ocean', 'Group meditating in a thatched-roof tropical pavilion', 'Group yoga class in an open-air space among palm trees']
}
},
{
id: 'snorkel-catamaran', number: '05', eyebrow: 'MAR · NAVEGACIÓN', title: 'Snorkel y catamarán',
cardText: 'Elegí entre explorar bajo el agua, navegar la costa o combinar las dos experiencias.',
description: 'Una salida al mar puede ser tranquila, exploradora o un poco de ambas. Te ayudamos a comparar tour de snorkel, paseo en catamarán y opciones combinadas según disponibilidad. Para cuidar la experiencia de todo el grupo, consultamos cantidad de personas, comodidad nadando y cualquier necesidad alimentaria antes de acercarte una opción compartida o privada.',
images: ['assets/img/services/snorkel-catamaran/snorkel-turtle.webp', 'assets/img/services/snorkel-catamaran/snorkel-catalina-group.webp', 'assets/img/services/snorkel-catamaran/snorkel-catalina-shore.webp', 'assets/img/services/snorkel-catamaran/snorkel-fish.webp'],
imageAlts: ['Personas haciendo snorkel junto a una tortuga marina sobre un arrecife', 'Grupo haciendo snorkel frente a una isla de la costa de Costa Rica', 'Grupo haciendo snorkel cerca de una costa tropical', 'Personas haciendo snorkel junto a peces de colores bajo el agua'],
imageAltsEn: ['People snorkeling near a sea turtle above a reef', 'Group snorkeling beside an island off the coast of Costa Rica', 'Group snorkeling near a tropical shoreline', 'People snorkeling with colorful fish underwater'],
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
galleryAlt: 'Roca y olas de Roca Bruja',
images: ['assets/img/services/witchs-rock/roca-bruja-rock.webp', 'assets/img/services/witchs-rock/roca-bruja-surfing.webp'],
imageAlts: ['Formación rocosa de Roca Bruja frente a la costa', 'Surfista surfeando en Roca Bruja'],
imageAltsEn: ['Rock formation at Witch’s Rock along the coast', 'Surfer riding a wave at Witch’s Rock'],
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
imageAlts: ['Rock formation at Witch’s Rock along the coast', 'Surfer riding a wave at Witch’s Rock'],
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
images: ['assets/img/services/surf-photography/surf-photographer-wave.webp', 'assets/img/services/surf-photography/photo-service.webp'],
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
images: ['assets/img/services/surfskate/surfskate-class.webp', 'assets/img/services/surfskate/surfskate-wave.webp', 'assets/img/services/surfskate/surfskate.webp', 'assets/img/services/surfskate/surfskate-bowl.webp'],
imageAlts: ['Clase grupal de surfskate con varias personas sobre tablas', 'Surfista surfeando una ola en el mar', 'Dos instructores practicando surfskate sobre una tabla', 'Skater haciendo un truco dentro de una bowl de concreto'],
imageAltsEn: ['Group surfskate class with several people on boards', 'Surfer riding a wave in the ocean', 'Two instructors practicing surfskate on a board', 'Skateboarder performing a trick inside a concrete bowl'],
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
images: ['assets/img/services/atv/atv-forest-convoy.webp', 'assets/img/services/atv/atv-arenal-volcano-ride.webp', 'assets/img/services/atv/atv-coastal-overlook.webp', 'assets/img/services/atv/atv-forest-trail.webp'],
imageAlts: ['Grupo de cuatriciclos recorriendo un sendero de bosque tropical', 'Dos personas en un cuatriciclo con el volcán Arenal al fondo', 'Dos cuatriciclos en un mirador sobre la costa de Guanacaste', 'Grupo de cuatriciclos avanzando por un sendero de bosque tropical'],
imageAltsEn: ['Group of ATVs riding along a tropical forest trail', 'Two people on an ATV with Arenal Volcano in the background', 'Two ATVs at a viewpoint above the Guanacaste coast', 'Group of ATVs riding along a tropical forest trail'],
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
imageAlts: ['Group of ATVs riding along a tropical forest trail', 'Two people on an ATV with Arenal Volcano in the background', 'Two ATVs at a viewpoint above the Guanacaste coast', 'Group of ATVs riding along a tropical forest trail'],
questions: {
drivers: { label: 'How many people want to drive?' },
passengers: { label: 'How many would be passengers?' },
driver_ages: { label: 'What are the ages of the drivers?', placeholder: 'e.g. 24, 31 and 42' },
licenses: { label: 'Do the drivers have a valid driver’s license?', options: ['Everyone', 'Some', 'None'] }
}
}
},
{
id: 'retiros', number: '10', eyebrow: 'RETIROS · EXPERIENCIAS', title: 'Retiros',
cardText: 'Elegí una pausa con intención: surf, descanso, movimiento y comunidad en un mismo viaje.',
description: 'WavePoint Retiros nace de nuestro amor por el surf, la naturaleza y el estilo de vida costero. Son experiencias diseñadas para reconectar contigo mismo, con el mar y con una comunidad vibrante, en uno de los destinos más mágicos de Costa Rica: Tamarindo. Estos retiros están pensados para quienes buscan más que unas vacaciones: buscan transformación, conexión y aventura.',
images: [
'assets/img/services/retreats/retreat-canva-cover.webp',
'assets/img/services/retreats/retreat-canva-destination-town.webp',
'assets/img/services/retreats/retreat-canva-destination-coast.webp',
'assets/img/services/retreats/retreat-canva-stay-pool.webp',
'assets/img/services/retreats/retreat-canva-stay-aerial.webp',
'assets/img/services/retreats/retreat-canva-stay-lounge.webp',
'assets/img/services/retreats/retreat-canva-stay-coast.webp',
'assets/img/services/retreats/retreat-canva-yoga-studio.webp',
'assets/img/services/retreats/retreat-canva-yoga-beach.webp',
'assets/img/services/retreats/retreat-canva-surf-avellanas.webp',
'assets/img/services/retreats/retreat-canva-surf-grande.webp',
'assets/img/services/retreats/retreat-canva-surf-tamarindo.webp',
'assets/img/services/retreats/retreat-canva-surf-nosara.webp',
'assets/img/services/retreats/retreat-canva-witch-rock-1.webp',
'assets/img/services/retreats/retreat-canva-witch-rock-2.webp',
'assets/img/services/retreats/retreat-canva-coaching-team.webp',
'assets/img/services/retreats/retreat-canva-surf-photo-1.webp',
'assets/img/services/retreats/retreat-canva-surf-photo-2.webp',
'assets/img/services/retreats/retreat-canva-wave-background.webp'
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
services.push({
id: 'trip-builder', number: '10', eyebrow: 'EXPERIENCIA A MEDIDA', title: 'Armá tu viaje a tu manera',
cardText: 'Combiná alojamiento y experiencias según el ritmo de tu viaje.',
description: 'Contanos tus fechas, cuántos son y qué te interesa. Armaremos una propuesta según la disponibilidad.',
images: ['assets/img/services/retreats/retreat-tamarindo.webp'],
imageAlts: ['Atardecer en la costa bajo ramas de un árbol tropical'],
questions: [],
en: {
eyebrow: 'TAILORED EXPERIENCE', title: 'Build your trip your way',
cardText: 'Combine accommodation and experiences around the pace of your trip.',
description: 'Tell us your dates, group size and interests. We’ll put together a proposal based on what’s available.',
imageAlts: ['Sunset over the coast framed by a tropical tree']
}
});
const serviceOrder = ['alojamiento-experiencias', 'clases-de-surf', 'surf-coaching', 'roca-bruja', 'snorkel-catamaran', 'yoga', 'atv', 'surf-fotografia', 'surfskate', 'retiros'];
serviceOrder.splice(9, 0, 'trip-builder');
services.sort((left, right) => serviceOrder.indexOf(left.id) - serviceOrder.indexOf(right.id));
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&', '<': '<', '>': '>', '"': '"', "'": "'" }[char]));
const getService = () => { const id = new URLSearchParams(location.search).get('service'); if (id === 'pack-ajustable' || id === 'trip-builder') { location.replace('trip-builder.html'); return services[0]; } return services.find(item => item.id === id) || services[0]; };
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
function setupQuickRequestPanel(form) {
  if (!form) return;
  const panel = document.getElementById('detailRequestPanel');
  const launcher = document.getElementById('quickRequestLauncher');
  const close = document.getElementById('quickRequestClose');
  const next = form.querySelector('[data-survey-next]');
  if (!panel || !launcher || !close || !next) return;
  const units = [...form.querySelectorAll('[data-survey-question]')];
  let visibleCount = Math.min(2, units.length);
  const updateSteps = () => {
    units.forEach((unit, index) => unit.classList.toggle('quick-step-hidden', index >= visibleCount));
    const complete = visibleCount >= units.length;
    next.hidden = complete;
    next.disabled = complete;
    const submit = form.querySelector('.detail-submit');
    if (submit) submit.disabled = !complete;
    if (!complete) next.innerHTML = `${lang === 'en' ? 'Continue' : 'Continuar'} <span aria-hidden="true">→</span>`;
  };
  const open = () => {
    panel.classList.add('is-open');
    launcher.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-modal', 'true');
    document.body.classList.add('quick-request-is-open');
    window.setTimeout(() => form.querySelector('.quick-step-hidden') ? form.querySelector('[data-survey-question]:not(.quick-step-hidden) input, [data-survey-question]:not(.quick-step-hidden) textarea')?.focus() : form.querySelector('input, textarea')?.focus(), 180);
  };
  const hide = () => {
    panel.classList.remove('is-open');
    launcher.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-modal', 'false');
    document.body.classList.remove('quick-request-is-open');
  };
  launcher.addEventListener('click', open);
  close.addEventListener('click', hide);
  next.addEventListener('click', () => {
    visibleCount = Math.min(units.length, visibleCount + 2);
    updateSteps();
    units[Math.min(visibleCount - 1, units.length - 1)]?.querySelector('input, textarea')?.focus();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && panel.classList.contains('is-open')) hide(); });
  updateSteps();
  if (window.matchMedia('(min-width: 981px)').matches) {
    panel.classList.add('is-open');
    launcher.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-modal', 'false');
  }
}
function setupSurveyInteractions(form) {
if (!form) return;
const progress = form.querySelector('[data-survey-progress]');
const value = form.querySelector('[data-survey-progress-value]');
const bar = form.querySelector('[data-survey-progress-bar]');
const units = [...form.querySelectorAll('[data-survey-question]')];
const requiredUnits = units.filter(unit => unit.querySelector('[required]'));
const trackedUnits = requiredUnits.length ? requiredUnits : units;
const hasAnswer = unit => [...unit.querySelectorAll('input, textarea, select')].some(input => input.type === 'radio' || input.type === 'checkbox' ? input.checked : input.value.trim());
const update = () => {
const answered = trackedUnits.filter(unit => hasAnswer(unit)).length;
const total = trackedUnits.length;
const percent = total ? Math.round(answered / total * 100) : 0;
units.forEach(unit => unit.classList.toggle('is-answered', hasAnswer(unit)));
if (value) value.textContent = `${answered} / ${total}`;
if (bar) bar.style.width = `${percent}%`;
if (progress) progress.setAttribute('aria-label', lang === 'en' ? `${answered} of ${total} required answers completed` : `${answered} de ${total} respuestas requeridas completas`);
form.classList.toggle('is-survey-complete', total > 0 && answered === total);
};
form.addEventListener('input', update);
form.addEventListener('change', update);
update();
}
function renderQuestion(service, question) {
const id = inputId(service, question);
const optional = question.optional ? `<span class="detail-optional">${uiFor(service).optional}</span>` : '';
if (question.type === 'headcount') return `<fieldset class="detail-question headcount-question" data-survey-question><legend>${esc(question.label)} ${optional}</legend><div class="detail-date-grid">${question.fields.map((field, index) => `<label for="${id}-${field.id}">${esc(field.label)}<input id="${id}-${field.id}" name="${question.id}-${field.id}" type="number" min="${index === 0 ? 1 : 0}" step="1" inputmode="numeric" placeholder="${index === 0 ? '1' : '0'}" required /></label>`).join('')}</div><p class="headcount-note">${esc(question.note)}</p><label class="headcount-ages" for="${id}-ages"><span>${esc(question.agesLabel)} <span class="detail-optional">${uiFor(service).optional}</span></span><input id="${id}-ages" name="${question.id}-ages" type="text" placeholder="${esc(question.agesPlaceholder)}" /></label></fieldset>`;
if (question.type === 'dates') return `<fieldset class="detail-question" data-survey-question><legend>${esc(question.label)} ${optional}</legend><div class="detail-date-grid">${question.fields.map(field => `<label for="${id}-${field}">${esc(field)}<input id="${id}-${field}" name="${question.id}-${field}" type="date" ${question.optional ? '' : 'required'} /></label>`).join('')}</div></fieldset>`;
if (question.type === 'choice' || question.type === 'multi') return `<fieldset class="detail-question" data-survey-question><legend>${esc(question.label)} ${optional}</legend><div class="detail-options">${question.options.map((option, index) => `<label class="detail-option"><input type="${question.type === 'multi' ? 'checkbox' : 'radio'}" name="${question.id}" value="${esc(option)}" ${question.type === 'choice' && index === 0 && !question.optional ? 'required' : ''} /><span>${esc(option)}</span></label>`).join('')}</div></fieldset>`;
const type = question.type === 'number' ? 'number' : question.type === 'money' ? 'text' : 'text';
return `<label class="detail-question detail-field" data-survey-question for="${id}"><span>${esc(question.label)} ${optional}</span><${question.type === 'textarea' ? 'textarea' : 'input'} id="${id}" name="${question.id}" type="${type}" placeholder="${esc(question.placeholder || '')}" ${question.optional ? '' : 'required'}></${question.type === 'textarea' ? 'textarea' : 'input'}></label>`;
}
function renderAccommodationOption(option, index) {
const isEn = lang === 'en';
const localized = isEn ? option.en || option : option;
const gallery = option.images.map((image, index) => {
const localizedAlt = lang === 'en' ? option.imageAltsEn?.[index] : option.imageAlts?.[index];
return `<img src="${esc(image)}" alt="${esc(localizedAlt || `${option.imageAlt} · ${lang === 'en' ? 'view' : 'vista'} ${index + 1}`)}" loading="lazy" />`;
}).join('');
const details = localized.details.map(detail => `<li>${esc(detail)}</li>`).join('');
const amenities = localized.amenities.map(item => `<li>${esc(item)}</li>`).join('');
const detailsHeading = isEn ? 'Options & rates' : 'Opciones y tarifas';
const amenitiesHeading = isEn ? 'Services & conditions' : 'Servicios y condiciones';
const titleId = `accommodation-title-${option.id}`;
const galleryLabel = isEn ? `Photos of ${option.name}` : `Fotos de ${option.name}`;
const galleryMarkup = gallery ? `<div class="accommodation-gallery" role="group" aria-label="${esc(galleryLabel)}">${gallery}</div>` : '';
return `<article class="accommodation-card accommodation-card-${index + 1}" id="accommodation-${esc(option.id)}" aria-labelledby="${esc(titleId)}">${galleryMarkup}<div class="accommodation-card-body"><p class="accommodation-category">${esc(localized.category)}</p><div class="accommodation-card-title"><h3 id="${esc(titleId)}">${esc(option.name)}</h3><div class="accommodation-price"><strong>${esc(option.price)}</strong><span>${esc(localized.priceNote)}</span></div></div><p class="accommodation-summary">${esc(localized.summary)}</p><div class="accommodation-columns"><section><h4>${detailsHeading}</h4><ul>${details}</ul></section><section><h4>${amenitiesHeading}</h4><ul>${amenities}</ul></section></div></div></article>`;
}
function renderAccommodationStory(service) {
const isEn = lang === 'en';
const destinations = service.accommodationOptions.map(option => {
const image = option.images?.[0];
if (!image) return '';
const localizedAlt = isEn ? option.imageAltsEn?.[0] : option.imageAlts?.[0];
const ariaLabel = isEn ? `View ${option.name} details` : `Ver detalles de ${option.name}`;
return `<a class="accommodation-destination" href="#accommodation-${esc(option.id)}" aria-label="${esc(ariaLabel)}"><img src="${esc(image)}" alt="${esc(localizedAlt || option.imageAlt || option.name)}" loading="lazy" /></a>`;
}).join('');
const checkLabel = isEn ? 'Check availability' : 'Consultar disponibilidad';
return `<section class="accommodation-intro" aria-labelledby="accommodation-options-heading"><div class="accommodation-intro-copy"><p class="service-page-kicker">${isEn ? 'ACCOMMODATIONS IN TAMARINDO' : 'ALOJAMIENTOS EN TAMARINDO'}</p><h2 id="accommodation-options-heading">${isEn ? 'Accommodation options in Tamarindo' : 'Opciones de alojamiento en Tamarindo'}</h2><a class="accommodation-check-link" href="#detailRequestPanel">${checkLabel}<span aria-hidden="true">↗</span></a></div><div class="accommodation-overview-meta"><nav class="accommodation-destinations" aria-label="${isEn ? 'Jump to an accommodation' : 'Ir a un alojamiento'}">${destinations}</nav><div class="accommodation-rate-note"><strong>${isEn ? 'Rates in USD' : 'Tarifas en USD'}</strong><span>${isEn ? 'All rates are shown in US dollars (USD) per night.' : 'Todas las tarifas están expresadas en dólares estadounidenses (USD), por noche.'}</span></div></div></section><section class="accommodation-grid" aria-label="${isEn ? 'Accommodation options' : 'Opciones de alojamiento'}">${service.accommodationOptions.map(renderAccommodationOption).join('')}</section>`;
}
function renderSurfLessonStory(service) {
const ui = uiFor(service);
const isEn = lang === 'en';
const gallery = service.images.slice(1).map((image, index) => `<img src="${esc(image)}" alt="${esc(service.imageAlts?.[index + 1] || `${ui.galleryAlt} ${index + 2}`)}" loading="lazy" />`).join('');
return `<section class="surf-lesson-intro" aria-labelledby="surf-lesson-heading"><div class="surf-lesson-intro-copy"><p class="service-page-kicker">${isEn ? 'SURF LESSONS · TAMARINDO' : 'CLASES DE SURF · TAMARINDO'}</p><h2 id="surf-lesson-heading">${isEn ? 'Ready to surf?' : '¿Listo para surfear?'}</h2><p class="surf-lesson-lead">${isEn ? 'Tell us your level and what you’d like to learn. We’ll find a lesson that fits.' : 'Contanos tu nivel y qué te gustaría aprender. Te ayudamos a encontrar una clase que te quede bien.'}</p><button class="surf-survey-open" type="button" data-scroll-surf-form>${ui.surveyOpen} <span aria-hidden="true">↗</span></button></div><div class="detail-gallery surf-lesson-gallery" role="group" aria-label="${isEn ? 'Surf lesson photos' : 'Fotos de las clases de surf'}">${gallery}</div></section><section class="surf-lesson-survey-intro"><span class="surf-lesson-survey-mark">02</span><div><p class="service-page-kicker">${isEn ? 'SURF LESSONS' : 'CLASES DE SURF'}</p><h3>${ui.surveyHeading}</h3><p>${ui.surveyText}</p></div></section>`;
}
function renderStandardStory(service, extra = '') {
const isEn = lang === 'en';
const galleryStart = 1;
const galleryImages = service.images.slice(galleryStart);
const gallery = galleryImages.map((image, index) => { const altIndex = index + galleryStart; return `<img src="${esc(image)}" alt="${esc((isEn ? service.imageAltsEn?.[altIndex] : service.imageAlts?.[altIndex]) || `${service.title} · ${isEn ? 'photo' : 'foto'} ${altIndex + 1}`)}" loading="lazy" />`; }).join('');
const galleryClass = service.id === 'surfskate' ? ' service-editorial-gallery-surfskate' : service.id === 'roca-bruja' ? ' service-editorial-gallery-witch-rock' : '';
const galleryMarkup = gallery ? `<div class="detail-gallery service-editorial-gallery${galleryImages.length > 2 ? ' service-editorial-gallery-triple' : ''}${galleryClass}" role="group" aria-label="${isEn ? `${service.title} photos` : `Fotos de ${service.title}`}" tabindex="0">${gallery}</div>` : '';
const includes = service.includes?.length ? `<div class="service-supporting-includes"><p class="service-supporting-label">${isEn ? 'INCLUDED' : 'INCLUYE'}</p><ul>${service.includes.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>` : '';
const supporting = service.lead || extra || includes ? `<div class="service-supporting-content">${service.lead ? `<p class="service-supporting-lead">${esc(service.lead)}</p>` : ''}${extra ? `<p class="service-supporting-extra">${esc(extra)}</p>` : ''}${includes}</div>` : '';
return galleryMarkup || supporting ? `<section class="service-editorial-story">${galleryMarkup}${supporting}</section>` : '';
}
function renderWitchRockStory(service) {
const story = renderStandardStory(service, service.coordination);
const credit = lang === 'en'
? `Photo credits: <a href="https://commons.wikimedia.org/wiki/File:Roca_Bruja_-_Guanacaste_-_Costa_Rica.jpg" target="_blank" rel="noopener noreferrer">“Roca Bruja — Guanacaste — Costa Rica”</a> and <a href="https://commons.wikimedia.org/wiki/File:Surfing-Roca_Bruja-Guanacaste-Costa_Rica.JPG" target="_blank" rel="noopener noreferrer">“Surfing — Roca Bruja — Guanacaste — Costa Rica”</a> by dog4aday, under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>.`
: `Créditos de las fotos: <a href="https://commons.wikimedia.org/wiki/File:Roca_Bruja_-_Guanacaste_-_Costa_Rica.jpg" target="_blank" rel="noopener noreferrer">“Roca Bruja — Guanacaste — Costa Rica”</a> y <a href="https://commons.wikimedia.org/wiki/File:Surfing-Roca_Bruja-Guanacaste-Costa_Rica.JPG" target="_blank" rel="noopener noreferrer">“Surfing — Roca Bruja — Guanacaste — Costa Rica”</a>, de dog4aday, bajo <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>.`;
return story.replace('</section>', `<p class="service-photo-credit">${credit}</p></section>`);
}

function renderSurfPhotographyStory(service) {
return renderStandardStory(service);
}

function renderSurfskateStory(service) {
return renderStandardStory(service);
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
      <p class="retreat-cover-about">${esc(details.about)}</p>
      <div class="retreat-cover-facts">${durationFact ? `<span>${esc(durationFact.value)}</span>` : ''}<span>${esc(priceFact.value)}</span></div>
    </div>
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
document.body.classList.toggle('surf-lesson-detail-page', service.id === 'clases-de-surf');
document.body.classList.toggle('yoga-detail-page', service.id === 'yoga');
document.body.style.setProperty('--service-detail-image', `url(${JSON.stringify(service.images[0])})`);
const position = services.findIndex(item => item.id === service.id);
const prevService = services[(position - 1 + services.length) % services.length];
const nextService = services[(position + 1) % services.length];
const arrowLabel = { es: ['Servicio anterior', 'Servicio siguiente'], en: ['Previous service', 'Next service'] }[lang];
const serviceHref = item => item.id === 'trip-builder' ? 'trip-builder.html' : `service-detail.html?service=${item.id}`;
const heroArrows = `<nav class="detail-hero-arrows" aria-label="${lang === 'en' ? 'Browse services' : 'Recorrer servicios'}"><a class="detail-arrow detail-arrow-prev" href="${serviceHref(prevService)}" rel="prev" aria-label="${arrowLabel[0]}: ${esc(prevService.title)}" title="${esc(prevService.title)}"><svg viewBox="0 0 24 40" aria-hidden="true" focusable="false"><path d="M19 3 4 20l15 17"/></svg></a><a class="detail-arrow detail-arrow-next" href="${serviceHref(nextService)}" rel="next" aria-label="${arrowLabel[1]}: ${esc(nextService.title)}" title="${esc(nextService.title)}"><svg viewBox="0 0 24 40" aria-hidden="true" focusable="false"><path d="M5 3l15 17L5 37"/></svg></a></nav>`;
const nameField = service.id === 'clases-de-surf'
? `<label class="detail-question detail-field" data-survey-question for="request-name"><span>${ui.nameLabel}</span><input id="request-name" name="request-name" type="text" placeholder="${ui.namePlaceholder}" required /></label>`
: `<label class="detail-question detail-field" data-survey-question for="request-name"><span>${ui.nameLabel} <span class="detail-optional">${ui.optional}</span></span><input id="request-name" name="request-name" type="text" placeholder="${ui.namePlaceholder}" /></label>`;
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
: renderStandardStory(service);
const surfSurveyModal = '' /* El formulario de clases queda visible debajo del contenido. */;
const surfFormBar = '';
/* const surfSurveyModal = service.id === 'clases-de-surf' ? `<dialog class="surf-survey-modal" id="surfSurveyModal" aria-labelledby="surfSurveyTitle"><div class="surf-survey-modal-shell"><div class="surf-survey-modal-head"><div><p class="service-page-kicker">${lang === 'en' ? 'READY TO SURF?' : '¿LISTO PARA SURFEAR?'}</p><h2 id="surfSurveyTitle">${ui.modalTitle}</h2><p>${ui.modalText}</p></div><button class="surf-survey-close" type="button" data-close-surf-survey aria-label="${ui.modalClose}">×</button></div><div id="surfSurveyModalBody"></div></div></dialog>` : ''; */
 document.getElementById('serviceDetailRoot').innerHTML = `<section class="detail-hero">${heroArrows}<div class="container detail-hero-content"><p class="service-page-kicker">${esc(service.eyebrow)}</p><p class="detail-index">${String(position + 1).padStart(2, '0')} / ${services.length}</p><h1>${esc(service.title)}</h1><p class="detail-hero-intro">${esc(service.description)}</p></div></section><section class="detail-content"><div class="container detail-layout"><article class="detail-story${service.id === 'retiros' ? ' detail-story-retreats' : ''}">${story}</article><button class="quick-request-launcher" id="quickRequestLauncher" type="button" aria-expanded="false" aria-controls="detailRequestPanel"><span class="quick-request-launcher-icon" aria-hidden="true">↗</span><span>${lang === 'en' ? 'Check availability' : 'Consultar disponibilidad'}</span></button><aside class="detail-request quick-request-panel" id="detailRequestPanel" role="dialog" aria-modal="false" aria-labelledby="serviceRequestTitle">${surfFormBar}<div class="detail-request-head"><p class="service-page-kicker">${lang === 'en' ? 'BOOK REQUEST' : 'SOLICITUD'}</p><h2 id="serviceRequestTitle">${ui.requestTitle}</h2><p>${ui.requestText}</p></div><form id="serviceRequestForm" class="service-survey-form" novalidate><div class="survey-progress" data-survey-progress role="status" aria-live="polite"><div class="survey-progress-copy"><span>${lang === 'en' ? 'Your progress' : 'Tu avance'}</span><strong data-survey-progress-value>0 / 0</strong></div><div class="survey-progress-track" aria-hidden="true"><span data-survey-progress-bar></span></div></div>${formQuestions}<label class="detail-question detail-field" data-survey-question for="request-contact"><span>${ui.extraLabel} <span class="detail-optional">${ui.optional}</span></span><textarea id="request-contact" name="request-contact" placeholder="${ui.extraPlaceholder}"></textarea></label><button class="detail-submit" type="submit">${esc(service.submitLabel || ui.submit)}</button><p class="detail-form-note">${ui.note}</p><p class="detail-error" id="detailError" role="alert"></p></form></aside></div></section>${surfSurveyModal}`;
const requestForm = document.getElementById('serviceRequestForm');
setupSurveyInteractions(requestForm);
setupQuickRequestPanel(requestForm);
if (service.id === 'clases-de-surf') {
  document.querySelector('[data-scroll-surf-form]')?.addEventListener('click', () => {
    document.getElementById('detailRequestPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
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
const isSpanish = lang !== 'en';
const clean = value => String(value || '').replace(/^¿|[?]$/g, '').trim().toLowerCase();
const name = form.elements['request-name']?.value.trim();
const extra = form.elements['request-contact']?.value.trim();
const getValues = question => {
  if (question.type === 'headcount') {
    return question.fields.map(field => form.elements[`${question.id}-${field.id}`]?.value.trim()).filter(Boolean);
  }
  return [...form.querySelectorAll(`[name="${question.id}"], [name^="${question.id}-"]`)]
    .map(input => input.type === 'checkbox' || input.type === 'radio' ? (input.checked ? input.value : '') : input.value)
    .map(value => value.trim())
    .filter(Boolean);
};
const groupQuestion = service.questions.find(question => ['group_size', 'snorkel_people'].includes(question.id));
const groupValue = groupQuestion ? Number(form.elements[groupQuestion.id]?.value || 1) : 1;
const plural = groupValue > 1;
const subject = clean(service.title);
const lines = isSpanish
  ? [`Hola, WavePoint. Quiero consultar por ${subject}.`]
  : [`Hi WavePoint. I’d like to ask about ${subject}.`];
if (name) {
  lines.push(isSpanish
    ? (plural ? `Soy ${name} y somos ${groupValue} personas.` : `Soy ${name}.`)
    : (plural ? `I’m ${name} and there are ${groupValue} of us.` : `I’m ${name}.`));
}
const naturalAnswers = {
  surf_level: isSpanish ? (plural ? 'Nuestro nivel de surf es' : 'Mi nivel de surf es') : (plural ? 'Our surfing level is' : 'My surfing level is'),
  current_surf_level: isSpanish ? (plural ? 'Nuestro nivel actual de surf es' : 'Mi nivel actual de surf es') : (plural ? 'Our current surfing level is' : 'My current surfing level is'),
  lesson_goal: isSpanish ? (plural ? 'Nos gustaría' : 'Me gustaría') : (plural ? 'We’d like to' : 'I’d like to'),
  improvement_goal: isSpanish ? (plural ? 'Nos gustaría mejorar' : 'Me gustaría mejorar') : (plural ? 'We’d like to improve' : 'I’d like to improve'),
  group_levels: isSpanish ? 'Los niveles de surf del grupo son' : 'The group’s surfing levels are',
  preferred_schedule: isSpanish ? (plural ? 'Preferimos el horario de' : 'Prefiero el horario de') : (plural ? 'We prefer' : 'I prefer'),
  session_schedule: isSpanish ? (plural ? 'Preferimos el horario de' : 'Prefiero el horario de') : (plural ? 'We prefer' : 'I prefer'),
  board_need: isSpanish ? (plural ? 'Sobre las tablas, necesitamos' : 'Sobre la tabla, necesito') : (plural ? 'For boards, we need' : 'For a board, I need'),
  own_board: isSpanish ? (plural ? 'Sobre las tablas, ' : 'Sobre la tabla, ') : (plural ? 'For boards, ' : 'For a board, '),
  own_boards: isSpanish ? 'Sobre las tablas, ' : 'For boards, ',
  origin: isSpanish ? (plural ? 'Venimos de' : 'Vengo de') : (plural ? 'We’re visiting from' : 'I’m visiting from'),
  preferred_fruit: isSpanish ? (plural ? 'Después de la clase, preferimos comer' : 'Después de la clase, prefiero comer') : (plural ? 'After the lesson, we’d like' : 'After the lesson, I’d like'),
  analysis_time: isSpanish ? (plural ? 'Preferimos recibir el análisis' : 'Prefiero recibir el análisis') : (plural ? 'We’d like to receive the analysis' : 'I’d like to receive the analysis'),
  date_flexibility: isSpanish ? 'Sobre la fecha, ' : 'Regarding the date, ',
  swimming_comfort: isSpanish ? 'Sobre nadar en el mar, ' : 'About swimming in the sea, '
};
service.questions.forEach(question => {
  const values = getValues(question);
  if (!values.length || question.id === 'group_size' || question.id === 'snorkel_people') return;
  const joined = values.join(isSpanish ? ', ' : ', ');
  const normalized = clean(joined);
  if (question.id === 'surf_level' || question.id === 'current_surf_level') {
    const level = normalized === 'primera vez' ? (isSpanish ? 'la primera vez que hago surf' : 'my first time surfing') : normalized;
    lines.push(`${naturalAnswers[question.id]} ${level}.`);
    return;
  }
  if (question.id === 'board_need' || question.id === 'own_board' || question.id === 'own_boards') {
    const boardValue = normalized;
    const sentence = isSpanish
      ? (boardValue === 'sí' ? (plural ? 'necesitamos tablas' : 'necesito una tabla') : boardValue.includes('asesoramiento') ? (plural ? 'necesitamos asesoramiento con las tablas' : 'necesito asesoramiento con la tabla') : boardValue.includes('llevamos') ? (plural ? 'llevamos nuestras propias tablas' : 'llevo mi propia tabla') : boardValue)
      : (boardValue === 'yes' ? (plural ? 'we need boards' : 'I need a board') : boardValue.includes('advice') ? (plural ? 'we need advice about boards' : 'I need advice about a board') : boardValue.includes('bring') ? (plural ? 'we bring our own boards' : 'I bring my own board') : boardValue);
    lines.push(`${isSpanish ? 'Sobre el equipo,' : 'About equipment,'} ${sentence}.`);
    return;
  }
  const prefix = naturalAnswers[question.id];
  if (prefix) {
    const value = question.id === 'origin' ? joined : normalized;
    const schedule = question.id === 'preferred_schedule' || question.id === 'session_schedule' ? joined.toLowerCase() : value;
    lines.push(`${prefix} ${schedule}${/[.!?]$/.test(prefix) ? '' : '.'}`.replace(/\.\.$/, '.'));
  } else if (isSpanish) {
    lines.push(`También quería contarte que, sobre ${clean(question.label)}, ${clean(joined)}.`);
  } else {
    lines.push(`I’d also like to mention that for ${clean(question.label)}, ${clean(joined)}.`);
  }
});
if (extra) lines.push(isSpanish ? `Además, ${extra}.` : `Also, ${extra}.`);
lines.push('', isSpanish ? 'Gracias. Quedo atento/a.' : 'Thank you. Looking forward to your reply.');
window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
}
render(localizeService(getService()));
window.addEventListener('wavepoint:languagechange', event => {
lang = event.detail.lang === 'en' ? 'en' : 'es';
render(localizeService(getService()));
});
})();
