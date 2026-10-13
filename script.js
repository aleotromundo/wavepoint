  const CR_TZ='America/Costa_Rica';
  const reducedMotionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const CAM_START={hour:4,minute:45}, CAM_END={hour:18,minute:30};
  const MOBILE_HOME_INITIAL_SCROLL_PX=12;
  // Se completa con la URL /exec del Apps Script del propietario de la planilla.
  const NEWSLETTER_ENDPOINT='https://script.google.com/macros/s/AKfycbzn9SWc7NU9doPPGHFOuBzZqoPKvg4VCm1XsCMdHFwyU3djN5HvwQZahrIZFLSIQZay/exec';
  const NEWSLETTER_SUBSCRIPTION_KEY='wavepoint-newsletter-subscribed';
  const mobileHome=document.getElementById('inicio');
  const isMobileHomeViewport=()=>window.matchMedia('(max-width: 640px)').matches;
  const scrollToMobileHomeStart=()=>{
    if(!mobileHome || !isMobileHomeViewport()) return;
    requestAnimationFrame(()=>{
      if(!window.location.hash || window.location.hash==='#inicio') window.scrollTo(0,MOBILE_HOME_INITIAL_SCROLL_PX);
    });
  };
  if(mobileHome){
    if((!window.location.hash || window.location.hash==='#inicio') && window.scrollY===0) scrollToMobileHomeStart();
    document.querySelectorAll('a[href="#inicio"]').forEach(link=>link.addEventListener('click',scrollToMobileHomeStart));
  }
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
      navCameras: 'Cámaras en vivo',
      navColaboradores: 'Colaboradores ▾',
      navColaboradoresMobile: 'Colaboradores',
      heroTitle: 'A través de quienes lo llaman hogar',
      heroText: 'Conectamos visitantes con experiencias y alojamientos en Tamarindo, Costa Rica.',
      requestFlowTitle: 'Cómo funciona tu solicitud',
      requestFlowSubtitle: 'WavePoint conecta a visitantes con experiencias y alojamientos en Tamarindo. Así podés preparar una consulta.',
      requestFlowStepOneTitle: 'Elegí cómo armar tu viaje',
      requestFlowStepOneText: 'Explorá las experiencias o combiná opciones desde el Armador.',
      requestFlowStepOneLink: 'Abrir el Armador →',
      requestFlowStepTwoTitle: 'Completá los datos',
      requestFlowStepTwoText: 'Indicá la información que pide cada servicio para preparar tu consulta.',
      requestFlowStepTwoLink: 'Ver experiencias →',
      requestFlowStepThreeTitle: 'Revisá y enviá por WhatsApp',
      requestFlowStepThreeText: 'El mensaje se prepara para WhatsApp. Tocá Enviar para que lo recibamos; coordinaremos la consulta con el proveedor. El envío no confirma una reserva.',
      requestFlowStepThreeLink: 'Ver preguntas frecuentes →',
      faqTitle: 'Preguntas frecuentes',
      faqSubtitle: 'Información clara sobre las solicitudes, los precios y las reservas.',
      faqBookingQuestion: '¿Enviar una consulta confirma una reserva?',
      faqBookingAnswer: 'No. La consulta no confirma una reserva ni realiza un pago; la disponibilidad debe confirmarse con el proveedor.',
      faqWhatsAppQuestion: '¿La consulta se envía automáticamente?',
      faqWhatsAppAnswer: 'No. WhatsApp abre el mensaje preparado y tenés que tocar Enviar para que lo recibamos.',
      faqPricingQuestion: '¿El precio publicado es final?',
      faqPricingAnswer: 'Las tarifas visibles son de referencia. El precio final y la disponibilidad se confirman con el proveedor.',
      preloaderLoading: 'Cargando la experiencia de surf…',
      preloaderReady: 'Listo para surfear',
      heroTripBuilderButton: 'Armá tu viaje ▸',
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
      servicesSectionTitle: 'Experiencias de surf y más en Tamarindo',
      servicesSectionSubtitle: 'Encontrá clases de surf, coaching, surf trips a Roca Bruja y fotografía, además de opciones locales para completar tu viaje por Guanacaste. Consultá los detalles y la disponibilidad.',
      serviceSurfLessons: 'Clases de surf',
      serviceSurfLessonsText: 'Clases para todos los niveles con instructores locales.',
      serviceSurfPhotosText: 'Captura tus mejores olas desde la playa.',
      serviceWaterPhotoText: 'Sesiones profesionales dentro y fuera del agua.',
      serviceSurfskateText: 'Encontrá tu flow en tierra.',
      serviceMoreInfo: 'Más información',
      serviceCardStayTitle: 'Estadías y hoteles',
      serviceCardStayText: 'Hoteles y alojamientos frente al mar para cada tipo de viaje.',
      serviceCardStayAlt: 'Alojamiento tropical de madera con pasarela exterior',
      serviceCardSurfLessonsImageAlt: 'Alumna practicando surf en Tamarindo',
      serviceCardCoachingImageAlt: 'Tres surfistas saltando con sus tablas en la playa',
      serviceCardCoachingTitle: 'Surf coaching',
      serviceCardCoachingText: 'Llevá tu surf al siguiente nivel con entrenamiento personalizado.',
      serviceCardWitchRockTitle: 'Roca Bruja',
      serviceCardWitchRockImageAlt: 'Formación rocosa de Roca Bruja frente a la costa',
      serviceCardWitchRockText: 'Un día de surf en barco con guías locales que conocen la zona.',
      serviceListWitchRockEyebrow: '04 / VIAJE DE SURF · AVENTURA',
      serviceListCta: 'Ver servicio y armar solicitud ↗',
      serviceCardSnorkelTitle: 'Snorkel y catamarán',
      serviceCardSnorkelAlt: 'Persona haciendo snorkel junto a una tortuga marina sobre un arrecife',
      serviceCardSnorkelText: 'Explorá bajo el agua, navegá la costa o combiná ambas.',
      serviceCardYogaTitle: 'Yoga',
      serviceCardYogaAlt: 'Mujer practicando una postura de yoga frente al mar',
      serviceCardYogaText: 'Una práctica para acompañar tu viaje y bajar el ritmo.',
      serviceCardAtvTitle: 'Tours en cuatriciclo — ATV',
      serviceCardAtvAlt: 'Grupo de cuatriciclos recorriendo un sendero de bosque tropical',
      serviceCardAtvText: 'Recorré los caminos de Guanacaste con operadores locales.',

      serviceCardRetreatsTitle: 'Retiros',
      serviceCardRetreatsText: 'Surf, descanso, movimiento y comunidad en un mismo viaje.',
      serviceCardRetreatsAlt: 'Vista aérea de una playa y la costa de Tamarindo',
      serviceRetreatDivider: 'RETIROS · UNA EXPERIENCIA PARA VIVIR MÁS A FONDO',
      serviceRetreatTag: 'SURF · DESCANSO · COMUNIDAD',
      serviceRetreatsButton: 'Descubrí los retiros ↗',
      serviceCardSurfskateTitle: 'Clases de surfskate',
      serviceCardSurfskateText: 'Encontrá tu flow en tierra.',
      serviceCardSurfskateAlt: 'Persona practicando surfskate sobre una tabla larga',
      serviceCardSurfPhotosTitle: 'Fotos de surf',
      serviceCardSurfPhotosText: 'Tu tiempo en el agua, capturado.',
      serviceCardSurfPhotosAlt: 'Fotógrafo de surf en el agua con una cámara frente a una ola',
      serviceCardPackTitle: 'Tu viaje, a tu manera',
      serviceCardPackText: '¿Viajás con amigos, planeás un viaje de surf o buscás dónde alojarte y sumar algunas actividades? Contanos tus fechas, cuántos son y qué te interesa. Armaremos una propuesta según la disponibilidad.',
      servicePackDivider: 'ARMÁ TU VIAJE A TU MANERA',
      servicePackTag: 'ARMÁ TU VIAJE A TU MANERA',
      servicePackBuildButton: 'Armar tu viaje por Tamarindo ↗',
      serviceCardPackImageAlt: 'Atardecer en la costa bajo ramas de un árbol tropical',
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
      guideCamerasButton: 'Ver cámaras en vivo',
      guideButtonImageAlt: 'Vista aérea de un resort junto a la playa',
      guideCamerasButtonImageAlt: 'Surfista en una ola en Tamarindo',
      aboutHomeIndex: '01 / NUESTRA HISTORIA',
      aboutHomeTitle: 'Una herramienta hecha por surfistas.',
      aboutHomeIntro: 'WavePoint conecta a locales y visitantes con experiencias de surf y proveedores locales en Tamarindo. También ofrece información del mar para planear el día.',
      aboutHomeReadMore: 'Conocé más sobre nosotros ↓',
      aboutHomeScroll: 'Deslizá para conocer el proyecto',
      aboutHomeQuote: 'La ola correcta empieza mucho antes de entrar al agua.',
      aboutHomeOpeningLabel: 'INFORMACIÓN DEL PROYECTO',
      aboutWhoTitle: '¿Quiénes somos?',
      aboutHomeWhoText: 'Somos dos jóvenes apasionados por el surf que encontramos un hogar en Tamarindo. WavePoint nació como una plataforma gratuita para consultar las condiciones del mar antes de acercarse a un spot. Con el tiempo, sumamos experiencias y alojamientos para visitantes. Quienes fundamos WavePoint recibimos y coordinamos las consultas que llegan por WhatsApp con los proveedores.',
      aboutHomeViewLabel: 'UNA MIRADA MÁS CLARA',
      aboutHomeViewTitle: 'Leer el mar. Elegir mejor.',
      aboutHomeViewText: 'Nuestro proyecto cubre los spots claves con cámaras de última generación. Cada cámara está estratégicamente ubicada para ofrecer una vista en tiempo real de los diferentes puntos de surf, asegurándonos de que, sin importar a qué playa te dirijas, siempre puedas planear tu sesión con total confianza.',
      aboutHomeCameraLink: 'Explorar las cámaras',
      aboutHomeStepOne: 'Mirar las condiciones antes de salir.',
      aboutHomeStepTwo: 'Elegir el spot que tiene sentido para tu sesión.',
      aboutHomeStepThree: 'Disfrutar Tamarindo con más confianza.',
      aboutHomeGalleryLabel: 'DESDE TAMARINDO',
      aboutHomeGalleryTitle: 'Hecho para volver al agua.',
      aboutHomeGalleryText: 'Una plataforma gratuita, local y en movimiento, como el mar que la inspira.',
      aboutHomeAltOne: 'Equipo WavePoint en una sesión de surf',
      aboutHomeAltTwo: 'Surf en Tamarindo',
      aboutHomeAltThree: 'Sesión de surf en Tamarindo',
      aboutHomeCaptionOne: 'El proyecto nace de quienes viven las olas.',
      aboutHomeCaptionTwo: 'Condiciones que cambian todo el tiempo.',
      aboutHomeCaptionThree: 'Una mirada local al agua.',
      aboutHomeWhyLabel: 'NUESTRO MOTIVO',
      aboutHomeWhyTitle: 'La herramienta definitiva para disfrutar cada ola.',
      aboutHomeWhyText: 'Tamarindo es famoso por su diversidad de olas, perfectas para todos los niveles. Nuestro objetivo es que WavePoint sea la herramienta definitiva para disfrutar cada una de ellas. Este proyecto es nuestra forma de agradecerle a este lugar por todas las increíbles olas que nos ha regalado y facilitar la manera de encontrar la ola correcta.',
      aboutHomeExplore: 'Explorar WavePoint ↗',
      afterSurfTitle: 'Después del surf',
      afterSurfSubtitle: 'Opciones útiles para comer, guardar recuerdos de la sesión y seguir explorando Tamarindo.',
      afterFood: 'Comida',
      afterFoodText: 'Burgers, empanadas y cerveza fría después de surfear.',
      afterDemo: 'Ver pre-play demo →',
      afterSession: 'Recuerdo de tu sesión',
      afterSurfPhotoAlt: 'Surfista bajo el agua sosteniendo su tabla',
      afterServiceLink: 'Ver servicio →',
      afterGuideTag: 'Guía local',
      afterGuideTitle: 'Explora Tamarindo',
      afterGuideText: 'Playas, colaboradores, servicios y experiencias cercanas.',
      afterGuideLink: 'Ver guía →',
      newsletterTitle: 'Entérate primero',
      newsletterText: 'Recibe alertas de olas, novedades y promociones seleccionadas.',
      newsletterEmailPlaceholder: 'Tu correo electrónico',
      newsletterButton: 'Suscribirme',
      newsletterSubscribedBadge: 'SUSCRIPTO',
      contactFormTitle: 'Contactar a WavePoint',
      contactFormIntro: 'Dejanos tu nombre y mensaje. WhatsApp se abrirá para que revises y envíes la consulta.',
      contactNameLabel: 'Nombre',
      contactNamePlaceholder: 'Tu nombre',
      contactMessageLabel: 'Mensaje',
      contactMessagePlaceholder: 'Contanos tu consulta...',
      contactContinue: 'Continuar en WhatsApp',
      contactFormNote: 'El mensaje quedará listo en WhatsApp; se enviará cuando lo confirmes allí.',
      contactFormValidation: 'Escribí tu nombre y mensaje para continuar.',
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
      footerTerms: 'Términos y servicios',
      termsDialogTitle: 'Términos y servicios',
      termsDialogIntro: 'Antes de enviar una consulta, tené en cuenta:',
      termsDialogPoint1: 'WavePoint conecta a las personas viajeras con proveedores locales; cada experiencia es brindada por el proveedor correspondiente.',
      termsDialogPoint2: 'Enviar una consulta por WhatsApp no confirma una reserva.',
      termsDialogPoint3: 'La disponibilidad y el precio final deben confirmarse con el proveedor antes de cualquier pago.',
      termsDialogClose: 'Cerrar',
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
      servicePageSurfskateText: 'Explorá tus giros, ganá confianza sobre la tabla y empezá a sentir movimientos que después podés llevar al agua. Ya sea que pruebes el surfskate por primera vez o quieras sumarlo a tu práctica de surf, WavePoint te conecta con instructores locales para encontrar una sesión acorde a tu nivel.',
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
      guideAvellanasAlt: 'Playa Avellanas',
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
      navCameras: 'Live cameras',
      navColaboradores: 'Partners ▾',
      navColaboradoresMobile: 'Partners',
      heroTitle: 'Through the people who call it home',
      heroText: 'We connect visitors with experiences and places to stay in Tamarindo, Costa Rica.',
      requestFlowTitle: 'How your inquiry works',
      requestFlowSubtitle: 'WavePoint connects visitors with experiences and places to stay in Tamarindo. Here is how to prepare an inquiry.',
      requestFlowStepOneTitle: 'Choose how to plan your trip',
      requestFlowStepOneText: 'Explore the experiences or combine options in the Trip Builder.',
      requestFlowStepOneLink: 'Open the Trip Builder →',
      requestFlowStepTwoTitle: 'Fill in the details',
      requestFlowStepTwoText: 'Provide the information requested by each service to prepare your inquiry.',
      requestFlowStepTwoLink: 'Explore experiences →',
      requestFlowStepThreeTitle: 'Review and send on WhatsApp',
      requestFlowStepThreeText: 'Your message is prepared in WhatsApp. Tap Send so we receive it; we will coordinate the inquiry with the provider. Sending it does not confirm a booking.',
      requestFlowStepThreeLink: 'Read frequently asked questions →',
      faqTitle: 'Frequently asked questions',
      faqSubtitle: 'Clear information about inquiries, prices, and bookings.',
      faqBookingQuestion: 'Does sending an inquiry confirm a booking?',
      faqBookingAnswer: 'No. An inquiry does not confirm a booking or process a payment; availability must be confirmed with the provider.',
      faqWhatsAppQuestion: 'Is the inquiry sent automatically?',
      faqWhatsAppAnswer: 'No. WhatsApp opens the prepared message, and you need to tap Send for us to receive it.',
      faqPricingQuestion: 'Is the listed price final?',
      faqPricingAnswer: 'Listed rates are for reference. The final price and availability are confirmed with the provider.',
      preloaderLoading: 'Loading the surf experience…',
      preloaderReady: 'Ready to surf',
      heroTripBuilderButton: 'Build your trip ▸',
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
      servicesSectionTitle: 'Surf experiences and more in Tamarindo',
      servicesSectionSubtitle: 'Find surf lessons, coaching, Witch’s Rock surf trips and photography, plus local options to complete your Guanacaste trip. Explore the details and ask us to check availability.',
      serviceSurfLessons: 'Surf lessons',
      serviceSurfLessonsText: 'Lessons for all levels with local instructors.',
      serviceSurfPhotosText: 'Capture your best waves from the beach.',
      serviceWaterPhotoText: 'Professional sessions in and out of the water.',
      serviceSurfskateText: 'Find your flow on land.',
      serviceMoreInfo: 'More info',
      serviceCardStayTitle: 'Stays and Hotels',
      serviceCardStayText: 'Hotels and beachfront stays for every kind of trip.',
      serviceCardStayAlt: 'Tropical wooden accommodation with an outdoor walkway',
      serviceCardSurfLessonsImageAlt: 'Student practicing surfing in Tamarindo',
      serviceCardCoachingImageAlt: 'Three surfers jumping with their boards on the beach',
      serviceCardCoachingTitle: 'Surf coaching',
      serviceCardCoachingText: 'Take your surfing to the next level with personalized coaching.',
      serviceCardWitchRockTitle: 'Witch’s Rock Surf Trip',
      serviceCardWitchRockImageAlt: 'Rock formation at Witch’s Rock along the coast',
      serviceCardWitchRockText: 'A day of surf by boat with local guides who know the area.',
      serviceListWitchRockEyebrow: '04 / SURF TRIP · ADVENTURE',
      serviceListCta: 'View service and build request ↗',
      serviceCardSnorkelTitle: 'Snorkeling and catamaran',
      serviceCardSnorkelAlt: 'Snorkeler swimming near a sea turtle above a coral reef',
      serviceCardSnorkelText: 'Explore underwater, sail along the coast, or combine both.',
      serviceCardYogaTitle: 'Yoga',
      serviceCardYogaAlt: 'Woman practicing a yoga pose beside the sea',
      serviceCardYogaText: 'A little space to breathe.',
      serviceCardAtvTitle: 'ATV Tours in Tamarindo',
      serviceCardAtvAlt: 'Group of ATVs riding along a tropical forest trail',
      serviceCardAtvText: 'Explore Guanacaste’s trails with local operators.',

      serviceCardRetreatsTitle: 'Retreats',
      serviceCardRetreatsText: 'Surf, rest, movement, and community in one trip.',
      serviceCardRetreatsAlt: 'Aerial view of a beach and coastline in Tamarindo',
      serviceRetreatDivider: 'RETREATS · AN EXPERIENCE TO GO DEEPER',
      serviceRetreatTag: 'SURF · REST · COMMUNITY',
      serviceRetreatsButton: 'Explore retreats ↗',
      serviceCardSurfskateTitle: 'Surfskate Lessons',
      serviceCardSurfskateText: 'Find your flow on land.',
      serviceCardSurfskateAlt: 'Person practicing surfskate on a longboard',
      serviceCardSurfPhotosTitle: 'Surf Photography',
      serviceCardSurfPhotosText: 'Your time in the water, captured.',
      serviceCardSurfPhotosAlt: 'Surf photographer in the water with a camera beside a breaking wave',
      serviceCardPackTitle: 'Your trip, your way.',
      serviceCardPackText: 'Travelling with friends, planning a surf trip or looking for a place to stay with a few activities? Tell us your dates, group size and interests. We’ll put together a proposal based on what’s available.',
      servicePackDivider: 'BUILD YOUR TRIP YOUR WAY',
      servicePackTag: 'MAKE YOUR TRIP YOUR OWN',
      servicePackBuildButton: 'Build your Tamarindo trip ↗',
      serviceCardPackImageAlt: 'Sunset over the coast framed by a tropical tree',
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
      guideCamerasButton: 'View live cameras',
      guideButtonImageAlt: 'Aerial view of a beachside resort',
      guideCamerasButtonImageAlt: 'Surfer riding a wave in Tamarindo',
      aboutHomeIndex: '01 / OUR STORY',
      aboutHomeTitle: 'A tool made by surfers.',
      aboutHomeIntro: 'WavePoint connects visitors and locals with surf experiences and local providers in Tamarindo. It also shares ocean conditions to help plan the day.',
      aboutHomeReadMore: 'Learn more about us ↓',
      aboutHomeScroll: 'Scroll to explore the project',
      aboutHomeQuote: 'The right wave starts long before you get in the water.',
      aboutHomeOpeningLabel: 'ABOUT THE PROJECT',
      aboutWhoTitle: 'Who are we?',
      aboutHomeWhoText: 'We are two young surfers who found a home in Tamarindo. WavePoint began as a free platform for checking ocean conditions before heading to a surf spot. Over time, we added experiences and places to stay for visitors. The two founders receive and coordinate WhatsApp inquiries with providers.',
      aboutHomeViewLabel: 'A CLEARER VIEW',
      aboutHomeViewTitle: 'Read the ocean. Choose well.',
      aboutHomeViewText: 'Our project covers key spots with the latest-generation cameras. Each camera is strategically positioned to provide a real-time view of different surf spots, helping you plan your session with confidence wherever you are heading.',
      aboutHomeCameraLink: 'Explore the cameras',
      aboutHomeStepOne: 'Check conditions before heading out.',
      aboutHomeStepTwo: 'Choose the spot that makes sense for your session.',
      aboutHomeStepThree: 'Enjoy Tamarindo with more confidence.',
      aboutHomeGalleryLabel: 'FROM TAMARINDO',
      aboutHomeGalleryTitle: 'Made to get back in the water.',
      aboutHomeGalleryText: 'A free, local, and ever-moving platform, like the ocean that inspires it.',
      aboutHomeAltOne: 'WavePoint team during a surf session',
      aboutHomeAltTwo: 'Surfing in Tamarindo',
      aboutHomeAltThree: 'Surf session in Tamarindo',
      aboutHomeCaptionOne: 'The project comes from people who live the waves.',
      aboutHomeCaptionTwo: 'Conditions that are always changing.',
      aboutHomeCaptionThree: 'A local perspective on the water.',
      aboutHomeWhyLabel: 'OUR WHY',
      aboutHomeWhyTitle: 'The ultimate tool to enjoy every wave.',
      aboutHomeWhyText: 'Tamarindo is famous for its variety of waves, suitable for all levels. Our goal is for WavePoint to become the ultimate tool for enjoying every one of them. This project is our way of thanking this place for all the incredible waves it has given us and making it easier to find the right one.',
      aboutHomeExplore: 'Explore WavePoint ↗',
      afterSurfTitle: 'After the surf',
      afterSurfSubtitle: 'Useful options for eating, saving memories from the session, and continuing to explore Tamarindo.',
      afterFood: 'Food',
      afterFoodText: 'Burgers, empanadas, and cold beer after surfing.',
      afterDemo: 'Watch pre-play demo →',
      afterSession: 'Your session memory',
      afterSurfPhotoAlt: 'Surfer underwater holding a surfboard',
      afterServiceLink: 'View service →',
      afterGuideTag: 'Local guide',
      afterGuideTitle: 'Explore Tamarindo',
      afterGuideText: 'Beaches, partners, services, and nearby experiences.',
      afterGuideLink: 'View guide →',
      newsletterTitle: 'Know first',
      newsletterText: 'Get wave alerts, updates, and selected promotions.',
      newsletterEmailPlaceholder: 'Your email',
      newsletterButton: 'Subscribe',
      newsletterSubscribedBadge: 'SUBSCRIBED',
      contactFormTitle: 'Contact WavePoint',
      contactFormIntro: 'Share your name and message. WhatsApp will open so you can review and send your inquiry.',
      contactNameLabel: 'Name',
      contactNamePlaceholder: 'Your name',
      contactMessageLabel: 'Message',
      contactMessagePlaceholder: 'Tell us what you would like to ask...',
      contactContinue: 'Continue in WhatsApp',
      contactFormNote: 'Your message will be ready in WhatsApp; it will be sent when you confirm it there.',
      contactFormValidation: 'Enter your name and message to continue.',
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
      footerTerms: 'Terms of service',
      termsDialogTitle: 'Terms of service',
      termsDialogIntro: 'Before sending an inquiry, please keep in mind:',
      termsDialogPoint1: 'WavePoint connects travelers with local providers; each experience is delivered by the corresponding provider.',
      termsDialogPoint2: 'Sending an inquiry through WhatsApp does not confirm a booking.',
      termsDialogPoint3: 'Availability and the final price must be confirmed with the provider before any payment.',
      termsDialogClose: 'Close',
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
      servicePageSurfskateText: 'Explore your turns, build confidence on the board and get a feel for movements you can bring into the water. Whether you’re trying surfskate for the first time or adding to your surf practice, WavePoint connects you with local instructors for a session that suits your level.',
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
      guideAvellanasAlt: 'Playa Avellanas',
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

  const languageState = { current: localStorage.getItem('wavepoint-lang') === 'es' ? 'es' : 'en' };

  function applyLocalizedMetadata(lang) {
    const metadata = lang === 'es' ? {
      title: 'Experiencias de surf en Tamarindo, Costa Rica | WavePoint',
      description: 'Explorá experiencias de surf en Tamarindo, Costa Rica: clases, coaching, viajes a Roca Bruja y fotografía. Planeá tu viaje por Guanacaste con WavePoint.',
      locale: 'es_CR'
    } : {
      title: 'Surf Experiences in Tamarindo, Costa Rica | WavePoint',
      description: 'Explore surf experiences in Tamarindo, Costa Rica: surf lessons, coaching, Witch’s Rock surf trips and photography. Plan your Guanacaste trip with WavePoint.',
      locale: 'en_US'
    };
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', metadata.locale);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
  }

  function applyTranslations(lang = languageState.current) {
    const dict = translations[lang] || translations.en;
    languageState.current = lang;
    document.documentElement.lang = lang;
    applyLocalizedMetadata(lang);
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
      langToggle.setAttribute('aria-label', isSpanish ? 'Cambiar a inglés' : 'Switch to Spanish');
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

  // The switch itself lives in lang-switch.js, which stores the choice and announces it here.
  window.addEventListener('wavepoint:languagechange', event => applyTranslations(event.detail.lang));

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

  function bindWavepointPreloader(){
    const root=document.getElementById('wavepointPreloader');
    if(!root) return;
    const progress=root.querySelector('#wavepointPreloaderProgress');
    const track=root.querySelector('[role="progressbar"]');
    const label=root.querySelector('.wavepoint-preloader-label');
    const mobile=window.matchMedia('(hover: none) and (pointer: coarse)').matches||window.matchMedia('(max-width: 640px)').matches;
    const tasks={hero:false,weather:false,logo:false,backgrounds:false};
    const weights={hero:45,weather:25,logo:15,backgrounds:15};
    let closed=false;
    const update=()=>{
      const value=Math.round(Object.entries(tasks).reduce((sum,[key,ready])=>sum+(ready?weights[key]:0),0));
      if(progress) progress.style.width=`${value}%`;
      if(track) track.setAttribute('aria-valuenow',String(value));
      if(value<100 || closed) return;
      closed=true;
      if(label) label.textContent=translations[languageState.current]?.preloaderReady||'Ready to surf';
      window.setTimeout(()=>{
        root.classList.add('is-ready');
        document.documentElement.classList.remove('is-preloading');
        document.body.style.overflow='';
      },180);
    };
    const complete=key=>{ if(tasks[key]) return; tasks[key]=true; update(); };
    document.documentElement.classList.add('is-preloading');
    document.body.style.overflow='hidden';

    const logo=root.querySelector('.wavepoint-preloader-logo');
    if(logo?.complete) complete('logo');
    else logo?.addEventListener('load',()=>complete('logo'),{once:true});
    logo?.addEventListener('error',()=>complete('logo'),{once:true});
    if(!logo) complete('logo');

    const backgroundSources=['assets/img/site/backgrounds/servicios.webp','assets/img/site/backgrounds/atardecer.webp'];
    if(mobile){
      complete('backgrounds');
    } else {
      let remainingBackgrounds=backgroundSources.length;
      backgroundSources.forEach(src=>{
        const image=new Image();
        const done=()=>{ remainingBackgrounds-=1; if(remainingBackgrounds<=0) complete('backgrounds'); };
        image.onload=done; image.onerror=done; image.src=src;
      });
      if(!remainingBackgrounds) complete('backgrounds');
    }

    const videos=[...document.querySelectorAll('.hero-video')];
    const heroVideo=videos[0];
    if(heroVideo){
      const source=heroVideo.querySelector('source[data-src]');
      if(source&&!mobile){ source.src=source.dataset.src; delete source.dataset.src; delete source.dataset.srcMobile; }
      heroVideo.preload=mobile?'none':'auto'; heroVideo.muted=true; heroVideo.playsInline=true;
      const markVideoPlaying=()=>{ document.querySelector('.hero-video-stack')?.classList.add('is-video-ready'); };
      heroVideo.addEventListener('playing',markVideoPlaying,{once:true});
      if(mobile) complete('hero');
      else heroVideo.addEventListener('canplay',()=>complete('hero'),{once:true});
      heroVideo.addEventListener('error',()=>{ heroVideo.classList.add('video-failed'); heroVideo.classList.remove('is-active'); complete('hero'); },{once:true});
      if(!mobile){
        if(heroVideo.readyState>=3) complete('hero');
        heroVideo.load();
      }
    } else complete('hero');

    const weather=document.getElementById('wx3d');
    if(weather){
      if(mobile) complete('weather');
      else {
        const weatherReady=()=>{ if(weather.dataset.weatherStatus!=='loading') complete('weather'); };
        const observer=new MutationObserver(weatherReady);
        observer.observe(weather,{attributes:true,attributeFilter:['data-weather-status']});
        weatherReady();
        window.setTimeout(()=>{ observer.disconnect(); complete('weather'); },8000);
      }
    } else complete('weather');
    window.setTimeout(()=>Object.keys(tasks).forEach(complete),8000);
    update();
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
    const videos=[...document.querySelectorAll('.hero-video')];
    if (!videos.length) return;
    const videoStack=document.querySelector('.hero-video-stack');
    videos.forEach(video=>{
      video.addEventListener('playing',()=>videoStack?.classList.add('is-video-ready'),{once:true});
      video.addEventListener('error',()=>{
        video.classList.add('video-failed');
        video.classList.remove('is-active');
      },{once:true});
    });
    const touchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (touchDevice || window.matchMedia('(max-width: 640px)').matches) {
      // En celulares dejamos solo el video móvil configurado (Giro 1), en loop, sin alternar archivos.
      const mobileVideo=videos[0];
      const reducedMotionOrData=window.matchMedia('(prefers-reduced-motion: reduce)').matches||window.matchMedia('(prefers-reduced-data: reduce)').matches;
      videos.forEach(video=>{
        const isMobileVideo=video===mobileVideo;
        video.muted=true;
        video.playsInline=true;
        video.loop=true;
        video.preload='none';
        video.classList.toggle('is-active',isMobileVideo);
        if(!isMobileVideo) video.pause();
      });
      const mobileSources=[...mobileVideo.querySelectorAll('source[data-src]')];
      if(reducedMotionOrData){
        mobileVideo.classList.remove('is-active');
        return;
      }
      const startMobileVideo=()=>{
        mobileSources.forEach(source=>{
          source.src=source.dataset.srcMobile||source.dataset.src;
          delete source.dataset.src;
          delete source.dataset.srcMobile;
        });
        mobileVideo.preload='auto';
        if(mobileSources.length) mobileVideo.load();
        mobileVideo.play().catch(error=>console.error('No se pudo reproducir el video móvil de portada.',error));
      };
      const scheduleMobileVideo=()=>{
        if('requestIdleCallback' in window) window.requestIdleCallback(startMobileVideo,{timeout:1200});
        else window.setTimeout(startMobileVideo,600);
      };
      window.requestAnimationFrame(()=>window.requestAnimationFrame(scheduleMobileVideo));
      return;
    }
    let activeIndex = 0;
    let swapping = false;
    const loadVideo = video => {
      const sources = [...video.querySelectorAll('source[data-src]')];
      sources.forEach(source => {
        source.src = source.dataset.src;
        delete source.dataset.src;
      });
      if (sources.length) video.load();
    };

    videos.forEach((video, index) => {
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.preload = index === 0 ? 'auto' : 'none';
      video.classList.toggle('is-active', index === 0);
      if (index !== 0) video.pause();
    });

    loadVideo(videos[0]);
    videos[0].play().catch(error => console.error('No se pudo reproducir el video principal de portada.', error));

    const swap = async () => {
      if (swapping) return;
      swapping = true;
      const nextIndex = (activeIndex + 1) % videos.length;
      const nextVideo = videos[nextIndex];
      try {
        loadVideo(nextVideo);
        await nextVideo.play();
        videos[activeIndex].classList.remove('is-active');
        videos[activeIndex].pause();
        nextVideo.classList.add('is-active');
        activeIndex = nextIndex;
      } catch (error) {
        console.error('No se pudo reproducir el siguiente video de portada.', error);
      } finally {
        swapping = false;
      }
    };

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

  function bindServiceCardReveals(){
    const cards=[...document.querySelectorAll('#servicios .service-grid-catalog > .service-card:not(.service-card-pack)')];
    const mobilePointer=window.matchMedia('(hover: none) and (pointer: coarse)');
    if(!cards.length) return;
    let scrollFrame=0;
    const updateActiveCards=()=>{
      scrollFrame=0;
      const viewportCenter=window.innerHeight/2;
      const activeZoneTop=window.innerHeight*.2;
      const activeZoneBottom=window.innerHeight*.8;
      const visibleCards=cards.map(card=>({card,rect:card.getBoundingClientRect()}))
        .filter(({rect})=>rect.bottom>activeZoneTop&&rect.top<activeZoneBottom);
      const closest=visibleCards.reduce((best,item)=>{
        const center=item.rect.top+item.rect.height/2;
        return !best||Math.abs(center-viewportCenter)<Math.abs(best.rect.top+best.rect.height/2-viewportCenter)?item:best;
      },null);

      cards.forEach(card=>{
        const item=visibleCards.find(candidate=>candidate.card===card);
        const sameRow=closest&&item&&Math.abs(item.rect.top-closest.rect.top)<32;
        card.classList.toggle('is-scroll-active',Boolean(sameRow));
      });
    };
    const scheduleActiveCards=()=>{
      if(!mobilePointer.matches){
        cards.forEach(card=>card.classList.remove('is-scroll-active'));
        return;
      }
      if(scrollFrame) return;
      scrollFrame=window.requestAnimationFrame(updateActiveCards);
    };
    const updateMode=()=>{
      cards.forEach(card=>card.classList.remove('is-scroll-active'));
      const shouldRevealOnScroll=mobilePointer.matches;
      document.documentElement.classList.toggle('service-card-scroll-enabled',shouldRevealOnScroll);
      if(shouldRevealOnScroll) updateActiveCards();
    };

    updateMode();
    mobilePointer.addEventListener('change',updateMode);
    window.addEventListener('scroll',scheduleActiveCards,{passive:true});
    window.addEventListener('resize',updateMode,{passive:true});
  }

  function bindAlliesTickerInteraction(){
    const section=document.querySelector('.allies-ticker');
    const viewport=section?.querySelector('.allies-ticker-viewport');
    const track=section?.querySelector('.allies-ticker-track');
    const firstSet=section?.querySelector('.allies-ticker-set:not([aria-hidden="true"])');
    if(!section || !viewport || !track || !firstSet) return;

    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    let loopWidth=0;
    let offset=0;
    let velocity=0;
    let pointerId=null;
    let drag=null;
    let suppressClick=false;
    let lastFrame=performance.now();

    const getAutoSpeed=()=>reducedMotion.matches?-14:-38;
    const wrap=(value)=>{
      if(!loopWidth) return value;
      while(value<=-loopWidth) value+=loopWidth;
      while(value>0) value-=loopWidth;
      return value;
    };
    const measure=()=>{
      loopWidth=firstSet.getBoundingClientRect().width;
      offset=wrap(offset);
      track.style.transform=`translate3d(${offset}px,0,0)`;
    };
    const render=()=>{
      offset=wrap(offset);
      track.style.transform=`translate3d(${offset}px,0,0)`;
    };
    const animate=(now)=>{
      const dt=Math.min((now-lastFrame)/1000,.05);
      lastFrame=now;
      if(!drag){
        const target=getAutoSpeed();
        velocity += (target-velocity)*Math.min(1,dt*4.5);
        offset += velocity*dt;
        render();
      }
      requestAnimationFrame(animate);
    };
    const finishInteraction=(event)=>{
      if(pointerId===null || (event?.pointerId!==undefined && event.pointerId!==pointerId)) return;
      const wasDragged=Boolean(drag?.moved);
      if(viewport.hasPointerCapture?.(pointerId)) viewport.releasePointerCapture(pointerId);
      pointerId=null;
      drag=null;
      section.classList.remove('is-interacting','is-dragging');
      if(wasDragged){
        suppressClick=true;
        window.setTimeout(()=>{ suppressClick=false; },450);
      }
    };

    viewport.addEventListener('pointerdown',event=>{
      if((event.pointerType==='mouse' && event.button!==0) || pointerId!==null) return;
      pointerId=event.pointerId;
      drag={startX:event.clientX,startY:event.clientY,startOffset:offset,lastX:event.clientX,lastTime:performance.now(),moved:false};
      velocity=0;
      section.classList.add('is-interacting');
      viewport.setPointerCapture?.(event.pointerId);
    });
    viewport.addEventListener('pointermove',event=>{
      if(event.pointerId!==pointerId || !drag) return;
      const deltaX=event.clientX-drag.startX;
      const deltaY=event.clientY-drag.startY;
      if(!drag.moved){
        if(Math.abs(deltaX)<6 || Math.abs(deltaX)<Math.abs(deltaY)) return;
        drag.moved=true;
        section.classList.add('is-dragging');
      }
      const now=performance.now();
      const elapsed=Math.max(8,now-drag.lastTime);
      velocity=(event.clientX-drag.lastX)/(elapsed/1000);
      drag.lastX=event.clientX;
      drag.lastTime=now;
      offset=drag.startOffset+deltaX;
      render();
      event.preventDefault();
    });
    viewport.addEventListener('pointerup',finishInteraction);
    viewport.addEventListener('pointercancel',finishInteraction);
    window.addEventListener('blur',()=>finishInteraction());
    document.addEventListener('click',event=>{
      if(!suppressClick || !event.target.closest('.allies-ticker')) return;
      event.preventDefault();
      event.stopPropagation();
      suppressClick=false;
    },true);
    reducedMotion.addEventListener?.('change',()=>{ velocity=getAutoSpeed(); });
    window.addEventListener('resize',measure,{passive:true});
    measure();
    velocity=getAutoSpeed();
    requestAnimationFrame(animate);
  }
  function bindHeroLogoEntrance(){
    const logos=[...document.querySelectorAll('.hero-logo-wrap, .services-logo-wrap')];
    if(!logos.length) return;
    const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');

    const replay=logo=>{
      logo.classList.remove('is-arriving','is-user-replay');
      void logo.offsetWidth;
      logo.classList.add(reduceMotion.matches?'is-user-replay':'is-arriving');
    };

    logos.forEach(logo=>{
      if(!reduceMotion.matches) logo.classList.add('is-arriving');
      logo.addEventListener('click', ()=>replay(logo));
      logo.addEventListener('keydown', e=>{
        if(e.key==='Enter' && logo.tagName==='A') return;
        if(e.key==='Enter' || e.key===' '){
          e.preventDefault();
          replay(logo);
        }
      });
    });
    const hero=logos.find(logo=>logo.classList.contains('hero-logo-wrap'));
    document.querySelectorAll('a[href="#inicio"]').forEach(link=>link.addEventListener('click', ()=>hero && replay(hero)));

    if(hero && 'IntersectionObserver' in window && !reduceMotion.matches){
      let firstObservation=true;
      const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting && !firstObservation) replay(hero);
          if(entry.isIntersecting) firstObservation=false;
        });
      },{threshold:.38});
      observer.observe(hero);
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
    const images = [...new Set([...document.querySelectorAll('.guide-detail-card img, .collab-gallery img, .surf-lesson-gallery img, .detail-gallery img, .retreat-editorial img, .accommodation-gallery img, .service-card img, .service-offering img, .service-pack-image, .about-page img')])].filter(image => !image.closest('a[href]'));
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
      source.classList.add('image-zoomable');
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

  function bindNewsletterForm(){
    const form=document.querySelector('.signup');
    const emailField=form?.querySelector('input[type="email"]');
    const submitButton=form?.querySelector('button');
    const status=document.getElementById('newsletterStatus');
    if(!form || !emailField || !submitButton || !status) return;

    const messages={
      es:{invalid:'Ingresá un correo electrónico válido.', pending:'La suscripción todavía no está conectada.', success:'¡Listo! Ya estás suscripto. Te vamos a avisar cuando tengamos novedades de las olas y de Tamarindo.', error:'No pudimos registrar tu correo. Probá de nuevo en un momento.'},
      en:{invalid:'Enter a valid email address.', pending:'The subscription is not connected yet.', success:'You’re all set! We’ll let you know when we have news about the waves and Tamarindo.', error:'We could not save your email. Please try again in a moment.'}
    };
    const celebrateSubscription=()=>{
      if(reducedMotionPreference.matches) return;
      const layer=document.createElement('div');
      layer.className='newsletter-confetti';
      layer.setAttribute('aria-hidden','true');
      const colors=['#f3b64b','#0fc7d7','#ff6b6b','#83e377','#a78bfa','#fff'];
      for(let index=0;index<48;index+=1){
        const piece=document.createElement('span');
        piece.className='newsletter-confetti-piece';
        piece.style.setProperty('--left',`${Math.random()*100}%`);
        piece.style.setProperty('--delay',`${Math.random()*140}ms`);
        piece.style.setProperty('--duration',`${1100+Math.random()*700}ms`);
        piece.style.setProperty('--drift',`${(Math.random()-.5)*260}px`);
        piece.style.setProperty('--rotation',`${360+Math.random()*720}deg`);
        piece.style.setProperty('--color',colors[index%colors.length]);
        piece.style.setProperty('--size',`${6+Math.random()*5}px`);
        layer.appendChild(piece);
      }
      document.body.appendChild(layer);
      window.setTimeout(()=>layer.remove(),2200);
    };
    const prepareConfettiSound=()=>{
      const AudioContextClass=window.AudioContext||window.webkitAudioContext;
      if(!AudioContextClass) return null;
      try{
        const context=new AudioContextClass();
        context.resume?.();
        return context;
      }catch(error){
        return null;
      }
    };
    const playConfettiSound=(context)=>{
      if(!context) return;
      const play=()=>{
        const now=context.currentTime;
        const buffer=context.createBuffer(1,context.sampleRate*.32,context.sampleRate);
        const noise=buffer.getChannelData(0);
        for(let index=0;index<noise.length;index+=1) noise[index]=(Math.random()*2-1)*(1-index/noise.length);
        const rustle=context.createBufferSource();
        const filter=context.createBiquadFilter();
        const rustleGain=context.createGain();
        filter.type='bandpass';
        filter.frequency.value=1850;
        filter.Q.value=.7;
        rustleGain.gain.setValueAtTime(.0001,now);
        rustleGain.gain.exponentialRampToValueAtTime(.055,now+.035);
        rustleGain.gain.exponentialRampToValueAtTime(.0001,now+.32);
        rustle.buffer=buffer;
        rustle.connect(filter).connect(rustleGain).connect(context.destination);
        rustle.start(now);
        rustle.stop(now+.34);
        for(let index=0;index<5;index+=1){
          const oscillator=context.createOscillator();
          const gain=context.createGain();
          const start=now+index*.055;
          oscillator.type='triangle';
          oscillator.frequency.value=650+Math.random()*500;
          gain.gain.setValueAtTime(.0001,start);
          gain.gain.exponentialRampToValueAtTime(.018,start+.008);
          gain.gain.exponentialRampToValueAtTime(.0001,start+.16);
          oscillator.connect(gain).connect(context.destination);
          oscillator.start(start);
          oscillator.stop(start+.18);
        }
        window.setTimeout(()=>context.close().catch(()=>{}),700);
      };
      if(context.state==='suspended') context.resume().then(play).catch(()=>{});
      else play();
    };

    const subscribe=async()=>{
      const lang=document.documentElement.lang==='en'?'en':'es';
      const email=emailField.value.trim();
      const showStatus=(message, type='error')=>{
        status.textContent=message;
        status.classList.toggle('is-error', type==='error');
        status.classList.toggle('is-success', type==='success');
        status.hidden=false;
      };
      if(!emailField.checkValidity() || !email){
        showStatus(messages[lang].invalid);
        emailField.focus();
        return;
      }
      if(!NEWSLETTER_ENDPOINT){
        showStatus(messages[lang].pending);
        return;
      }

      const confettiSound=prepareConfettiSound();
      submitButton.disabled=true;
      emailField.disabled=true;
      try{
        const body=new URLSearchParams({email,source:window.location.href});
        await fetch(NEWSLETTER_ENDPOINT,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},body});
        form.reset();
        try{ localStorage.setItem(NEWSLETTER_SUBSCRIPTION_KEY,'1'); }catch(storageError){ console.warn('No se pudo guardar el estado local de suscripción.',storageError); }
        updateSubscriptionSeal();
        showStatus(messages[lang].success,'success');
        celebrateSubscription();
        playConfettiSound(confettiSound);
      }catch(error){
        console.error('No se pudo registrar la suscripción.',error);
        confettiSound?.close?.().catch?.(()=>{});
        showStatus(messages[lang].error);
      }finally{
        submitButton.disabled=false;
        emailField.disabled=false;
      }
    };
    emailField.addEventListener('input',()=>{
      status.hidden=true;
      status.textContent='';
    });

    submitButton.addEventListener('click',subscribe);
    form.addEventListener('submit',event=>{ event.preventDefault(); subscribe(); });
  }

  function updateSubscriptionSeal(){
    const seal=document.getElementById('subscriptionSeal');
    if(!seal) return;
    let subscribed=false;
    try{ subscribed=localStorage.getItem(NEWSLETTER_SUBSCRIPTION_KEY)==='1'; }catch(error){ subscribed=false; }
    seal.hidden=!subscribed;
  }

  function bindContactRequestForm(){
    const form=document.getElementById('contactRequestForm');
    if(!form) return;
    const nameField=form.elements.namedItem('name');
    const messageField=form.elements.namedItem('message');
    const error=document.getElementById('contactRequestError');
    if(!(nameField instanceof HTMLInputElement) || !(messageField instanceof HTMLTextAreaElement) || !error){
      console.error('El formulario de contacto no contiene los campos requeridos.');
      return;
    }

    form.addEventListener('submit',event=>{
      event.preventDefault();
      const name=nameField.value.trim();
      const message=messageField.value.trim();
      if(!name || !message){
        const lang=document.documentElement.lang==='es'?'es':'en';
        error.textContent=translations[lang].contactFormValidation;
        error.hidden=false;
        (!name ? nameField : messageField).focus();
        return;
      }

      error.hidden=true;
      const lang=document.documentElement.lang==='es'?'es':'en';
      const greeting=lang==='es'?'Hola WavePoint, soy':'Hi WavePoint, I’m';
      const text=`${greeting} ${name}.\n\n${message}`;
      window.open(`https://wa.me/50660399194?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer');
    });
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

  function bindTermsDialog(){
    const labels=[...document.querySelectorAll('[data-i18n="footerTerms"]')];
    if(!labels.length) return;
    const dialog=document.createElement('dialog');
    dialog.id='termsOfServiceDialog';
    dialog.className='terms-dialog';
    dialog.setAttribute('aria-labelledby','termsDialogTitle');
    dialog.innerHTML=`
      <div class="terms-dialog-panel">
        <header class="terms-dialog-header">
          <div>
            <p class="terms-dialog-kicker">WAVEPOINT · TAMARINDO</p>
            <h2 id="termsDialogTitle" data-i18n="termsDialogTitle">Terms of service</h2>
          </div>
          <button class="terms-dialog-close" type="button" data-terms-close>
            <span class="sr-only" data-i18n="termsDialogClose">Close</span>
            <span aria-hidden="true">×</span>
          </button>
        </header>
        <p class="terms-dialog-intro" data-i18n="termsDialogIntro">Before sending an inquiry, please keep in mind:</p>
        <ul class="terms-dialog-list">
          <li data-i18n="termsDialogPoint1">WavePoint connects travelers with local providers; each experience is delivered by the corresponding provider.</li>
          <li data-i18n="termsDialogPoint2">Sending an inquiry through WhatsApp does not confirm a booking.</li>
          <li data-i18n="termsDialogPoint3">Availability and the final price must be confirmed with the provider before any payment.</li>
        </ul>
      </div>`;
    document.body.append(dialog);
    labels.forEach(label=>{
      const button=document.createElement('button');
      button.type='button';
      button.className='footer-terms-trigger';
      button.dataset.i18n='footerTerms';
      button.textContent=label.textContent;
      label.replaceWith(button);
      button.addEventListener('click',()=>dialog.showModal());
    });
    dialog.querySelector('[data-terms-close]').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',event=>{if(event.target===dialog) dialog.close();});
  }

  bindNewsletterForm();
  bindContactRequestForm();
  bindSiteAssistant();
  bindTermsDialog();
  applyTranslations();
  updateSubscriptionSeal();
  bindWavepointPreloader();
  bindMobileMenu();
  bindHeroVideoSwap();
  bindHeroLogoEntrance();
  applyCameraState();
  loadWeather();

  // No bloqueamos el primer render con interacciones y reveals secundarios.
  const runWhenIdle=callback=>{
    if('requestIdleCallback' in window) window.requestIdleCallback(callback,{timeout:1200});
    else window.setTimeout(callback,120);
  };
  runWhenIdle(()=>{
    bindGuideImageModal();
    bindAlliesTickerInteraction();
    bindWeatherCardDrag();
    bindScrollReveals();
    bindServiceCardReveals();
    bindSpotModal();
    bindCameraModal();
    bindAdModal();
  });
  setInterval(()=>{ applyCameraState(); const localTime=document.getElementById('localTime'); if(localTime) localTime.textContent=formatTimeCR(); }, 30000);


// Soporte automatico para multiples formatos de imagen (.webp, .jpg, .jpeg)
document.addEventListener('error', function(e) {
  if (e.target && e.target.tagName === 'IMG') {
    const img = e.target;
    const formats = ['.webp', '.jpg', '.jpeg'];
    let attempted = img.dataset.triedFormats ? img.dataset.triedFormats.split(',') : [];
    
    const match = img.src.match(/^(.*?)\.(webp|jpe?g)(\?.*)?$/i);
    if (!match) return;
    
    const base = match[1];
    const currentExt = '.' + match[2].toLowerCase();
    const query = match[3] || '';
    
    if (!attempted.includes(currentExt)) attempted.push(currentExt);
    
    const nextExt = formats.find(f => !attempted.includes(f));
    if (nextExt) {
      attempted.push(nextExt);
      img.dataset.triedFormats = attempted.join(',');
      img.src = base + nextExt + query;
    }
  }
}, true);

// Las tarjetas mantienen una acción principal en el área libre, mientras que
// sus enlaces internos conservan destinos independientes.
document.querySelectorAll('.guide-destination[data-destination-href]').forEach(card => {
  card.addEventListener('click', event => {
    if (event.target.closest('a')) return;
    window.location.href = card.dataset.destinationHref;
  });
});

// Atajo de actualización: requiere cinco toques conscientes sobre el logo.
(function bindLogoCacheRefresh(){
  const logo=document.querySelector('.hero-logo-wrap');
  if(!logo) return;
  const REQUIRED_TAPS=5;
  const TAP_WINDOW=3000;
  let taps=0;
  let resetTimer=null;
  let hideTimer=null;
  let refreshTimer=null;
  const badge=document.createElement('span');
  badge.className='logo-refresh-countdown';
  badge.setAttribute('aria-live','polite');
  badge.setAttribute('aria-label','Toques restantes para actualizar');
  badge.hidden=true;
  logo.appendChild(badge);

  const refresh=async()=>{
    if('caches' in window){
      try{
        const cacheNames=await caches.keys();
        await Promise.all(cacheNames.map(name=>caches.delete(name)));
      }catch(error){
        // La caché HTTP del navegador no se puede borrar desde una página;
        // el parámetro único fuerza igualmente una nueva solicitud HTML.
      }
    }
    const url=new URL(window.location.href);
    url.searchParams.set('wp_refresh',Date.now().toString());
    window.location.replace(url.toString());
  };

  const showTapNumber=(remaining)=>{
    window.clearTimeout(hideTimer);
    badge.textContent=String(remaining);
    badge.hidden=false;
    badge.classList.remove('is-visible');
    void badge.offsetWidth;
    badge.classList.add('is-visible');
    hideTimer=window.setTimeout(()=>{
      badge.hidden=true;
      badge.classList.remove('is-visible');
    },700);
  };

  const handleTap=()=>{
    if(refreshTimer) return;
    window.clearTimeout(resetTimer);
    taps+=1;
    const remaining=REQUIRED_TAPS-taps;
    showTapNumber(Math.max(remaining,0));
    if(taps>=REQUIRED_TAPS){
      refreshTimer=window.setTimeout(refresh,700);
      return;
    }
    resetTimer=window.setTimeout(()=>{ taps=0; },TAP_WINDOW);
  };

  logo.addEventListener('click',handleTap);
  logo.addEventListener('keydown',event=>{
    if(event.key==='Enter' || event.key===' '){
      event.preventDefault();
      handleTap();
    }
  });
})();
