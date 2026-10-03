
  const CR_TZ='America/Costa_Rica';
  const reducedMotionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const CAM_START={hour:4,minute:45}, CAM_END={hour:18,minute:30};
  function getCRDate(){ return new Date(new Date().toLocaleString('en-US',{timeZone:CR_TZ})); }
  function isCameraLiveNow(){ const d=getCRDate(); const m=d.getHours()*60+d.getMinutes(); return m>=CAM_START.hour*60+CAM_START.minute && m<=CAM_END.hour*60+CAM_END.minute; }
  function formatTimeCR(date=new Date()){ const locale = languageState.current === 'en' ? 'en-US' : 'es-CR'; return new Intl.DateTimeFormat(locale,{hour:'2-digit',minute:'2-digit',timeZone:CR_TZ}).format(date); }
  function weatherText(code,isDay){ const day=Number(isDay)===1; const spanishMap={0:day?['☀️','Soleado']:['🌙','Noche despejada'],1:day?['🌤️','Mayormente despejado']:['🌙','Noche mayormente despejada'],2:day?['⛅','Parcialmente nublado']:['☁️','Nublado de noche'],3:['☁️','Nublado'],45:['🌫️','Neblina'],48:['🌫️','Neblina'],51:day?['🌦️','Llovizna ligera']:['🌧️','Llovizna nocturna'],53:day?['🌦️','Llovizna']:['🌧️','Llovizna nocturna'],55:day?['🌧️','Llovizna fuerte']:['🌧️','Llovizna fuerte nocturna'],61:day?['🌦️','Lluvia ligera']:['🌧️','Lluvia nocturna'],63:day?['🌧️','Lluvia']:['🌧️','Lluvia nocturna'],65:day?['🌧️','Lluvia fuerte']:['🌧️','Lluvia fuerte nocturna'],80:day?['🌦️','Chubascos']:['🌧️','Chubascos nocturnos'],81:day?['🌧️','Chubascos']:['🌧️','Chubascos nocturnos'],82:['⛈️','Chubascos fuertes'],95:['⛈️','Tormenta'],96:['⛈️','Tormenta con granizo'],99:['⛈️','Tormenta fuerte']}; const englishMap={0:day?['☀️','Sunny']:['🌙','Clear night'],1:day?['🌤️','Mostly sunny']:['🌙','Mostly clear night'],2:day?['⛅','Partly cloudy']:['☁️','Cloudy night'],3:['☁️','Cloudy'],45:['🌫️','Fog'],48:['🌫️','Fog'],51:day?['🌦️','Light drizzle']:['🌧️','Night drizzle'],53:day?['🌦️','Drizzle']:['🌧️','Night drizzle'],55:day?['🌧️','Heavy drizzle']:['🌧️','Heavy night drizzle'],61:day?['🌦️','Light rain']:['🌧️','Night rain'],63:day?['🌧️','Rain']:['🌧️','Night rain'],65:day?['🌧️','Heavy rain']:['🌧️','Heavy night rain'],80:day?['🌦️','Showers']:['🌧️','Night showers'],81:day?['🌧️','Showers']:['🌧️','Night showers'],82:['⛈️','Heavy showers'],95:['⛈️','Thunderstorm'],96:['⛈️','Thunderstorm with hail'],99:['⛈️','Severe storm']}; const map = languageState.current === 'en' ? englishMap : spanishMap; return map[code] || (day?['🌤️','Variable conditions']:['🌙','Night conditions']); }
  function weatherMotion(code,isDay){ const value=Number(code); if(Number(isDay)!==1) return 'night'; if([95,96,99].includes(value)) return 'storm'; if([51,53,55,61,63,65,80,81,82].includes(value)) return 'rain'; if([45,48].includes(value)) return 'mist'; if([1,2,3].includes(value)) return 'clouds'; return 'sun'; }
  function weatherIconName(code,isDay){
    const value=Number(code), day=Number(isDay)===1, time=day?'day':'night';
    if(value===0) return `clear-${time}`;
    if(value===1) return `mostly-clear-${time}`;
    if(value===2) return `partly-cloudy-${time}`;
    if(value===3) return `overcast-${time}`;
    if([45,48].includes(value)) return `fog-${time}`;
    if([51,53,55].includes(value)) return `partly-cloudy-${time}-drizzle`;
    if([61,63,65,80,81,82].includes(value)) return `partly-cloudy-${time}-rain`;
    if([95,96,99].includes(value)) return `thunderstorms-${time}-rain`;
    return `mostly-clear-${time}`;
  }
  function setMeteoconIcon(element,iconName=element?.dataset.meteocon){
    if(!element || !iconName) return;
    element.dataset.meteocon=iconName;
    const image=document.createElement('img');
    image.alt='';
    image.src=`assets/meteocons/${iconName}${reducedMotionPreference.matches?'-static':''}.svg`;
    element.replaceChildren(image);
  }
  const updateMeteocons=()=>document.querySelectorAll('[data-meteocon]').forEach(element=>setMeteoconIcon(element));
  if(reducedMotionPreference.addEventListener) reducedMotionPreference.addEventListener('change',updateMeteocons);
  else reducedMotionPreference.addListener?.(updateMeteocons);
  //function applyCameraState(){ const live=isCameraLiveNow(); document.body.classList.toggle('night', !live); document.querySelectorAll('.live-badge').forEach(b=>{ b.textContent=live?'● En vivo':'☾ Descanso'; b.classList.toggle('rest', !live); }); document.getElementById('cameraNightNotice').classList.toggle('show', !live); }
  
  function applyCameraState(){
  const live = isCameraLiveNow();
  const dict = translations[document.documentElement.lang] || translations.es;

  document.body.classList.toggle('night', !live);

  document.querySelectorAll('.camera-card[data-src]').forEach(card => {
    const iframe = card.querySelector('iframe.cam-preview');
    const mask = card.querySelector('.night-mask.auto');
    const badge = card.querySelector('.live-badge');

    if (!live) {
      if (iframe) iframe.style.display = 'none';
      if (mask) {
        mask.style.opacity = '1';
        mask.style.visibility = 'visible';
        mask.style.pointerEvents = 'auto';
        mask.style.zIndex = '99';
      }
      if (badge) {
        badge.textContent = dict.cameraRestBadge;
        badge.classList.add('rest');
      }
    } else {
      if (iframe) iframe.style.display = 'block';
      if (mask) {
        mask.style.opacity = '0';
        mask.style.visibility = 'hidden';
        mask.style.pointerEvents = 'none';
      }
      if (badge) {
        badge.textContent = dict.cameraLive;
        badge.classList.remove('rest');
      }
    }
  });

  const notice = document.getElementById('cameraNightNotice');
  if (notice) notice.classList.toggle('show', !live);
}

  async function loadWeather(){
    const lat=10.2993, lon=-85.8371;
    const icon=document.getElementById('weatherIcon');
    if(!icon || !document.getElementById('temp')) return;
    setMeteoconIcon(document.getElementById('waveIcon'),'water-tide-high');
    try{
      const [wRes,mRes]=await Promise.all([
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day,wind_speed_10m&timezone=America%2FCosta_Rica`),
        fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&current=wave_height&timezone=America%2FCosta_Rica`)
      ]);
      const weather=await wRes.json(), marine=await mRes.json();
      const cur=weather.current||{};
      const [,label]=weatherText(cur.weather_code,cur.is_day);
      icon.dataset.conditionCode=cur.weather_code ?? 0;
      icon.dataset.isDay=cur.is_day ?? 1;
      icon.dataset.condition=weatherMotion(cur.weather_code,cur.is_day);
      setMeteoconIcon(icon,weatherIconName(cur.weather_code,cur.is_day));
      document.getElementById('temp').textContent=Math.round(cur.temperature_2m??0);
      document.getElementById('weatherState').textContent=label;
      document.getElementById('wind').textContent=Math.round(cur.wind_speed_10m??0);
      document.getElementById('waveHeight').textContent=Number(marine?.current?.wave_height??0).toFixed(1);
      document.getElementById('localTime').textContent=formatTimeCR();
      document.getElementById('updatedText').textContent='Actualizado ahora';
    } catch(e){
      const isDay=isCameraLiveNow();
      icon.dataset.condition=isDay?'clouds':'night';
      setMeteoconIcon(icon,isDay?'mostly-clear-day':'mostly-clear-night');
      document.getElementById('weatherState').textContent=isDay?'Condiciones disponibles':'Noche en Tamarindo';
      document.getElementById('localTime').textContent=formatTimeCR();
      document.getElementById('updatedText').textContent='Sin conexión al clima';
    }
  }

  const translations = {
    es: {
      navInicio: 'Inicio',
      navServicios: 'Servicios',
      navGuia: 'Guía turística',
      navNosotros: 'Nosotros',
      navColaboradores: 'Colaboradores ▾',
      heroTitle: 'Las mejores experiencias de Tamarindo, con los locales que mejor lo conocen',
      heroText: 'Conocé Tamarindo a través de quienes lo llaman hogar.',
      btnWatchCameras: 'Ver cámaras en vivo ▸',
      btnBeachGuide: 'Guía de playas',
      weatherTitle: 'Condiciones para surfear',
      weatherLoading: 'Cargando clima',
      weatherWave: 'Oleaje estimado',
      weatherWind: 'Viento',
      weatherTime: 'Hora local',
      cameraNightNotice: 'Cámaras en descanso nocturno · Vuelven aprox. 4:45 a.m.',
      cameraLive: '● En vivo',
      cameraRestBadge: '☾ Descanso',
      weatherUpdating: 'Actualizando…',
      weatherUpdatedNow: 'Actualizado ahora',
      weatherNoConnection: 'Sin conexión al clima',
      weatherConditionsAvailable: 'Condiciones disponibles',
      weatherTamarindoNight: 'Noche en Tamarindo',
      cameraRestTitle: 'Cámara en descanso',
      cameraRestHours: 'Disponible de 4:45 a.m. a 6:30 p.m.',
      cameraClickOpen: 'Click para abrir',
      cameraView: 'Ver cámara',
      cameraSpotInfo: 'Info del spot',
      cameraComingSoon: 'Próximamente',
      cameraNewComing: 'Nueva cámara en camino',
      cameraSoonShort: 'Próx.',
      cameraSpotShort: 'Spot',
      cameraViewCollaborator: 'Ver colaborador',
      camerasSectionTitle: 'Cámaras en vivo',
      camerasSectionSubtitle: 'Tres puntos clave: dos cámaras activas y Red Door en preparación.',
      camerasSectionLink: 'Ver cámaras en vivo →',
      servicesSectionTitle: '¿Qué te gustaría hacer en Tamarindo?',
      servicesSectionSubtitle: 'Elegí una experiencia para ver los detalles. Cuando estés listo, envianos tu fecha preferida y el tamaño de tu grupo. Consultaremos la disponibilidad con el proveedor.',
      serviceSurfLessons: 'Clases de surf',
      serviceSurfLessonsText: 'Clases para todos los niveles con instructores locales.',
      serviceSurfPhotosText: 'Captura tus mejores olas desde la playa.',
      serviceWaterPhotoText: 'Sesiones profesionales dentro y fuera del agua.',
      serviceSurfskateText: 'Mejora técnica y fluidez fuera del agua.',
      serviceMoreInfo: 'Más información →',
      serviceCardStayTitle: 'Alojamiento y experiencias',
      serviceCardStayText: 'Encontrá dónde dormir y qué sumar a tu viaje.',
      serviceCardStayAlt: 'Alojamiento y experiencias en Tamarindo',
      serviceCardCoachingTitle: 'Surf coaching',
      serviceCardCoachingText: 'Llevá tu surf al siguiente nivel con entrenamiento personalizado.',
      serviceCardWitchRockTitle: 'Surf trip a Roca Bruja',
      serviceCardWitchRockText: 'Una salida especial a uno de los spots de la costa.',
      serviceCardSnorkelTitle: 'Snorkel y catamarán',
      serviceCardSnorkelText: 'Explorá bajo el agua, navegá la costa o combiná ambas.',
      serviceCardYogaTitle: 'Yoga',
      serviceCardYogaText: 'Una práctica para acompañar tu viaje y bajar el ritmo.',
      serviceCardAtvTitle: 'Tours en cuatriciclo — ATV',
      serviceCardAtvText: 'Recorré los caminos de Guanacaste con operadores locales.',
      serviceCardRetreatsTitle: 'Retiros',
      serviceCardRetreatsText: 'Surf, descanso, movimiento y comunidad en un mismo viaje.',
      serviceCardDiveTitle: 'Buceo',
      serviceCardDiveText: 'Descubrí Tamarindo bajo el agua con una experiencia de buceo local.',
      serviceCardPackTitle: 'Pack ajustable',
      serviceCardPackText: 'Armá tu propia experiencia combinando las actividades que mejor encajan con tu viaje.',
      wavepointInTamarindo: 'WavePoint en Tamarindo',
      wavepointInTamarindoSubtitle: 'Información útil para elegir mejor tu spot, planear tu sesión y moverte en Tamarindo.',
      benefitLiveCameras: 'Cámaras reales',
      benefitLiveCamerasText: 'Consulta el estado visual de los spots antes de salir.',
      benefitQuickConditions: 'Condiciones rápidas',
      benefitQuickConditionsText: 'Clima, viento, hora local y oleaje estimado en un solo lugar.',
      benefitLocalGuide: 'Guía local',
      benefitLocalGuideText: 'Playas, experiencias y puntos útiles para moverte mejor.',
      benefitLocalAllies: 'Aliados locales',
      benefitLocalAlliesText: 'Colaboradores que ayudan a mantener la experiencia activa y útil.',
      guideLiveTamarindo: 'Vive Tamarindo',
      guideText: 'Más que surf: playas, colaboradores, servicios y experiencias recomendadas.',
      guideButton: 'Explorar guía',
      afterSurfTitle: 'Después del surf',
      afterSurfSubtitle: 'Opciones útiles para comer, guardar recuerdos de la sesión y seguir explorando Tamarindo.',
      afterFood: 'Comida',
      afterFoodText: 'Burgers, empanadas y cerveza fría después de surfear.',
      afterDemo: 'Ver pre-play demo →',
      afterSession: 'Recuerdo de tu sesión',
      afterServiceLink: 'Ver servicio →',
      afterGuideTag: 'Guía local',
      afterGuideTitle: 'Explora Tamarindo',
      afterGuideText: 'Playas, colaboradores, servicios y experiencias cercanas.',
      afterGuideLink: 'Ver guía →',
      newsletterTitle: 'Entérate primero',
      newsletterText: 'Recibe alertas de olas, novedades y promociones seleccionadas.',
      newsletterEmailPlaceholder: 'Tu correo electrónico',
      newsletterButton: 'Suscribirme',
      alliesHeadingTitle: 'Las marcas y negocios locales que creen en WavePoint y ayudan a hacerlo posible',
      alliesHeadingDescription: 'Aliados y patrocinadores de WavePoint en Tamarindo.',
      partnersSectionTitle: 'Aliados y patrocinadores',
      partnersSectionSubtitle: 'Colaboradores reales del proyecto y marcas que acompañan la experiencia WavePoint en Tamarindo.',
      sponsorActive: 'Patrocinador activo',
      sponsorLocation: 'Burgers & empanadas · Tamarindo',
      sponsorSite: 'Visitar sitio →',
      partnerCameraSpot: 'Cámara / spot',
      partnerCollaborator: 'Colaborador',
      cameraOfflineText: 'Esta cámara está fuera del horario de transmisión. Vuelve aprox. a las 4:45 a.m. hora Costa Rica.',
      cameraCloseHint: 'Haz clic fuera del recuadro para cerrar.',
      cameraModalTitle: 'Cámara',
      spotModalTitle: 'Info del spot',
      mobileHome: 'Inicio',
      mobileCameras: 'Cámaras',
      mobileServices: 'Servicios',
      mobileGuide: 'Guía local',
      mobileAllies: 'Aliados',
      mobileAbout: 'Nosotros',
      mobileCapitan: 'Capitán Suizo',
      mobileCasa: 'Casa de Maderas',
      mobileRedDoor: 'Red Door',
      mobileWavePoint: 'WavePoint',
      mobileLive: 'En vivo',
      mobileSurfPhoto: 'Surf / Foto',
      mobileTamarindo: 'Tamarindo',
      mobileLocals: 'Locales',
      mobileProject: 'Proyecto',
      mobileCamera: 'Cámara',
      mobileComingSoon: 'Próximamente',
      footerIntro: 'Conectamos surfistas, viajeros y negocios locales con las mejores condiciones y experiencias de Tamarindo.',
      footerQuickLinks: 'Enlaces rápidos',
      footerGuide: 'Guía turística',
      footerServices: 'Servicios',
      footerAbout: 'Nosotros',
      footerCameras: 'Cámaras',
      footerBeaches: 'Playas',
      footerRestaurants: 'Restaurantes',
      footerTours: 'Tours',
      footerSnorkeling: 'Snorkeling',
      footerWavePointText: 'Cámaras, spots, guía local y experiencias para surfistas y visitantes en Tamarindo.',
      footerViewCameras: 'Ver cámaras',
      footerTerms: 'Términos · Privacidad',
      whatsappLabel: 'Escribinos por WhatsApp',
      assistantGreeting: 'Hola, hello. Tu guía local en Tamarindo. ¿Qué te gustaría saber?',
      assistantEyebrow: 'WAVEPOINT · TAMARINDO',
      assistantTitle: 'Tu guía local',
      assistantWelcome: 'Preguntame por las cámaras, el clima, los spots o qué hacer en Tamarindo.',
      assistantSuggestionCameras: 'Cámaras',
      assistantSuggestionBeginner: 'Empezar a surfear',
      assistantSuggestionActivities: 'Qué hacer',
      assistantInputLabel: 'Tu pregunta',
      assistantPlaceholder: 'Escribí tu pregunta...',
      assistantDisclaimer: 'Las respuestas automáticas pueden equivocarse. Confirmá las condiciones del mar con gente local.',
      assistantLauncherLabel: 'Abrir guía WavePoint',
      assistantTyping: 'Estoy buscando una buena respuesta…',
      assistantFallbackCameras: 'WavePoint tiene cámaras en Capitán Suizo y Casa de Maderas. Red Door está en preparación. Las cámaras transmiten aproximadamente de 4:45 a. m. a 6:30 p. m., hora de Costa Rica.',
      assistantFallbackConditions: 'En la tarjeta de clima de esta página podés ver temperatura, viento, oleaje estimado y hora local. Es una referencia; verificá el estado del mar al llegar y consultá a surfistas locales.',
      assistantFallbackSurf: 'Tamarindo tiene olas para distintos niveles. WavePoint ofrece clases de surf y surf coaching; revisá las cámaras y las condiciones antes de entrar, y pedí orientación a un instructor local si estás empezando.',
      assistantFallbackActivities: 'La guía de WavePoint incluye playas como Ventanas, Danta, Avellanas, Naranjo y Conchal; también cascadas, senderismo y snorkeling. Escribinos por WhatsApp para ayudarte a elegir según el tiempo y tu plan.',
      assistantFallbackContact: 'Podés escribirle directamente a WavePoint por WhatsApp usando el botón verde de esta página. También encontrás Instagram como @wavepointcr.',
      assistantFallbackGeneral: 'Puedo orientarte sobre cámaras, clima, spots, servicios de surf y actividades en Guanacaste. ¿Qué plan tenés en mente?',
      servicePageBack: '← Volver a WavePoint',
      servicePageEyebrow: 'SURF · FOTO · EXPERIENCIAS',
      servicePageTitle: 'La próxima sesión empieza acá.',
      servicePageIntro: 'Entrenamiento y fotografía con gente que conoce estas olas. Elegí lo que te gustaría hacer y coordinamos con vos.',
      servicePageBook: 'Consultar por WhatsApp ↗',
      servicePageSectionKicker: 'HECHO EN TAMARINDO',
      servicePageSectionTitle: '¿Qué te gustaría hacer en Tamarindo?',
      servicePageSectionIntro: 'Elegí una experiencia para ver los detalles. Cuando estés listo, envianos tu fecha preferida y el tamaño de tu grupo. Consultaremos la disponibilidad con el proveedor.',
      servicePageCoachingTitle: 'Surf coaching',
      servicePageCoachingText: 'Entrenamiento personalizado, análisis de técnica, video-coaching y estrategias para mejorar tu rendimiento con entrenadores expertos.',
      servicePageSurfPhotoText: 'Capturá tus mejores maniobras con fotógrafos profesionales que siguen la sesión desde la playa y crean recuerdos de alta calidad.',
      servicePageWaterPhotoText: 'Viví una sesión dentro del agua con fotógrafos especializados y capturá la energía de cada ola desde la perspectiva más épica.',
      servicePageSurfskateText: 'Mejorá giros, estabilidad, equilibrio y fluidez en tierra antes de llevarlos al agua; para todas las edades y niveles.',
      servicePageAsk: 'Consultar disponibilidad ↗',
      guidePageEyebrow: 'GUANACASTE · COSTA RICA',
      guidePageTitle: 'Seguí la costa. Encontrá tu lugar.',
      guidePageIntro: 'Playas para surfear y bajar el ritmo, naturaleza para explorar y planes para conocer la zona con otra mirada.',
      guidePageCameras: 'Ver condiciones y cámaras ↗',
      guidePageSectionKicker: 'IDEAS PARA SALIR',
      guidePageSectionTitle: 'Elegí el próximo plan.',
      guideBeaches: 'PLAYAS',
      guideNature: 'NATURALEZA',
      guideVentanas: 'Playa Ventanas',
      guideVentanasText: 'Una costa más tranquila cerca de Playa Grande. Consultá el acceso local antes de salir.',
      guideAvellanas: 'Playa Avellanas',
      guideAvellanasText: 'Un destino conocido por el surf y su ambiente relajado; revisá mareas y transporte del día.',
      guideConchal: 'Playa Conchal',
      guideConchalText: 'Aguas claras y una costa distinta; planeá el acceso con tiempo y llevá agua.',
      guideWaterfall: 'Llanos de Cortés',
      guideWaterfallText: 'Una escapada a una cascada amplia; verificá condiciones de camino y acceso antes de viajar.',
      guideCatalinas: 'Islas Catalinas',
      guideCatalinasText: 'Una opción popular para snorkeling en bote. Coordiná con un operador local y consultá el mar.',
      guideWitchRock: 'Roca Bruja', guideWitchRockText: 'Una ola mítica dentro del Parque Nacional Santa Rosa, a unas dos horas de Tamarindo. Prepará el acceso con tiempo.',
      guideDanta: 'Playa Danta', guideDantaText: 'Una joya tranquila cerca de Las Catalinas, con aguas claras, poca gente y senderos con vistas al océano.',
      guideHermosa: 'Playa Hermosa', guideHermosaText: 'Una costa relajada para nadar, descansar y combinar una salida de playa con el ambiente local.',
      guideBaulas: 'Parque Nacional Marino Las Baulas', guideBaulasText: 'Manglares, aves tropicales y playas de anidación de tortugas marinas. Revisá la temporada y las reglas de acceso.',
      guideRincon: 'Rincón de la Vieja', guideRinconText: 'Bosque tropical, volcanes, aguas termales y senderos para una aventura de día completo cerca de Liberia.',
      guidePaloVerde: 'Palo Verde', guidePaloVerdeText: 'Humedales, manglares y una biodiversidad excepcional para observar aves y conocer otro paisaje de Guanacaste.',
      guideOcotal: 'Playa Ocotal', guideOcotalText: 'Aguas cristalinas y vida marina para bucear o hacer snorkeling lejos del bullicio.',
      guideFlamingo: 'Playa Flamingo', guideFlamingoText: 'Un destino de snorkeling con peces de arrecife, rayas y formaciones rocosas que hacen memorable la salida.',
      guideOpenMap: 'Abrir mapa ↗'
    },
    en: {
      navInicio: 'Home',
      navServicios: 'Services',
      navGuia: 'Tourist guide',
      navNosotros: 'About us',
      navColaboradores: 'Partners ▾',
      heroTitle: 'Tamarindo’s best experiences, with the locals who know it best',
      heroText: 'Through the people who call it home',
      btnWatchCameras: 'Watch live cameras ▸',
      btnBeachGuide: 'Beach guide',
      weatherTitle: 'Surf conditions',
      weatherLoading: 'Loading weather',
      weatherWave: 'Estimated swell',
      weatherWind: 'Wind',
      weatherTime: 'Local time',
      cameraNightNotice: 'Night cameras off · Back around 4:45 a.m.',
      cameraLive: '● Live',
      cameraRestBadge: '☾ Resting',
      weatherUpdating: 'Updating…',
      weatherUpdatedNow: 'Updated now',
      weatherNoConnection: 'Weather offline',
      weatherConditionsAvailable: 'Conditions available',
      weatherTamarindoNight: 'Night in Tamarindo',
      cameraRestTitle: 'Camera on standby',
      cameraRestHours: 'Available from 4:45 a.m. to 6:30 p.m.',
      cameraClickOpen: 'Click to open',
      cameraView: 'View camera',
      cameraSpotInfo: 'Spot info',
      cameraComingSoon: 'Coming soon',
      cameraNewComing: 'New camera on the way',
      cameraSoonShort: 'Soon',
      cameraSpotShort: 'Spot',
      cameraViewCollaborator: 'View collaborator',
      camerasSectionTitle: 'Live cameras',
      camerasSectionSubtitle: 'Three key spots: two active cameras and Red Door still coming.',
      camerasSectionLink: 'View live cameras →',
      servicesSectionTitle: 'What would you like to do in Tamarindo?',
      servicesSectionSubtitle: 'Choose an experience to see the details. When you’re ready, send us your preferred date and group size. We’ll check availability with the provider.',
      serviceSurfLessons: 'Surf lessons',
      serviceSurfLessonsText: 'Lessons for all levels with local instructors.',
      serviceSurfPhotosText: 'Capture your best waves from the beach.',
      serviceWaterPhotoText: 'Professional sessions in and out of the water.',
      serviceSurfskateText: 'Improve technique and flow off the water.',
      serviceMoreInfo: 'More info →',
      serviceCardStayTitle: 'Stays and experiences',
      serviceCardStayText: 'Find a place to stay and experiences to add to your trip.',
      serviceCardStayAlt: 'Stays and experiences in Tamarindo',
      serviceCardCoachingTitle: 'Surf coaching',
      serviceCardCoachingText: 'Take your surfing to the next level with personalized coaching.',
      serviceCardWitchRockTitle: 'Surf trip to Witch Rock',
      serviceCardWitchRockText: 'A special trip to one of the coast’s standout surf spots.',
      serviceCardSnorkelTitle: 'Snorkeling and catamaran',
      serviceCardSnorkelText: 'Explore underwater, sail along the coast, or combine both.',
      serviceCardYogaTitle: 'Yoga',
      serviceCardYogaText: 'A practice to complement your trip and slow things down.',
      serviceCardAtvTitle: 'ATV tours',
      serviceCardAtvText: 'Explore Guanacaste’s trails with local operators.',
      serviceCardRetreatsTitle: 'Retreats',
      serviceCardRetreatsText: 'Surf, rest, movement, and community in one trip.',
      serviceCardDiveTitle: 'Diving',
      serviceCardDiveText: 'Discover Tamarindo underwater with a local diving experience.',
      serviceCardPackTitle: 'Build your own experience',
      serviceCardPackText: 'Combine the activities that fit your trip and create your own experience.',
      wavepointInTamarindo: 'WavePoint in Tamarindo',
      wavepointInTamarindoSubtitle: 'Useful information to choose your spot better, plan your session, and move around Tamarindo.',
      benefitLiveCameras: 'Real cameras',
      benefitLiveCamerasText: 'Check the visual status of spots before heading out.',
      benefitQuickConditions: 'Quick conditions',
      benefitQuickConditionsText: 'Weather, wind, local time, and estimated swell in one place.',
      benefitLocalGuide: 'Local guide',
      benefitLocalGuideText: 'Beaches, experiences, and useful spots to move around better.',
      benefitLocalAllies: 'Local allies',
      benefitLocalAlliesText: 'Partners who help keep the experience active and useful.',
      guideLiveTamarindo: 'Live Tamarindo',
      guideText: 'More than surf: beaches, partners, services, and recommended experiences.',
      guideButton: 'Explore guide',
      afterSurfTitle: 'After the surf',
      afterSurfSubtitle: 'Useful options for eating, saving memories from the session, and continuing to explore Tamarindo.',
      afterFood: 'Food',
      afterFoodText: 'Burgers, empanadas, and cold beer after surfing.',
      afterDemo: 'Watch pre-play demo →',
      afterSession: 'Your session memory',
      afterServiceLink: 'View service →',
      afterGuideTag: 'Local guide',
      afterGuideTitle: 'Explore Tamarindo',
      afterGuideText: 'Beaches, partners, services, and nearby experiences.',
      afterGuideLink: 'View guide →',
      newsletterTitle: 'Know first',
      newsletterText: 'Get wave alerts, updates, and selected promotions.',
      newsletterEmailPlaceholder: 'Your email',
      newsletterButton: 'Subscribe',
      alliesHeadingTitle: 'The brands and local businesses that believe in WavePoint and help make it possible',
      alliesHeadingDescription: 'WavePoint allies and sponsors in Tamarindo.',
      partnersSectionTitle: 'Partners & sponsors',
      partnersSectionSubtitle: 'Real collaborators of the project and brands that support the WavePoint experience in Tamarindo.',
      sponsorActive: 'Active sponsor',
      sponsorLocation: 'Burgers & empanadas · Tamarindo',
      sponsorSite: 'Visit site →',
      partnerCameraSpot: 'Camera / spot',
      partnerCollaborator: 'Collaborator',
      cameraOfflineText: 'This camera is outside its broadcast window. It returns around 4:45 a.m. Costa Rica time.',
      cameraCloseHint: 'Click outside the frame to close.',
      cameraModalTitle: 'Camera',
      spotModalTitle: 'Spot info',
      mobileHome: 'Home',
      mobileCameras: 'Cameras',
      mobileServices: 'Services',
      mobileGuide: 'Local guide',
      mobileAllies: 'Partners',
      mobileAbout: 'About',
      mobileCapitan: 'Capitán Suizo',
      mobileCasa: 'Casa de Maderas',
      mobileRedDoor: 'Red Door',
      mobileWavePoint: 'WavePoint',
      mobileLive: 'Live',
      mobileSurfPhoto: 'Surf / Photo',
      mobileTamarindo: 'Tamarindo',
      mobileLocals: 'Local',
      mobileProject: 'Project',
      mobileCamera: 'Camera',
      mobileComingSoon: 'Coming soon',
      footerIntro: 'We connect surfers, travelers, and local businesses with the best conditions and experiences in Tamarindo.',
      footerQuickLinks: 'Quick links',
      footerGuide: 'Travel guide',
      footerServices: 'Services',
      footerAbout: 'About',
      footerCameras: 'Cameras',
      footerBeaches: 'Beaches',
      footerRestaurants: 'Restaurants',
      footerTours: 'Tours',
      footerSnorkeling: 'Snorkeling',
      footerWavePointText: 'Cameras, spots, local guide, and experiences for surfers and visitors in Tamarindo.',
      footerViewCameras: 'View cameras',
      footerTerms: 'Terms · Privacy',
      whatsappLabel: 'Chat on WhatsApp',
      assistantGreeting: 'Hi! Hola. Your local Tamarindo guide is here. What would you like to know?',
      assistantEyebrow: 'WAVEPOINT · TAMARINDO',
      assistantTitle: 'Your local guide',
      assistantWelcome: 'Ask me about the cameras, weather, surf spots, or things to do in Tamarindo.',
      assistantSuggestionCameras: 'Cameras',
      assistantSuggestionBeginner: 'Learn to surf',
      assistantSuggestionActivities: 'Things to do',
      assistantInputLabel: 'Your question',
      assistantPlaceholder: 'Ask a question...',
      assistantDisclaimer: 'Automated answers can be wrong. Confirm ocean conditions with local surfers.',
      assistantLauncherLabel: 'Open WavePoint guide',
      assistantTyping: 'Let me find a helpful answer…',
      assistantFallbackCameras: 'WavePoint has cameras at Capitán Suizo and Casa de Maderas. Red Door is coming soon. Cameras usually stream from about 4:45 a.m. to 6:30 p.m. Costa Rica time.',
      assistantFallbackConditions: 'The weather panel shows temperature, wind, estimated swell, and local time. Treat it as a reference, check the ocean when you arrive, and ask local surfers for current advice.',
      assistantFallbackSurf: 'Tamarindo has waves for different skill levels. WavePoint features surf lessons and surf coaching; check the cameras and conditions before paddling out, and ask a local instructor if you are new.',
      assistantFallbackActivities: 'The WavePoint guide features beaches such as Ventanas, Danta, Avellanas, Naranjo, and Conchal, plus waterfalls, hiking, and snorkeling. Message us on WhatsApp and we can help you choose based on your plans.',
      assistantFallbackContact: 'Message WavePoint directly on WhatsApp using the green button on this page. You can also find us on Instagram at @wavepointcr.',
      assistantFallbackGeneral: 'I can help with cameras, weather, surf spots, lessons, and things to do around Guanacaste. What are you planning?',
      servicePageBack: '← Back to WavePoint',
      servicePageEyebrow: 'SURF · PHOTO · EXPERIENCES',
      servicePageTitle: 'Your next session starts here.',
      servicePageIntro: 'Coaching and photography with people who know these waves. Choose what you would like to do and we will help you plan it.',
      servicePageBook: 'Ask us on WhatsApp ↗',
      servicePageSectionKicker: 'MADE IN TAMARINDO',
      servicePageSectionTitle: 'What would you like to do in Tamarindo?',
      servicePageSectionIntro: 'Choose an experience to see the details. When you’re ready, send us your preferred date and group size. We’ll check availability with the provider.',
      servicePageCoachingTitle: 'Surf coaching',
      servicePageCoachingText: 'Personal coaching, technique analysis, video feedback, and strategies to improve your performance with expert coaches.',
      servicePageSurfPhotoText: 'Keep your best maneuvers with professional photographers following the session from the beach and creating high-quality memories.',
      servicePageWaterPhotoText: 'Experience a session in the water with specialized photographers capturing the energy of every wave from the best perspective.',
      servicePageSurfskateText: 'Improve turns, stability, balance, and flow on land before bringing them into the water, for every age and level.',
      servicePageAsk: 'Check availability ↗',
      guidePageEyebrow: 'GUANACASTE · COSTA RICA',
      guidePageTitle: 'Follow the coast. Find your place.',
      guidePageIntro: 'Beaches to surf or slow down, nature to explore, and local ideas to see the area from a new angle.',
      guidePageCameras: 'Check conditions and cameras ↗',
      guidePageSectionKicker: 'IDEAS FOR YOUR DAY',
      guidePageSectionTitle: 'Choose your next plan.',
      guideBeaches: 'BEACHES',
      guideNature: 'NATURE',
      guideVentanas: 'Playa Ventanas',
      guideVentanasText: 'A quieter stretch of coast near Playa Grande. Check local access before heading out.',
      guideAvellanas: 'Playa Avellanas',
      guideAvellanasText: 'Known for surf and a relaxed atmosphere; check tides and transportation for the day.',
      guideConchal: 'Playa Conchal',
      guideConchalText: 'Clear water and a unique coastline; plan access ahead and bring drinking water.',
      guideWaterfall: 'Llanos de Cortés',
      guideWaterfallText: 'A wide waterfall makes for a refreshing day trip. Check road and access conditions first.',
      guideCatalinas: 'Catalina Islands',
      guideCatalinasText: 'A popular boat-based snorkeling trip. Arrange with a local operator and check sea conditions.',
      guideWitchRock: 'Witch Rock', guideWitchRockText: 'A legendary wave inside Santa Rosa National Park, about two hours from Tamarindo. Plan access carefully.',
      guideDanta: 'Playa Danta', guideDantaText: 'A quiet gem near Las Catalinas, with clear water, few crowds, and trails overlooking the ocean.',
      guideHermosa: 'Playa Hermosa', guideHermosaText: 'A relaxed coast for swimming, slowing down, and pairing a beach day with local atmosphere.',
      guideBaulas: 'Las Baulas Marine National Park', guideBaulasText: 'Mangroves, tropical birds, and nesting beaches for sea turtles. Check the season and access rules.',
      guideRincon: 'Rincón de la Vieja', guideRinconText: 'Tropical forest, volcanoes, hot springs, and trails for a full-day adventure near Liberia.',
      guidePaloVerde: 'Palo Verde', guidePaloVerdeText: 'Wetlands, mangroves, and exceptional biodiversity for birdwatching and a different Guanacaste landscape.',
      guideOcotal: 'Playa Ocotal', guideOcotalText: 'Clear water and marine life for diving or snorkeling away from the crowds.',
      guideFlamingo: 'Playa Flamingo', guideFlamingoText: 'A snorkeling destination with reef fish, rays, and rock formations that make the outing memorable.',
      guideOpenMap: 'Open map ↗'
    }
  };

  const languageState = { current: localStorage.getItem('wavepoint-lang') || 'es' };

  function applyTranslations(lang = languageState.current) {
    const dict = translations[lang] || translations.es;
    languageState.current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const value = dict[node.dataset.i18n];
      if (value) node.textContent = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
      const value = dict[node.dataset.i18nPlaceholder];
      if (value) node.setAttribute('placeholder', value);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(node => {
      const value = dict[node.dataset.i18nAlt];
      if (value) node.setAttribute('alt', value);
    });

    const langToggle = document.querySelector('[data-lang-toggle]');
    if (langToggle) {
      const isSpanish = lang === 'es';
      langToggle.dataset.language = lang;
      langToggle.setAttribute('aria-label', isSpanish ? 'Switch to English' : 'Cambiar a español');
      langToggle.setAttribute('aria-pressed', String(!isSpanish));
    }
    document.getElementById('assistantLauncher')?.setAttribute('aria-label', dict.assistantLauncherLabel);

    if (document.getElementById('weatherState')) {
      const [icon,label] = weatherText(document.getElementById('weatherIcon')?.dataset?.conditionCode ?? 0, Number(document.getElementById('weatherIcon')?.dataset?.isDay ?? 1));
      const readyText = label || (lang === 'en' ? 'Loading weather' : 'Cargando clima');
      document.getElementById('weatherState').textContent = readyText;
    }

    if (document.getElementById('cameraNightNotice')) {
      document.getElementById('cameraNightNotice').textContent = dict.cameraNightNotice || translations.es.cameraNightNotice;
    }

    if (document.getElementById('updatedText')) {
      const statusEl = document.getElementById('updatedText');
      const currentStatus = statusEl.textContent.trim();
      if (currentStatus === translations.es.weatherNoConnection || currentStatus === translations.en.weatherNoConnection) {
        statusEl.textContent = dict.weatherNoConnection;
      } else if (currentStatus === translations.es.weatherUpdatedNow || currentStatus === translations.en.weatherUpdatedNow) {
        statusEl.textContent = dict.weatherUpdatedNow;
      } else {
        statusEl.textContent = dict.weatherUpdating;
      }
    }

    applyCameraState();
  }

  const langToggle = document.querySelector('[data-lang-toggle]');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLang = languageState.current === 'es' ? 'en' : 'es';
      localStorage.setItem('wavepoint-lang', nextLang);
      applyTranslations(nextLang);
    });
  }

  const SPOTS = {
    capitan: {
      title:'Capitán Suizo',
      location:'Tamarindo',
      css:'',
      level:'Intermedio',
      tide:'Media / alta',
      bottom:'Arena',
      risk:'Corrientes y rocas cercanas',
      notes:'Los datos de clima, viento y oleaje se toman de Open-Meteo / Marine. La mejor marea, nivel y riesgos son datos editoriales que deben validarse con surfistas locales.',
      tips:['Revisar viento antes de entrar.','Mejor como referencia visual con cámara en vivo.','Ideal revisar servicios cercanos y recomendaciones locales.']
    },
    casitas: {
      title:'Casa de Maderas',
      location:'Palm Beach',
      css:'casamaderas',
      level:'Intermedio / avanzado',
      tide:'Media',
      bottom:'Arena / zona costera',
      risk:'Precaución con estero y fauna local',
      notes:'La información fija del spot debe curarse localmente. Mareas reales pueden agregarse luego con WorldTides si se decide registrar una API.',
      tips:['Validar condiciones del estero antes de cruzar.','Revisar cámara antes de desplazarse.','Mantener advertencias de seguridad visibles.']
    }
  };

  function buildSpotHtml(key){
    const s = SPOTS[key] || SPOTS.capitan;
    const temp = document.getElementById('temp')?.textContent || '--';
    const wind = document.getElementById('wind')?.textContent || '--';
    const wave = document.getElementById('waveHeight')?.textContent || '--';
    const weather = document.getElementById('weatherState')?.textContent || (languageState.current === 'en' ? 'Current conditions' : 'Condiciones actuales');
    const time = document.getElementById('localTime')?.textContent || '--:--';
    const isEnglish = languageState.current === 'en';
    const labels = isEnglish ? {
      prelim: 'Preliminary surf sheet',
      climate: 'Weather',
      wind: 'Wind',
      swell: 'Swell',
      current: 'current',
      localTime: 'Local time',
      quickRead: 'Quick read',
      level: 'Recommended level',
      tide: 'Best tide',
      bottom: 'Bottom',
      risk: 'Risks',
      localNotes: 'Local notes',
      country: 'Costa Rica'
    } : {
      prelim: 'Ficha surf preliminar',
      climate: 'Clima',
      wind: 'Viento',
      swell: 'Oleaje',
      current: 'actual',
      localTime: 'Hora local',
      quickRead: 'Lectura rápida',
      level: 'Nivel recomendado',
      tide: 'Mejor marea',
      bottom: 'Fondo',
      risk: 'Riesgos',
      localNotes: 'Notas locales',
      country: 'Costa Rica'
    };
    return `
      <div class="spot-hero ${s.css}">
        <div>
          <h3>${s.title}</h3>
          <p>${s.location} · ${labels.prelim}</p>
        </div>
      </div>
      <div class="spot-data">
        <div class="spot-card"><small>${labels.climate}</small><strong>${temp}°</strong><span>${weather}</span></div>
        <div class="spot-card"><small>${labels.wind}</small><strong>${wind}</strong><span>${labels.current}</span></div>
        <div class="spot-card"><small>${labels.swell}</small><strong>${wave} m</strong><span>${isEnglish ? 'estimated by Marine API' : 'estimado Marine API'}</span></div>
        <div class="spot-card"><small>${labels.localTime}</small><strong>${time}</strong><span>${labels.country}</span></div>
      </div>
      <div class="spot-info-grid">
        <div class="spot-info-block">
          <h4>${labels.quickRead}</h4>
          <ul>
            <li>${labels.level}: ${s.level}</li>
            <li>${labels.tide}: ${s.tide}</li>
            <li>${labels.bottom}: ${s.bottom}</li>
            <li>${labels.risk}: ${s.risk}</li>
          </ul>
        </div>
        <div class="spot-info-block">
          <h4>${labels.localNotes}</h4>
          <ul>${s.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="spot-note">${s.notes}</div>
    `;
  }

  function bindSpotModal(){
    const modal=document.getElementById('spotModal');
    const body=document.getElementById('spotModalBody');
    const title=document.getElementById('spotModalTitle');
    const close=document.getElementById('closeSpot');
    if(!modal || !body || !close) return;
    document.querySelectorAll('.js-open-spot').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const card=btn.closest('.camera-card');
        const key=btn.dataset.camera || card?.dataset?.camera || 'capitan';
        const spot=SPOTS[key] || SPOTS.capitan;
        title.textContent = (languageState.current === 'en' ? 'Spot info · ' : 'Info del spot · ') + spot.title;
        body.innerHTML=buildSpotHtml(key);
        modal.classList.add('show');
        document.body.style.overflow='hidden';
      });
    });
    function closeSpot(){ modal.classList.remove('show'); document.body.style.overflow=''; }
    close.addEventListener('click', closeSpot);
    modal.addEventListener('click', (e)=>{ if(e.target===modal) closeSpot(); });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeSpot(); });
  }

  function bindCameraModal(){
    const modal=document.getElementById('cameraModal');
    const frame=document.getElementById('cameraFrame');
    const title=document.getElementById('modalTitle');
    const note=document.getElementById('modalNote');
    const offline=document.getElementById('offlinePanel');
    const offlineTitle=document.getElementById('offlineTitle');
    const modalWatermark=document.getElementById('modalWatermark');
    if(!modal || !frame || !title || !note || !offline || !offlineTitle) return;

    function openCamera(card){
      const isLive=isCameraLiveNow();
      const cameraName = card.dataset.title || 'Cámara WavePoint';
      title.textContent = cameraName;
      if(isLive){
        offline.classList.remove('show');
        frame.style.display='block';
        frame.src=card.dataset.src;
        if (modalWatermark) modalWatermark.style.display='block';
        note.textContent = (languageState.current === 'en' ? 'You are watching: ' : 'Estás viendo: ') + cameraName + (languageState.current === 'en' ? ' · Click outside the frame to close.' : ' · Haz clic fuera del recuadro para cerrar.');
      } else {
        frame.src='';
        frame.style.display='none';
        if (modalWatermark) modalWatermark.style.display='none';
        offlineTitle.textContent = cameraName + (languageState.current === 'en' ? ' on standby' : ' en descanso');
        offline.classList.add('show');
        note.textContent = languageState.current === 'en' ? 'Camera outside broadcast hours · Transmission approx. 4:45 a.m. to 6:30 p.m.' : 'Cámara fuera de horario · Transmisión aprox. de 4:45 a.m. a 6:30 p.m.';
      }
      modal.classList.add('show');
      document.body.style.overflow='hidden';
    }

    document.querySelectorAll('.camera-card[data-src]').forEach(card=>{
      card.addEventListener('click',(e)=>{
        if(e.target.closest('.js-open-spot')) return;
        openCamera(card);
      });
      card.querySelectorAll('.js-open-camera').forEach(btn=>{
        btn.addEventListener('click', (e)=>{
          e.preventDefault();
          e.stopPropagation();
          openCamera(card);
        });
      });
    });

    document.querySelectorAll('.js-open-partner-camera').forEach(btn=>{
      btn.addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation();
        const camera=document.querySelector(`.camera-card[data-camera="${btn.dataset.camera}"]`);
        if(camera) openCamera(camera);
      });
    });

    document.getElementById('closeCamera').addEventListener('click', closeCamera);
    modal.addEventListener('click', (e)=>{ if(e.target===modal) closeCamera(); });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ closeCamera(); closeAd(); } });
    function closeCamera(){
      frame.src='';
      frame.style.display='block';
      offline.classList.remove('show');
      if (modalWatermark) modalWatermark.style.display='none';
      modal.classList.remove('show');
      document.body.style.overflow='';
    }
    window.closeCamera=closeCamera;
  }
  function bindAdModal2(){ const modal=document.getElementById('adModal'); const video=document.getElementById('adVideo'); const openers=[document.getElementById('adTrigger'), document.getElementById('logoChop')].filter(Boolean); openers.forEach(el=>el.addEventListener('click',(e)=>{ e.preventDefault(); modal.classList.add('show'); document.body.style.overflow='hidden'; video.currentTime=0; video.play().catch(()=>{}); })); document.getElementById('closeAd').addEventListener('click', closeAd); modal.addEventListener('click',(e)=>{ if(e.target===modal) closeAd(); }); function closeAd(){ video.pause(); modal.classList.remove('show'); document.body.style.overflow=''; } window.closeAd=closeAd; }
  
  function bindAdModal() {
  const modal = document.getElementById('adModal');
  const video = document.getElementById('adVideo');
  const videoNote = modal?.querySelector('.modal-note');
  const sponsorCard = document.getElementById('logoChop');
  const preview = sponsorCard?.querySelector('.sponsor-preview');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let previewVisible = false;
  let previewHovered = false;
  if (!modal || !video || !document.getElementById('closeAd')) return;

  const updatePreview = () => {
    if (!preview || modal?.classList.contains('show') || document.hidden) {
      preview?.pause();
      return;
    }

    if (previewHovered || (previewVisible && !reduceMotion)) {
      preview.play().catch(() => {});
    } else {
      preview.pause();
    }
  };

  const openers = [
    document.getElementById('adTrigger'),
    document.getElementById('logoChop')
  ].filter(Boolean);

  openers.forEach(el => el.addEventListener('click', (e) => {

    // If the user clicks the "Visitar sitio" link,
    // do NOT open the ad modal. Let the link work normally.
    if (e.target.closest('.sponsor-site-link')) {
      return;
    }

    e.preventDefault();
    preview?.pause();
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    video.currentTime = 0;
    video.play().catch(() => {
      if (videoNote) videoNote.textContent = 'No se pudo reproducir este MP4 en el navegador.';
    });
  }));

  if (preview && sponsorCard) {
    sponsorCard.addEventListener('pointerenter', () => {
      previewHovered = true;
      updatePreview();
    });
    sponsorCard.addEventListener('pointerleave', () => {
      previewHovered = false;
      updatePreview();
    });
    preview.addEventListener('playing', () => sponsorCard.classList.add('is-preview-playing'));
    preview.addEventListener('pause', () => sponsorCard.classList.remove('is-preview-playing'));
    preview.addEventListener('error', () => sponsorCard.classList.remove('is-preview-playing'));

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        previewVisible = entries.some(entry => entry.isIntersecting);
        updatePreview();
      }, {threshold:.35});
      observer.observe(sponsorCard);
    }
  }

  video.addEventListener('playing', () => {
    if (videoNote) videoNote.textContent = 'Demo del formato pre-play para Castr.';
  });
  video.addEventListener('error', () => {
    if (videoNote) videoNote.textContent = 'No se pudo reproducir este MP4 en el navegador.';
  });
  document.addEventListener('visibilitychange', updatePreview);

  document.getElementById('closeAd').addEventListener('click', closeAd);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeAd();
  });

  function closeAd() {
    video.pause();
    modal.classList.remove('show');
    document.body.style.overflow = '';
    updatePreview();
  }

  window.closeAd = closeAd;
}


  function bindMobileMenu(){
    const panel=document.getElementById('mobilePanel');
    const open=document.getElementById('hamb');
    const close=document.getElementById('mobileClose');
    if(!panel || !open || !close) return;

    function openMenu(){
      panel.classList.add('show');
      panel.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
    }
    function closeMenu(){
      panel.classList.remove('show');
      panel.setAttribute('aria-hidden','true');
      document.body.style.overflow='';
    }

    open.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);
    const collaborators = panel.querySelector('.mobile-dropdown');
    const collaboratorsToggle = panel.querySelector('.mobile-dropdown-toggle');
    collaboratorsToggle?.addEventListener('click', ()=>{
      collaborators?.classList.toggle('is-open');
    });
    panel.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeMenu(); });
  }

  function bindHeroVideoSwap(){
    const videos = [...document.querySelectorAll('.hero-video')];
    if (videos.length < 2) return;

    let activeIndex = 0;

    const swap = () => {
      activeIndex = (activeIndex + 1) % videos.length;
      videos.forEach((video, index) => {
        video.classList.toggle('is-active', index === activeIndex);
      });
    };

    videos.forEach((video, index) => {
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.loop = true;
      video.classList.toggle('is-active', index === 0);
      video.play().catch(() => {});
    });

    setInterval(swap, 6000);
  }

  function bindScrollReveals(){
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const selector = '.section-head, .camera-card, .service-card, .benefit, .guide-card, .active-sponsor-card, .partner-card, .after-card, .promo-card, .newsletter-grid > *';
    const items = [...document.querySelectorAll(selector)];
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {threshold:0, rootMargin:'0px 0px 40% 0px'});

    items.forEach(item=>{
      const siblings=[...item.parentElement.children].filter(sibling=>sibling.matches(selector));
      const siblingIndex=Math.max(0, siblings.indexOf(item));
      item.style.setProperty('--reveal-delay', `${siblingIndex * 45}ms`);
      item.style.setProperty('--reveal-x', siblingIndex % 2 === 0 ? '-28px' : '28px');
      item.classList.add('scroll-reveal');
      observer.observe(item);
    });
  }

  function bindAlliesTickerInteraction(){
    const section=document.querySelector('.allies-ticker');
    const viewport=section?.querySelector('.allies-ticker-viewport');
    const track=section?.querySelector('.allies-ticker-track');
    const resistLayer=section?.querySelector('.allies-ticker-resist');
    if(!section || !viewport || !track || !resistLayer) return;

    let pointerId=null, startX=0, startY=0, startOffset=0, isDragging=false, suppressClick=false;
    const updateTickerSpeed=()=>{
      const reduced=reducedMotionPreference.matches;
      const baseDuration=reduced?48:20;
      const supportsHover=window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      const hovering=supportsHover && section.matches(':hover');
      const targetDuration=section.classList.contains('is-interacting')?(reduced?64:32):hovering?(reduced?54:25):baseDuration;
      const animation=track.getAnimations().find(item=>item.animationName==='allies-slide-left');
      if(!animation) return;
      const playbackRate=baseDuration/targetDuration;
      if(animation.updatePlaybackRate) animation.updatePlaybackRate(playbackRate);
      else animation.playbackRate=playbackRate;
    };
    const finishInteraction=(event)=>{
      if(pointerId===null || (event?.pointerId!==undefined && event.pointerId!==pointerId)) return;
      const wasDragged=isDragging;
      pointerId=null;
      isDragging=false;
      section.classList.remove('is-interacting','is-dragging');
      resistLayer.style.left='0px';
      updateTickerSpeed();
      if(wasDragged){
        suppressClick=true;
        window.setTimeout(()=>{ suppressClick=false; },400);
      }
    };

    viewport.addEventListener('pointerdown',event=>{
      if((event.button!==undefined && event.button!==0) || pointerId!==null) return;
      pointerId=event.pointerId;
      startX=event.clientX;
      startY=event.clientY;
      startOffset=Number.parseFloat(getComputedStyle(resistLayer).left)||0;
      resistLayer.style.transition='none';
      isDragging=false;
      section.classList.add('is-interacting');
      updateTickerSpeed();
    });
    window.addEventListener('pointermove',event=>{
      if(event.pointerId!==pointerId) return;
      const deltaX=event.clientX-startX;
      const deltaY=event.clientY-startY;
      if(Math.abs(deltaX)<5 || Math.abs(deltaX)<Math.abs(deltaY)) return;
      isDragging=true;
      section.classList.add('is-dragging');
      const loopWidth=section.querySelector('.allies-ticker-set:not([aria-hidden="true"])')?.getBoundingClientRect().width||0;
      const draggedOffset=startOffset+deltaX*.9;
      const wrappedOffset=loopWidth?((draggedOffset+loopWidth/2)%loopWidth+loopWidth)%loopWidth-loopWidth/2:draggedOffset;
      resistLayer.style.left=`${wrappedOffset}px`;
      event.preventDefault();
    });
    window.addEventListener('pointerup',finishInteraction);
    window.addEventListener('pointercancel',finishInteraction);
    window.addEventListener('blur',()=>finishInteraction());
    section.addEventListener('pointerenter',updateTickerSpeed);
    section.addEventListener('pointerleave',updateTickerSpeed);
    document.addEventListener('click',event=>{
      if(!suppressClick || !event.target.closest('.allies-ticker')) return;
      event.preventDefault();
      event.stopPropagation();
      suppressClick=false;
    },true);
    reducedMotionPreference.addEventListener?.('change',event=>{
      if(event.matches) finishInteraction();
      updateTickerSpeed();
    });
    updateTickerSpeed();
  }

  function bindHeroLogoEntrance(){
    const logo=document.querySelector('.hero-logo-wrap');
    if(!logo) return;
    const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');

    const replay=()=>{
      logo.classList.remove('is-arriving','is-user-replay');
      void logo.offsetWidth;
      logo.classList.add(reduceMotion.matches?'is-user-replay':'is-arriving');
    };

    if(!reduceMotion.matches) logo.classList.add('is-arriving');
    logo.addEventListener('click', replay);
    logo.addEventListener('keydown', e=>{
      if(e.key==='Enter' || e.key===' '){
        e.preventDefault();
        replay();
      }
    });
    document.querySelectorAll('a[href="#inicio"]').forEach(link=>link.addEventListener('click', replay));

    if('IntersectionObserver' in window && !reduceMotion.matches){
      let firstObservation=true;
      const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting && !firstObservation) replay();
          firstObservation=false;
        });
      }, {threshold:.65});
      observer.observe(logo);
    }
  }

  function bindWeatherCardDrag(){
    const card=document.querySelector('.weather-card');
    const handle=card?.querySelector('.weather-head');
    const hero=card?.closest('.hero');
    if(!card || !handle || !hero) return;

    let offsetX=0, offsetY=0, drag=null;
    const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
    const applyOffset=()=>{
      card.style.setProperty('--weather-drag-x',`${offsetX}px`);
      card.style.setProperty('--weather-drag-y',`${offsetY}px`);
    };
    const keepWithinHero=()=>{
      const cardRect=card.getBoundingClientRect();
      const heroRect=hero.getBoundingClientRect();
      offsetX=clamp(offsetX,heroRect.left-cardRect.left+offsetX,heroRect.right-cardRect.right+offsetX);
      offsetY=clamp(offsetY,heroRect.top-cardRect.top+offsetY,heroRect.bottom-cardRect.bottom+offsetY);
      applyOffset();
    };

    handle.addEventListener('pointerdown',event=>{
      if(event.pointerType==='mouse' && event.button!==0) return;
      event.preventDefault();
      card.classList.add('is-dragging');
      const cardRect=card.getBoundingClientRect();
      const heroRect=hero.getBoundingClientRect();
      drag={
        pointerId:event.pointerId,
        startX:event.clientX,
        startY:event.clientY,
        offsetX,
        offsetY,
        minX:heroRect.left-cardRect.left+offsetX,
        maxX:heroRect.right-cardRect.right+offsetX,
        minY:heroRect.top-cardRect.top+offsetY,
        maxY:heroRect.bottom-cardRect.bottom+offsetY
      };
      handle.setPointerCapture(event.pointerId);
    });

    handle.addEventListener('pointermove',event=>{
      if(!drag || event.pointerId!==drag.pointerId) return;
      offsetX=clamp(drag.offsetX+event.clientX-drag.startX,drag.minX,drag.maxX);
      offsetY=clamp(drag.offsetY+event.clientY-drag.startY,drag.minY,drag.maxY);
      applyOffset();
    });

    const stopDrag=event=>{
      if(!drag || event.pointerId!==drag.pointerId) return;
      drag=null;
      offsetX=0;
      offsetY=0;
      applyOffset();
      card.classList.remove('is-dragging');
    };
    handle.addEventListener('pointerup',stopDrag);
    handle.addEventListener('pointercancel',stopDrag);
    handle.addEventListener('lostpointercapture',stopDrag);

    handle.addEventListener('keydown',event=>{
      const step=event.shiftKey?32:12;
      const moves={ArrowLeft:[-step,0],ArrowRight:[step,0],ArrowUp:[0,-step],ArrowDown:[0,step]};
      const move=moves[event.key];
      if(!move) return;
      event.preventDefault();
      const cardRect=card.getBoundingClientRect();
      const heroRect=hero.getBoundingClientRect();
      offsetX=clamp(offsetX+move[0],heroRect.left-cardRect.left+offsetX,heroRect.right-cardRect.right+offsetX);
      offsetY=clamp(offsetY+move[1],heroRect.top-cardRect.top+offsetY,heroRect.bottom-cardRect.bottom+offsetY);
      applyOffset();
    });

    window.addEventListener('resize',keepWithinHero);
  }

  function bindGuideImageModal(){
    const images = [...document.querySelectorAll('.guide-detail-card img')];
    if (!images.length) return;

    const modal = document.createElement('div');
    modal.className = 'guide-image-modal';
    modal.hidden = true;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Imagen ampliada');
    modal.innerHTML = '<figure><button class="guide-image-modal-close" type="button" aria-label="Cerrar imagen">×</button><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(modal);

    const close = modal.querySelector('.guide-image-modal-close');
    const image = modal.querySelector('img');
    const caption = modal.querySelector('figcaption');
    let lastFocused = null;

    function closeModal(){
      modal.hidden = true;
      image.removeAttribute('src');
      document.body.style.overflow = '';
      lastFocused?.focus();
    }
    function openModal(source){
      lastFocused = document.activeElement;
      image.src = source.currentSrc || source.src;
      image.alt = source.alt || '';
      caption.textContent = source.alt || '';
      close.setAttribute('aria-label', languageState.current === 'en' ? 'Close image' : 'Cerrar imagen');
      modal.setAttribute('aria-label', languageState.current === 'en' ? 'Enlarged image' : 'Imagen ampliada');
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      close.focus();
    }

    images.forEach(source=>{
      source.tabIndex = 0;
      source.setAttribute('role', 'button');
      source.setAttribute('aria-label', `${languageState.current === 'en' ? 'View enlarged image: ' : 'Ver imagen ampliada: '}${source.alt || ''}`);
      source.addEventListener('click', ()=>openModal(source));
      source.addEventListener('keydown', event=>{
        if(event.key === 'Enter' || event.key === ' '){
          event.preventDefault();
          openModal(source);
        }
      });
    });
    close.addEventListener('click', closeModal);
    modal.addEventListener('click', event=>{ if(event.target === modal) closeModal(); });
    document.addEventListener('keydown', event=>{ if(event.key === 'Escape' && !modal.hidden) closeModal(); });
  }

  function bindSiteAssistant(){
    if(!document.getElementById('siteAssistant')){
      document.body.insertAdjacentHTML('beforeend', `
        <div class="assistant-greeting" id="assistantGreeting"><span data-i18n="assistantGreeting"></span><button type="button" id="dismissGreeting" aria-label="Close">×</button></div>
        <button class="assistant-launcher" id="assistantLauncher" type="button" aria-label="Open WavePoint guide" aria-expanded="false" aria-controls="siteAssistant"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-5 4v-4.5a2.5 2.5 0 0 1-2-2.5Z"/><path d="M8 8h8M8 11.5h5"/></svg></button>
        <section class="assistant-panel" id="siteAssistant" role="dialog" aria-modal="false" aria-labelledby="assistantTitle" hidden>
          <header class="assistant-header"><div><small data-i18n="assistantEyebrow"></small><h2 id="assistantTitle" data-i18n="assistantTitle"></h2></div><button class="assistant-close" id="assistantClose" type="button" aria-label="Close assistant">×</button></header>
          <div class="assistant-messages" id="assistantMessages" aria-live="polite"><p class="assistant-message assistant-message-bot" data-i18n="assistantWelcome"></p></div>
          <div class="assistant-suggestions"><button type="button" data-assistant-question="cameras" data-i18n="assistantSuggestionCameras"></button><button type="button" data-assistant-question="beginner" data-i18n="assistantSuggestionBeginner"></button><button type="button" data-assistant-question="activities" data-i18n="assistantSuggestionActivities"></button></div>
          <form class="assistant-form" id="assistantForm"><label class="sr-only" for="assistantInput" data-i18n="assistantInputLabel"></label><input id="assistantInput" name="message" maxlength="1200" autocomplete="off" data-i18n-placeholder="assistantPlaceholder" required/><button type="submit" aria-label="Send question"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m4 4 16 8-16 8 3-8Z"/><path d="M7 12h13"/></svg></button></form>
          <p class="assistant-disclaimer" data-i18n="assistantDisclaimer"></p>
        </section>`);
    }
    const panel=document.getElementById('siteAssistant');
    const launcher=document.getElementById('assistantLauncher');
    const close=document.getElementById('assistantClose');
    const form=document.getElementById('assistantForm');
    const input=document.getElementById('assistantInput');
    const messages=document.getElementById('assistantMessages');
    const greeting=document.getElementById('assistantGreeting');
    if(!panel || !launcher || !form || !input || !messages) return;

    const dict=()=>translations[languageState.current] || translations.es;
    const addMessage=(text,kind)=>{
      const message=document.createElement('p');
      message.className=`assistant-message assistant-message-${kind}`;
      message.textContent=text;
      messages.append(message);
      messages.scrollTop=messages.scrollHeight;
      return message;
    };
    const fallbackAnswer=(question)=>{
      const text=question.toLocaleLowerCase();
      const current=dict();
      if(/camera|cámara|camara|live|transmi/.test(text)) return current.assistantFallbackCameras;
      if(/weather|clima|oleaje|ola|wave|wind|viento|condici/.test(text)) return current.assistantFallbackConditions;
      if(/surf|princip|beginner|lesson|clase|instructor/.test(text)) return current.assistantFallbackSurf;
      if(/do |visit|activity|activities|hacer|visitar|playa|beach|waterfall|cascada|snorkel|hike|sender/.test(text)) return current.assistantFallbackActivities;
      if(/contact|whatsapp|instagram|contacto|escrib/.test(text)) return current.assistantFallbackContact;
      return current.assistantFallbackGeneral;
    };
    const open=()=>{
      panel.hidden=false;
      launcher.setAttribute('aria-expanded','true');
      greeting?.classList.add('is-dismissed');
      input.focus();
    };
    const hide=()=>{
      panel.hidden=true;
      launcher.setAttribute('aria-expanded','false');
      launcher.focus();
    };
    const ask=async(question)=>{
      const cleanQuestion=question.trim().slice(0,1200);
      if(!cleanQuestion) return;
      addMessage(cleanQuestion,'user');
      const pending=addMessage(dict().assistantTyping,'bot assistant-pending');
      input.disabled=true;
      form.querySelector('button[type="submit"]').disabled=true;
      try{
        const context={
          weather:document.getElementById('weatherState')?.textContent.trim() || '',
          temperature:document.getElementById('temp')?.textContent.trim() || '',
          wind:document.getElementById('wind')?.textContent.trim() || '',
          swell:document.getElementById('waveHeight')?.textContent.trim() || '',
          localTime:document.getElementById('localTime')?.textContent.trim() || '',
          cameras:document.body.classList.contains('night')?'night standby':'daytime schedule'
        };
        const response=await fetch('/api/assistant',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:cleanQuestion,language:languageState.current,context})});
        const data=response.ok?await response.json():null;
        pending.textContent=data?.answer || fallbackAnswer(cleanQuestion);
      }catch(error){
        pending.textContent=fallbackAnswer(cleanQuestion);
      }finally{
        pending.classList.remove('assistant-pending');
        input.disabled=false;
        form.querySelector('button[type="submit"]').disabled=false;
        input.focus();
        messages.scrollTop=messages.scrollHeight;
      }
    };

    launcher.addEventListener('click',()=>panel.hidden?open():hide());
    close?.addEventListener('click',hide);
    greeting?.querySelector('button')?.addEventListener('click',()=>greeting.classList.add('is-dismissed'));
    form.addEventListener('submit',event=>{
      event.preventDefault();
      const question=input.value;
      input.value='';
      ask(question);
    });
    panel.querySelectorAll('[data-assistant-question]').forEach(button=>button.addEventListener('click',()=>{
      const current=dict();
      const question=button.dataset.assistantQuestion==='cameras'?current.assistantSuggestionCameras:button.dataset.assistantQuestion==='beginner'?current.assistantSuggestionBeginner:current.assistantSuggestionActivities;
      ask(question);
    }));
    document.addEventListener('keydown',event=>{if(event.key==='Escape' && !panel.hidden) hide();});
  }

  bindSiteAssistant();
  applyTranslations();
  bindMobileMenu();
  bindGuideImageModal();
  bindHeroVideoSwap();
  bindHeroLogoEntrance();
  bindAlliesTickerInteraction();
  bindWeatherCardDrag();
  bindScrollReveals();
  bindSpotModal();
  applyCameraState(); loadWeather(); bindCameraModal(); bindAdModal(); setInterval(()=>{ applyCameraState(); const localTime=document.getElementById('localTime'); if(localTime) localTime.textContent=formatTimeCR(); }, 30000);
