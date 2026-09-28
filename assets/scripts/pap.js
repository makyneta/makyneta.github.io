(() => {
  const progress = document.getElementById('progress');
  const videoFrame = document.querySelector('.video-frame');
  const videoTrigger = document.querySelector('.video-trigger');

  function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(percentage, 100)}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  videoTrigger.addEventListener('click', () => {
    const videoId = videoFrame.dataset.videoId;
    const player = document.createElement('iframe');
    player.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
    player.title = 'Reportagem: Inteligência Artificial no Ensino';
    player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    player.allowFullscreen = true;
    videoFrame.replaceChildren(player);
  }, { once: true });
})();