const input = document.querySelector("#phone");
  const iti = window.intlTelInput(input, {
    initialCountry: "br", // país inicial (Brasil)
    preferredCountries: ["br", "us", "pt"], // favoritos no topo
    onlyCountries: ["br", "us", "pt"], // restringir se quiser
    separateDialCode: true, // mostra o código separado
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
  });

  // Validação no submit
  input.form.addEventListener("submit", function(e) {
    if (!iti.isValidNumber()) {
      e.preventDefault();
      alert("Por favor, insira um número de telefone válido!");
    }
  });