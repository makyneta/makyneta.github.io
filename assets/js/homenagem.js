document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("tribute-audio");

  // Toca a música quando o utilizador interage (necessário em alguns browsers)
  const enableAudio = () => {
    audio.play().catch(() => console.log("Autoplay bloqueado"));
    document.removeEventListener("click", enableAudio);
  };
  document.addEventListener("click", enableAudio);
});
