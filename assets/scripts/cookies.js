(function() {
  const COOKIE_NAME = 'makyneta_cookies_accepted';
  const COOKIE_EXPIRY = 365; // dias

  // Verifica se o user já aceitou (melhoria)
  function hasCookieConsent() {
    const cookieString = document.cookie;
    const name = COOKIE_NAME + '=';
    const decodedCookie = decodeURIComponent(cookieString);
    const cookieArray = decodedCookie.split(';');
    
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        const value = cookie.substring(name.length, cookie.length);
        return value === 'true';
      }
    }
    return false;
  }

  // Cria o banner
  function createBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-content">
        <div class="cookie-text">
          <p><strong>🍪 Cookie Consent</strong></p>
          <p>We use cookies to enhance your experience and analyze site performance. By accepting, you agree to our use of cookies.</p>
        </div>
        <div class="cookie-buttons">
          <button id="cookie-reject" class="cookie-btn reject">Decline</button>
          <button id="cookie-accept" class="cookie-btn accept">Accept</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    // Event listeners
    document.getElementById('cookie-accept').addEventListener('click', acceptCookies);
    document.getElementById('cookie-reject').addEventListener('click', rejectCookies);
  }

  // Aceita cookies e inicia Google Analytics
  function acceptCookies() {
    setCookie(COOKIE_NAME, 'true', COOKIE_EXPIRY);
    removeBanner();
    loadGoogleAnalytics();
  }

  // Rejeita cookies
  function rejectCookies() {
    setCookie(COOKIE_NAME, 'false', COOKIE_EXPIRY);
    removeBanner();
  }

  // Define cookie com configuração melhorada
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    const domain = window.location.hostname;
    document.cookie = `${name}=${value};${expires};path=/;domain=${domain};SameSite=Lax;Secure`;
  }

  // Remove banner
  function removeBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.classList.add('hide');
      setTimeout(() => banner.remove(), 400);
    }
  }

  // Carrega Google Analytics
  function loadGoogleAnalytics() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-YOUR_MEASUREMENT_ID', {
      'anonymize_ip': true,
      'allow_google_signals': false,
      'allow_ad_personalization_signals': false
    });
  }

  // Inicia na página com verificação melhorada
  function init() {
    if (hasCookieConsent()) {
      // Cookie já existe e é 'true', carrega GA
      loadGoogleAnalytics();
    } else {
      // Cookie não existe ou é 'false', mostra banner
      createBanner();
    }
  }

  // Espera o DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();