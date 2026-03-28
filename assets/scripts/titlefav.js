document.title = `${PROJECT.title} | Makyneta by Tomás Mota`;

function setFavicon(url) {
  // Garante que o DOM está pronto
  const head = document.head || document.getElementsByTagName('head')[0];
  
  let link = document.querySelector("link[rel~='icon']");

  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    head.appendChild(link);
  }

  link.href = url + '?v=' + Date.now(); // força reload, evita cache
}

setFavicon('/favicon.png');