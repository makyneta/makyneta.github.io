(function () {
  var timetableImage = document.querySelector('.timetable-image img');
  if (!timetableImage) return;

  timetableImage.addEventListener('load', function () {
    timetableImage.parentElement.classList.add('is-loaded');
  });
})();