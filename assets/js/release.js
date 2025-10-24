document.addEventListener('DOMContentLoaded', () => {
  const albumCover = document.getElementById('album-cover');
  const modal = document.getElementById('yt-modal');
  const closeModal = document.getElementById('close-modal');
  const ytVideo = document.getElementById('yt-video');

  albumCover.addEventListener('click', () => {
    const videoUrl = albumCover.dataset.video;
    ytVideo.src = videoUrl + "?autoplay=1";
    modal.classList.remove('opacity-0', 'pointer-events-none');
  });

  closeModal.addEventListener('click', () => {
    ytVideo.src = "";
    modal.classList.add('opacity-0', 'pointer-events-none');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      ytVideo.src = "";
      modal.classList.add('opacity-0', 'pointer-events-none');
    }
  });
});