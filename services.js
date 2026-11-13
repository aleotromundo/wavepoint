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
amenities: ['Piscina', 'Cocina compartida', 'WiFi', 'Mesa de ping-pong', 'Servicio de Local Host'],
en: {
category: 'BUDGET OPTION',
priceNote: 'per room · per night',
summary: 'A private room with a private bathroom for a simple, functional stay.',
details: ['Private room with a private bathroom.'],
amenities: ['Pool', 'Shared kitchen', 'WiFi', 'Ping-pong table', 'Local Host service']
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
amenities: ['Frente al mar', 'Desayuno incluido según la unidad', 'Servicio de Local Host'],
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
amenities: ['Beachfront', 'Breakfast included depending on the unit', 'Local Host service']
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
amenities: ['Frente al mar', 'Tarifas para hasta 10 personas, incluidos adultos y niños', 'Máximo de 5 personas adicionales · capacidad total de 15 personas', 'Semana Santa: consultar tarifas especiales', 'Servicio de Local Host'],
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
amenities: ['Beachfront', 'Rates include up to 10 guests, adults and children', 'Up to 5 additional guests · 15 guests total', 'Ask about special Easter week rates', 'Local Host service']
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
amenities: ['Hotel ubicado frente a la playa', 'Piscina al aire libre', 'Spa y servicio de masajes', 'Jardines', 'Salas de reuniones', 'Tiendas', 'Estacionamiento privado', 'WiFi en el centro de negocios', 'Servicio de Local Host'],
en: {
category: 'DELUXE OPTION',
priceNote: 'per night · check availability',
summary: 'A beachfront hotel with wellness services, a pool, and spaces to enjoy your stay.',
details: ['Rate: USD 600 per night.', 'Please check availability.'],
amenities: ['Beachfront hotel', 'Outdoor pool', 'Spa and massage services', 'Gardens', 'Meeting rooms', 'Shops', 'Private parking', 'WiFi in the business center', 'Local Host service']
}
}
],
questions: [
{ id: 'stay_dates', label: '¿Cuándo quieres alojarte?', type: 'dates', fields: ['Llegada', 'Salida'], optional: true },
{ id: 'accommodation_type', label: '¿Qué alojamiento te interesa?', type: 'choice', options: ['Hotel Tamalodge', 'Casa Aura', 'Casa Madera', 'Capitán Suizo', 'Quiero recomendaciones'], optional: true },
{ id: 'group_size', label: '¿Cuántas personas viajarían?', type: 'number', optional: true },
{ id: 'experiences', label: '¿Qué experiencias te gustaría sumar?', type: 'multi', options: ['Surf', 'Surf coaching', 'Roca Bruja', 'Snorkel', 'Catamarán', 'Yoga', 'ATV', 'Todavía no lo sé'], optional: true }
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
description: 'Una clase de surf de 2 horas con instructor local, explicación en la playa y práctica guiada en el agua, adaptada al nivel del grupo. Puede ser un primer acercamiento al mar o una sesión intermedia para corregir errores básicos.',
lead: 'Incluye instructor local, introducción al equipo y la seguridad, tabla incluida y práctica adaptada al nivel. El punto de encuentro se informa después de confirmar la reserva y el pago.',
includes: ['Duración: 2 horas', 'Tabla incluida', 'Primer acercamiento al mar o acompañamiento intermedio', 'Corrección de errores básicos', 'Punto de encuentro informado después de confirmar la reserva y el pago', 'Servicio de Local Host'],
images: [
'assets/img/services/surf-lessons/surf-lesson-woman.webp',
'assets/img/services/surf-lessons/optimized/surf-lesson-group.webp',
'assets/img/services/surf-lessons/surf-photography.webp',
],
imageAlts: [
'Alumna practicando surf en Tamarindo',
'Dos surfistas practicando juntos en una ola en Tamarindo',
'Surfera tomando una ola en Tamarindo',
],
questions: [
{ id: 'preferred_date', label: '¿Qué fecha prefieren?', type: 'dates', fields: ['Fecha'], minDate: 'today' },
{ id: 'surf_level', label: '¿Cuál es tu nivel de surf?', type: 'choice', options: ['Primera vez', 'Principiante', 'Intermedio', 'Avanzado'] },
{ id: 'lesson_goal', label: '¿Qué te gustaría aprender?', type: 'choice', options: ['Probar el surf', 'Mejorar las bases', 'Trabajar una habilidad específica'] },
{ id: 'group_size', label: '¿Cuántas personas participan?', type: 'headcount', fields: [{ id: 'adults', label: 'Adultos' }, { id: 'children', label: 'Niños' }] },
{ id: 'lesson_format', label: '¿Prefieren una clase privada o grupal?', type: 'choice', options: ['Privada', 'Grupal', 'Queremos consultar ambas'] },
{ id: 'instruction_language', label: '¿En qué idioma prefieren la instrucción?', type: 'choice', options: ['Español', 'Inglés', 'Nos adaptamos'] },
{ id: 'swimming_comfort', label: '¿Cómo se sienten en el agua?', type: 'choice', options: ['Cómodos nadando', 'Con poca experiencia', 'Preferimos comentarlo con el instructor'] },
{ id: 'transport_need', label: '¿Necesitan consultar por traslado?', type: 'choice', options: ['Sí', 'No'] },
{ id: 'origin', label: '¿De dónde nos visitan?', type: 'text', placeholder: 'Ciudad y país', optional: true },
{ id: 'preferred_fruit', label: 'Si se ofrece colación, ¿qué fruta prefieren?', type: 'multi', optional: true, options: ['Piña', 'Bananas', 'Mangos', 'Cocos', 'Sin preferencia'] },
{ id: 'food_allergies', label: '¿Hay alergias o restricciones alimentarias?', type: 'text', placeholder: 'Opcional', optional: true },
{ id: 'preferred_schedule', label: '¿Qué horario prefieren?', type: 'choice', options: ['Mañana', 'Mediodía', 'Tarde'] },
{ id: 'board_need', label: '¿Necesitarán una tabla?', type: 'choice', options: ['Sí', 'No, llevamos la nuestra', 'Necesitamos asesoramiento'] }
],
en: {
eyebrow: 'SURF LESSONS · TAMARINDO',
title: 'Surf lessons',
cardText: 'Tell us your level and what you’d like to learn. We’ll find a lesson that fits.',
description: 'A 2-hour lesson with a local surf instructor, a beach briefing and guided practice in the water, adapted to your group’s level. It can be a first approach to the ocean or an intermediate session focused on correcting basic mistakes.',
lead: 'Includes a local instructor, an introduction to equipment and safety, a board, and practice adapted to your level. The meeting point is shared after the booking and payment are confirmed.',
includes: ['Duration: 2 hours', 'Board included', 'First approach to the ocean or intermediate guidance', 'Correction of basic mistakes', 'Meeting point shared after the booking and payment are confirmed', 'Local Host service'],
imageAlts: [
'Student practicing surfing in Tamarindo',
'Two surfers practicing together on a wave in Tamarindo',
'Surfer riding a wave in Tamarindo',
],
questions: {
preferred_date: { label: 'What date would you prefer?', fields: ['Date'] },
surf_level: { label: 'What’s your surfing level?', options: ['First time', 'Beginner', 'Intermediate', 'Advanced'] },
lesson_goal: { label: 'What would you like to learn?', options: ['Try surfing', 'Improve the basics', 'Work on a specific skill'] },
group_size: { label: 'How many people are joining?', fields: [{ id: 'adults', label: 'Adults' }, { id: 'children', label: 'Children' }] },
lesson_format: { label: 'Would you prefer a private or group lesson?', options: ['Private', 'Group', 'We’d like to ask about both'] },
instruction_language: { label: 'Which language would you prefer for instruction?', options: ['Spanish', 'English', 'We can adapt'] },
swimming_comfort: { label: 'How comfortable are you in the water?', options: ['Comfortable swimming', 'Limited experience', 'We’d like to discuss it with the instructor'] },
transport_need: { label: 'Would you like to ask about transportation?', options: ['Yes', 'No'] },
origin: { label: 'Where are you visiting from?', placeholder: 'City and country' },
preferred_fruit: { label: 'If a snack is offered, which fruit would you prefer?', options: ['Pineapple', 'Bananas', 'Mangoes', 'Coconuts', 'No preference'] },
food_allergies: { label: 'Do you have any allergies or dietary restrictions?', placeholder: 'Optional' },
preferred_schedule: { label: 'What time do you prefer?', options: ['Morning', 'Midday', 'Afternoon'] },
board_need: { label: 'Will you need a board?', options: ['Yes', 'No, we bring our own', 'We need advice'] }
}
}
},
{
id: 'surf-programa-3-dias', number: '02A', eyebrow: 'PROGRAMA DE SURF · INICIACIÓN', title: 'Programa de iniciación al surf',
cardText: 'Tres clases privadas de dos horas para descubrir el mar y disfrutar tus primeras olas.',
description: 'Tres días para descubrir el mar y disfrutar tus primeras olas.',
images: [
'assets/img/services/surf-coaching/surf-coaching-tamarindo-surf-camp.webp',
'assets/img/services/surf-program-3-days/day-2.webp',
'assets/img/services/surf-program-3-days/day-3.webp'
],
heroImage: 'assets/img/services/surf-program-3-days/ocean-waves-no-people.webp',
imageAlts: [
'Grupo caminando con sus tablas hacia la orilla en Tamarindo.',
'Surfista sobre una ola, con otros surfistas remando cerca.',
'Surfista de traje oscuro haciendo una maniobra sobre una ola verde.'
],
questions: [
{ id: 'program_dates', label: '¿Qué fechas proponés para las tres clases? Elegí tres días consecutivos en el orden de las clases.', type: 'dates', fields: ['Día 1', 'Día 2', 'Día 3'], minDate: 'today' },
{ id: 'group_size', label: '¿Cuántas personas participan?', type: 'number', min: 1 }
],
programCopy: {
es: {
intro: 'Tu primera experiencia de surf merece tiempo para explorar, preguntar y volver a intentarlo. En WAVEPOINT creemos que tres clases, distribuidas en tres días consecutivos, son una buena forma de empezar: te permiten familiarizarte con el mar, practicar las bases y retomar lo aprendido en cada encuentro. Un programa privado para acercarte al surf con acompañamiento, a tu ritmo y disfrutando del proceso.',
facts: [['Duración', 'Tres días consecutivos, con una clase de dos horas cada día.'], ['Modalidad', 'Clases privadas para vos o tu grupo.'], ['Nivel', 'Principiantes. No necesitás experiencia previa en surf.'], ['Equipo', 'Tabla y lycra incluidas durante las clases.']],
whyHeading: '¿Por qué tres días de surf?',
whyText: 'En el primer encuentro todo es nuevo: la tabla, el movimiento del agua y las sensaciones de estar entre las olas. Volver otro día permite retomar esa experiencia, trabajar lo que te costó y seguir construyendo confianza. Cada clase parte de la anterior, con tiempo para practicar, recibir correcciones y disfrutar de tus avances.',
includesHeading: 'Qué incluye',
includes: ['Tres clases privadas de dos horas, repartidas en tres días consecutivos.', 'Acompañamiento y correcciones del instructor.', 'Explicación en la playa y práctica guiada en el agua.', 'Tabla de surf y lycra para cada sesión.', 'Seguimiento de lo trabajado durante el programa.', 'Servicio de Local Host'],
days: [
{ title: 'Día 1 · Conocer el mar y la tabla', text: 'Empezamos por familiarizarnos con el entorno, el equipo y las pautas básicas de seguridad. Practicamos la posición sobre la tabla, la remada y el movimiento para ponerse de pie, antes de llevar esos primeros ejercicios al agua con el instructor.' },
{ title: 'Día 2 · Practicar y ganar confianza', text: 'Retomamos lo aprendido y trabajamos sobre tus primeras sensaciones. Dedicamos más tiempo a la remada, el equilibrio y la puesta de pie, con correcciones que te ayuden a entender qué ajustar en cada intento.' },
{ title: 'Día 3 · Conectar lo aprendido', text: 'Reunimos lo trabajado y seguimos practicando con acompañamiento. Profundizamos en la observación de las olas, el momento de empezar a remar y la postura. Cerramos con una devolución sobre tus avances y los próximos aspectos que podés seguir trabajando.' }
],
progressNote: 'Los contenidos se adaptan a tu ritmo y a las condiciones del mar. El objetivo es que te lleves una primera experiencia disfrutable y una base para seguir aprendiendo.',
pricesHeading: 'Precios del programa',
priceLead: 'Precios en USD. Cada importe indica cuánto paga cada persona, según la cantidad de participantes de tu grupo.',
priceHeaders: ['Participantes', 'Por persona · Una clase de 2 horas', 'Por persona · Programa de 3 días'],
prices: [['1 persona', 'USD 70', 'USD 210'], ['2 personas', 'USD 65', 'USD 195'], ['3 personas', 'USD 60', 'USD 180'], ['4 personas', 'USD 55', 'USD 165'], ['5 personas', 'USD 50', 'USD 150'], ['Más de 5 personas', 'USD 50', 'USD 150']],
priceNote: 'La tarifa del programa incluye una clase de dos horas por día durante tres días consecutivos, con tabla y lycra. Por ejemplo, si participan dos personas, cada una paga USD 195 por el programa completo: USD 390 en total para ambas.',
reservationHeading: 'Solicitar reserva',
reservationText: 'Compartí tus fechas y cuántas personas participan. WAVEPOINT te confirmará disponibilidad, horarios y precio total antes de enviarte el enlace de pago.',
reservationNote: 'Esto es una solicitud; la reserva todavía no está confirmada. No tenés que pagar ahora.'
},
en: {
intro: 'Your first surfing experience deserves time to explore, ask questions and try again. At WAVEPOINT, we believe three lessons spread across three consecutive days are a good way to start: they give you time to get familiar with the ocean, practice the basics and build on what you learned at each meeting. A private program to approach surfing with guidance, at your own pace and while enjoying the process.',
facts: [['Duration', 'Three consecutive days, with one 2-hour lesson each day.'], ['Format', 'Private lessons for you or your group.'], ['Level', 'Beginners. No prior surfing experience is needed.'], ['Equipment', 'A surfboard and rash guard are included for each lesson.']],
whyHeading: 'Why three days of surfing?',
whyText: 'At the first meeting, everything is new: the board, the movement of the water and the feeling of being among the waves. Coming back another day lets you revisit the experience, work on what felt difficult and keep building confidence. Each lesson builds on the last, with time to practice, receive corrections and enjoy your progress.',
includesHeading: 'What’s included',
includes: ['Three private 2-hour lessons, spread across three consecutive days.', 'Guidance and corrections from the instructor.', 'A beach briefing and guided practice in the water.', 'A surfboard and rash guard for each session.', 'Follow-up on what you work on during the program.', 'Local Host service'],
days: [
{ title: 'Day 1 · Get to know the ocean and board', text: 'We start by getting familiar with the surroundings, the equipment and basic safety guidelines. We practice positioning on the board, paddling and the movement to stand up before taking those first exercises into the water with the instructor.' },
{ title: 'Day 2 · Practice and build confidence', text: 'We revisit what you learned and work with your first impressions. We spend more time on paddling, balance and standing up, with corrections to help you understand what to adjust on each attempt.' },
{ title: 'Day 3 · Bring it all together', text: 'We connect what you have worked on and continue practicing with guidance. We take a closer look at reading the waves, when to start paddling and posture. We finish with feedback on your progress and the next skills you can keep working on.' }
],
progressNote: 'The content adapts to your pace and ocean conditions. The goal is for you to enjoy a first surfing experience and leave with a foundation for continuing to learn.',
pricesHeading: 'Program prices',
priceLead: 'Prices in USD. Each amount is per person and depends on the number of people in your group.',
priceHeaders: ['Participants', 'Per person · One 2-hour lesson', 'Per person · 3-day program'],
prices: [['1 person', 'USD 70', 'USD 210'], ['2 people', 'USD 65', 'USD 195'], ['3 people', 'USD 60', 'USD 180'], ['4 people', 'USD 55', 'USD 165'], ['5 people', 'USD 50', 'USD 150'], ['More than 5 people', 'USD 50', 'USD 150']],
priceNote: 'The program rate includes one 2-hour lesson per day across three consecutive days, with a board and rash guard. For example, if two people join, each pays USD 195 for the full program: USD 390 total for both.',
reservationHeading: 'Request a booking',
reservationText: 'Share your dates and how many people will take part. WAVEPOINT will confirm availability, times and the total price before sending you a payment link.',
reservationNote: 'This is a request; your booking is not confirmed yet. You do not need to pay now.'
}
},
en: {
eyebrow: 'SURF PROGRAM · BEGINNERS', title: 'Beginner Surf Program',
cardText: 'Three private 2-hour lessons to discover the ocean and enjoy your first waves.',
description: 'Three days to discover the ocean and enjoy your first waves.',
imageAlts: ['Group walking with their boards toward the shore in Tamarindo.', 'Surfer riding a wave with others paddling nearby.', 'Surfer in a dark wetsuit making a turn on a green wave.'],
questions: {
program_dates: { label: 'Which dates would you like for the three lessons? Choose three consecutive days in lesson order.', fields: ['Day 1', 'Day 2', 'Day 3'] },
group_size: { label: 'How many people will take part?' }
}
}
},
{
id: 'surf-coaching', number: '03', eyebrow: 'SURFCOACHING · PROGRESO', title: 'Surfcoaching',
cardText: 'Sesión de surf grabada y videoanálisis técnico para mejorar tu postura, tus tiempos y tus movimientos.',
description: 'Un servicio de videoanálisis de una sesión de surf, recomendado para surfistas intermedios o avanzados. Primero se graba la sesión y después el instructor analiza las olas para hacer una devolución técnica.',
lead: 'El servicio tiene dos momentos: una sesión de surf grabada, con una cámara que busca captar la mayor cantidad posible de olas, y un análisis posterior desde una pantalla para corregir posturas, tiempos y movimientos. Incluye el video de tus olas y la devolución técnica. Precio: USD 45 por persona.',
includes: ['Sesión de surf grabada', 'Video de tus olas', 'Videoanálisis y devolución técnica posterior', 'Recomendado para surfistas intermedios o avanzados', 'USD 45 por persona', 'Servicio de Local Host'],
images: ['assets/img/services/surf-coaching/surf-coaching-group-beach.webp', 'assets/img/services/surf-photography/surf-coaching-session.webp'],
imageAlts: ['Tres surfistas saltando con sus tablas en la playa', 'Surfista surcando una ola sobre una tabla roja'],
imageAltsEn: ['Three surfers jumping with their boards on the beach', 'Surfer riding a wave on a red board'],
questions: [
{ id: 'preferred_date', label: '¿Qué fecha prefieren?', type: 'dates', fields: ['Fecha'], minDate: 'today' },
{ id: 'current_surf_level', label: '¿Cuál es tu nivel actual de surf?', type: 'choice', options: ['Principiante', 'Intermedio', 'Avanzado'] },
{ id: 'improvement_goal', label: '¿Qué te gustaría mejorar?', type: 'textarea', placeholder: 'Contanos brevemente.' },
{ id: 'group_size', label: '¿Cuántas personas participan?', type: 'number', min: 1 },
{ id: 'participant_levels', label: '¿Qué nivel tiene cada participante?', type: 'textarea', placeholder: 'Opcional', optional: true },
{ id: 'coaching_mode', label: '¿Qué modalidad quieren consultar?', type: 'choice', options: ['Sesión grabada + videoanálisis posterior'] },
{ id: 'session_schedule', label: '¿Qué horario prefieren?', type: 'choice', options: ['Mañana', 'Mediodía', 'Tarde'] },
{ id: 'date_flexibility', label: '¿Tienen flexibilidad de fecha?', type: 'choice', optional: true, options: ['Sí, somos flexibles', 'No, necesitamos esa fecha'] },
{ id: 'preferred_spot', label: '¿Hay algún spot que quieran consultar?', type: 'text', placeholder: 'Opcional', optional: true },
{ id: 'feedback_format', label: '¿Qué tipo de devolución quieren consultar?', type: 'choice', options: ['Videoanálisis posterior y devolución técnica'] },
{ id: 'transport_need', label: '¿Necesitan consultar por traslado?', type: 'choice', options: ['Sí', 'No'] },
{ id: 'own_board', label: '¿Traerán su propia tabla?', type: 'choice', options: ['Sí', 'No'] },
{ id: 'edited_photos', label: '¿Quieren consultar por fotos editadas aparte?', type: 'choice', optional: true, options: ['Sí', 'No por ahora'] }
],
en: {
eyebrow: 'COACHING · PROGRESSION',
title: 'Surf coaching',
cardText: 'A filmed surf session and technical video analysis to improve your posture, timing and movements.',
description: 'A video analysis service for a surf session, recommended for intermediate or advanced surfers. The session is filmed first, and the coach then reviews the waves to provide technical feedback.',
lead: 'The service has two moments: a filmed surf session, with a camera aiming to capture as many waves as possible, followed by a screen-based analysis to correct posture, timing and movements. It includes the video of your waves and technical feedback. Price: USD 45 per person.',
includes: ['Filmed surf session', 'Video of your waves', 'Video analysis and technical feedback afterwards', 'Recommended for intermediate or advanced surfers', 'USD 45 per person', 'Local Host service'],
imageAlts: ['Surfer riding a wave on a red board', 'Three surfers sharing a beach session with their boards', 'Group of surfers gathering with their boards on Tamarindo Beach'],
questions: {
preferred_date: { label: 'What date would you prefer?', fields: ['Date'] },
current_surf_level: { label: 'What is your current surfing level?', options: ['Beginner', 'Intermediate', 'Advanced'] },
improvement_goal: { label: 'What would you like to improve?', placeholder: 'Tell us briefly.' },
group_size: { label: 'How many people are joining?', min: 1 },
participant_levels: { label: 'What level is each participant?', placeholder: 'Optional' },
coaching_mode: { label: 'Which format would you like to ask about?', options: ['Filmed session + video analysis afterwards'] },
session_schedule: { label: 'What time do you prefer?', options: ['Morning', 'Midday', 'Afternoon'] },
date_flexibility: { label: 'Are you flexible with the date?', options: ['Yes, we are flexible', 'No, we need that date'] },
preferred_spot: { label: 'Is there a spot you would like to ask about?', placeholder: 'Optional' },
feedback_format: { label: 'What type of feedback would you like to ask about?', options: ['Video analysis afterwards and technical feedback'] },
transport_need: { label: 'Would you like to ask about transportation?', options: ['Yes', 'No'] },
own_board: { label: 'Will you bring your own board?', options: ['Yes', 'No'] },
edited_photos: { label: 'Would you like to ask about edited photos separately?', options: ['Yes', 'Not for now'] }
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
includes: ['Mats de yoga', 'Clases grupales o privadas', 'Adaptación según tu nivel y energía', 'Servicio de Local Host'],
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
includes: ['Yoga mats', 'Group or private classes', 'Adapted to your level and energy', 'Local Host service'],
imageAlts: ['Woman meditating on the beach by the ocean', 'Group meditating in a thatched-roof tropical pavilion', 'Group yoga class in an open-air space among palm trees']
}
},
{
id: 'snorkel-catamaran', number: '05', eyebrow: 'MAR · NAVEGACIÓN', title: 'Embarcaciones',
cardText: 'Descubrí la costa de Guanacaste desde el mar.',
description: 'Un poco de tiempo en el mar, una vista diferente de Tamarindo. Ya sea que quieras hacer snorkel, relajarte a bordo o ver cómo cae el sol sobre el océano, WAVEPOINT te ayuda a encontrar una salida que se adapte a tu grupo y a conocer todos los detalles antes de reservar.',
images: ['assets/img/services/snorkel-catamaran/boat-guide-foto-04.jpg', 'assets/img/services/snorkel-catamaran/snorkel-catalina-group.webp', 'assets/img/services/snorkel-catamaran/snorkel-catalina-shore.webp', 'assets/img/services/snorkel-catamaran/snorkel-fish.webp'],
imageAlts: ['Grupo de personas a bordo de una embarcación frente a la costa', 'Grupo haciendo snorkel frente a una isla de la costa de Costa Rica', 'Grupo haciendo snorkel cerca de una costa tropical', 'Personas haciendo snorkel junto a peces de colores bajo el agua'],
imageAltsEn: ['Group of people aboard a boat off the coast', 'Group snorkeling beside an island off the coast of Costa Rica', 'Group snorkeling near a tropical shoreline', 'People snorkeling with colorful fish underwater'],
galleryImages: ['assets/img/services/snorkel-catamaran/snorkel-catalina-shore.webp', 'assets/img/services/snorkel-catamaran/snorkel-fish.webp', 'assets/img/services/snorkel-catamaran/snorkel-turtle.webp'],
galleryImageAlts: ['Grupo haciendo snorkel cerca de una costa tropical', 'Personas haciendo snorkel junto a peces de colores bajo el agua', 'Personas haciendo snorkel junto a una tortuga marina'],
galleryImageAltsEn: ['Group snorkeling near a tropical shoreline', 'People snorkeling with colorful fish underwater', 'People snorkeling alongside a sea turtle'],
questions: [
{ id: 'preferred_date', label: '¿Qué fecha prefieren?', type: 'dates', fields: ['Fecha'], minDate: 'today' },
{ id: 'sea_experience', label: '¿Qué salida les interesa?', type: 'choice', options: ['Día completo en la península de Papagayo', 'Snorkel por la costa de Guanacaste', 'Pesca en mar abierto', 'Pesca desde Bahía Potrero', 'Snorkel desde Bahía Potrero', 'Atardecer desde Bahía Potrero', 'Todavía no lo sé'] },
{ id: 'group_size', label: '¿Cuántas personas participan?', type: 'headcount', fields: [{ id: 'adults', label: 'Adultos' }, { id: 'children', label: 'Niños' }], note: 'Si viajan niños, indicá sus edades para consultar los requisitos.', agesLabel: 'Edades de los niños', agesPlaceholder: 'Ej.: 6 y 10' },
{ id: 'departure_type', label: '¿Prefieren una salida compartida o privada?', type: 'choice', options: ['Compartida', 'Privada', 'Quiero comparar ambas'] },
{ id: 'swimming_comfort', label: '¿Todas las personas se sienten cómodas nadando en el mar?', type: 'choice', options: ['Sí', 'No', 'Quisiera consultar antes'], optional: true },
{ id: 'lodging', label: '¿Dónde se hospedan?', type: 'text', placeholder: 'Alojamiento o zona', optional: true },
{ id: 'dietary_needs', label: '¿Hay alergias alimentarias o necesidades dietéticas que debamos comunicar?', type: 'textarea', placeholder: 'Opcional', optional: true }
],
en: {
eyebrow: 'SEA · NAVIGATION',
title: 'Navigation',
cardText: 'Discover Guanacaste’s coast from the sea.',
description: 'A little time at sea, a different view of Tamarindo. Whether you would love to snorkel, relax on deck or watch the sun go down over the ocean, WAVEPOINT helps you find an outing that feels right for your group and confirm the details before you book.',
questions: {
preferred_date: { label: 'What date would you prefer?', fields: ['Date'] },
sea_experience: { label: 'Which outing interests you?', options: ['Full day in the Papagayo Peninsula', 'Snorkeling along the Guanacaste coast', 'Deep-sea fishing', 'Fishing from Bahía Potrero', 'Snorkeling from Bahía Potrero', 'Sunset from Bahía Potrero', 'I’m not sure yet'] },
group_size: { label: 'How many people are participating?', fields: [{ id: 'adults', label: 'Adults' }, { id: 'children', label: 'Children' }], note: 'If children are joining, share their ages so we can check requirements.', agesLabel: 'Children’s ages', agesPlaceholder: 'E.g. 6 and 10' },
departure_type: { label: 'Would you prefer a shared or private outing?', options: ['Shared', 'Private', 'I want to compare both'] },
swimming_comfort: { label: 'Is everyone comfortable swimming in the sea?', options: ['Yes', 'No', 'I’d like to check first'] },
lodging: { label: 'Where are you staying?', placeholder: 'Accommodation or area' },
dietary_needs: { label: 'Are there any food allergies or dietary needs we should share?', placeholder: 'Optional' }
},
imageAlts: ['Group of people aboard a boat off the coast', 'Group snorkeling beside an island off the coast of Costa Rica', 'Group snorkeling near a tropical shoreline', 'People snorkeling with colorful fish underwater']
}
},
{
id: 'mangrove-tour', number: '05A', eyebrow: 'NATURALEZA · TAMARINDO', title: 'Tour del estero en bote — Descubrí la naturaleza entre manglares',
cardText: 'Navegá entre manglares y descubrí la vida del estero de Tamarindo.',
description: 'Navegá por los canales del estero de Tamarindo y conocé la vida que se esconde entre sus manglares. Con un guía local naturalista, aprenderás sobre este ecosistema mientras buscás cocodrilos, monos y aves en su entorno natural.',
lead: 'Disfrutá del paisaje desde una embarcación con techo y asientos, con tiempo para observar, sacar fotos y conocer otra cara de Tamarindo.',
heroImage: 'assets/img/services/mangrove-tour/mangrove-tour-visitor-crocodile.webp',
images: [
'assets/img/services/mangrove-tour/mangrove-tour-visitor-crocodile.webp',
'assets/img/services/mangrove-tour/mangrove-tour-people-boat.webp',
'assets/img/services/mangrove-tour/mangrove-tour-kayak.webp',
'assets/img/services/mangrove-tour/mangrove-tour-kayak-estuary.webp'
],
imageAlts: [
'Visitante observando un cocodrilo desde la embarcación en el estero',
'Grupo de visitantes disfrutando el recorrido en bote por el estero',
'Personas navegando en kayak por el estero de Tamarindo',
'Persona remando en kayak frente a los manglares del estero'
],
imageAltsEn: [
'Visitor observing a crocodile from the boat in the estuary',
'Group of visitors enjoying the estuary boat tour',
'People kayaking through the Tamarindo estuary',
'Person kayaking beside the estuary mangroves'
],
facts: [['Duración', 'Dos horas'], ['Modalidad', 'Recorrido guiado en bote'], ['Grupo', 'Hasta 12 participantes'], ['Idiomas', 'Español e inglés'], ['Precio', 'USD 40 por persona']],
includes: ['Recorrido por el estero en bote con techo y asientos', 'Guía local naturalista', 'Chaleco salvavidas', 'Servicio de Local Host'],
before: 'Traé ropa cómoda, gorra, protección solar y repelente. Si viajan niños, indicá sus edades al consultar. La actividad no es accesible para sillas de ruedas. Los animales viven en libertad: los avistamientos dependen de las condiciones del día y no están garantizados.',
priceText: 'USD 40 por persona.',
requestText: 'Contanos qué fecha preferís y cuántas personas participan. Si necesitás recogida, indicá dónde te hospedás para verificar la cobertura. WAVEPOINT confirmará disponibilidad, horario, punto de encuentro o recogida y condiciones antes de enviarte el enlace de pago.',
allianceText: '¿Tenés un negocio u ofrecés experiencias en Tamarindo y alrededores? Contanos tu propuesta y conversemos sobre una alianza para acercar tus servicios a quienes visitan la zona. Escribinos por WhatsApp y veamos cómo trabajar juntos.',
questions: [
{ id: 'preferred_date', label: '¿Qué fecha preferís?', type: 'dates', fields: ['Fecha'], minDate: 'today' },
{ id: 'group_size', label: '¿Cuántas personas participan?', type: 'number', min: 1, max: 12 },
{ id: 'children_ages', label: 'Si viajan niños, ¿qué edades tienen?', type: 'text', placeholder: 'Opcional', optional: true },
{ id: 'pickup', label: '¿Necesitás consultar por recogida?', type: 'choice', options: ['Sí', 'No'], optional: true },
{ id: 'lodging', label: 'Si necesitás recogida, ¿dónde te hospedás?', type: 'text', placeholder: 'Alojamiento o zona', optional: true }
],
en: {
 eyebrow: 'NATURE · TAMARINDO', title: 'Boat estuary tour — Discover nature among the mangroves', cardText: 'Navigate among mangroves and discover life in the Tamarindo estuary.', description: 'Navigate the channels of the Tamarindo estuary and discover the life hidden among its mangroves. With a local naturalist guide, you will learn about this ecosystem while looking for crocodiles, monkeys and birds in their natural environment.', lead: 'Enjoy the landscape from a covered boat with seats, with time to observe, take photos and discover another side of Tamarindo.', facts: [['Duration', 'Two hours'], ['Format', 'Guided boat tour'], ['Group', 'Up to 12 participants'], ['Languages', 'Spanish and English'], ['Price', 'USD 40 per person']], includes: ['Boat ride through the estuary with roof and seats', 'Local naturalist guide', 'Life jacket', 'Local Host service'], before: 'Bring comfortable clothes, a hat, sunscreen and insect repellent. If children are traveling, tell us their ages when you inquire. The activity is not wheelchair accessible. Animals live in the wild: sightings depend on the conditions of the day and are not guaranteed.', priceText: 'USD 40 per person.', requestText: 'Tell us your preferred date and how many people are participating. If you need pickup, tell us where you are staying so we can check coverage. WAVEPOINT will confirm availability, schedule, meeting point or pickup and conditions before sending a payment link.', allianceText: 'Do you run a business or offer experiences in Tamarindo and the surrounding area? Tell us about your proposal and let’s talk about a partnership to connect your services with visitors to the region. Write to us on WhatsApp and let’s explore how to work together.',
 questions: { preferred_date: { label: 'What date would you prefer?', fields: ['Date'] }, group_size: { label: 'How many people are participating?' }, children_ages: { label: 'If children are traveling, what are their ages?', placeholder: 'Optional' }, pickup: { label: 'Would you like to ask about pickup?', options: ['Yes', 'No'] }, lodging: { label: 'If you need pickup, where are you staying?', placeholder: 'Accommodation or area' } },
 imageAlts: ['Covered boat navigating the Tamarindo estuary', 'Visitor observing wildlife among the mangroves from a boat', 'Tamarindo estuary channel among mangrove roots', 'Crocodile resting among the estuary vegetation']
}
},
{
id: 'roca-bruja', number: '04', eyebrow: 'VIAJE DE SURF · AVENTURA', title: 'Roca Bruja',
cardText: 'Un día de surf en barco con guías locales que conocen la zona.',
lead: 'Algunos surf trips te acompañan mucho después de tu última ola.',
description: 'Salí en barco hacia Roca Bruja y compartí un día de surf con guías locales que conocen la zona. Desde el viaje hasta el tiempo en el agua, la experiencia la dan el océano, tu grupo y las personas que te guían.',
coordination: 'WavePoint ayuda a coordinar los detalles, teniendo en cuenta el nivel de surf de tu grupo y las condiciones.',
galleryAlt: 'Formaciones rocosas de Roca Bruja',
images: ['assets/img/services/witchs-rock/roca-bruja-rock.webp', 'assets/img/services/witchs-rock/roca-bruja-coast.webp'],
galleryImages: ['assets/img/services/witchs-rock/roca-bruja-wave.webp', 'assets/img/services/witchs-rock/roca-bruja-coast.webp', 'assets/img/services/witchs-rock/guide-roca-bruja-boat.webp'],
imageAlts: ['Formación rocosa de Roca Bruja frente a la costa', 'Vista cercana de la formación rocosa de Roca Bruja desde el mar'],
imageAltsEn: ['Rock formation at Witch’s Rock along the coast', 'Close view of the Witch’s Rock formation from the sea'],
galleryImageAlts: ['Roca Bruja y una ola rompiendo frente a la formación rocosa', 'Vista cercana de la formación rocosa de Roca Bruja desde el mar', 'Grupo a bordo de un barco frente a la formación rocosa de Roca Bruja'],
galleryImageAltsEn: ['Witch’s Rock formation with a breaking wave along the coast', 'Close view of the Witch’s Rock formation from the sea', 'Group aboard a boat in front of the Witch’s Rock formation'],
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
galleryAlt: 'Witch’s Rock formations along the Guanacaste coast',
imageAlts: ['Rock formation at Witch’s Rock along the coast', 'Close view of the Witch’s Rock formation from the sea'],
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
includes: ['Servicio de Local Host'],
description: 'Tu primera ola, un giro que venís trabajando o una sesión compartida con amigos: cada surfista tiene momentos que vale la pena guardar. WavePoint te conecta con fotógrafos locales de surf para capturarlos, así vos podés enfocarte en las olas y llevarte un pedacito de Tamarindo.',
images: ['assets/img/services/surf-photography/guide-surf-cover.webp', 'assets/img/services/surf-photography/guide-surf-gallery.webp', 'assets/img/services/surf-program-3-days/day-2.webp', 'assets/img/services/surf-program-3-days/day-3.webp', 'assets/img/services/surf-program-3-days/day-1.webp'],
imageAlts: ['Dos surfistas salen del agua con sus tablas en la playa', 'Dos surfistas caminan por la arena con sus tablas', 'Surfista sobre una ola, con otros surfistas remando cerca.', 'Surfista de traje oscuro haciendo una maniobra sobre una ola verde.', 'Surfista de torso desnudo parado sobre la tabla en una ola pequeña.'],
imageAltsEn: ['Two surfers emerge from the water carrying their boards', 'Two surfers walk along the beach carrying their boards', 'Surfer riding a wave with others paddling nearby', 'Surfer in a dark wetsuit making a turn on a green wave', 'Shirtless surfer standing on a board on a small wave'],
questions: [
{ id: 'preferred_date', label: '¿Qué fecha prefieren?', type: 'dates', fields: ['Fecha preferida'], minDate: 'today' },
{ id: 'group_size', label: '¿Cuántas personas participarían?', type: 'number', min: 1 },
{ id: 'photo_mode', label: '¿Qué modalidad de fotografía les interesa?', type: 'choice', options: ['Fotografía acuática', 'Fotografía desde la playa', 'Quiero consultar ambas modalidades'] },
{ id: 'preferred_spot', label: '¿En qué playa o zona les gustaría hacer la sesión?', type: 'text', placeholder: 'Si ya tienen una preferencia', optional: true },
{ id: 'session_format', label: '¿Prefieren una sesión individual o grupal?', type: 'choice', options: ['Individual', 'Grupal', 'Cualquiera de las dos'], optional: true }
],
submitLabel: 'CONSULTAR FOTOGRAFÍA ↗',
en: {
eyebrow: 'SURF PHOTOGRAPHY',
title: 'Surf Photography',
cardText: 'Your time in the water, captured.',
includes: ['Local Host service'],
description: 'Your first wave, a turn you’ve been working on or a session shared with friends—every surfer has moments worth keeping. WavePoint connects you with local surf photographers to capture yours, so you can focus on the waves and take a little of Tamarindo home with you.',
imageAlts: ['Two surfers emerge from the water carrying their boards', 'Two surfers walk along the beach carrying their boards', 'Surfer riding a wave with others paddling nearby', 'Surfer in a dark wetsuit making a turn on a green wave', 'Shirtless surfer standing on a board on a small wave'],
submitLabel: 'ASK ABOUT PHOTOGRAPHY ↗',
questions: {
preferred_date: { label: 'What date would you prefer?', fields: ['Preferred date'] },
group_size: { label: 'How many people would take part?' },
photo_mode: { label: 'Which photography format are you interested in?', options: ['In-water photography', 'Photography from the beach', 'I’d like to ask about both formats'] },
preferred_spot: { label: 'Which beach or area would you prefer for the session?', placeholder: 'If you already have a preference' },
session_format: { label: 'Would you prefer an individual or group session?', options: ['Individual', 'Group', 'Either one'] }
}
}
},
{
id: 'surfskate', number: '09', eyebrow: 'SURFSKATE · PROGRESO', title: 'Clases de surfskate',
cardText: 'Encontrá tu flow en tierra.',
description: 'Explorá tus giros, ganá confianza sobre la tabla y empezá a sentir movimientos que después podés llevar al agua. Ya sea que pruebes el surfskate por primera vez o quieras sumarlo a tu práctica de surf, WavePoint te conecta con instructores locales para encontrar una sesión acorde a tu nivel.',
includes: ['Tabla de surfskate para la sesión', 'Casco y protecciones'],
images: ['assets/img/services/surfskate/guide-surfskate-cover.webp', 'assets/img/services/surfskate/surfskate.webp', 'assets/img/services/surfskate/guide-surfskate-gallery.webp'],
imageAlts: ['Clase grupal de surfskate al aire libre', 'Dos instructores practicando surfskate sobre una tabla', 'Persona practicando surfskate en una pista'],
imageAltsEn: ['Group surfskate lesson outdoors', 'Two instructors practicing surfskate on a board', 'Person practicing surfskate on a track'],
questions: [
{ id: 'preferred_date', label: '¿Qué fecha prefieren?', type: 'dates', fields: ['Fecha preferida'], minDate: 'today' },
{ id: 'group_size', label: '¿Cuántas personas participarían?', type: 'number', min: 1 },
{ id: 'group_ages', label: '¿Qué edades tienen las personas del grupo?', type: 'text', placeholder: 'Edades de quienes participarían', optional: true },
{ id: 'experience_background', label: '¿Qué experiencia tienen con skate, surfskate o surf?', type: 'textarea', optional: true },
{ id: 'lesson_goal', label: '¿Qué les gustaría practicar o mejorar?', type: 'textarea', optional: true },
{ id: 'preferred_schedule', label: '¿Qué horario prefieren?', type: 'text', placeholder: 'Horario aproximado', optional: true },
{ id: 'preferred_format', label: '¿Qué formato prefieren consultar?', type: 'choice', options: ['Privado', 'Grupal', 'Cualquiera de los dos'], optional: true }
],
submitLabel: 'CONSULTAR UNA CLASE ↗',
en: {
eyebrow: 'SURFSKATE · PROGRESSION',
title: 'Surfskate Lessons',
cardText: 'Find your flow on land.',
description: 'Explore your turns, build confidence on the board and get a feel for movements you can bring into the water. Whether you’re trying surfskate for the first time or adding to your surf practice, WavePoint connects you with local instructors for a session that suits your level.',
includes: ['Surfskate board for the session', 'Helmet and protective pads'],
submitLabel: 'ASK ABOUT A LESSON ↗',
questions: {
preferred_date: { label: 'What date would you prefer?', fields: ['Preferred date'] },
group_size: { label: 'How many people would take part?' },
group_ages: { label: 'What are the ages of the people in your group?', placeholder: 'Ages of the participants' },
experience_background: { label: 'What experience does your group have with skateboarding, surfskate or surfing?' },
lesson_goal: { label: 'What would you like to practice or improve?' },
preferred_schedule: { label: 'What time would you prefer?', placeholder: 'Approximate preferred time' },
preferred_format: { label: 'Which format would you like to ask about?', options: ['Private', 'Group', 'Either one'] }
}
}
},
{
id: 'atv', number: '07', eyebrow: 'TIERRA · AVENTURA', title: 'ATV en Tamarindo — Elegí tu aventura',
cardText: 'Un poco de aventura más allá de la playa.',
description: 'Salí con guías locales y descubrí los alrededores de Tamarindo en cuatriciclo. Tomá el paisaje, disfrutá el recorrido y compartí la aventura con la gente con la que viajas. WavePoint te ayuda a encontrar un tour que se adapte a tu grupo, con la ruta y los detalles confirmados antes de salir.',
images: ['assets/img/services/atv/atv-forest-convoy.webp', 'assets/img/services/atv/atv-arenal-volcano-ride.webp', 'assets/img/services/atv/atv-coastal-overlook.webp', 'assets/img/services/atv/atv-forest-trail.webp'],
galleryImages: ['assets/img/services/atv/atv-instagram-1.webp', 'assets/img/services/atv/atv-instagram-2.webp', 'assets/img/services/atv/atv-instagram-3.webp'],
imageAlts: ['Vehículo todoterreno cruzando un arroyo en un bosque tropical', 'Dos personas disfrutando un recorrido en vehículo todoterreno', 'Grupo de cuatriciclos recorriendo un sendero junto al río', 'Cuatriciclo avanzando por un sendero de bosque tropical'],
imageAltsEn: ['All-terrain vehicle crossing a stream in a tropical forest', 'Two people enjoying an all-terrain vehicle ride', 'Group of ATVs riding along a trail beside the river', 'ATV riding along a tropical forest trail'],
galleryImageAlts: ['Vehículo todoterreno cruzando un arroyo en un bosque tropical', 'Dos personas disfrutando un recorrido en vehículo todoterreno', 'Grupo de cuatriciclos recorriendo un sendero junto al río'],
galleryImageAltsEn: ['All-terrain vehicle crossing a stream in a tropical forest', 'Two people enjoying an all-terrain vehicle ride', 'Group of ATVs riding along a trail beside the river'],
questions: [
{ id: 'preferred_date', label: '¿Qué fecha prefieren?', type: 'dates', fields: ['Fecha'], minDate: 'today' },
{ id: 'preferred_route', label: '¿Qué recorrido o modalidad les interesa?', type: 'choice', options: ['Explorer · 2 horas', 'Adventure · 4 horas', 'Ultimate · 6 horas', 'Alquiler · 24 horas'] },
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
preferred_date: { label: 'What date would you prefer?', fields: ['Date'] },
preferred_route: { label: 'Which route or option interests you?', options: ['Explorer · 2 hours', 'Adventure · 4 hours', 'Ultimate · 6 hours', 'Rental · 24 hours'] },
drivers: { label: 'How many people want to drive?' },
passengers: { label: 'How many would be passengers?' },
driver_ages: { label: 'What are the ages of the drivers?', placeholder: 'e.g. 24, 31 and 42' },
licenses: { label: 'Do the drivers have a valid driver’s license?', options: ['Everyone', 'Some', 'None'] }
}
}
},
{
id: 'diving', number: '06A', eyebrow: 'BUCEO · NATIVA DIVING', title: 'Buceo en Tamarindo e Islas Catalinas',
cardText: 'Descubrí un mundo bajo la superficie.',
description: 'Respirar bajo el agua por primera vez, conocer la vida marina del Pacífico o dar el siguiente paso en tu formación: encontrá una experiencia de buceo que acompañe tu curiosidad y tu nivel.',
lead: 'Junto a NATIVA Diving Experiences, ofrecemos opciones para quienes nunca bucearon, quienes quieren obtener su primera certificación y buzos certificados que buscan seguir explorando. La disponibilidad, el precio final, la duración, la cantidad de inmersiones y el punto de encuentro se confirman antes de realizar el pago.',
images: [
'assets/img/services/diving/diving-18.webp',
'assets/img/services/diving/diving-19.webp',
'assets/img/services/diving/diving-20.webp',
'assets/img/services/diving/diving-three-divers.webp'
],
imageAlts: [
'Buzo descendiendo junto a una pared de roca bajo el agua',
'Buzo explorando un arrecife bajo el agua',
'Tortuga marina junto a una persona haciendo snorkel',
'Tres buzos explorando el fondo marino'
],
questions: [
{ id: 'diving_experience', label: '¿Qué experiencia de buceo te interesa?', type: 'choice', options: ['Mi primera vez · Discover Scuba Diving', 'Quiero certificarme · PADI Open Water', 'Quiero seguir aprendiendo · Otros cursos PADI', 'Ya estoy certificado · Buceo de exploración'] },
{ id: 'instructor_mode', label: '¿Qué modalidad querés consultar?', type: 'choice', options: ['Instructor o guía compartido', 'Instructor o guía privado', 'Quiero comparar ambas opciones'] },
{ id: 'group_size', label: '¿Cuántas personas quieren bucear?', type: 'number', min: 1 },
{ id: 'swimming_comfort', label: '¿Todas las personas se sienten cómodas nadando?', type: 'choice', options: ['Sí', 'No', 'Quiero comentarlo con la instructora'] }
],
divingCopy: {
sectionHeading: 'Elegí tu experiencia',
experiences: [
['Mi primera vez — Discover Scuba Diving', 'Una introducción al buceo para descubrir qué se siente al respirar bajo el agua, sin inscribirte en un curso completo. No necesitás experiencia ni certificación previa y esta experiencia no otorga una certificación de buzo.'],
['Quiero certificarme — PADI Open Water Diver', 'Tu primer paso para convertirte en buzo certificado. El curso combina conocimientos teóricos, práctica en aguas confinadas e inmersiones en aguas abiertas.'],
['Quiero seguir aprendiendo — Otros cursos PADI', 'Si ya tenés una certificación y querés ampliar tus conocimientos, consultá qué programa se adapta a tu formación y experiencia.'],
['Ya estoy certificado — Buceo de exploración', 'Una opción para buzos certificados que quieren explorar el entorno submarino. Los sitios se coordinan según el nivel de los participantes y las condiciones del mar.']
],
modeHeading: 'Instructor o guía compartido o privado',
modeText: 'Podés solicitar un instructor o guía compartido, privado o comparar ambas alternativas. La opción de instructor privado no implica, por sí sola, una embarcación privada.',
includesHeading: 'Qué incluye',
includes: ['Equipo completo de buceo durante la experiencia', 'Acompañamiento de una instructora PADI certificada', 'Espacio en la embarcación para la salida', 'Snacks, agua, té frío y fruta'],
beforeHeading: 'Una experiencia según tu nivel',
before: 'No hace falta llegar sabiendo qué programa elegir. Contanos si nunca buceaste, si querés certificarte o si ya tenés experiencia. También necesitamos saber si todos se sienten cómodos nadando; los requisitos de participación y la documentación se confirman con la instructora.',
priceHeading: 'Precio y duración',
priceText: 'Se cotizan según la modalidad, la cantidad de participantes y la elección de instructor o guía compartido o privado.',
requestHeading: 'Solicitar información',
requestText: 'Contanos qué experiencia te interesa, cuántas personas quieren bucear y si prefieren modalidad compartida o privada. Antes de pagar, confirmaremos disponibilidad, precio final, duración, cantidad de inmersiones y punto de encuentro.'
},
en: {
eyebrow: 'DIVING · NATIVA DIVING', title: 'Diving in Tamarindo and the Catalinas Islands', cardText: 'Discover a world beneath the surface.', description: 'Breathe underwater for the first time, meet the marine life of the Pacific or take the next step in your training with a diving experience that matches your curiosity and level.', lead: 'Together with NATIVA Diving Experiences, we offer options for first-time divers, people who want to earn their first certification and certified divers who want to keep exploring. Availability, final price, duration, number of dives and meeting point are confirmed before payment.', imageAlts: ['Diver descending beside an underwater rock wall', 'Diver exploring an underwater reef', 'Sea turtle beside a snorkeler', 'Three divers exploring the seabed'],
questions: {
diving_experience: { label: 'Which diving experience interests you?', options: ['First time · Discover Scuba Diving', 'I want to get certified · PADI Open Water', 'I want to keep learning · Other PADI courses', 'I am certified · Exploration diving'] },
instructor_mode: { label: 'Which format would you like to ask about?', options: ['Shared instructor or guide', 'Private instructor or guide', 'I want to compare both options'] },
group_size: { label: 'How many people want to dive?', min: 1 },
swimming_comfort: { label: 'Is everyone comfortable swimming?', options: ['Yes', 'No', 'I would like to discuss it with the instructor'] }
},
divingCopy: {
sectionHeading: 'Choose your experience',
experiences: [
['First time — Discover Scuba Diving', 'An introduction to diving for anyone who wants to discover what it feels like to breathe underwater, without enrolling in a full course. No previous experience or certification is required, and this experience does not provide a diving certification.'],
['I want to get certified — PADI Open Water Diver', 'Your first step toward becoming a certified diver. The course combines theory, confined-water practice and open-water dives.'],
['I want to keep learning — Other PADI courses', 'If you are already certified and want to expand your skills, ask about the options that fit your training and experience.'],
['I am certified — Exploration diving', 'An option for certified divers who want to explore the underwater environment. Dive sites are coordinated according to participants’ level and sea conditions.']
],
modeHeading: 'Shared or private instructor or guide', modeText: 'You can ask for a shared instructor or guide, a private one or a comparison of both options. A private instructor or guide does not necessarily mean a private boat.',
includesHeading: 'What is included', includes: ['Full diving equipment during the experience', 'Support from a certified PADI instructor', 'Boat space for the outing', 'Snacks, water, iced tea and fruit'],
beforeHeading: 'An experience for your level', before: 'You do not need to arrive knowing which program to choose. Tell us whether you have never dived, want to get certified or are already experienced. We also need to know whether everyone is comfortable swimming; participation requirements and documentation are confirmed with the instructor.',
priceHeading: 'Price and duration', priceText: 'Quoted according to the format, number of participants and choice of shared or private instructor or guide.',
requestHeading: 'Request information', requestText: 'Tell us which experience interests you, how many people want to dive and whether you prefer a shared or private format. Before payment, we will confirm availability, final price, duration, number of dives and meeting point.'
}
},
},
{
id: 'local-host', number: '10A', eyebrow: 'BIENVENIDA LOCAL · TAMARINDO', title: 'Country Host — Tu bienvenida a Tamarindo',
cardText: 'Llegá, conocé y empezá a sentirte parte.',
description: 'Llegar a un lugar nuevo es más fácil cuando alguien te recibe. Con Country Host, tenés un contacto local de WAVEPOINT para resolver tus primeras dudas, descubrir lugares que van con vos y encontrar planes para compartir. Una bienvenida gratuita para empezar a disfrutar Tamarindo con orientación y compañía.',
lead: 'Una hora de bienvenida y orientación presencial, más consultas por WhatsApp durante las 48 horas siguientes al encuentro. La bienvenida es gratuita; las actividades y consumos que decidas contratar se pagan por separado.',
includes: ['Precio: gratuito', 'Encuentro presencial de una hora de bienvenida y orientación', 'Recomendaciones para comer y salir según tus gustos, presupuesto y el ambiente que busques', 'Orientación sobre playas, clases y alternativas de surf', 'Conexión con planes y encuentros de la vida local, según disponibilidad', 'Ayuda para consultar y organizar otras experiencias', 'Consultas por WhatsApp durante las 48 horas posteriores al encuentro'],
images: [
'assets/img/services/local-host/local-host-1.webp',
'assets/img/services/local-host/local-host-2.webp',
'assets/img/services/local-host/local-host-3.webp',
'assets/img/services/local-host/local-host-4.webp'
],
imageAlts: [
'Grupo de visitantes reunido en la playa de Tamarindo al atardecer',
'Grupo de personas compartiendo una comida en Tamarindo',
'Grupo de visitantes reunido durante una salida nocturna',
'Grupo de amigos compartiendo un encuentro en Tamarindo'
],
imageAltsEn: [
'Group of visitors gathered on Tamarindo beach at sunset',
'Group of people sharing a meal in Tamarindo',
'Group of visitors gathered during a night out',
'Friends sharing a local gathering in Tamarindo'
],
questions: [
{ id: 'arrival_date', label: '¿Cuándo llegás a Tamarindo?', type: 'dates', fields: ['Fecha de llegada'], minDate: 'today' },
{ id: 'stay_length', label: '¿Cuántos días te quedás?', type: 'text', placeholder: 'Ej.: 5 días' },
{ id: 'group_size', label: '¿Con quién viajás?', type: 'text', placeholder: 'Ej.: solo, pareja, amigos o familia' },
{ id: 'lodging', label: '¿Dónde te hospedás?', type: 'text', placeholder: 'Alojamiento o zona', optional: true },
{ id: 'interests', label: '¿Qué te interesa descubrir?', type: 'multi', options: ['Surf', 'Gastronomía', 'Vida nocturna', 'Naturaleza', 'Conocer gente', 'Todavía no lo sé'] },
{ id: 'notes', label: '¿Hay algo más que quieras contarnos?', type: 'textarea', placeholder: 'Opcional', optional: true }
],
en: {
eyebrow: 'LOCAL WELCOME · TAMARINDO', title: 'Country Host — Your welcome to Tamarindo', cardText: 'Arrive, connect and start feeling at home.', description: 'Arriving somewhere new is easier when someone is there to welcome you. With Country Host, you have a local WAVEPOINT contact to answer your first questions, point you toward places that fit you and help you find plans to share. A free welcome to start enjoying Tamarindo with guidance and company.', lead: 'A one-hour in-person welcome and orientation, plus WhatsApp support during the 48 hours after the meeting. The welcome is free; any activities or personal expenses you choose are paid separately.', includes: ['Price: free', 'One-hour in-person welcome and orientation', 'Recommendations for food and going out based on your tastes, budget and preferred atmosphere', 'Surf orientation: beaches, lessons and options for your level', 'Connections to local plans and gatherings, subject to availability', 'Help organizing other experiences and checking availability', 'WhatsApp questions during the 48 hours after the meeting'], imageAlts: ['Group of visitors gathered on Tamarindo beach at sunset', 'Group of people sharing a meal in Tamarindo', 'Group of visitors gathered during a night out', 'Friends sharing a local gathering in Tamarindo'], questions: { arrival_date: { label: 'When are you arriving in Tamarindo?', fields: ['Arrival date'] }, stay_length: { label: 'How many days are you staying?', placeholder: 'e.g. 5 days' }, group_size: { label: 'Who are you traveling with?', placeholder: 'e.g. solo, couple, friends or family' }, lodging: { label: 'Where are you staying?', placeholder: 'Accommodation or area' }, interests: { label: 'What would you like to discover?', options: ['Surf', 'Food', 'Nightlife', 'Nature', 'Meet people', 'I’m not sure yet'] }, notes: { label: 'Is there anything else you would like to tell us?', placeholder: 'Optional' } }
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
const serviceOrder = ['alojamiento-experiencias', 'clases-de-surf', 'surf-programa-3-dias', 'surf-coaching', 'roca-bruja', 'snorkel-catamaran', 'mangrove-tour', 'diving', 'yoga', 'atv', 'surf-fotografia', 'surfskate', 'trip-builder', 'retiros', 'local-host'];
services.sort((left, right) => serviceOrder.indexOf(left.id) - serviceOrder.indexOf(right.id));
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&', '<': '<', '>': '>', '"': '"', "'": "'" }[char]));
const getService = () => { const queryId = new URLSearchParams(location.search).get('service'); const pathId = location.pathname.replace(/\/+$/, '').split('/').pop(); const id = queryId || (pathId && !['service-detail', 'service-detail.html', 'index.html'].includes(pathId) ? pathId : null); if (id === 'pack-ajustable' || id === 'trip-builder') { location.replace('/trip-builder'); return services[0]; } return services.find(item => item.id === id) || services[0]; };
let lang = (() => { try { const saved = localStorage.getItem('wavepoint-lang'); return saved === 'es' || saved === 'pt-BR' ? saved : 'en'; } catch (error) { return 'en'; } })();
const hasEn = service => lang === 'en' && Boolean(service.en);
const localizeService = service => {
if (lang === 'pt-BR') {
const { questions: englishQuestions = {}, ...englishContent } = service.en || {};
const portuguese = window.WAVEPOINT_PT_BR?.services?.[service.id] || {};
const portugueseQuestions = portuguese.questions || {};
return {
...service,
...englishContent,
...portuguese,
questions: service.questions.map(question => ({ ...question, ...(englishQuestions[question.id] || {}), ...(portugueseQuestions[question.id] || {}) }))
};
}
if (!hasEn(service)) return service;
const { questions: questionsEn = {}, ...rest } = service.en;
return { ...service, ...rest, questions: service.questions.map(question => ({ ...question, ...(questionsEn[question.id] || {}) })) };
};
const FORM_UI = {
['pt-BR']: window.WAVEPOINT_PT_BR?.form || {},
es: {
optional: 'Opcional',
requestTitle: 'Contanos qué estás buscando.',
requestText: 'Respondé estas preguntas y abrí WhatsApp con una solicitud ordenada para el encargado.',
nameLabel: '¿Cómo te llamás?', namePlaceholder: 'Tu nombre',
extraLabel: '¿Hay algo más que quieras contarnos?', extraPlaceholder: 'Fechas, cantidad de personas u otra información útil',
submit: 'Armar solicitud en WhatsApp ↗',
note: 'Se abrirá WhatsApp con tus respuestas listas para revisar antes de enviar.',
confirmation: 'El mensaje está preparado. Revisá WhatsApp y tocá Enviar para que recibamos tu consulta. La reserva aún no está confirmada y no se realizó ningún pago.',
confirmationLink: 'Si WhatsApp no se abrió, abrilo aquí.',
error: 'Completá las respuestas necesarias para continuar.',
waIntro: 'Hola WavePoint, quiero consultar por:', waName: 'Nombre:', waExtra: 'Información adicional:', waThanks: 'Gracias. Quedo atento/a.',
galleryAlt: 'Clases de surf · imagen',
surveyHeading: 'Completá nuestra breve encuesta',
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
confirmation: 'Your message is ready. Review WhatsApp and tap Send for us to receive your inquiry. Your booking is not confirmed and no payment has been taken.',
confirmationLink: 'If WhatsApp did not open, open it here.',
error: 'Please complete the required answers to continue.',
waIntro: 'Hi WavePoint, I’d like to ask about:', waName: 'Name:', waExtra: 'Additional information:', waThanks: 'Thank you. Looking forward to your reply.',
galleryAlt: 'Surf lessons · image',
surveyHeading: 'Complete our quick survey',
surveyText: 'With these answers we can prepare a clearer request for the instructor and make the lesson feel made for you.',
surveyOpen: 'Complete the survey',
modalTitle: 'Your lesson starts here.',
modalText: 'Complete the survey and we’ll prepare a request tailored to your group.',
modalClose: 'Close survey'
}
};
const uiFor = service => lang === 'pt-BR' ? FORM_UI['pt-BR'] : hasEn(service) ? FORM_UI.en : FORM_UI.es;
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
    if (!complete) next.innerHTML = `${lang === 'en' ? 'Continue' : lang === 'pt-BR' ? 'Continuar' : 'Continuar'} <span aria-hidden="true">→</span>`;
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
const error = document.getElementById('detailError');
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
if (error && form.checkValidity()) error.textContent = '';
if (value) value.textContent = `${answered} / ${total}`;
if (bar) bar.style.width = `${percent}%`;
if (progress) progress.setAttribute('aria-label', lang === 'en' ? `${answered} of ${total} required answers completed` : lang === 'pt-BR' ? `${answered} de ${total} respostas obrigatórias preenchidas` : `${answered} de ${total} respuestas requeridas completas`);
form.classList.toggle('is-survey-complete', total > 0 && answered === total);
};
form.addEventListener('input', update);
form.addEventListener('change', update);
update();
}
function renderQuestion(service, question) {
const questionText = value => lang === 'pt-BR' ? window.WAVEPOINT_PT_BR?.questionText?.[value] || value : value;
const id = inputId(service, question);
const optional = `<span class="detail-optional">${uiFor(service).optional}</span>`;
const today = new Date();
const todayValue = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
const minDate = question.minDate === 'today' ? `min="${todayValue}"` : '';
const minNumber = question.min === undefined ? '' : `min="${esc(question.min)}"`;
if (question.type === 'headcount') return `<fieldset class="detail-question headcount-question" data-survey-question><legend>${esc(questionText(question.label))} ${optional}</legend><div class="detail-date-grid">${question.fields.map((field, index) => `<label for="${id}-${field.id}">${esc(questionText(field.label))}<input id="${id}-${field.id}" name="${question.id}-${field.id}" type="number" min="${index === 0 ? 1 : 0}" step="1" inputmode="numeric" placeholder="${index === 0 ? '1' : '0'}" /></label>`).join('')}</div>${question.note ? `<p class="headcount-note">${esc(questionText(question.note))}</p>` : ''}${question.agesLabel ? `<label class="headcount-ages" for="${id}-ages"><span>${esc(questionText(question.agesLabel))} <span class="detail-optional">${uiFor(service).optional}</span></span><input id="${id}-ages" name="${question.id}-ages" type="text" placeholder="${esc(questionText(question.agesPlaceholder))}" /></label>` : ''}</fieldset>`;
if (question.type === 'dates') return `<fieldset class="detail-question" data-survey-question><legend>${esc(questionText(question.label))} ${optional}</legend><div class="detail-date-grid">${question.fields.map(field => `<label for="${id}-${field}">${esc(questionText(field))}<input id="${id}-${field}" name="${question.id}-${field}" type="date" ${minDate}  /></label>`).join('')}</div></fieldset>`;
if (question.type === 'choice' || question.type === 'multi') return `<fieldset class="detail-question" data-survey-question><legend>${esc(questionText(question.label))} ${optional}</legend><div class="detail-options">${question.options.map((option, index) => `<label class="detail-option"><input type="${question.type === 'multi' ? 'checkbox' : 'radio'}" name="${question.id}" value="${esc(questionText(option))}"  /><span>${esc(questionText(option))}</span></label>`).join('')}</div></fieldset>`;
const type = question.type === 'number' ? 'number' : question.type === 'money' ? 'text' : 'text';
return `<label class="detail-question detail-field" data-survey-question for="${id}"><span>${esc(questionText(question.label))} ${optional}</span><${question.type === 'textarea' ? 'textarea' : 'input'} id="${id}" name="${question.id}" type="${type}" ${type === 'number' ? minNumber : ''} placeholder="${esc(questionText(question.placeholder || ''))}" ></${question.type === 'textarea' ? 'textarea' : 'input'}></label>`;
}
function renderAccommodationOption(option, index) {
const isEn = lang === 'en';
const portuguese = lang === 'pt-BR' ? window.WAVEPOINT_PT_BR?.services?.['alojamiento-experiencias']?.accommodationTranslations?.[option.id] : null;
const localized = portuguese ? { ...option, ...portuguese } : isEn ? option.en || option : option;
const gallery = option.images.map((image, index) => {
const localizedAlt = lang === 'en' ? option.imageAltsEn?.[index] : portuguese?.imageAlts?.[index] || option.imageAlts?.[index];
return `<img src="${esc(image)}" alt="${esc(localizedAlt || `${option.imageAlt} · ${lang === 'en' ? 'view' : lang === 'pt-BR' ? 'visualização' : 'vista'} ${index + 1}`)}" loading="lazy" />`;
}).join('');
const details = localized.details.map(detail => `<li>${esc(detail)}</li>`).join('');
const amenities = localized.amenities.map(item => `<li>${esc(item)}</li>`).join('');
const detailsHeading = isEn ? 'Options & rates' : lang === 'pt-BR' ? 'Opções e tarifas' : 'Opciones y tarifas';
const amenitiesHeading = isEn ? 'Services & conditions' : lang === 'pt-BR' ? 'Serviços e condições' : 'Servicios y condiciones';
const titleId = `accommodation-title-${option.id}`;
const galleryLabel = isEn ? `Photos of ${option.name}` : lang === 'pt-BR' ? `Fotos de ${option.name}` : `Fotos de ${option.name}`;
const galleryMarkup = gallery ? `<div class="accommodation-gallery" role="group" aria-label="${esc(galleryLabel)}">${gallery}</div>` : '';
return `<article class="accommodation-card accommodation-card-${index + 1}" id="accommodation-${esc(option.id)}" aria-labelledby="${esc(titleId)}">${galleryMarkup}<div class="accommodation-card-body"><p class="accommodation-category">${esc(localized.category)}</p><div class="accommodation-card-title"><h3 id="${esc(titleId)}">${esc(option.name)}</h3><div class="accommodation-price"><strong>${esc(option.price)}</strong><span>${esc(localized.priceNote)}</span></div></div><p class="accommodation-summary">${esc(localized.summary)}</p><div class="accommodation-columns"><section><h4>${detailsHeading}</h4><ul>${details}</ul></section><section><h4>${amenitiesHeading}</h4><ul>${amenities}</ul></section></div></div></article>`;
}
function renderAccommodationStory(service) {
const isEn = lang === 'en';
const portuguese = lang === 'pt-BR';
const destinations = service.accommodationOptions.map(option => {
const image = option.images?.[0];
if (!image) return '';
const localized = window.WAVEPOINT_PT_BR?.services?.['alojamiento-experiencias']?.accommodationTranslations?.[option.id];
const localizedAlt = isEn ? option.imageAltsEn?.[0] : localized?.imageAlts?.[0] || option.imageAlts?.[0];
const ariaLabel = isEn ? `View ${option.name} details` : portuguese ? `Ver detalhes de ${option.name}` : `Ver detalles de ${option.name}`;
return `<a class="accommodation-destination" href="#accommodation-${esc(option.id)}" aria-label="${esc(ariaLabel)}"><img src="${esc(image)}" alt="${esc(localizedAlt || option.imageAlt || option.name)}" loading="lazy" /></a>`;
}).join('');
const checkLabel = isEn ? 'Check availability' : 'Consultar disponibilidad';
const copy = portuguese
  ? { kicker: 'HOSPEDAGENS EM TAMARINDO', heading: 'Opções de hospedagem em Tamarindo', jump: 'Ir para uma hospedagem', rate: 'Valores em USD', rateNote: 'Todos os valores estão em dólares americanos (USD), por noite.', options: 'Opções de hospedagem' }
  : isEn
    ? { kicker: 'ACCOMMODATIONS IN TAMARINDO', heading: 'Accommodation options in Tamarindo', jump: 'Jump to an accommodation', rate: 'Rates in USD', rateNote: 'All rates are shown in US dollars (USD) per night.', options: 'Accommodation options' }
    : { kicker: 'ALOJAMIENTOS EN TAMARINDO', heading: 'Opciones de alojamiento en Tamarindo', jump: 'Ir a un alojamiento', rate: 'Tarifas en USD', rateNote: 'Todas las tarifas están expresadas en dólares estadounidenses (USD), por noche.', options: 'Opciones de alojamiento' };
const localizedCheckLabel = portuguese ? 'Consultar disponibilidade' : checkLabel;
return `<section class="accommodation-intro" aria-labelledby="accommodation-options-heading"><div class="accommodation-intro-copy"><p class="service-page-kicker">${copy.kicker}</p><h2 id="accommodation-options-heading">${copy.heading}</h2><a class="accommodation-check-link" href="#detailRequestPanel">${localizedCheckLabel}<span aria-hidden="true">↗</span></a></div><div class="accommodation-overview-meta"><nav class="accommodation-destinations" aria-label="${copy.jump}">${destinations}</nav><div class="accommodation-rate-note"><strong>${copy.rate}</strong><span>${copy.rateNote}</span></div></div></section><section class="accommodation-grid" aria-label="${copy.options}">${service.accommodationOptions.map(renderAccommodationOption).join('')}</section>`;
}
function renderSurfLessonStory(service) {
const ui = uiFor(service);
const isEn = lang === 'en';
const gallery = service.images.slice(1).map((image, index) => `<img src="${esc(image)}" alt="${esc(service.imageAlts?.[index + 1] || `${ui.galleryAlt} ${index + 2}`)}" loading="lazy" />`).join('');
const details = `<div class="surf-lesson-details"><p class="service-supporting-lead">${esc(service.lead || '')}</p>${service.includes?.length ? `<ul>${service.includes.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : ''}</div>`;
const portuguese = lang === 'pt-BR';
const promoKicker = portuguese ? 'PROGRAMA PARA INICIANTES · 3 DIAS' : isEn ? 'BEGINNER PROGRAM · 3 DAYS' : 'PROGRAMA DE INICIACIÓN · 3 DÍAS';
const promoTitle = portuguese ? 'Aprenda a surfar em três aulas' : isEn ? 'Learn to surf across three sessions' : 'Aprendé surf en tres encuentros';
const promoText = portuguese ? 'Três aulas particulares de duas horas, em três dias consecutivos, com acompanhamento do que você aprender em cada encontro.' : isEn ? 'Three private 2-hour lessons, spread across three consecutive days, with follow-up on what you learn.' : 'Tres clases privadas de dos horas, distribuidas en tres días consecutivos, con seguimiento de lo aprendido.';
const promoLink = portuguese ? 'Conheça o programa' : isEn ? 'Explore the program' : 'Conocé el programa';
const intro = portuguese ? service.cardText : isEn ? 'Tell us your level and what you’d like to learn. We’ll find a lesson that fits.' : 'Contanos tu nivel y qué te gustaría aprender. Te ayudamos a encontrar una clase que te quede bien.';
const programPromo = `<section class="surf-program-promo" aria-labelledby="surf-program-promo-title"><div><p class="service-page-kicker">${promoKicker}</p><h3 id="surf-program-promo-title">${promoTitle}</h3><p>${promoText}</p></div><a href="/surf-programa-3-dias">${promoLink} <span aria-hidden="true">↗</span></a></section>`;
return `<section class="surf-lesson-intro" aria-labelledby="surf-lesson-heading"><div class="surf-lesson-intro-copy"><p class="service-page-kicker">${isEn ? 'SURF LESSONS · TAMARINDO' : portuguese ? 'AULAS DE SURFE · TAMARINDO' : 'CLASES DE SURF · TAMARINDO'}</p><h2 id="surf-lesson-heading">${portuguese ? 'Pronto para surfar?' : isEn ? 'Ready to surf?' : '¿Listo para surfear?'}</h2><p class="surf-lesson-lead">${intro}</p><button class="surf-survey-open" type="button" data-scroll-surf-form>${ui.surveyOpen} <span aria-hidden="true">↗</span></button></div><div class="detail-gallery surf-lesson-gallery" role="group" aria-label="${isEn ? 'Surf lesson photos' : portuguese ? 'Fotos das aulas de surfe' : 'Fotos de las clases de surf'}">${gallery}</div></section>${details}${programPromo}<section class="surf-lesson-survey-intro"><span class="surf-lesson-survey-mark">02</span><div><p class="service-page-kicker">${isEn ? 'SURF LESSONS' : portuguese ? 'AULAS DE SURFE' : 'CLASES DE SURF'}</p><h3>${ui.surveyHeading}</h3><p>${ui.surveyText}</p></div></section>`;
}
function renderSurfProgramStory(service) {
const isEn = lang === 'en';
const copy = lang === 'pt-BR' ? service.programCopy : service.programCopy[lang] || service.programCopy[isEn ? 'en' : 'es'];
const labels = lang === 'pt-BR'
  ? { overview: 'Visão geral do programa', approach: 'A proposta', program: 'O programa', lessons: 'Três aulas de surfe', rates: 'VALORES DE REFERÊNCIA' }
  : isEn
    ? { overview: 'Program overview', approach: 'THE APPROACH', program: 'YOUR PROGRAM', lessons: 'Three surf lessons', rates: 'REFERENCE RATES' }
    : { overview: 'Resumen del programa', approach: 'LA PROPUESTA', program: 'TU PROGRAMA', lessons: 'Tres clases de surf', rates: 'TARIFAS DE REFERENCIA' };
const facts = copy.facts.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('');
const includes = copy.includes.map(item => `<li>${esc(item)}</li>`).join('');
const days = copy.days.map((day, index) => { const dayTitle = day.title.split(' · ').slice(1).join(' · ') || day.title; const dayNumber = index + 1; const dayLabel = lang === 'pt-BR' ? `AULA ${dayNumber}` : isEn ? `LESSON ${dayNumber}` : `CLASE ${dayNumber}`; const lessonLabel = lang === 'pt-BR' ? `DIA ${dayNumber}` : isEn ? `DAY ${dayNumber}` : `DÍA ${dayNumber}`; return `<article class="surf-program-day${index % 2 ? ' surf-program-day--reverse' : ''}"><figure class="surf-program-day-photo surf-program-day-photo-${index + 1}"><img src="${esc(service.images[index])}" alt="${esc(service.imageAlts?.[index] || day.title)}" loading="lazy" /></figure><div class="surf-program-day-copy"><p class="service-page-kicker surf-program-day-kicker"><span class="surf-program-day-kicker-main">${dayLabel}</span><span class="surf-program-day-kicker-dot" aria-hidden="true">·</span><span class="surf-program-day-kicker-day">${lessonLabel}</span></p><h3>${esc(dayTitle)}</h3><p>${esc(day.text)}</p></div></article>`; }).join('');
const prices = copy.prices.map(([participants, lesson, program]) => `<article class="surf-program-price-card"><h4>${esc(participants)}</h4><dl><div><dt>${esc(copy.priceHeaders[1])}</dt><dd>${esc(lesson)}</dd></div><div><dt>${esc(copy.priceHeaders[2])}</dt><dd>${esc(program)}</dd></div></dl></article>`).join('');
return `<div class="surf-program-story"><section class="surf-program-overview" aria-label="${labels.overview}"><p class="surf-program-intro">${esc(copy.intro)}</p><dl class="surf-program-facts">${facts}</dl></section><section class="surf-program-why" aria-labelledby="surf-program-why-heading"><p class="service-page-kicker">${labels.approach}</p><h2 id="surf-program-why-heading">${esc(copy.whyHeading)}</h2><p>${esc(copy.whyText)}</p></section><section class="surf-program-includes" aria-labelledby="surf-program-includes-heading"><p class="service-page-kicker">${labels.program}</p><h2 id="surf-program-includes-heading">${esc(copy.includesHeading)}</h2><ul>${includes}</ul></section><section class="surf-program-days" aria-label="${labels.lessons}">${days}</section><p class="surf-program-progress-note">${esc(copy.progressNote)}</p><section class="surf-program-pricing" aria-labelledby="surf-program-prices-heading"><div class="surf-program-section-head"><div><p class="service-page-kicker">${labels.rates}</p><h2 id="surf-program-prices-heading">${esc(copy.pricesHeading)}</h2></div><span class="surf-program-currency">USD</span></div><p class="surf-program-price-lead">${esc(copy.priceLead)}</p><div class="surf-program-price-list">${prices}</div><p class="surf-program-price-note">${esc(copy.priceNote)}</p></section><section class="surf-program-reservation" aria-labelledby="surf-program-reservation-heading"><h3 id="surf-program-reservation-heading">${esc(copy.reservationHeading)}</h3><p>${esc(copy.reservationText)}</p><p class="surf-program-reservation-note">${esc(copy.reservationNote)}</p></section></div>`;
}
const SURF_PHOTO_LAYOUT_STORAGE_KEY = 'wavepoint:surf-photo-gallery-layout:v1';
function readSurfPhotoLayout(sources) {
try {
const saved = JSON.parse(window.localStorage.getItem(SURF_PHOTO_LAYOUT_STORAGE_KEY) || 'null');
if (!saved || !Array.isArray(saved.photos) || saved.photos.length !== sources.length) return null;
const bySrc = new Map(saved.photos.map(photo => [photo.src, photo]));
if (bySrc.size !== sources.length || !sources.every(src => bySrc.has(src))) return null;
if (!saved.photos.every(photo => [photo.x, photo.y, photo.w].every(Number.isFinite))) return null;
return saved.photos.map(photo => ({ src: photo.src, x: photo.x, y: photo.y, w: photo.w, z: Number.isFinite(photo.z) ? photo.z : 1 }));
} catch (error) {
return null;
}
}
function setupSurfPhotoReorder() {
const editor = document.querySelector('[data-surf-photo-reorder]');
const canvas = editor?.querySelector('[data-surf-photo-grid]');
if (!editor || !canvas) return;
const captureMode = editor.hasAttribute('data-capture');
const items = [...canvas.querySelectorAll('[data-surf-photo-item]')];
const images = items.map(item => item.querySelector('img'));
const MIN_WIDTH = 8;
const BOTTOM_GAP = 2;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const round = value => Math.round(value * 10) / 10;
let layout = [];
let active = null;
const stateFor = item => layout.find(photo => photo.src === item.dataset.photoSrc);
const ratioFor = item => {
const image = item.querySelector('img');
return image && image.naturalWidth ? image.naturalHeight / image.naturalWidth : 0.66;
};
const apply = () => {
let bottom = 0;
items.forEach(item => {
const state = stateFor(item);
if (!state) return;
item.style.setProperty('--photo-x', String(state.x));
item.style.setProperty('--photo-y', String(state.y));
item.style.setProperty('--photo-w', String(state.w));
item.style.zIndex = String(state.z);
bottom = Math.max(bottom, state.y + state.w * ratioFor(item));
});
canvas.style.setProperty('--canvas-height', String(Math.max(bottom + BOTTOM_GAP, 50)));
};
const serialize = () => ({
canvasHeight: round(Number(canvas.style.getPropertyValue('--canvas-height')) || 50),
photos: layout.map(({ src, x, y, w, z }) => ({ src, x: round(x), y: round(y), w: round(w), z }))
});
const save = () => {
try { window.localStorage.setItem(SURF_PHOTO_LAYOUT_STORAGE_KEY, JSON.stringify(serialize())); } catch (error) {}
};
const bringToFront = item => {
const state = stateFor(item);
if (state && layout.some(photo => photo !== state && photo.z >= state.z)) state.z = Math.max(...layout.map(photo => photo.z)) + 1;
};
const select = item => {
items.forEach(other => other.classList.toggle('is-selected', other === item));
};
const buildDefault = () => {
const columnWidth = 48.5;
const heights = [0, 0];
return items.map((item, index) => {
const column = heights[0] <= heights[1] ? 0 : 1;
const y = heights[column];
heights[column] += columnWidth * ratioFor(item) + 2;
return { src: item.dataset.photoSrc, x: column ? 51.5 : 0, y, w: columnWidth, z: index + 1 };
});
};
const bindItem = item => {
item.addEventListener('pointerdown', event => {
if (event.pointerType === 'mouse' && event.button !== 0) return;
const state = stateFor(item);
if (!state) return;
select(item);
bringToFront(item);
apply();
active = {
item, state, pointerId: event.pointerId,
resize: Boolean(event.target.closest('[data-photo-resize]')),
startX: event.clientX, startY: event.clientY,
originX: state.x, originY: state.y, originW: state.w,
unit: 100 / (canvas.getBoundingClientRect().width || 1)
};
item.setPointerCapture(event.pointerId);
item.classList.add('is-dragging');
event.preventDefault();
});
item.addEventListener('pointermove', event => {
if (!active || active.item !== item || active.pointerId !== event.pointerId) return;
const deltaX = (event.clientX - active.startX) * active.unit;
const deltaY = (event.clientY - active.startY) * active.unit;
if (active.resize) {
active.state.w = clamp(active.originW + deltaX, MIN_WIDTH, 100 - active.state.x);
} else {
active.state.x = clamp(active.originX + deltaX, 0, 100 - active.state.w);
active.state.y = Math.max(0, active.originY + deltaY);
}
apply();
});
const end = event => {
if (!active || active.item !== item || active.pointerId !== event.pointerId) return;
active = null;
item.classList.remove('is-dragging');
save();
};
item.addEventListener('pointerup', end);
item.addEventListener('pointercancel', end);
item.addEventListener('focus', () => select(item));
item.addEventListener('keydown', event => {
const state = stateFor(item);
if (!state) return;
const step = event.shiftKey ? 2 : 0.5;
if (event.key === 'ArrowLeft') state.x = clamp(state.x - step, 0, 100 - state.w);
else if (event.key === 'ArrowRight') state.x = clamp(state.x + step, 0, 100 - state.w);
else if (event.key === 'ArrowUp') state.y = Math.max(0, state.y - step);
else if (event.key === 'ArrowDown') state.y += step;
else if (event.key === '+' || event.key === '=') state.w = clamp(state.w + step, MIN_WIDTH, 100 - state.x);
else if (event.key === '-' || event.key === '_') state.w = clamp(state.w - step, MIN_WIDTH, 100 - state.x);
else return;
event.preventDefault();
bringToFront(item);
apply();
save();
});
};
const init = () => {
layout = readSurfPhotoLayout(items.map(item => item.dataset.photoSrc)) || buildDefault();
apply();
canvas.classList.add('is-ready');
};
images.forEach(image => { image.loading = 'eager'; image.draggable = false; });
Promise.all(images.map(image => (image.complete && image.naturalWidth) ? null : new Promise(resolve => {
image.addEventListener('load', resolve, { once: true });
image.addEventListener('error', resolve, { once: true });
}))).then(init);
if (captureMode) return;
items.forEach(bindItem);
editor.querySelector('[data-photo-order-reset]')?.addEventListener('click', () => {
try { window.localStorage.removeItem(SURF_PHOTO_LAYOUT_STORAGE_KEY); } catch (error) {}
window.location.reload();
});
editor.querySelector('[data-photo-order-capture]')?.addEventListener('click', () => {
const url = new URL(window.location.href);
url.searchParams.set('captura', '1');
window.location.assign(url.toString());
});
const status = editor.querySelector('[data-photo-layout-status]');
const output = editor.querySelector('[data-photo-layout-output]');
editor.querySelector('[data-photo-layout-copy]')?.addEventListener('click', async () => {
const text = JSON.stringify(serialize(), null, 2);
if (output) output.value = text;
try {
await navigator.clipboard.writeText(text);
if (output) output.hidden = true;
if (status) status.textContent = editor.dataset.copied || '';
} catch (error) {
if (output) { output.hidden = false; output.focus(); output.select(); }
if (status) status.textContent = editor.dataset.copyFailed || '';
}
});
}
function renderStandardStory(service, extra = '') {
const isEn = lang === 'en';
const galleryStart = service.id === 'roca-bruja' ? 0 : 1;
const galleryImages = service.galleryImages || service.images.slice(galleryStart);
const galleryImageAlts = isEn ? (service.galleryImageAltsEn || service.imageAltsEn) : (service.galleryImageAlts || service.imageAlts);
const isSurfPhotoGallery = service.id === 'surf-fotografia';
const query = new URLSearchParams(window.location.search);
const reorderMode = isSurfPhotoGallery && query.get('ordenarFotos') === '1';
const captureMode = reorderMode && query.get('captura') === '1';
const galleryItems = galleryImages.map((image, index) => ({ image, altIndex: service.galleryImages ? index : index + galleryStart }));
const reorderCopy = lang === 'en'
? { instruction: 'Drag each photo anywhere you like and pull its bottom-right corner to resize it. With the keyboard: arrows to move, + and − to resize. The layout is saved only in this browser.', reset: 'Reset layout', capture: 'Clean view for screenshot', copy: 'Copy layout', copied: 'Layout copied.', copyFailed: 'Could not copy automatically. Copy the text below.' }
: lang === 'pt-BR'
? { instruction: 'Arraste cada foto para onde quiser e puxe o canto inferior direito para mudar o tamanho. No teclado: setas para mover, + e − para o tamanho. A disposição fica salva apenas neste navegador.', reset: 'Restaurar disposição', capture: 'Visualização para captura', copy: 'Copiar disposição', copied: 'Disposição copiada.', copyFailed: 'Não foi possível copiar automaticamente. Copie o texto abaixo.' }
: { instruction: 'Arrastrá cada foto adonde quieras y estirá la esquina inferior derecha para cambiar su tamaño. Con el teclado: flechas para mover, + y − para el tamaño. La disposición se guarda solo en este navegador.', reset: 'Restablecer disposición', capture: 'Vista limpia para captura', copy: 'Copiar disposición', copied: 'Disposición copiada.', copyFailed: 'No se pudo copiar automáticamente. Copiá el texto de abajo.' };
const gallery = galleryItems.map(({ image, altIndex }) => {
const alt = esc(galleryImageAlts?.[altIndex] || `${service.title} · ${isEn ? 'photo' : 'foto'} ${altIndex + 1}`);
const imageMarkup = `<img src="${esc(image)}" alt="${alt}" loading="lazy" />`;
if (!reorderMode) return imageMarkup;
return `<figure class="surf-photo-free-item" data-surf-photo-item data-photo-src="${esc(image)}"${captureMode ? '' : ' tabindex="0"'}>${imageMarkup}${captureMode ? '' : '<span class="surf-photo-free-resize" data-photo-resize aria-hidden="true"></span>'}</figure>`;
}).join('');
const galleryClass = service.id === 'surfskate' ? ` service-editorial-gallery-surfskate${galleryImages.length === 2 ? ' service-editorial-gallery-surfskate--two' : ''}` : service.id === 'roca-bruja' ? ' service-editorial-gallery-witch-rock' : '';
const galleryRoleLabel = isEn ? `${service.title} photos` : lang === 'pt-BR' ? `Fotos de ${service.title}` : `Fotos de ${service.title}`;
const galleryClassName = `detail-gallery service-editorial-gallery${galleryImages.length > 2 ? ' service-editorial-gallery-triple' : ''}${galleryClass}`;
const galleryMarkup = gallery ? reorderMode
? `<div class="surf-photo-reorder-editor${captureMode ? ' is-capture' : ''}" data-surf-photo-reorder${captureMode ? ' data-capture' : ''} data-copied="${reorderCopy.copied}" data-copy-failed="${reorderCopy.copyFailed}">${captureMode ? '' : `<div class="surf-photo-reorder-toolbar"><p>${reorderCopy.instruction}</p><div><button type="button" data-photo-layout-copy>${reorderCopy.copy}</button><button type="button" data-photo-order-reset>${reorderCopy.reset}</button><button type="button" data-photo-order-capture>${reorderCopy.capture}</button></div><p class="surf-photo-layout-status" data-photo-layout-status role="status"></p><textarea class="surf-photo-layout-output" data-photo-layout-output readonly hidden rows="10" aria-label="${reorderCopy.copy}"></textarea></div>`}<div class="surf-photo-free-canvas" data-surf-photo-grid role="group" aria-label="${galleryRoleLabel}">${gallery}</div></div>`
: `<div class="${galleryClassName}" role="group" aria-label="${galleryRoleLabel}" tabindex="0">${gallery}</div>` : '';
const includes = service.includes?.length ? `<div class="service-supporting-includes"><p class="service-supporting-label">${isEn ? 'INCLUDED' : lang === 'pt-BR' ? 'INCLUÍDO' : 'INCLUYE'}</p><ul>${service.includes.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>` : '';
const supporting = service.lead || extra || includes ? `<div class="service-supporting-content">${service.lead ? `<p class="service-supporting-lead">${esc(service.lead)}</p>` : ''}${extra ? `<p class="service-supporting-extra">${esc(extra)}</p>` : ''}${includes}</div>` : '';
return galleryMarkup || supporting ? `<section class="service-editorial-story">${galleryMarkup}${supporting}</section>` : '';
}
function renderMangroveStory(service) {
const isEn = lang === 'en';
const isPt = lang === 'pt-BR';
const title = isEn ? 'Tour details' : isPt ? 'Detalhes do passeio' : 'Datos del tour';
const includesLabel = isEn ? 'WHAT IS INCLUDED' : isPt ? 'O QUE ESTÁ INCLUÍDO' : 'QUÉ INCLUYE';
const beforeLabel = isEn ? 'BEFORE YOU GO' : isPt ? 'ANTES DE IR' : 'ANTES DE IR';
const requestLabel = isEn ? 'REQUEST A BOOKING' : isPt ? 'SOLICITAR RESERVA' : 'SOLICITAR RESERVA';
const allianceLabel = isEn ? 'PARTNERSHIPS WITH WAVEPOINT' : isPt ? 'PARCERIAS COM A WAVEPOINT' : 'ALIANZAS CON WAVEPOINT';
const facts = service.facts.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('');
const includes = service.includes.map(item => `<li>${esc(item)}</li>`).join('');
const gallery = service.images.map((image, index) => `<img src="${esc(image)}" alt="${esc(service.imageAlts?.[index] || `${service.title} · ${isEn ? 'photo' : 'foto'} ${index + 1}`)}" loading="lazy" />`).join('');
return `<section class="mangrove-story" aria-label="${esc(title)}"><div class="detail-gallery service-editorial-gallery mangrove-gallery" role="group" aria-label="${isEn ? 'Mangrove tour photos' : isPt ? 'Fotos do passeio pelo estuário' : 'Fotos del tour del estero'}">${gallery}</div><section class="mangrove-panel mangrove-facts"><p class="service-page-kicker">${esc(title)}</p><dl>${facts}</dl></section><section class="mangrove-panel"><p class="service-page-kicker">${includesLabel}</p><ul>${includes}</ul></section><section class="mangrove-panel mangrove-before"><p class="service-page-kicker">${beforeLabel}</p><p>${esc(service.before)}</p></section><section class="mangrove-panel mangrove-request"><p class="service-page-kicker">${requestLabel}</p><p class="mangrove-price">${esc(service.priceText)}</p><p>${esc(service.requestText)}</p><p class="mangrove-request-note">${isEn ? 'This is an inquiry; the booking is not confirmed yet. You do not need to pay now.' : isPt ? 'Esta é uma consulta; o passeio ainda não está confirmado. Você não precisa pagar agora.' : 'Esto es una solicitud; la reserva todavía no está confirmada. No tenés que pagar ahora.'}</p></section><section class="mangrove-panel mangrove-alliance"><p class="service-page-kicker">${allianceLabel}</p><p>${esc(service.allianceText)}</p><a href="https://wa.me/50660399194?text=${encodeURIComponent(isEn ? 'Hello WavePoint, I would like to propose a partnership.' : 'Hola WavePoint, quiero proponer una alianza.')}" target="_blank" rel="noopener noreferrer">${isEn ? 'Propose a partnership' : isPt ? 'Propor uma parceria' : 'Proponer una alianza'} ↗</a></section></section>`;
}
function renderAtvStory(service) {
const isEn = lang === 'en';
const portuguese = lang === 'pt-BR' ? window.WAVEPOINT_PT_BR?.services?.atv?.atvCopy : null;
const options = isEn ? [
  ['Explorer · 2 hours', 'A first experience to discover coastal roads, beaches and local corners. Ideal if you have never driven an ATV or want a shorter outing during your vacation.'],
  ['Adventure · 4 hours', 'More time to explore quiet beaches, trails through the vegetation, local roads and viewpoints. A great way to see more of Guanacaste’s landscapes.'],
  ['Ultimate · 6 hours', 'The most complete experience: a route combining beaches, tropical forest, mountain trails and panoramic views. Ideal if you want to spend a good part of the day exploring.']
] : [
  ['Explorer · 2 horas', 'Una primera experiencia para descubrir caminos costeros, playas y rincones locales. Ideal si nunca manejaste un ATV o querés sumar una salida corta a tus vacaciones.'],
  ['Adventure · 4 horas', 'Más tiempo para explorar playas apartadas, senderos entre la vegetación, caminos locales y miradores. Una opción para conocer más de los paisajes de Guanacaste.'],
  ['Ultimate · 6 horas', 'La experiencia más extensa: un recorrido que combina playas, bosque tropical, senderos de montaña y vistas panorámicas. Ideal para dedicar buena parte del día a explorar.']
];
const prices = isEn ? [
  ['Explorer · 1 person', 'USD 90'], ['Explorer · 2 people', 'USD 110'],
  ['Adventure · 1 person', 'USD 150'], ['Adventure · 2 people', 'USD 180'],
  ['Ultimate · 1 person', 'USD 220'], ['Ultimate · 2 people', 'USD 270'],
  ['Rental · 24 hours', 'USD 120']
] : [
  ['Explorer · 1 persona', 'USD 90'], ['Explorer · 2 personas', 'USD 110'],
  ['Adventure · 1 persona', 'USD 150'], ['Adventure · 2 personas', 'USD 180'],
  ['Ultimate · 1 persona', 'USD 220'], ['Ultimate · 2 personas', 'USD 270'],
  ['Alquiler · 24 horas', 'USD 120']
];
const intro = isEn ? 'Head out from Tamarindo with a local guide and a private tour for your group. Choose from three routes according to how much time you want to dedicate to the adventure.' : 'Explorá los alrededores de Tamarindo en cuatriciclo con un guía local y un tour privado para tu grupo. Elegí entre tres recorridos según cuánto tiempo quieras dedicarle a la aventura.';
const priceNote = isEn ? 'Prices are per ATV. The two-person rate is the total for two people sharing one ATV: one driver and one passenger.' : 'Los precios son por cuatriciclo. La tarifa doble es el total para dos personas compartiendo un ATV: conductor y acompañante.';
const included = isEn ? 'Includes the ATV, local guide, helmet, safety instructions and Local Host service. A valid driver’s license is required to drive.' : 'Incluye cuatriciclo, guía local, casco, indicaciones de seguridad y servicio de Local Host. Para conducir necesitás una licencia vigente.';
const request = isEn ? 'Tell us the date, number of participants and preferred route. Before you pay, we confirm availability, meeting point, service details and final price. Rates are for reference and sending a request does not confirm a booking.' : 'Contanos la fecha, cuántas personas participan y qué recorrido prefieren. Antes de pagar, confirmaremos disponibilidad, punto de encuentro, detalles del servicio y precio final. Las tarifas son de referencia y enviar una solicitud no confirma la reserva.';
const galleryStory = renderStandardStory(service);
const localizedOptions = portuguese?.options || options;
const localizedPrices = portuguese?.prices || prices;
return `${galleryStory}<section class="atv-story" aria-labelledby="atv-options-heading"><div class="atv-copy"><p class="service-page-kicker">${portuguese?.eyebrow || (isEn ? 'ATV IN TAMARINDO' : 'ATV EN TAMARINDO')}</p><h2 id="atv-options-heading">${portuguese?.heading || (isEn ? 'Choose your adventure' : 'Elegí tu aventura')}</h2><p>${portuguese?.intro || intro}</p></div><div class="atv-options">${localizedOptions.map(([title, text]) => `<article class="atv-option"><h3>${title}</h3><p>${text}</p></article>`).join('')}</div><div class="atv-pricing"><div class="atv-pricing-head"><div><p class="service-page-kicker">${portuguese?.ratesKicker || (isEn ? 'REFERENCE RATES' : 'TARIFAS DE REFERENCIA')}</p><h3>${portuguese?.ratesHeading || (isEn ? 'Choose the option that fits your group' : 'Elegí la opción que mejor se adapta a tu grupo')}</h3></div><span class="atv-pricing-currency">USD</span></div><div class="atv-price-grid">${localizedPrices.map(([label, price]) => `<div class="atv-price-row"><span>${label}</span><strong>${price}</strong></div>`).join('')}</div><p class="atv-price-note">${portuguese?.priceNote || priceNote}</p></div><div class="atv-included"><h3>${portuguese?.includedHeading || (isEn ? 'What is included' : 'Incluye')}</h3><p>${portuguese?.included || included}</p></div><div class="atv-request"><h3>${portuguese?.requestHeading || (isEn ? 'Check availability with WavePoint' : 'Consultá disponibilidad con WavePoint')}</h3><p>${portuguese?.request || request}</p></div></section>`;
}
function renderBoatStory(service) {
const isEn = lang === 'en';
const portuguese = lang === 'pt-BR' ? window.WAVEPOINT_PT_BR?.services?.['snorkel-catamaran']?.boatCopy : null;
const options = isEn ? [
  ['Full day in the Papagayo Peninsula', '8 hours · Up to 7 people · USD 850', 'Explore hidden beaches and combine sailing, snorkeling and fishing. Includes breakfast, grilled lunch or wraps/sandwiches, water, soft drinks, beer, snorkeling and fishing activities, and certified captain and deckhand.'],
  ['Snorkeling along the Guanacaste coast', '4 hours · Up to 7 people · USD 500 / 6 hours · Up to 7 people · USD 650', 'Explore natural corners of the coast with snorkeling equipment, inflatable platform, breakfast, lunch with wraps or sandwiches, snacks, drinks, and certified captain and deckhand.'],
  ['Deep-sea fishing', 'Duration and price to be confirmed · Up to 4 people', 'Enjoy a fishing-focused outing with fishing equipment and a live-bait well. Breakfast, lunch, snacks, drinks and an onboard grill are included; the details are confirmed when you inquire.'],
  ['Fishing from Bahía Potrero', '4 hours · USD 500 / 6 hours · USD 700 / 8 hours · USD 900', 'Choose the duration that fits your group. Fishing and snorkeling equipment are included. The six-hour option includes wraps for lunch; food details for eight hours are confirmed when you inquire.'],
  ['Snorkeling from Bahía Potrero', '4 hours · Up to 5 people · USD 500', 'A relaxed outing to explore the sea, snorkel and spend time on the water. Includes snorkeling equipment and a floating platform.'],
  ['Sunset from Bahía Potrero', '4 hours · Up to 5 people · USD 500', 'Enjoy the last hours of the day along the coast with drinks, something to share, snorkeling equipment and a floating platform.']
] : [
  ['Día completo en la península de Papagayo', '8 horas · Hasta 7 personas · USD 850', 'Una jornada para explorar playas escondidas y combinar navegación, snorkel y pesca. Incluye desayuno, almuerzo de parrillada o wraps/sándwiches, agua, refrescos, cerveza, actividades de snorkel y pesca, y capitán y marinero certificados.'],
  ['Snorkel por la costa de Guanacaste', '4 horas · Hasta 7 personas · USD 500 / 6 horas · Hasta 7 personas · USD 650', 'Explorá rincones naturales de la costa con equipo de snorkel, plataforma inflable, desayuno, almuerzo con wraps o sándwiches, snacks, bebidas, y capitán y marinero certificados.'],
  ['Pesca en mar abierto', 'Duración y precio a confirmar · Hasta 4 personas', 'Una salida enfocada en la pesca, con equipo y vivero para carnada viva. Incluye desayuno, almuerzo, snacks, bebidas y parrilla a bordo; los detalles se confirman al consultar.'],
  ['Pesca desde Bahía Potrero', '4 horas · USD 500 / 6 horas · USD 700 / 8 horas · USD 900', 'Elegí la duración que mejor se adapte a tu grupo. Incluye equipo de pesca y snorkel. La opción de seis horas incorpora wraps para el almuerzo; los detalles de alimentación de ocho horas se confirman al consultar.'],
  ['Snorkel desde Bahía Potrero', '4 horas · Hasta 5 personas · USD 500', 'Una salida de cuatro horas para explorar el mar, disfrutar del snorkel y descansar sobre el agua. Incluye equipo de snorkel y plataforma flotante.'],
  ['Atardecer desde Bahía Potrero', '4 horas · Hasta 5 personas · USD 500', 'Disfrutá las últimas horas del día navegando por la costa, con bebidas, algo rico para compartir, equipo de snorkel y plataforma flotante.']
];
const conditions = isEn ? ['Capacities vary by outing: up to 7 people for Papagayo and Guanacaste coast snorkeling, and up to 4 for deep-sea fishing.', 'Fruit, hummus, dips, beer, soft drinks, water and ice.', 'Snorkeling equipment and floating platform available.', 'Request at least 24 hours in advance.', 'Preferably for ages five and up; ask us about younger children.', 'Cancellation policy: 72 hours.', 'A 30% deposit confirms the outing after availability is verified.', 'Departure point: Bahía Potrero.', 'Transport to the bay is paid separately.', 'Navigation permits and insurance policy.', 'Captain documents are in process.', 'Service available in Spanish and English.'] : ['Capacidades según la salida: hasta 7 personas para Papagayo y snorkel por la costa de Guanacaste, y hasta 4 para pesca en mar abierto.', 'Frutas variadas, hummus, dips, cerveza, refrescos, agua y hielo.', 'Se presta equipo de snorkel y plataforma flotante.', 'Solicitá la reserva con al menos 24 horas de anticipación.', 'Preferentemente para mayores de cinco años; consultá si viajan niños menores.', 'Política de cancelación: 72 horas.', 'Una seña del 30% confirma la salida una vez verificada la disponibilidad.', 'Punto de salida: Bahía Potrero.', 'El transporte hasta la bahía se paga aparte.', 'Permisos de navegación y póliza de seguro.', 'Documentos del capitán en trámite.', 'Atención en español e inglés.'];
const practical = isEn ? 'Bring a swimsuit, towel and sun protection. Tell us the participants’ ages and any allergy or dietary need. If you want to snorkel, let us know how comfortable everyone is swimming in the sea.' : 'Traé traje de baño, toalla y protección solar. Contanos las edades de los participantes y cualquier alergia o necesidad alimentaria. Si quieren hacer snorkel, indicá también cómo se sienten nadando en el mar.';
const galleryStory = renderStandardStory(service);
const localizedOptions = portuguese?.options || options;
const localizedConditions = portuguese?.conditions || conditions;
const localizedPractical = portuguese?.practical || practical;
return `${galleryStory}<section class="boat-story" aria-labelledby="boat-options-heading"><div class="boat-story-intro"><p class="service-page-kicker">${portuguese?.eyebrow || (isEn ? 'NAVIGATION · GUANACASTE' : 'EMBARCACIONES · GUANACASTE')}</p><h2 id="boat-options-heading">${portuguese?.heading || (isEn ? 'Navigation — Discover Guanacaste from the sea' : 'Navegación — Descubrí Guanacaste desde el mar')}</h2><p>${portuguese?.intro || (isEn ? 'A little time at sea, a different view of Tamarindo. Whether you would love to snorkel, relax on deck or watch the sun go down over the ocean, WAVEPOINT helps you find an outing that feels right for your group. Enjoy the sea breeze, discover the coastline and confirm the details before you book.' : 'Un poco de tiempo en el mar, una vista diferente de Tamarindo. Ya sea que quieras hacer snorkel, relajarte a bordo o ver cómo cae el sol sobre el océano, WAVEPOINT te ayuda a encontrar una salida que se adapte a tu grupo. Disfrutá la brisa marina, descubrí la costa y conocé todos los detalles antes de reservar.')}</p></div><div class="boat-options">${localizedOptions.map(([title, facts, text]) => `<article class="boat-option"><h3>${title}</h3><p class="boat-option-facts">${facts}</p><p>${text}</p></article>`).join('')}</div><div class="boat-details"><section><h3>${portuguese?.beforeHeading || (isEn ? 'Before you go' : 'Antes de ir')}</h3><p>${localizedPractical}</p></section><section><h3>${portuguese?.conditionsHeading || (isEn ? 'Included and conditions' : 'Incluidos y condiciones')}</h3><ul>${localizedConditions.map(item => `<li>${item}</li>`).join('')}</ul></section></div><div class="boat-request"><h3>${portuguese?.requestHeading || (isEn ? 'Request this experience' : 'Solicitar reserva')}</h3><p>${portuguese?.request || (isEn ? 'Tell us which outing interests you, your preferred dates and how many people are participating. WAVEPOINT will confirm availability, meeting point or pickup, inclusions, conditions and the total price before sending a payment link.' : 'Contanos qué salida te interesa, tus fechas y cuántas personas participan. WAVEPOINT confirmará disponibilidad, punto de encuentro o recogida, incluidos, condiciones y precio total antes de enviarte el enlace de pago.')}</p><p>${portuguese?.reservationNote || (isEn ? 'This is an inquiry; the booking is not confirmed yet. You do not need to pay now.' : 'Esto es una solicitud; la reserva todavía no está confirmada. No tenés que pagar ahora.')}</p></div></section>`;
}
function renderDivingStory(service) {
const copy = service.divingCopy;
const experiences = copy.experiences.map(([title, text]) => `<article class="diving-experience"><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join('');
const includes = copy.includes.map(item => `<li>${esc(item)}</li>`).join('');
const isEn = lang === 'en';
const isPt = lang === 'pt-BR';
const gallery = renderStandardStory(service);
return `${gallery}<section class="diving-story" aria-labelledby="diving-experiences-heading"><div class="diving-story-intro"><p class="service-page-kicker">${isEn ? 'NATIVA DIVING EXPERIENCES' : isPt ? 'NATIVA DIVING EXPERIENCES' : 'NATIVA DIVING EXPERIENCES'}</p><h2 id="diving-experiences-heading">${esc(copy.sectionHeading)}</h2><p>${esc(service.lead || '')}</p></div><div class="diving-experiences">${experiences}</div><section class="diving-panel"><h3>${esc(copy.modeHeading)}</h3><p>${esc(copy.modeText)}</p></section><section class="diving-panel"><h3>${esc(copy.includesHeading)}</h3><ul>${includes}</ul></section><section class="diving-panel"><h3>${esc(copy.beforeHeading)}</h3><p>${esc(copy.before)}</p></section><section class="diving-panel"><h3>${esc(copy.priceHeading)}</h3><p>${esc(copy.priceText)}</p></section><section class="diving-panel diving-request"><h3>${esc(copy.requestHeading)}</h3><p>${esc(copy.requestText)}</p><p>${isEn ? 'This is an inquiry; the booking is not confirmed yet. You do not need to pay now.' : isPt ? 'Esta é uma consulta; o mergulho ainda não está confirmado. Você não precisa pagar agora.' : 'Esto es una solicitud; la reserva todavía no está confirmada. No tenés que pagar ahora.'}</p></section></section>`;
}
function renderWitchRockStory(service) {
const story = renderStandardStory(service, service.coordination);
return story;
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
const portuguese = lang === 'pt-BR';
const labels = portuguese
  ? { kicker: 'RETIROS WAVEPOINT · TAMARINDO', destination: 'O DESTINO', stay: 'UM LUGAR PARA DESCANSAR', yoga: 'MOVIMENTO E PAUSA', surfTrips: 'SURF TRIPS GUIADOS', boat: 'PASSEIO DE BARCO · AVENTURA', coaching: 'COACHING · FOTOS · ANÁLISE EM VÍDEO', details: 'DETALHES', journey: 'ROTEIRO' }
  : isEn
    ? { kicker: 'WAVEPOINT RETREATS · TAMARINDO', destination: 'THE DESTINATION', stay: 'A PLACE TO UNWIND', yoga: 'MOVE & RESET', surfTrips: 'GUIDED SURF TRIPS', boat: 'BOAT TRIP · ADVENTURE', coaching: 'COACHING · PHOTOS · VIDEO ANALYSIS', details: 'THE DETAILS', journey: 'THE JOURNEY' }
    : { kicker: 'WAVEPOINT RETIROS · TAMARINDO', destination: 'EL DESTINO', stay: 'UN LUGAR PARA DESCANSAR', yoga: 'MOVIMIENTO Y PAUSA', surfTrips: 'SURF TRIPS GUIADOS', boat: 'TOUR EN BARCO · AVENTURA', coaching: 'COACHING · FOTOS · VIDEOANÁLISIS', details: 'LOS DETALLES', journey: 'EL RECORRIDO' };
const facts = details.facts.map(fact => `<div class="retreat-fact"><dt>${esc(fact.label)}</dt><dd>${esc(fact.value)}</dd></div>`).join('');
const included = details.included.map(item => `<li>${esc(item)}</li>`).join('');
const notIncluded = details.notIncluded.map(item => `<li>${esc(item)}</li>`).join('');
const conditions = details.conditions.map(item => `<li>${esc(item)}</li>`).join('');
const itinerary = details.itinerary.map((day, index) => `<article class="retreat-day"><span class="retreat-day-number">${String(index + 1).padStart(2, '0')}</span><div><h4>${esc(day.title)}</h4><ul>${day.activities.map(activity => `<li>${esc(activity)}</li>`).join('')}</ul></div></article>`).join('');
const photo = index => `<img src="${esc(service.images[index])}" alt="${esc((isEn ? service.imageAltsEn?.[index] : service.imageAlts?.[index]) || `${service.title} · ${lang === 'en' ? 'photo' : 'foto'} ${index + 1}`)}" loading="lazy" />`;
const photoGrid = (indexes, className) => `<div class="retreat-photo-grid ${className}">${indexes.map(photo).join('')}</div>`;
const introAlt = esc((isEn ? service.imageAltsEn?.[0] : service.imageAlts?.[0]) || (isEn ? 'Sunset on the coast of Costa Rica' : 'Atardecer en la costa de Costa Rica'));
const priceFact = details.facts.find(fact => fact.label === (isEn ? 'Price' : portuguese ? 'Preço' : 'Precio')) || details.facts[details.facts.length - 1];
const durationFact = details.facts.find(fact => fact.label === (isEn ? 'Duration' : portuguese ? 'Duração' : 'Duración'));
return `<div class="retreat-editorial">
  <section class="retreat-cover">
    <div class="retreat-cover-copy">
      <p class="retreat-cover-kicker">${labels.kicker}</p>
      <h2>${esc(details.aboutHeading)}</h2>
      <p class="retreat-cover-about">${esc(details.about)}</p>
      <div class="retreat-cover-facts">${durationFact ? `<span>${esc(durationFact.value)}</span>` : ''}<span>${esc(priceFact.value)}</span></div>
    </div>
  </section>
  <div class="retreat-experience-grid">
    <section class="retreat-experience-card retreat-destination-card">
      ${photoGrid([1, 2], 'retreat-destination-photos')}
      <div><p class="retreat-card-kicker">${labels.destination}</p><h3>${esc(details.destinationHeading)}</h3><p>${esc(details.destination)}</p></div>
    </section>
    <section class="retreat-experience-card retreat-stay-card">
      ${photoGrid([3, 4, 5, 6], 'retreat-stay-photos')}
      <div><p class="retreat-card-kicker">${labels.stay}</p><h3>${esc(details.stayHeading)}</h3><p>${esc(details.stay)}</p></div>
    </section>
    <section class="retreat-experience-card retreat-yoga-card">
      ${photoGrid([7, 8], 'retreat-yoga-photos')}
      <div><p class="retreat-card-kicker">${labels.yoga}</p><h3>${esc(details.yogaHeading)}</h3>${details.yoga.map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}</div>
    </section>
    <section class="retreat-experience-card retreat-surf-trips-card">
      ${photoGrid([9, 10, 11, 12], 'retreat-surf-trip-photos')}
      <div><p class="retreat-card-kicker">${labels.surfTrips}</p><h3>${esc(details.surfTripsHeading)}</h3><p>${esc(details.surfTrips)}</p></div>
    </section>
    <section class="retreat-experience-card retreat-boat-card">
      ${photoGrid([13, 14], 'retreat-boat-photos')}
      <div><p class="retreat-card-kicker">${labels.boat}</p><h3>${esc(details.boatHeading)}</h3><p>${esc(details.boat)}</p></div>
    </section>
    <section class="retreat-experience-card retreat-surf-card">
      ${photoGrid([15, 16, 17], 'retreat-coaching-photos')}
      <div><p class="retreat-card-kicker">${labels.coaching}</p><h3>${esc(details.surfHeading)}</h3><p>${esc(details.surf)}</p></div>
    </section>
  </div>
  <section class="retreat-summary">
    <p class="retreat-card-kicker">${labels.details}</p>
    <h3>${esc(details.summaryHeading)}</h3>
    <dl class="retreat-summary-grid">${facts}</dl>
    <div class="retreat-lists">
      <section class="retreat-list retreat-list-included"><h4>${esc(details.includedHeading)}</h4><ul>${included}</ul></section>
      <section class="retreat-list"><h4>${esc(details.notIncludedHeading)}</h4><ul>${notIncluded}</ul></section>
    </div>
    <section class="retreat-conditions"><h4>${esc(details.conditionsHeading)}</h4><ul>${conditions}</ul></section>
  </section>
  <section class="retreat-itinerary-section">
    <p class="retreat-card-kicker">${labels.journey}</p>
    <h3>${esc(details.itineraryHeading)}</h3>
    <div class="retreat-itinerary">${itinerary}</div>
  </section>
</div>`;
}
function render(service) {
const ui = uiFor(service);
document.documentElement.lang = lang;
const serviceDescription = service.description || (lang === 'en' ? 'Explore this WavePoint experience in Tamarindo, Costa Rica.' : lang === 'pt-BR' ? 'Conheça esta experiência da WavePoint em Tamarindo, Costa Rica.' : 'Explorá esta experiencia de WavePoint en Tamarindo, Costa Rica.');
document.title = `${service.title} · WavePoint`;
const serviceUrl = new URL(`/${encodeURIComponent(service.id)}`, location.origin);
const serviceCanonical = document.querySelector('link[rel=canonical]');
if (serviceCanonical) serviceCanonical.href = serviceUrl.href;
const serviceDescriptionMeta = document.querySelector('meta[name=description]');
if (serviceDescriptionMeta) serviceDescriptionMeta.content = serviceDescription;
const setServiceMeta = (property, content) => {
  let meta = document.querySelector(`meta[property=\"${property}\"]`);
  if (!meta) { meta = document.createElement('meta'); meta.setAttribute('property', property); document.head.appendChild(meta); }
  meta.setAttribute('content', content);
};
const setServiceTwitterMeta = (name, content) => {
  let meta = document.querySelector(`meta[name=\"${name}\"]`);
  if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', name); document.head.appendChild(meta); }
  meta.setAttribute('content', content);
};
setServiceMeta('og:title', document.title);
setServiceMeta('og:description', serviceDescription);
setServiceMeta('og:url', serviceUrl.href);
setServiceMeta('og:type', 'website');
const serviceShareImage = new URL('assets/img/site/share/wavepoint-logo-white.jpg?v=20261022-2', location.origin + location.pathname.replace(/[^/]*$/, '')).href;
const serviceShareAlt = lang === 'pt-BR' ? 'Logotipo da WavePoint em fundo branco' : lang === 'es' ? 'Logotipo de WavePoint sobre fondo blanco' : 'WavePoint logo on a solid white background';
setServiceMeta('og:image', serviceShareImage);
setServiceMeta('og:image:secure_url', serviceShareImage);
setServiceMeta('og:image:type', 'image/jpeg');
setServiceMeta('og:image:width', '1200');
setServiceMeta('og:image:height', '630');
setServiceMeta('og:image:alt', serviceShareAlt);
setServiceMeta('og:locale', lang === 'en' ? 'en_US' : lang === 'pt-BR' ? 'pt_BR' : 'es_CR');
setServiceTwitterMeta('twitter:title', document.title);
setServiceTwitterMeta('twitter:description', serviceDescription);
setServiceTwitterMeta('twitter:image', serviceShareImage);
setServiceTwitterMeta('twitter:image:alt', serviceShareAlt);
document.body.classList.toggle('accommodation-detail-page', service.id === 'alojamiento-experiencias');
document.body.classList.toggle('surf-lesson-detail-page', service.id === 'clases-de-surf');
document.body.classList.toggle('surf-program-detail-page', service.id === 'surf-programa-3-dias');
document.body.classList.toggle('yoga-detail-page', service.id === 'yoga');
document.body.classList.toggle('boat-detail-page', service.id === 'snorkel-catamaran');
document.body.classList.toggle('local-host-detail-page', service.id === 'local-host');
document.body.classList.toggle('surf-photo-detail-page', service.id === 'surf-fotografia');
document.body.style.setProperty('--service-detail-image', `url(${JSON.stringify(service.heroImage || service.images[0])})`);
const browsableServices = services;
const position = browsableServices.findIndex(item => item.id === service.id);
const prevService = localizeService(browsableServices[(position - 1 + browsableServices.length) % browsableServices.length]);
const nextService = localizeService(browsableServices[(position + 1) % browsableServices.length]);
const arrowLabel = lang === 'pt-BR' ? ['Experiência anterior', 'Próxima experiência'] : lang === 'es' ? ['Experiencia anterior', 'Siguiente experiencia'] : ['Previous experience', 'Next experience'];
const serviceHref = item => `/${item.id}`;
const heroArrows = `<nav class="detail-hero-arrows" aria-label="${lang === 'en' ? 'Browse experiences' : lang === 'pt-BR' ? 'Explorar experiências' : 'Recorrer experiencias'}"><a class="detail-arrow detail-arrow-prev" href="${serviceHref(prevService)}" rel="prev" aria-label="${arrowLabel[0]}: ${esc(prevService.title)}" title="${esc(prevService.title)}"><svg viewBox="0 0 24 40" aria-hidden="true" focusable="false"><path d="M19 3 4 20l15 17"/></svg></a><a class="detail-arrow detail-arrow-next" href="${serviceHref(nextService)}" rel="next" aria-label="${arrowLabel[1]}: ${esc(nextService.title)}" title="${esc(nextService.title)}"><svg viewBox="0 0 24 40" aria-hidden="true" focusable="false"><path d="M5 3l15 17L5 37"/></svg></a></nav>`;
const nameField = service.id === 'clases-de-surf'
? `<label class="detail-question detail-field" data-survey-question for="request-name"><span>${ui.nameLabel}</span><input id="request-name" name="request-name" type="text" placeholder="${ui.namePlaceholder}" /></label>`
: `<label class="detail-question detail-field" data-survey-question for="request-name"><span>${ui.nameLabel} <span class="detail-optional">${ui.optional}</span></span><input id="request-name" name="request-name" type="text" placeholder="${ui.namePlaceholder}" /></label>`;
const formQuestions = service.id === 'clases-de-surf'
? `${nameField}${service.questions.map(question => renderQuestion(service, question)).join('')}`
: `${service.questions.map(question => renderQuestion(service, question)).join('')}${nameField}`;
const story = service.id === 'alojamiento-experiencias'
? renderAccommodationStory(service)
: service.id === 'clases-de-surf'
? renderSurfLessonStory(service)
: service.id === 'surf-programa-3-dias'
? renderSurfProgramStory(service)
: service.id === 'roca-bruja'
? renderWitchRockStory(service)
: service.id === 'surf-fotografia'
? renderSurfPhotographyStory(service)
: service.id === 'surfskate'
? renderSurfskateStory(service)
: service.id === 'retiros'
? renderRetreatStory(service)
: service.id === 'mangrove-tour'
? renderMangroveStory(service)
: service.id === 'diving'
? renderDivingStory(service)
: service.id === 'atv'
? renderAtvStory(service)
: service.id === 'snorkel-catamaran'
? renderBoatStory(service)
: service.id === 'yoga'
? renderStandardStory(service, service.description)
: renderStandardStory(service);
const surfSurveyModal = '' /* El formulario de clases queda visible debajo del contenido. */;
const surfFormBar = '';
/* const surfSurveyModal = service.id === 'clases-de-surf' ? `<dialog class="surf-survey-modal" id="surfSurveyModal" aria-labelledby="surfSurveyTitle"><div class="surf-survey-modal-shell"><div class="surf-survey-modal-head"><div><p class="service-page-kicker">${lang === 'en' ? 'READY TO SURF?' : '¿LISTO PARA SURFEAR?'}</p><h2 id="surfSurveyTitle">${ui.modalTitle}</h2><p>${ui.modalText}</p></div><button class="surf-survey-close" type="button" data-close-surf-survey aria-label="${ui.modalClose}">×</button></div><div id="surfSurveyModalBody"></div></div></dialog>` : ''; */
	 document.getElementById('serviceDetailRoot').innerHTML = `<section class="detail-hero">${heroArrows}<div class="container detail-hero-content"><p class="service-page-kicker">${esc(service.eyebrow)}</p><p class="detail-index">${String(position + 1).padStart(2, '0')} / ${browsableServices.length}</p><h1>${esc(service.title)}</h1>${service.id === 'yoga' ? '' : `<p class="detail-hero-intro">${esc(service.description)}</p>`}</div></section><section class="detail-content"><div class="container detail-layout"><article class="detail-story${service.id === 'retiros' ? ' detail-story-retreats' : ''}">${story}</article><button class="quick-request-launcher" id="quickRequestLauncher" type="button" aria-expanded="false" aria-controls="detailRequestPanel"><span class="quick-request-launcher-icon" aria-hidden="true">↗</span><span>${lang === 'en' ? 'Check availability' : lang === 'pt-BR' ? 'Consultar disponibilidade' : 'Consultar disponibilidad'}</span></button><aside class="detail-request quick-request-panel" id="detailRequestPanel" role="dialog" aria-modal="false" aria-labelledby="serviceRequestTitle">${surfFormBar}<div class="detail-request-head"><p class="service-page-kicker">${lang === 'en' ? 'BOOK REQUEST' : lang === 'pt-BR' ? 'SOLICITAÇÃO' : 'SOLICITUD'}</p><h2 id="serviceRequestTitle">${ui.requestTitle}</h2><p>${ui.requestText}</p></div><form id="serviceRequestForm" class="service-survey-form" novalidate><div class="survey-progress" data-survey-progress role="status" aria-live="polite"><div class="survey-progress-copy"><span>${lang === 'en' ? 'Your progress' : lang === 'pt-BR' ? 'Seu progresso' : 'Tu avance'}</span><strong data-survey-progress-value>0 / 0</strong></div><div class="survey-progress-track" aria-hidden="true"><span data-survey-progress-bar></span></div></div>${formQuestions}<label class="detail-question detail-field" data-survey-question for="request-contact"><span>${ui.extraLabel} <span class="detail-optional">${ui.optional}</span></span><textarea id="request-contact" name="request-contact" placeholder="${ui.extraPlaceholder}"></textarea></label><button class="detail-submit" type="submit">${esc(lang === 'pt-BR' ? ui.submit : service.submitLabel || ui.submit)}</button><p class="detail-form-note">${ui.note}</p><p class="detail-error" id="detailError" role="alert"></p></form></aside></div></section>${surfSurveyModal}`;
		const requestForm = document.getElementById('serviceRequestForm');
		window.dispatchEvent(new Event('wavepoint:service-rendered'));
		if (service.id === 'surf-fotografia' && new URLSearchParams(window.location.search).get('ordenarFotos') === '1') setupSurfPhotoReorder();
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
document.getElementById('detailConfirmation')?.remove();
if (!form.checkValidity()) { form.reportValidity(); error.textContent = ui.error; return; }
if (service.id === 'surf-programa-3-dias') {
  const programDates = [...form.querySelectorAll('[name^="program_dates-"]')].map(input => input.value);
  const toDayNumber = value => { const [year, month, day] = value.split('-').map(Number); return Date.UTC(year, month - 1, day) / 86400000; };
  const consecutive = programDates.every((date, index) => index === 0 || toDayNumber(date) - toDayNumber(programDates[index - 1]) === 1);
  if (new Set(programDates).size !== programDates.length || !consecutive) {
    error.textContent = lang === 'en' ? 'Choose three consecutive dates in the order of the lessons.' : lang === 'pt-BR' ? 'Escolha três datas consecutivas na ordem das aulas.' : 'Elegí tres fechas consecutivas y en el orden de las clases.';
    return;
  }
}
error.textContent = '';
const isSpanish = lang === 'es';
const isPortuguese = lang === 'pt-BR';
const localized = (es, en, pt) => isPortuguese ? pt : isSpanish ? es : en;
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
const countQuestion = groupQuestion || service.questions.find(question => question.id === 'drivers');
const groupValue = countQuestion?.type === 'headcount'
  ? countQuestion.fields.reduce((total, field) => total + Number(form.elements[`${countQuestion.id}-${field.id}`]?.value || 0), 0)
  : countQuestion
    ? Number(form.elements[countQuestion.id]?.value || 0) + (service.id === 'atv' ? Number(form.elements.passengers?.value || 0) : 0)
    : 0;
const hasGroupCount = groupValue > 0;
const plural = groupValue > 1;
const subject = service.id === 'atv'
  ? localized('los paseos de ATV en Tamarindo', 'ATV tours in Tamarindo', 'passeios de quadriciclo (ATV) em Tamarindo')
  : clean(service.title);
const isAccommodation = service.id === 'alojamiento-experiencias';
const lines = isAccommodation
  ? [localized(
    plural ? 'Hola, WavePoint. Queríamos consultar por alojamiento.' : 'Hola, WavePoint. Quería consultar por alojamiento.',
    plural ? 'Hi WavePoint. We’d like to ask about accommodation.' : 'Hi WavePoint. I’d like to ask about accommodation.',
    plural ? 'Olá, WavePoint. Gostaríamos de consultar hospedagem.' : 'Olá, WavePoint. Gostaria de consultar hospedagem.'
  )]
  : hasGroupCount
    ? [localized(
      plural ? `Hola, WavePoint. Queremos consultar por ${subject}.` : `Hola, WavePoint. Quiero consultar por ${subject}.`,
      plural ? `Hi WavePoint. We’d like to ask about ${subject}.` : `Hi WavePoint. I’d like to ask about ${subject}.`,
      plural ? `Olá, WavePoint. Gostaríamos de consultar sobre ${subject}.` : `Olá, WavePoint. Gostaria de consultar sobre ${subject}.`
    )]
  : [localized(
    `Hola, WavePoint. Les escribo por ${subject}.`,
    `Hi WavePoint. I’m getting in touch about ${subject}.`,
    `Olá, WavePoint. Estou entrando em contato sobre ${subject}.`
  )];
if (name) {
  lines.push(hasGroupCount && plural
    ? localized(`Soy ${name} y somos ${groupValue} personas.`, `I’m ${name}, and there are ${groupValue} of us.`, `Meu nome é ${name} e somos ${groupValue} pessoas.`)
    : localized(`Me llamo ${name}.`, `My name is ${name}.`, `Meu nome é ${name}.`));
} else if (hasGroupCount) {
  lines.push(localized(
    plural ? `Somos ${groupValue} personas.` : 'Viaja 1 persona.',
    plural ? `There are ${groupValue} of us.` : 'One person will be traveling.',
    plural ? `Somos ${groupValue} pessoas.` : 'Vou viajar sozinho(a).'
  ));
}
const naturalAnswers = {
  preferred_date: lang === 'pt-BR' ? 'A data preferida é' : isSpanish ? 'La fecha preferida es' : 'Our preferred date is',
  lesson_date: isSpanish ? 'La fecha preferida es' : 'Our preferred date is',
  program_dates: isSpanish ? 'Las fechas propuestas para las tres clases son' : 'The proposed dates for the three lessons are',
  preferred_route: lang === 'pt-BR' ? 'O percurso ou opção que queremos consultar é' : isSpanish ? 'El recorrido o modalidad que queremos consultar es' : 'The route or option we’d like to ask about is',
  drivers: isSpanish ? 'Personas que conducirán:' : 'People who want to drive:',
  passengers: isSpanish ? 'Personas pasajeras:' : 'Passengers:',
  driver_ages: isSpanish ? 'Edades de quienes conducirán:' : 'Ages of the drivers:',
  licenses: isSpanish ? 'Licencias de conducir vigentes:' : 'Valid driver’s licenses:',
  lesson_format: isSpanish ? 'Preferimos una clase' : 'We prefer a',
  instruction_language: isSpanish ? 'Preferimos la instrucción en' : 'We prefer instruction in',
  swimming_comfort: isSpanish ? 'Sobre nuestra comodidad en el agua,' : 'Regarding our comfort in the water,',
  transport_need: isSpanish ? 'Sobre el traslado,' : 'Regarding transportation,',
  food_allergies: isSpanish ? 'Sobre alergias o restricciones alimentarias,' : 'Regarding allergies or dietary restrictions,',
  coaching_mode: isSpanish ? 'La modalidad de coaching que queremos consultar es' : 'The coaching format we’d like to ask about is',
  participant_levels: isSpanish ? 'Los niveles de los participantes son' : 'The participants’ levels are',
  date_flexibility: isSpanish ? 'Sobre la flexibilidad de fecha,' : 'Regarding date flexibility,',
  feedback_format: isSpanish ? 'La devolución que queremos consultar es' : 'The feedback format we’d like to ask about is',
  edited_photos: isSpanish ? 'Sobre las fotos editadas aparte,' : 'Regarding edited photos separately,',
  photo_mode: isSpanish ? 'La modalidad de fotografía que nos interesa es' : 'The photography format we’re interested in is',
  preferred_spot: isSpanish ? 'El lugar que preferimos es' : 'Our preferred location is',
  session_format: isSpanish ? 'El formato de sesión que preferimos es' : 'Our preferred session format is',
  group_ages: isSpanish ? 'Las edades de nuestro grupo son' : 'The ages in our group are',
  experience_background: isSpanish ? 'Nuestra experiencia con skate, surfskate o surf es' : 'Our experience with skateboarding, surfskate or surfing is',
  preferred_format: isSpanish ? 'El formato que preferimos consultar es' : 'The format we’d like to ask about is',
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
if (isPortuguese) Object.assign(naturalAnswers, {
  preferred_date: 'A data preferida é',
  lesson_date: 'A data preferida é',
  program_dates: 'As datas sugeridas para as três aulas são',
  preferred_route: 'O percurso ou opção que queremos consultar é',
  drivers: 'Pessoas que pretendem dirigir:',
  passengers: 'Pessoas passageiras:',
  driver_ages: 'Idades de quem pretende dirigir:',
  licenses: 'Carteiras de habilitação válidas:',
  lesson_format: 'Preferimos uma aula',
  instruction_language: 'Preferimos a instrução em',
  swimming_comfort: 'Sobre nosso conforto na água,',
  transport_need: 'Sobre o transporte,',
  food_allergies: 'Sobre alergias ou restrições alimentares,',
  coaching_mode: 'A modalidade de coaching que queremos consultar é',
  participant_levels: 'Os níveis dos participantes são',
  date_flexibility: 'Sobre a flexibilidade de data,',
  feedback_format: 'O formato de feedback que queremos consultar é',
  edited_photos: 'Sobre fotos editadas à parte,',
  photo_mode: 'A modalidade de fotografia que nos interessa é',
  preferred_spot: 'O local que preferimos é',
  session_format: 'O formato de sessão que preferimos é',
  group_ages: 'As idades do nosso grupo são',
  experience_background: 'Nossa experiência com skate, surfskate ou surfe é',
  preferred_format: 'O formato que gostaríamos de consultar é',
  surf_level: plural ? 'Nosso nível de surfe é' : 'Meu nível de surfe é',
  current_surf_level: plural ? 'Nosso nível atual de surfe é' : 'Meu nível atual de surfe é',
  lesson_goal: plural ? 'Gostaríamos de' : 'Gostaria de',
  improvement_goal: plural ? 'Gostaríamos de melhorar' : 'Gostaria de melhorar',
  group_levels: 'Os níveis de surfe do grupo são',
  preferred_schedule: plural ? 'Preferimos o horário da' : 'Prefiro o horário da',
  session_schedule: plural ? 'Preferimos o horário da' : 'Prefiro o horário da',
  board_need: plural ? 'Sobre as pranchas, precisamos de' : 'Sobre a prancha, preciso de',
  own_board: plural ? 'Sobre as pranchas, ' : 'Sobre a prancha, ',
  own_boards: 'Sobre as pranchas, ',
  origin: plural ? 'Estamos viajando de' : 'Estou viajando de',
  preferred_fruit: plural ? 'Depois da aula, preferimos comer' : 'Depois da aula, prefiro comer',
  analysis_time: plural ? 'Preferimos receber a análise' : 'Prefiro receber a análise'
});
if (isAccommodation) {
  const datesQuestion = service.questions.find(question => question.id === 'stay_dates');
  const dates = datesQuestion ? getValues(datesQuestion) : [];
  if (dates.length) {
    const formatDate = value => new Intl.DateTimeFormat(lang === 'pt-BR' ? 'pt-BR' : isSpanish ? 'es' : 'en', { dateStyle: 'long', timeZone: 'UTC' })
      .format(new Date(`${value}T00:00:00Z`));
    const [arrival, departure] = dates.map(formatDate);
    lines.push(localized(
      `La estadía sería del ${arrival} al ${departure}.`,
      `${plural ? 'We’re' : 'I’m'} looking to stay from ${arrival} to ${departure}.`,
      `A estadia seria de ${arrival} a ${departure}.`
    ));
  }

  const accommodationQuestion = service.questions.find(question => question.id === 'accommodation_type');
  const accommodation = accommodationQuestion ? getValues(accommodationQuestion)[0] : '';
  if (accommodation) {
    const wantsRecommendations = clean(accommodation).includes('recomend') || clean(accommodation).includes('recommend');
    lines.push(wantsRecommendations
      ? localized(
        plural ? 'Nos gustaría recibir recomendaciones de alojamiento.' : 'Me gustaría recibir recomendaciones de alojamiento.',
        plural ? 'We’d appreciate accommodation recommendations.' : 'I’d appreciate accommodation recommendations.',
        plural ? 'Gostaríamos de receber recomendações de hospedagem.' : 'Gostaria de receber recomendações de hospedagem.'
      )
      : localized(
        `${plural ? 'Nos interesa' : 'Me interesa'} ${accommodation}.`,
        `${plural ? 'We’re' : 'I’m'} interested in ${accommodation}.`,
        `${plural ? 'Temos' : 'Tenho'} interesse em ${accommodation}.`
      ));
  }

  const experiencesQuestion = service.questions.find(question => question.id === 'experiences');
  const experiences = experiencesQuestion ? getValues(experiencesQuestion) : [];
  const undecided = experiences.some(value => clean(value).includes('todavía no lo sé') || clean(value).includes('still don’t know'));
  const selectedExperiences = experiences.filter(value => !clean(value).includes('todavía no lo sé') && !clean(value).includes('still don’t know'));
  if (selectedExperiences.length) {
    lines.push(localized(
      `${plural ? 'También nos gustaría sumar' : 'También me gustaría sumar'}: ${selectedExperiences.join(', ')}.`,
      `${plural ? 'We’d also like to add' : 'I’d also like to add'}: ${selectedExperiences.join(', ')}.`,
      `${plural ? 'Também gostaríamos de incluir' : 'Também gostaria de incluir'}: ${selectedExperiences.join(', ')}.`
    ));
  }
  if (undecided) {
    lines.push(selectedExperiences.length
      ? localized(
        plural ? 'Todavía no decidimos si queremos sumar alguna otra experiencia.' : 'Todavía no decidí si quiero sumar alguna otra experiencia.',
        plural ? 'We haven’t decided whether to add any other experiences yet.' : 'I haven’t decided whether to add any other experiences yet.',
        plural ? 'Ainda não decidimos se queremos incluir outra experiência.' : 'Ainda não decidi se quero incluir outra experiência.'
      )
      : localized(
        plural ? 'Todavía no decidimos qué experiencias sumar.' : 'Todavía no decidí qué experiencias sumar.',
        plural ? 'We haven’t decided which experiences to add yet.' : 'I haven’t decided which experiences to add yet.',
        plural ? 'Ainda não decidimos quais experiências incluir.' : 'Ainda não decidi quais experiências incluir.'
      ));
  }
} else {
  service.questions.forEach(question => {
    const values = getValues(question);
    if (question.type === 'headcount') {
      const adults = form.elements[`${question.id}-adults`]?.value.trim();
      const children = form.elements[`${question.id}-children`]?.value.trim();
      const ages = form.elements[`${question.id}-ages`]?.value.trim();
      if (adults || children) {
        lines.push(localized(
          `Participamos ${adults || '0'} adultos y ${children || '0'} niños.`,
          `${adults || '0'} adults and ${children || '0'} children are joining.`,
          `Participaremos ${adults || '0'} adultos e ${children || '0'} crianças.`
        ));
      }
      if (ages) lines.push(localized(`Las edades de los niños son ${ages}.`, `The children’s ages are ${ages}.`, `As idades das crianças são ${ages}.`));
      return;
    }
    if (!values.length || question.id === 'group_size' || question.id === 'snorkel_people') return;
    const displayValues = question.type === 'dates'
      ? values.map(value => new Intl.DateTimeFormat(lang === 'pt-BR' ? 'pt-BR' : isSpanish ? 'es' : 'en', { dateStyle: 'long', timeZone: 'UTC' })
        .format(new Date(`${value}T00:00:00Z`)))
      : values;
    const joined = displayValues.join(isSpanish ? ', ' : ', ');
    const normalized = clean(joined);
    if (!hasGroupCount) {
      lines.push(localized(`Como dato adicional: ${joined}.`, `One more detail: ${joined}.`, `Como informação adicional: ${joined}.`));
      return;
    }
    if (question.id === 'surf_level' || question.id === 'current_surf_level') {
      if (normalized === 'primera vez' || normalized === 'first time') {
        lines.push(localized(
          plural ? 'Es nuestra primera vez haciendo surf.' : 'Es mi primera vez haciendo surf.',
          plural ? 'It’s our first time surfing.' : 'It’s my first time surfing.',
          plural ? 'É a nossa primeira vez no surfe.' : 'É a minha primeira vez no surfe.'
        ));
        return;
      }
      lines.push(`${naturalAnswers[question.id]} ${joined}.`);
      return;
    }
    if (question.id === 'board_need' || question.id === 'own_board' || question.id === 'own_boards') {
      const boardValue = normalized;
      const sentence = isPortuguese
        ? (boardValue === 'sim' ? (plural ? 'precisamos de pranchas' : 'preciso de uma prancha') : boardValue.includes('orienta') ? (plural ? 'precisamos de orientação sobre as pranchas' : 'preciso de orientação sobre a prancha') : boardValue.includes('lev') || boardValue.includes('traz') ? (plural ? 'levamos nossas próprias pranchas' : 'levo minha própria prancha') : boardValue)
        : isSpanish
          ? (boardValue === 'sí' ? (plural ? 'necesitamos tablas' : 'necesito una tabla') : boardValue.includes('asesoramiento') ? (plural ? 'necesitamos asesoramiento con las tablas' : 'necesito asesoramiento con la tabla') : boardValue.includes('llevamos') ? (plural ? 'llevamos nuestras propias tablas' : 'llevo mi propia tabla') : boardValue)
          : (boardValue === 'yes' ? (plural ? 'we need boards' : 'I need a board') : boardValue.includes('advice') ? (plural ? 'we need advice about boards' : 'I need advice about a board') : boardValue.includes('bring') ? (plural ? 'we bring our own boards' : 'I bring my own board') : boardValue);
      lines.push(`${localized('Sobre el equipo,', 'About equipment,', 'Sobre os equipamentos,')} ${sentence}.`);
      return;
    }
    const prefix = naturalAnswers[question.id];
    if (prefix) {
      const schedule = question.id === 'preferred_schedule' || question.id === 'session_schedule' ? joined.toLowerCase() : joined;
      lines.push(`${prefix} ${schedule}${/[.!?]$/.test(prefix) ? '' : '.'}`.replace(/\.\.$/, '.'));
    } else {
        lines.push(localized(`Como dato adicional: ${joined}.`, `One more detail: ${joined}.`, `Como informação adicional: ${joined}.`));
      }
  });
}
if (extra) lines.push(localized(`Además, ${extra}.`, `Also, ${extra}.`, `Além disso, ${extra}.`));
lines.push('', localized(
  !hasGroupCount ? 'Gracias. Quedo pendiente.' : plural ? 'Gracias. Quedamos atentos.' : 'Gracias. Quedo atento/a.',
  'Thank you. Looking forward to your reply.',
  !hasGroupCount ? 'Obrigado(a). Aguardo seu retorno.' : plural ? 'Obrigado(a). Ficamos no aguardo.' : 'Obrigado(a). Fico no aguardo.'
));
const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`;
window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
const confirmation = document.createElement('p');
confirmation.className = 'detail-confirmation';
confirmation.setAttribute('role', 'status');
confirmation.setAttribute('aria-live', 'polite');
const message = document.createElement('span');
message.textContent = ui.confirmation;
const confirmationLink = document.createElement('a');
confirmationLink.href = whatsappUrl;
confirmationLink.target = '_blank';
confirmationLink.rel = 'noopener noreferrer';
confirmationLink.textContent = ui.confirmationLink;
confirmation.append(message, document.createTextNode(' '), confirmationLink);
error.insertAdjacentElement('afterend', confirmation);
}
render(localizeService(getService()));
window.addEventListener('wavepoint:languagechange', event => {
lang = event.detail.lang === 'en' || event.detail.lang === 'pt-BR' ? event.detail.lang : 'es';
render(localizeService(getService()));
});
})();
