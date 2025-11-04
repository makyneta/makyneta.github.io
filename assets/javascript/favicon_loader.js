// Arquivo: favicon_loader.js

// 1. Defina o caminho central do seu favicon
// Se o caminho for fixo, defina-o aqui:
const FAVICON_PATH = "/src/img/1010022021904.jpg"; 
const FAVICON_TYPE = "image/jpg";

// Se você carrega o caminho de um arquivo .html, use o seu método original:
fetch("/includes/favicon.html")
    .then(response => response.text())
    .then(html => {
        // Supondo que "html" contenha APENAS a tag: <link rel="icon" href="/caminho/novo.png" type="image/png" />
        
        // CUIDADO: O innerHTML só funciona para adicionar texto,
        // mas é MUITO melhor e mais seguro manipular o elemento Link diretamente.

        // Vamos usar uma abordagem mais robusta para garantir que funcione:
        
        // 1. Tenta encontrar se o link já existe (para evitar duplicatas)
        let faviconLink = document.querySelector('link[rel="icon"]');

        // 2. Se não existir, cria o elemento <link>
        if (!faviconLink) {
            faviconLink = document.createElement('link');
            faviconLink.rel = 'icon';
            document.head.appendChild(faviconLink); // Adiciona ao <head>
        }

        // 3. Define o atributo 'href' com o caminho que você obteve do fetch
        // (Você precisará analisar o conteúdo de 'html' para extrair o URL se for um arquivo HTML completo)
        
        // Se o seu /includes/favicon.html tiver APENAS o caminho:
        // Exemplo: se o fetch retornar "novo_caminho/icon.png"
        const finalFaviconURL = html.trim(); // ou extrair de alguma forma mais complexa
        
        // Se você usa o caminho FIXO (método mais simples):
        // const finalFaviconURL = FAVICON_PATH;

        faviconLink.href = finalFaviconURL;
        faviconLink.type = FAVICON_TYPE; 

        console.log(`Favicon centralizado injetado: ${finalFaviconURL}`);
    })
    .catch(err => console.error('Erro ao carregar favicon:', err));