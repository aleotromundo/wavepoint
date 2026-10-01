
  const CR_TZ='America/Costa_Rica';
  const CAM_START={hour:4,minute:45}, CAM_END={hour:18,minute:30};
  function getCRDate(){ return new Date(new Date().toLocaleString('en-US',{timeZone:CR_TZ})); }
  function isCameraLiveNow(){ const d=getCRDate(); const m=d.getHours()*60+d.getMinutes(); return m>=CAM_START.hour*60+CAM_START.minute && m<=CAM_END.hour*60+CAM_END.minute; }
  function formatTimeCR(date=new Date()){ const locale = languageState.current === 'en' ? 'en-US' : 'es-CR'; return new Intl.DateTimeFormat(locale,{hour:'2-digit',minute:'2-digit',timeZone:CR_TZ}).format(date); }
  function weatherText(code,isDay){ const day=Number(isDay)===1; const spanishMap={0:day?['☀️','Soleado']:['🌙','Noche despejada'],1:day?['🌤️','Mayormente despejado']:['🌙','Noche mayormente despejada'],2:day?['⛅','Parcialmente nublado']:['☁️','Nublado de noche'],3:['☁️','Nublado'],45:['🌫️','Neblina'],48:['🌫️','Neblina'],51:day?['🌦️','Llovizna ligera']:['🌧️','Llovizna nocturna'],53:day?['🌦️','Llovizna']:['🌧️','Llovizna nocturna'],55:day?['🌧️','Llovizna fuerte']:['🌧️','Llovizna fuerte nocturna'],61:day?['🌦️','Lluvia ligera']:['🌧️','Lluvia nocturna'],63:day?['🌧️','Lluvia']:['🌧️','Lluvia nocturna'],65:day?['🌧️','Lluvia fuerte']:['🌧️','Lluvia fuerte nocturna'],80:day?['🌦️','Chubascos']:['🌧️','Chubascos nocturnos'],81:day?['🌧️','Chubascos']:['🌧️','Chubascos nocturnos'],82:['⛈️','Chubascos fuertes'],95:['⛈️','Tormenta'],96:['⛈️','Tormenta con granizo'],99:['⛈️','Tormenta fuerte']}; const englishMap={0:day?['☀️','Sunny']:['🌙','Clear night'],1:day?['🌤️','Mostly sunny']:['🌙','Mostly clear night'],2:day?['⛅','Partly cloudy']:['☁️','Cloudy night'],3:['☁️','Cloudy'],45:['🌫️','Fog'],48:['🌫️','Fog'],51:day?['🌦️','Light drizzle']:['🌧️','Night drizzle'],53:day?['🌦️','Drizzle']:['🌧️','Night drizzle'],55:day?['🌧️','Heavy drizzle']:['🌧️','Heavy night drizzle'],61:day?['🌦️','Light rain']:['🌧️','Night rain'],63:day?['🌧️','Rain']:['🌧️','Night rain'],65:day?['🌧️','Heavy rain']:['🌧️','Heavy night rain'],80:day?['🌦️','Showers']:['🌧️','Night showers'],81:day?['🌧️','Showers']:['🌧️','Night showers'],82:['⛈️','Heavy showers'],95:['⛈️','Thunderstorm'],96:['⛈️','Thunderstorm with hail'],99:['⛈️','Severe storm']}; const map = languageState.current === 'en' ? englishMap : spanishMap; return map[code] || (day?['🌤️','Variable conditions']:['🌙','Night conditions']); }
  function weatherMotion(code,isDay){ const value=Number(code); if(Number(isDay)!==1) return 'night'; if([95,96,99].includes(value)) return 'storm'; if([51,53,55,61,63,65,80,81,82].includes(value)) return 'rain'; if([45,48].includes(value)) return 'mist'; if([1,2,3].includes(value)) return 'clouds'; return 'sun'; }
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
    try{
      const [wRes,mRes]=await Promise.all([
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day,wind_speed_10m&timezone=America%2FCosta_Rica`),
        fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&current=wave_height&timezone=America%2FCosta_Rica`)
      ]);
      const weather=await wRes.json(), marine=await mRes.json();
      const cur=weather.current||{};
      const [ico,label]=weatherText(cur.weather_code,cur.is_day);
      document.getElementById('temp').textContent=Math.round(cur.temperature_2m??0);
      icon.textContent=ico;
      icon.dataset.condition=weatherMotion(cur.weather_code,cur.is_day);
      document.getElementById('weatherState').textContent=label;
      document.getElementById('wind').textContent=Math.round(cur.wind_speed_10m??0);
      document.getElementById('waveHeight').textContent=Number(marine?.current?.wave_height??0).toFixed(1);
      document.getElementById('localTime').textContent=formatTimeCR();
      document.getElementById('updatedText').textContent='Actualizado ahora';
    } catch(e){
      const isDay=isCameraLiveNow();
      icon.textContent=isDay?'🌤️':'🌙';
      icon.dataset.condition=isDay?'clouds':'night';
      document.getElementById('weatherState').textContent=isDay?'Condiciones disponibles':'Noche en Tamarindo';
      document.getElementById('localTime').textContent=formatTimeCR();
      document.getElementById('updatedText').textContent='Sin conexión al clima';
    }
  }

  const translations = {
    es: {
      navInicio: 'Inicio',
      navCamaras: 'Cámaras',
      navServicios: 'Servicios',
      navGuia: 'Guía local',
      navAliados: 'Aliados',
      navColaboradores: 'Colaboradores ▾',
      heroTitle: 'Cámaras de surf en vivo en Tamarindo',
      heroText: 'Conéctate con la ola. Mira las condiciones en tiempo real y elige tu próximo spot.',
      btnWatchCameras: 'Ver cámaras en vivo ▸',
      btnBeachGuide: 'Guía de playas',
      weatherTitle: 'Condiciones generales',
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
      camerasSectionLink: 'Ir al sitio actual →',
      servicesSectionTitle: 'Servicios destacados',
      servicesSectionSubtitle: 'Servicios reales que pueden convertirse en reservas, leads y alianzas.',
      serviceSurfLessons: 'Clases de surf',
      serviceSurfLessonsText: 'Clases para todos los niveles con instructores locales.',
      serviceSurfPhotos: 'Fotos de surf',
      serviceSurfPhotosText: 'Captura tus mejores olas desde la playa.',
      serviceWaterPhoto: 'Fotografía acuática',
      serviceWaterPhotoText: 'Sesiones profesionales dentro y fuera del agua.',
      serviceSurfskate: 'Clases de surfskate',
      serviceSurfskateText: 'Mejora técnica y fluidez fuera del agua.',
      serviceMoreInfo: 'Más información →',
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
      afterPhotosTitle: 'Fotos de surf',
      afterPhotosText: 'Captura tus mejores olas con fotografía profesional.',
      afterServiceLink: 'Ver servicio →',
      afterGuideTag: 'Guía local',
      afterGuideTitle: 'Explora Tamarindo',
      afterGuideText: 'Playas, colaboradores, servicios y experiencias cercanas.',
      afterGuideLink: 'Ver guía →',
      newsletterTitle: 'Entérate primero',
      newsletterText: 'Recibe alertas de olas, novedades y promociones seleccionadas.',
      newsletterEmailPlaceholder: 'Tu correo electrónico',
      newsletterButton: 'Suscribirme',
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
      footerTerms: 'Términos · Privacidad'
    },
    en: {
      navInicio: 'Home',
      navCamaras: 'Cameras',
      navServicios: 'Services',
      navGuia: 'Local guide',
      navAliados: 'Partners',
      navColaboradores: 'Partners ▾',
      heroTitle: 'Live surf cameras in Tamarindo',
      heroText: 'Connect with the wave. Check real-time conditions and choose your next spot.',
      btnWatchCameras: 'Watch live cameras ▸',
      btnBeachGuide: 'Beach guide',
      weatherTitle: 'General conditions',
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
      camerasSectionLink: 'Go to the current site →',
      servicesSectionTitle: 'Featured services',
      servicesSectionSubtitle: 'Real services that can become bookings, leads, and partnerships.',
      serviceSurfLessons: 'Surf lessons',
      serviceSurfLessonsText: 'Lessons for all levels with local instructors.',
      serviceSurfPhotos: 'Surf photos',
      serviceSurfPhotosText: 'Capture your best waves from the beach.',
      serviceWaterPhoto: 'Water photography',
      serviceWaterPhotoText: 'Professional sessions in and out of the water.',
      serviceSurfskate: 'Surfskate lessons',
      serviceSurfskateText: 'Improve technique and flow off the water.',
      serviceMoreInfo: 'More info →',
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
      afterPhotosTitle: 'Surf photos',
      afterPhotosText: 'Capture your best waves with professional photography.',
      afterServiceLink: 'View service →',
      afterGuideTag: 'Local guide',
      afterGuideTitle: 'Explore Tamarindo',
      afterGuideText: 'Beaches, partners, services, and nearby experiences.',
      afterGuideLink: 'View guide →',
      newsletterTitle: 'Know first',
      newsletterText: 'Get wave alerts, updates, and selected promotions.',
      newsletterEmailPlaceholder: 'Your email',
      newsletterButton: 'Subscribe',
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
      footerTerms: 'Terms · Privacy'
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

    const langToggle = document.querySelector('[data-lang-toggle]');
    if (langToggle) {
      const isSpanish = lang === 'es';
      const flagCodePoints = isSpanish ? [0x1f1fa, 0x1f1f8] : [0x1f1ea, 0x1f1f8];
      langToggle.textContent = String.fromCodePoint(...flagCodePoints);
      langToggle.setAttribute('aria-label', isSpanish ? 'Switch to English' : 'Cambiar a español');
      langToggle.setAttribute('aria-pressed', String(!isSpanish));
    }

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
      entries.forEach(entry=>entry.target.classList.toggle('is-visible', entry.isIntersecting));
    }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});

    items.forEach(item=>{
      const siblings=[...item.parentElement.children].filter(sibling=>sibling.matches(selector));
      const siblingIndex=Math.max(0, siblings.indexOf(item));
      item.style.setProperty('--reveal-delay', `${siblingIndex * 75}ms`);
      item.style.setProperty('--reveal-x', siblingIndex % 2 === 0 ? '-72px' : '72px');
      item.classList.add('scroll-reveal');
      observer.observe(item);
    });
  }

  function bindHeroLogoEntrance(){
    const logo=document.querySelector('.hero-logo-wrap');
    if(!logo || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const replay=()=>{
      logo.classList.remove('is-arriving');
      void logo.offsetWidth;
      logo.classList.add('is-arriving');
    };

    logo.classList.add('is-arriving');
    logo.addEventListener('click', replay);
    logo.addEventListener('keydown', e=>{
      if(e.key==='Enter' || e.key===' '){
        e.preventDefault();
        replay();
      }
    });
    document.querySelectorAll('a[href="#inicio"]').forEach(link=>link.addEventListener('click', replay));

    if('IntersectionObserver' in window){
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

  applyTranslations();
  bindMobileMenu();
  bindHeroVideoSwap();
  bindHeroLogoEntrance();
  bindWeatherCardDrag();
  bindScrollReveals();
  bindSpotModal();
  applyCameraState(); loadWeather(); bindCameraModal(); bindAdModal(); setInterval(()=>{ applyCameraState(); document.getElementById('localTime').textContent=formatTimeCR(); }, 30000);

