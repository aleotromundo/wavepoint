(function () {
  const root = document.getElementById('wx3d');
  if (!root) return;

  const TIME_ZONE = 'America/Costa_Rica';
  const LATITUDE = 10.2993;
  const LONGITUDE = -85.8371;
  const SYNODIC_MONTH_MS = 29.530588853 * 24 * 60 * 60 * 1000;
  const NEW_MOON_EPOCH = Date.UTC(2000, 0, 6, 18, 14);
  const COLORS = {
    c: ['#4f86bd', '#1c3f68', '#1b2a55', '#0c1430'],
    p: ['#5d84ab', '#2f4f73', '#232f55', '#10183a'],
    o: ['#6b7d8e', '#3c4b5a', '#2a3340', '#151b24'],
    r: ['#50647a', '#2a3a4c', '#1f2937', '#0f151e'],
    t: ['#3d4659', '#1b2130', '#1a1d2e', '#0a0c16'],
    s: ['#7790a8', '#41576d', '#2b3a4f', '#141d2a'],
    f: ['#7f8e99', '#4b5963', '#353e46', '#1b2025'],
    w: ['#5a89a8', '#2c5470', '#1d2c4d', '#0d1630']
  };
  const grayClouds = [[34, 'g', 40, 22, 26], [30, 'g', 60, 6, 30], [26, 'g', 54, 42, 22]];
  const darkClouds = [[38, 'd', 40, 18, 24], [32, 'd', 60, 4, 28], [28, 'd', 54, 40, 22]];
  const CONDITIONS = {
    clear: { e: '☀️|🌙', g: 'c', s: 1, k: [] },
    fewclouds: { e: '🌤️|🌙', g: 'c', s: 1, k: [[20, 'w', 58, 40, 16]] },
    partly: { e: '⛅|☁️', g: 'p', s: .95, k: [[30, 'w', 48, 34, 15], [20, 'w', 66, 10, 22]] },
    overcast: { e: '☁️', g: 'o', s: 0, k: grayClouds },
    drizzle: { e: '🌦️|🌧️', g: 'r', s: 0, k: grayClouds.slice(0, 2), p: ['rain', 16, 1.4, 10], gl: 3 },
    rain: { e: '🌧️', g: 'r', s: 0, k: grayClouds, p: ['rain', 34, .9, 16], gl: 5 },
    showers: { e: '🌦️|🌧️', g: 'r', s: 0, k: [[32, 'g', 44, 28, 20], [26, 'w', 62, 8, 24], [22, 'd', 56, 42, 18]], p: ['rain', 48, .75, 18], gl: 6, pu: 1 },
    heavy: { e: '🌧️', g: 'r', s: 0, k: darkClouds, p: ['rain', 70, .6, 22], gl: 8 },
    storm: { e: '⛈️', g: 't', s: 0, k: darkClouds, p: ['rain', 55, .65, 20], b: 1, gl: 8 },
    fog: { e: '🌫️', g: 'f', s: .3, k: [], f: 1 }
  };
  const LABELS = {
    es: {
      clear: 'Despejado', fewclouds: 'Mayormente despejado', partly: 'Parcialmente nublado',
      overcast: 'Cubierto', drizzle: 'Llovizna', rain: 'Lluvia',
      heavy: 'Lluvia intensa', showers: 'Chubascos',
      storm: 'Tormenta eléctrica', fog: 'Neblina',
      waves: 'Oleaje estimado', windLabel: 'Viento', time: 'Hora local',
      loading: 'Cargando clima', offline: 'Sin conexión con el clima'
    },
    en: {
      clear: 'Clear', fewclouds: 'Mostly clear', partly: 'Partly cloudy',
      overcast: 'Overcast', drizzle: 'Drizzle', rain: 'Rain',
      heavy: 'Heavy rain', showers: 'Showers',
      storm: 'Thunderstorm', fog: 'Fog',
      waves: 'Estimated swell', windLabel: 'Wind', time: 'Local time',
      loading: 'Loading weather', offline: 'Weather connection unavailable'
    }
  };
  const elements = {
    card: root.querySelector('.wx3d-card'),
    glare: root.querySelector('.wx3d-glare'),
    sky: root.querySelector('.wx3d-sky'),
    clouds: root.querySelector('.wx3d-clouds'),
    effects: root.querySelector('.wx3d-fx'),
    particles: root.querySelector('.wx3d-p3'),
    precipitationBack: root.querySelector('.wx3d-pback'),
    precipitationFront: root.querySelector('.wx3d-pfront'),
    glassCanvas: root.querySelector('.wx3d-glassfx'),
    boltsCanvas: root.querySelector('.wx3d-bolts'),
    light: root.querySelector('.wx3d-lite')
  };
  const getLanguage = () => document.documentElement.lang === 'es' ? 'es' : 'en';
  const state = {
    condition: 'partly',
    night: false,
    city: 'Tamarindo · CR',
    temperature: null,
    waves: null,
    wind: null,
    localTime: null,
    ready: false,
    offline: false
  };
  let glassEffect = null;
  let glassEffectRunning = false;
  let stormTimer = 0;
  let stormRunning = false;
  let precipitation = null;
  let precipitationFrame = 0;
  let precipitationTime = 0;
  let precipitationWidth = 0;
  let precipitationHeight = 0;
  let precipitationDrops = [];
  let precipitationSplashes = [];
  let precipitationSplashEnabled = false;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function moonShadowOffset() {
    const phase = ((Date.now() - NEW_MOON_EPOCH) % SYNODIC_MONTH_MS + SYNODIC_MONTH_MS)
      % SYNODIC_MONTH_MS / SYNODIC_MONTH_MS;
    const illuminated = (1 - Math.cos(phase * Math.PI * 2)) / 2;
    const darkFraction = 1 - illuminated;
    let min = 0;
    let max = 2;
    for (let iteration = 0; iteration < 32; iteration++) {
      const distance = (min + max) / 2;
      const overlap = (2 * Math.acos(distance / 2)
        - .5 * distance * Math.sqrt(4 - distance * distance)) / Math.PI;
      if (overlap > darkFraction) min = distance;
      else max = distance;
    }
    const direction = phase < .5 ? -1 : 1;
    return (direction * (min + max) / 2 * 40).toFixed(2) + 'px';
  }

  function clock() {
    if (state.localTime) {
      return state.localTime;
    }
    const locale = getLanguage() === 'es' ? 'es-CR' : 'en-US';
    return new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: TIME_ZONE
    }).format(new Date());
  }

  function setStatValue(field, value, unit) {
    const target = root.querySelector('[data-f=' + field + ']');
    target.textContent = value;
    if (unit) {
      const unitLabel = document.createElement('small');
      unitLabel.textContent = unit;
      target.appendChild(unitLabel);
    }
  }

  function conditionFromCode(code) {
    const conditions = {
      0: 'clear',
      1: 'fewclouds',
      2: 'partly',
      3: 'overcast',
      45: 'fog',
      48: 'fog',
      51: 'drizzle',
      53: 'drizzle',
      55: 'drizzle',
      56: 'drizzle',
      57: 'drizzle',
      61: 'rain',
      63: 'rain',
      65: 'heavy',
      66: 'rain',
      67: 'heavy',
      71: 'overcast',
      73: 'overcast',
      75: 'overcast',
      77: 'overcast',
      80: 'showers',
      81: 'showers',
      82: 'showers',
      85: 'overcast',
      86: 'overcast',
      95: 'storm',
      96: 'storm',
      99: 'storm'
    };
    return conditions[code] || 'partly';
  }

  function buildWeatherScene() {
    const base = CONDITIONS[state.condition] || CONDITIONS.partly;
    const condition = { ...base, k: base.k.slice() };
    return condition;
  }

  function render() {
    const condition = buildWeatherScene();
    const palette = COLORS[condition.g];
    const language = getLanguage();
    const isNight = state.ready && state.night;
    let effectsMarkup = '';
    let particlesMarkup = '';
    let index;

    root.classList.toggle('night', isNight);
    root.style.setProperty('--b1', palette[isNight ? 2 : 0]);
    root.style.setProperty('--b2', palette[isNight ? 3 : 1]);
    elements.sky.innerHTML = isNight
      ? '<div class="wx3d-moon" style="opacity:' + Math.max(.48, condition.s)
        + ';--moon-shadow-offset:' + moonShadowOffset() + '"></div>'
      : condition.s > 0
        ? '<div class="wx3d-sunwrap" style="opacity:' + condition.s
          + '"><div class="wx3d-rays"></div><div class="wx3d-rays r2"></div><div class="wx3d-core"></div></div>'
        : '';
    elements.clouds.innerHTML = condition.k.map((cloud, cloudIndex) =>
      '<i class="wx3d-cloud t-' + cloud[1] + '" style="font-size:' + cloud[0] + 'px;left:' + cloud[2]
      + '%;top:' + cloud[3] + '%;animation-duration:' + cloud[4] + 's;animation-delay:-'
      + (cloudIndex * 5) + 's"></i>').join('');

    if (isNight) {
      const starsCount = condition.s >= .9 ? 46 : condition.s >= .4 ? 18 : condition.s > 0 ? 8 : 0;
      if (starsCount) {
        effectsMarkup += '<div class="wx3d-stars">' + (condition.s >= .9 ? '<b class="wx3d-milky"></b>' : '');
        for (index = 0; index < starsCount; index++) {
          const sizeRoll = Math.random();
          const size = sizeRoll > .9 ? 3.4 : sizeRoll > .6 ? 2.2 : 1.4;
          effectsMarkup += '<b class="wx3d-star" style="left:' + randomBetween(0, 100).toFixed(1)
            + '%;top:' + (75 * Math.pow(Math.random(), 1.4)).toFixed(1) + '%;width:' + size
            + 'px;height:' + size + 'px;background:' + ['#fff', '#dbe8ff', '#fff3d6'][index % 3]
            + (size > 3 ? ';box-shadow:0 0 6px rgba(255,255,255,.9)' : '')
            + ';animation-duration:' + randomBetween(2, 5).toFixed(1) + 's;animation-delay:-'
            + randomBetween(0, 4).toFixed(1) + 's"></b>';
        }
        effectsMarkup += '</div>';
      }
    }

    const height = elements.card.offsetHeight || 340;
    elements.particles.style.setProperty('--h', height + 'px');
    if (condition.f) {
      for (index = 0; index < 3; index++) {
        particlesMarkup += '<b class="wx3d-fog" style="--z:' + [-8, 25, 75][index]
          + 'px;top:' + (22 + index * 24) + '%;animation-delay:-' + (index * 4) + 's"></b>';
      }
    }
    for (index = 0; !window.RaindropFX && index < (condition.gl || 0); index++) {
      particlesMarkup += '<b class="wx3d-glass" style="left:' + randomBetween(4, 94).toFixed(0)
        + '%;top:' + randomBetween(2, 50).toFixed(0) + '%;animation-delay:-'
        + randomBetween(0, 6).toFixed(1) + 's;animation-duration:' + randomBetween(5, 9).toFixed(1) + 's"></b>';
    }
    elements.particles.innerHTML = particlesMarkup;
    if (!isNight && condition.s >= .9) {
      effectsMarkup += '<b class="wx3d-flare" style="left:62%;top:30%;width:34px"></b>'
        + '<b class="wx3d-flare" style="left:48%;top:42%;width:18px;animation-delay:-1s"></b>';
    }
    if (isNight && condition.s >= .9) effectsMarkup += '<b class="wx3d-shoot"></b>';
    elements.effects.innerHTML = effectsMarkup;

    const reducedMotion = root.hasAttribute('data-respect-motion')
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    elements.boltsCanvas.width = elements.card.offsetWidth;
    elements.boltsCanvas.height = elements.card.offsetHeight;
    setPrecipitation(reducedMotion ? null : condition.p, condition.pu);
    setGlassEffect(reducedMotion ? 0 : condition.gl, palette, isNight);
    startStorm(!reducedMotion && !!condition.b);

    const languageLabels = LABELS[language];
    const symbols = condition.e.split('|');
    const temperature = state.temperature === null ? '--' : Math.round(state.temperature) + '°';
    const waves = state.waves === null ? '--' : state.waves.toFixed(1);
    const wind = state.wind === null ? '--' : String(Math.round(state.wind));
    let status = !state.ready ? languageLabels.loading
      : state.offline ? languageLabels.offline
        : (symbols[state.night ? 1 : 0] || symbols[0]) + ' ' + languageLabels[state.condition];
    root.querySelector('[data-f=city]').textContent = state.city;
    root.querySelector('[data-f=temp]').textContent = temperature;
    root.querySelector('[data-f=status]').textContent = status;
    setStatValue('waves', waves, 'm');
    setStatValue('wind', wind, 'km/h');
    setStatValue('time', clock());
    root.querySelector('[data-f=wavesLabel]').textContent = languageLabels.waves;
    root.querySelector('[data-f=windLabel]').textContent = languageLabels.windLabel;
    root.querySelector('[data-f=timeLabel]').textContent = languageLabels.time;
    root.dataset.weatherStatus = !state.ready ? 'loading' : state.offline ? 'offline' : 'live';
    root.setAttribute('aria-busy', String(!state.ready));
  }

  function makeDrop(initial) {
    const config = precipitation;
    const mix = config[0] === 'mix';
    const type = mix ? (Math.random() < .5 ? 'snow' : 'rain') : config[0];
    const depth = Math.random();
    const duration = mix && type === 'rain' ? 1 : config[2];
    const drop = {
      type,
      depth,
      x: randomBetween(0, precipitationWidth),
      y: initial ? randomBetween(-precipitationHeight * .1, precipitationHeight) : randomBetween(-70, -10),
      phase: randomBetween(0, Math.PI * 2),
      bounces: 0
    };
    if (type === 'rain') {
      drop.radius = 3 + depth * 8;
      drop.length = (config[3] || 16) * (1 + depth * 2.2) + 12;
    } else {
      drop.radius = type === 'snow' ? 1.8 + depth * 4.5 : 2.5 + depth * 4.5;
    }
    drop.velocity = (precipitationHeight + 70)
      / (duration * (type === 'snow' ? 1.3 - .5 * depth : 1.15 - .5 * depth));
    return drop;
  }

  function resetDrop(index) {
    const drop = makeDrop(false);
    if (precipitationSplashEnabled && index >= precipitation[1] * precipitationActivity()) {
      drop.splashing = true;
    }
    precipitationDrops[index] = drop;
  }

  function precipitationActivity() {
    return .25 + .75 * Math.pow(Math.sin(performance.now() / 3200), 2);
  }

  function setPrecipitation(config, splashEnabled) {
    precipitation = config;
    precipitationSplashEnabled = Boolean(splashEnabled);
    precipitationDrops = [];
    precipitationSplashes = [];
    precipitationWidth = elements.card.offsetWidth || 340;
    precipitationHeight = elements.card.offsetHeight || 360;
    elements.precipitationBack.width = elements.precipitationFront.width = precipitationWidth;
    elements.precipitationBack.height = elements.precipitationFront.height = precipitationHeight;
    const backContext = elements.precipitationBack.getContext('2d');
    const frontContext = elements.precipitationFront.getContext('2d');
    if (backContext) backContext.clearRect(0, 0, precipitationWidth, precipitationHeight);
    if (frontContext) frontContext.clearRect(0, 0, precipitationWidth, precipitationHeight);
    if (!config) {
      window.cancelAnimationFrame(precipitationFrame);
      precipitationFrame = 0;
      return;
    }
    for (let index = 0; index < config[1]; index++) {
      precipitationDrops.push(makeDrop(true));
    }
    if (!precipitationFrame) {
      precipitationTime = performance.now();
      precipitationFrame = window.requestAnimationFrame(drawPrecipitation);
    }
  }

  function drawRain(context, drop) {
    const alpha = .55 + .45 * drop.depth;
    const radius = drop.radius;
    const x = drop.x;
    const y = drop.y;
    const trail = context.createLinearGradient(0, y - drop.length, 0, y);
    trail.addColorStop(0, 'rgba(110,210,255,0)');
    trail.addColorStop(1, 'rgba(110,210,255,' + alpha * .8 + ')');
    context.strokeStyle = trail;
    context.lineWidth = 1.5 + drop.depth * 2.5;
    context.lineCap = 'round';
    context.beginPath();
    context.moveTo(x, y - drop.length);
    context.lineTo(x, y - radius);
    context.stroke();
    context.shadowColor = 'rgba(70,200,255,.9)';
    context.shadowBlur = drop.depth > .5 ? 12 : 5;
    context.fillStyle = 'rgba(95,200,255,' + alpha + ')';
    context.beginPath();
    context.moveTo(x, y - radius * 2.6);
    context.bezierCurveTo(x + radius * .15, y - radius * 1.6, x + radius, y - radius * 1.1, x + radius, y);
    context.arc(x, y, radius, 0, Math.PI);
    context.bezierCurveTo(x - radius, y - radius * 1.1, x - radius * .15, y - radius * 1.6, x, y - radius * 2.6);
    context.fill();
    context.shadowBlur = 0;
    context.strokeStyle = 'rgba(215,245,255,' + alpha + ')';
    context.lineWidth = 1;
    context.stroke();
    context.fillStyle = 'rgba(255,255,255,' + alpha + ')';
    context.beginPath();
    context.arc(x - radius * .35, y - radius * .2, radius * .28, 0, Math.PI * 2);
    context.fill();
  }

  function drawPrecipitation(now) {
    const back = elements.precipitationBack.getContext('2d');
    const front = elements.precipitationFront.getContext('2d');
    if (!precipitation || !back || !front) {
      precipitationFrame = 0;
      return;
    }
    precipitationFrame = window.requestAnimationFrame(drawPrecipitation);
    const delta = Math.min(.05, (now - precipitationTime) / 1000);
    precipitationTime = now;
    back.clearRect(0, 0, precipitationWidth, precipitationHeight);
    front.clearRect(0, 0, precipitationWidth, precipitationHeight);

    precipitationDrops.forEach((drop, index) => {
      const context = drop.depth >= .5 ? front : back;
      if (drop.splashing) {
        if (!precipitationSplashEnabled || index < precipitation[1] * precipitationActivity()) resetDrop(index);
        return;
      }
      drop.y += drop.velocity * delta;
      if (drop.type === 'snow') {
        drop.phase += delta * 1.5;
        drop.x += Math.sin(drop.phase) * 18 * delta;
      }
      if (drop.type === 'hail') {
        if (drop.bounces) drop.velocity += 2400 * delta;
        if (drop.y > precipitationHeight - drop.radius && drop.velocity > 0 && drop.bounces < 2) {
          drop.y = precipitationHeight - drop.radius;
          drop.velocity = -drop.velocity * (drop.bounces ? .3 : .28);
          drop.bounces++;
        }
      }
      if (drop.type === 'rain' && drop.y >= precipitationHeight - 2) {
        if (precipitationSplashes.length < 60) {
          precipitationSplashes.push({ x: drop.x, time: 0, depth: drop.depth });
        }
        resetDrop(index);
        return;
      }
      if (drop.y > precipitationHeight + 80) {
        resetDrop(index);
        return;
      }
      if (drop.type === 'rain') {
        drawRain(context, drop);
      } else {
        context.fillStyle = drop.type === 'snow'
          ? 'rgba(255,255,255,' + (.6 + .4 * drop.depth) + ')'
          : 'rgba(232,245,255,.95)';
        context.shadowColor = '#fff';
        context.shadowBlur = drop.type === 'snow' ? 6 : 4;
        context.beginPath();
        context.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      }
    });

    precipitationSplashes = precipitationSplashes.filter(splash => {
      splash.time += delta / .45;
      if (splash.time >= 1) return false;
      const context = splash.depth >= .5 ? front : back;
      const alpha = 1 - splash.time;
      const radius = 3 + splash.time * 26 * (.5 + splash.depth);
      context.strokeStyle = 'rgba(150,225,255,' + alpha + ')';
      context.lineWidth = 1.5;
      context.beginPath();
      context.ellipse(splash.x, precipitationHeight - 3, radius, radius * .3, 0, 0, Math.PI * 2);
      context.stroke();
      context.fillStyle = 'rgba(150,225,255,' + alpha + ')';
      [-1, 0, 1].forEach(offset => {
        context.beginPath();
        context.arc(splash.x + offset * splash.time * 34,
          precipitationHeight - 3 - (splash.time * 46 - splash.time * splash.time * 110),
          1.6, 0, Math.PI * 2);
        context.fill();
      });
      return true;
    });
  }

  function toggleStat(stat, open) {
    const expanded = open === undefined ? stat.getAttribute('aria-expanded') !== 'true' : open;
    root.querySelectorAll('.wx3d-stat').forEach(item => {
      const isExpanded = item === stat && expanded;
      item.classList.toggle('open', isExpanded);
      item.setAttribute('aria-expanded', String(isExpanded));
    });
  }

  function paintBackground(width, height, palette, night) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    const gradient = context.createLinearGradient(0, 0, width * .4, height);
    gradient.addColorStop(0, palette[night ? 2 : 0]);
    gradient.addColorStop(1, palette[night ? 3 : 1]);
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
    for (let index = 0; index < 16; index++) {
      const radius = randomBetween(12, 36);
      const x = randomBetween(0, width);
      const y = randomBetween(height * .1, height);
      const color = ['255,214,120', '120,210,255', '255,255,255', '190,140,255'][index % 4];
      const glow = context.createRadialGradient(x, y, 0, x, y, radius);
      glow.addColorStop(0, 'rgba(' + color + ',' + (night ? .9 : .6) + ')');
      glow.addColorStop(1, 'rgba(' + color + ',0)');
      context.fillStyle = glow;
      context.fillRect(x - radius, y - radius, 2 * radius, 2 * radius);
    }
    return canvas;
  }

  function setGlassEffect(level, palette, night) {
    const canvas = elements.glassCanvas;
    if (!window.RaindropFX || !level) {
      if (glassEffect && glassEffectRunning) {
        glassEffect.stop();
        glassEffectRunning = false;
      }
      canvas.classList.remove('on');
      return;
    }
    const width = elements.card.offsetWidth;
    const height = elements.card.offsetHeight;
    const interval = .9 / level;
    const background = paintBackground(width, height, palette, night);
    try {
      if (!glassEffect) {
        canvas.width = width;
        canvas.height = height;
        glassEffect = new window.RaindropFX({
          canvas,
          background,
          spawnSize: [16, 34],
          dropletSize: [5, 14],
          gravity: 900,
          trailDistance: [8, 14],
          mist: false,
          spawnInterval: [interval * .7, interval * 1.3],
          spawnLimit: level * 10,
          dropletsPerSeconds: level * 35
        });
      } else {
        const options = glassEffect.options;
        options.spawnInterval = [interval * .7, interval * 1.3];
        options.spawnLimit = level * 10;
        options.dropletsPerSeconds = level * 35;
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          glassEffect.resize(width, height);
        }
        glassEffect.setBackground(background);
      }
      if (!glassEffectRunning) {
        glassEffect.start();
        glassEffectRunning = true;
      }
      canvas.classList.add('on');
    } catch (error) {
      console.warn('The raindrop glass effect is unavailable; using the CSS fallback.', error);
      canvas.classList.remove('on');
      for (let index = 0; index < level; index++) {
        const drop = document.createElement('b');
        drop.className = 'wx3d-glass';
        drop.style.left = randomBetween(4, 94).toFixed(0) + '%';
        drop.style.top = randomBetween(2, 50).toFixed(0) + '%';
        drop.style.animationDelay = '-' + randomBetween(0, 6).toFixed(1) + 's';
        drop.style.animationDuration = randomBetween(5, 9).toFixed(1) + 's';
        elements.particles.appendChild(drop);
      }
    }
  }

  function drawLightningSegment(x0, y0, x1, y1, depth, output) {
    if (depth < 3) {
      output.push([x0, y0, x1, y1]);
      return;
    }
    const middleX = (x0 + x1) / 2 + randomBetween(-depth, depth);
    const middleY = (y0 + y1) / 2 + randomBetween(-depth * .3, depth * .3);
    drawLightningSegment(x0, y0, middleX, middleY, depth / 2, output);
    drawLightningSegment(middleX, middleY, x1, y1, depth / 2, output);
  }

  function strike() {
    const canvas = elements.boltsCanvas;
    const context = canvas.getContext('2d');
    if (!context || !canvas.width || !canvas.height) return;
    const width = canvas.width;
    const height = canvas.height;
    const color = ['#ffe14d', '#c07bff', '#4de1ff', '#ff6bd6'][Math.floor(randomBetween(0, 4))];
    const x = randomBetween(width * .3, width * .95);
    const mainSegments = [];
    const branches = [];
    drawLightningSegment(x, 0, x + randomBetween(-60, 60), height * randomBetween(.55, .92), 64, mainSegments);
    for (let index = 0; index < 4; index++) {
      const segment = mainSegments[Math.floor(randomBetween(2, mainSegments.length - 2))];
      drawLightningSegment(segment[2], segment[3], segment[2] + randomBetween(-90, 90),
        segment[3] + randomBetween(40, 110), 26, branches);
    }
    context.clearRect(0, 0, width, height);
    context.lineCap = 'round';
    context.lineJoin = 'round';
    [[16, .25, color, 26], [7, .6, color, 14], [2.4, 1, '#fff', 6]].forEach(layer => {
      context.strokeStyle = layer[2];
      context.shadowColor = color;
      context.shadowBlur = layer[3];
      context.globalAlpha = layer[1];
      [mainSegments, branches].forEach((segments, branchIndex) => {
        context.lineWidth = branchIndex ? layer[0] * .55 : layer[0];
        context.beginPath();
        segments.forEach(segment => {
          context.moveTo(segment[0], segment[1]);
          context.lineTo(segment[2], segment[3]);
        });
        context.stroke();
      });
    });
    context.globalAlpha = 1;
    canvas.animate([{ opacity: 1 }, { opacity: .15 }, { opacity: 1 }, { opacity: .4 }, { opacity: 0 }], { duration: 650 });
    elements.light.style.background = 'radial-gradient(circle at ' + (x / width * 100).toFixed(0)
      + '% 10%,' + color + ',transparent 75%)';
    elements.light.animate([{ opacity: 0 }, { opacity: .85 }, { opacity: .1 }, { opacity: .7 }, { opacity: 0 }], { duration: 650 });
    root.classList.add('shake');
    window.setTimeout(() => root.classList.remove('shake'), 400);
  }

  function startStorm(enabled) {
    stormRunning = enabled;
    window.clearTimeout(stormTimer);
    if (enabled) {
      const scheduleStrike = delay => {
        stormTimer = window.setTimeout(() => {
          if (!stormRunning) return;
          strike();
          scheduleStrike(randomBetween(1500, 4500));
        }, delay);
      };
      scheduleStrike(500);
    }
  }

  function setWeather(update) {
    Object.assign(state, update);
    render();
  }

  async function loadWeather() {
    const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=' + LATITUDE
      + '&longitude=' + LONGITUDE
      + '&current=temperature_2m,weather_code,is_day,wind_speed_10m&timezone=America%2FCosta_Rica';
    const marineUrl = 'https://marine-api.open-meteo.com/v1/marine?latitude=' + LATITUDE
      + '&longitude=' + LONGITUDE + '&current=wave_height&timezone=America%2FCosta_Rica';
    try {
      const [weatherResponse, marineResponse] = await Promise.all([fetch(weatherUrl), fetch(marineUrl)]);
      if (!weatherResponse.ok || !marineResponse.ok) {
        throw new Error('Weather API request failed (forecast ' + weatherResponse.status
          + ', marine ' + marineResponse.status + ').');
      }
      const [weather, marine] = await Promise.all([weatherResponse.json(), marineResponse.json()]);
      const current = weather.current;
      if (!current || !Number.isFinite(Number(current.temperature_2m))
        || !Number.isFinite(Number(current.weather_code))
        || !Number.isFinite(Number(current.is_day))
        || !Number.isFinite(Number(current.wind_speed_10m))) {
        throw new Error('The forecast response is missing current weather values.');
      }
      const windSpeed = Number(current.wind_speed_10m);
      const waveHeight = Number(marine.current && marine.current.wave_height);
      setWeather({
        condition: conditionFromCode(Number(current.weather_code)),
        night: Number(current.is_day) !== 1,
        temperature: Number(current.temperature_2m),
        waves: Number.isFinite(waveHeight) ? waveHeight : null,
        wind: windSpeed,
        ready: true,
        offline: false
      });
    } catch (error) {
      console.error('Could not load current surf weather.', error);
      setWeather({ ready: true, offline: true });
    }
  }

  window.wx3dSet = update => {
    const mapped = {};
    if ('cond' in update) mapped.condition = update.cond;
    if ('night' in update) mapped.night = Boolean(update.night);
    if ('city' in update) mapped.city = update.city;
    if ('temp' in update) mapped.temperature = Number(update.temp);
    if ('waves' in update) mapped.waves = Number(update.waves);
    if ('wind' in update) mapped.wind = Number(update.wind);
    if ('time' in update) mapped.localTime = update.time || null;
    mapped.ready = true;
    mapped.offline = false;
    setWeather(mapped);
  };
  window.addEventListener('resize', render);
  window.addEventListener('wavepoint:languagechange', render);
  root.addEventListener('pointermove', event => {
    const bounds = root.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    root.classList.add('is-active');
    elements.card.style.transform = 'scale(.9) rotateX(' + ((.5 - y) * 22)
      + 'deg) rotateY(' + ((x - .5) * 30) + 'deg)';
    elements.glare.style.setProperty('--gx', (x * 100) + '%');
    elements.glare.style.setProperty('--gy', (y * 100) + '%');
    root.style.setProperty('--px', (x - .5) * 2);
    root.style.setProperty('--py', (y - .5) * 2);
  });
  root.addEventListener('pointerleave', () => {
    root.classList.remove('is-active');
    elements.card.style.transform = 'scale(.9) rotateX(4deg) rotateY(-14deg)';
    root.style.setProperty('--px', 0);
    root.style.setProperty('--py', 0);
  });
  root.addEventListener('click', event => {
    const stat = event.target.closest('.wx3d-stat');
    if (stat) toggleStat(stat);
  });
  root.addEventListener('keydown', event => {
    const stat = event.target.closest('.wx3d-stat');
    if (event.key === 'Escape') {
      root.querySelectorAll('.wx3d-stat').forEach(item => toggleStat(item, false));
    } else if (stat && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      toggleStat(stat);
    }
  });
  document.addEventListener('click', event => {
    if (!root.contains(event.target)) {
      root.querySelectorAll('.wx3d-stat').forEach(item => toggleStat(item, false));
    }
  });
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionPreference.addEventListener) motionPreference.addEventListener('change', render);

  render();
  window.setInterval(() => {
    setStatValue('time', clock());
    const moon = root.querySelector('.wx3d-moon');
    if (moon) moon.style.setProperty('--moon-shadow-offset', moonShadowOffset());
  }, 30000);
  window.setInterval(loadWeather, 30 * 60 * 1000);
  loadWeather();
})();
