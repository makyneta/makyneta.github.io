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

  // Cria o banner — terminal window
  function createBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Consentimento de cookies');
    banner.innerHTML = `
      <div class="ck-bar">
        <span class="ck-dot r"></span>
        <span class="ck-dot y"></span>
        <span class="ck-dot g"></span>
        <span class="ck-title"><span class="ck-prompt">makyneta@</span>consent — cookies</span>
      </div>
      <div class="ck-body">
        <div class="ck-line"><span class="ck-prompt">$</span><span class="ck-cmd">cat ~/.config/makyneta/cookies.conf</span></div>
        <div class="ck-comment"># config: consentimento de cookies</div>
        <p class="ck-text">
          Este site utiliza cookies para melhorar a tua experi\u00eancia e analisar o desempenho.
          <span class="hl">Os cookies essenciais est\u00e3o sempre ativos;</span> os restantes apenas com a tua autoriza\u00e7\u00e3o.
        </p>
        <a class="ck-link" href="legal/cookies-policy">&#8594; ver pol\u00edtica de cookies</a>
      </div>
      <div class="ck-status" id="cookie-status">
        <span class="dot"></span> estado: a aguardar decis\u00e3o
      </div>
      <div class="ck-actions">
        <button id="cookie-reject" class="ck-btn reject">recusar</button>
        <button id="cookie-accept" class="ck-btn accept">aceitar</button>
      </div>
    `;
    document.body.appendChild(banner);

    // Event listeners
    document.getElementById('cookie-accept').addEventListener('click', acceptCookies);
    document.getElementById('cookie-reject').addEventListener('click', rejectCookies);
    document.getElementById('cookie-accept').focus();
  }

  // Regista a decisão do utilizador
  function decide(accepted) {
    setCookie(COOKIE_NAME, accepted ? 'true' : 'false', COOKIE_EXPIRY);

    const status = document.getElementById('cookie-status');
    if (status) {
      status.classList.add('saved');
      status.innerHTML = '<span class="dot"></span> estado: consentimento guardado';
    }

    if (accepted) loadGoogleAnalytics();
    setTimeout(removeBanner, 700);
  }

  // Aceita cookies e inicia Google Analytics
  function acceptCookies() {
    decide(true);
  }

  // Rejeita cookies
  function rejectCookies() {
    decide(false);
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