
  const CR_TZ='America/Costa_Rica';
  const CAM_START={hour:4,minute:45}, CAM_END={hour:18,minute:30};
  function getCRDate(){ return new Date(new Date().toLocaleString('en-US',{timeZone:CR_TZ})); }
  function isCameraLiveNow(){ const d=getCRDate(); const m=d.getHours()*60+d.getMinutes(); return m>=CAM_START.hour*60+CAM_START.minute && m<=CAM_END.hour*60+CAM_END.minute; }
  function formatTimeCR(date=new Date()){ return new Intl.DateTimeFormat('es-CR',{hour:'2-digit',minute:'2-digit',timeZone:CR_TZ}).format(date); }
  function weatherText(code,isDay){ const day=Number(isDay)===1; const map={0:day?['☀️','Soleado']:['🌙','Noche despejada'],1:day?['🌤️','Mayormente despejado']:['🌙','Noche mayormente despejada'],2:day?['⛅','Parcialmente nublado']:['☁️','Nublado de noche'],3:['☁️','Nublado'],45:['🌫️','Neblina'],48:['🌫️','Neblina'],51:day?['🌦️','Llovizna ligera']:['🌧️','Llovizna nocturna'],53:day?['🌦️','Llovizna']:['🌧️','Llovizna nocturna'],55:day?['🌧️','Llovizna fuerte']:['🌧️','Llovizna fuerte nocturna'],61:day?['🌦️','Lluvia ligera']:['🌧️','Lluvia nocturna'],63:day?['🌧️','Lluvia']:['🌧️','Lluvia nocturna'],65:day?['🌧️','Lluvia fuerte']:['🌧️','Lluvia fuerte nocturna'],80:day?['🌦️','Chubascos']:['🌧️','Chubascos nocturnos'],81:day?['🌧️','Chubascos']:['🌧️','Chubascos nocturnos'],82:['⛈️','Chubascos fuertes'],95:['⛈️','Tormenta'],96:['⛈️','Tormenta con granizo'],99:['⛈️','Tormenta fuerte']}; return map[code] || (day?['🌤️','Condiciones variables']:['🌙','Condiciones nocturnas']); }
  function weatherMotion(code,isDay){ const value=Number(code); if(Number(isDay)!==1) return 'night'; if([95,96,99].includes(value)) return 'storm'; if([51,53,55,61,63,65,80,81,82].includes(value)) return 'rain'; if([45,48].includes(value)) return 'mist'; if([1,2,3].includes(value)) return 'clouds'; return 'sun'; }
  //function applyCameraState(){ const live=isCameraLiveNow(); document.body.classList.toggle('night', !live); document.querySelectorAll('.live-badge').forEach(b=>{ b.textContent=live?'● En vivo':'☾ Descanso'; b.classList.toggle('rest', !live); }); document.getElementById('cameraNightNotice').classList.toggle('show', !live); }
  
  function applyCameraState(){
  const live = isCameraLiveNow();

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
        badge.textContent = '☾ Descanso';
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
        badge.textContent = '● En vivo';
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
    const weather = document.getElementById('weatherState')?.textContent || 'Condiciones actuales';
    const time = document.getElementById('localTime')?.textContent || '--:--';
    return `
      <div class="spot-hero ${s.css}">
        <div>
          <h3>${s.title}</h3>
          <p>${s.location} · Ficha surf preliminar</p>
        </div>
      </div>
      <div class="spot-data">
        <div class="spot-card"><small>Clima</small><strong>${temp}°</strong><span>${weather}</span></div>
        <div class="spot-card"><small>Viento</small><strong>${wind}</strong><span>km/h actual</span></div>
        <div class="spot-card"><small>Oleaje</small><strong>${wave} m</strong><span>estimado Marine API</span></div>
        <div class="spot-card"><small>Hora local</small><strong>${time}</strong><span>Costa Rica</span></div>
      </div>
      <div class="spot-info-grid">
        <div class="spot-info-block">
          <h4>Lectura rápida</h4>
          <ul>
            <li>Nivel recomendado: ${s.level}</li>
            <li>Mejor marea: ${s.tide}</li>
            <li>Fondo: ${s.bottom}</li>
            <li>Riesgos: ${s.risk}</li>
          </ul>
        </div>
        <div class="spot-info-block">
          <h4>Notas locales</h4>
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
        title.textContent='Info del spot · ' + spot.title;
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
        note.textContent='Estás viendo: ' + cameraName + ' · Haz clic fuera del recuadro para cerrar.';
      } else {
        frame.src='';
        frame.style.display='none';
        if (modalWatermark) modalWatermark.style.display='none';
        offlineTitle.textContent = cameraName + ' en descanso';
        offline.classList.add('show');
        note.textContent='Cámara fuera de horario · Transmisión aprox. de 4:45 a.m. a 6:30 p.m.';
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
      item.style.setProperty('--reveal-delay', `${Math.max(0, siblings.indexOf(item)) * 75}ms`);
      item.classList.add('scroll-reveal');
      observer.observe(item);
    });
  }

  function bindHeroLogoEntrance(){
    const logo=document.querySelector('.hero-logo-wrap');
    if(logo && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) logo.classList.add('is-arriving');
  }

  bindMobileMenu();
  bindHeroVideoSwap();
  bindHeroLogoEntrance();
  bindScrollReveals();
  bindSpotModal();
  applyCameraState(); loadWeather(); bindCameraModal(); bindAdModal(); setInterval(()=>{ applyCameraState(); document.getElementById('localTime').textContent=formatTimeCR(); }, 30000);

