(() => {
  const footer = document.querySelector('.site-footer');
  if (!footer) return;

  const video = document.createElement('video');
  video.className = 'footer-video';
  video.setAttribute('aria-hidden', 'true');
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.poster = 'assets/hero.jpg';
  video.src = 'assets/videoheroxx3.mp4';
  footer.prepend(video);

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileViewport = window.matchMedia('(max-width: 760px)');
  let animationFrame = 0;

  const updateParallax = () => {
    animationFrame = 0;
    if (motionPreference.matches || mobileViewport.matches) {
      video.style.transform = '';
      return;
    }
    const bounds = footer.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)));
    const offset = (progress - 0.5) * footer.offsetHeight * 0.14;
    video.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  };

  const scheduleParallax = () => {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(updateParallax);
  };

  const updateMotion = () => {
    if (motionPreference.matches) {
      video.pause();
      video.style.transform = '';
    } else {
      video.play().catch(error => {
        console.warn('Footer background video could not play; displaying the poster instead.', error);
      });
      scheduleParallax();
    }
  };

  window.addEventListener('scroll', scheduleParallax, { passive: true });
  window.addEventListener('resize', scheduleParallax);
  motionPreference.addEventListener?.('change', updateMotion);
  mobileViewport.addEventListener?.('change', scheduleParallax);
  video.addEventListener('loadeddata', scheduleParallax, { once: true });
  updateMotion();
})();
