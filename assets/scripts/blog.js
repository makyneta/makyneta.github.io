document.addEventListener('DOMContentLoaded', async () => {
    
    // --- 1. CONFIGURAÇÃO (Lógica de Interface - Fica no JS) ---
    const categories = [
        { id: 'all', label: 'All Categories', themeClass: 'theme-all' },
        { id: 'dev', label: 'Development', themeClass: 'theme-dev' },
        { id: 'work', label: 'Work / Portfolio', themeClass: 'theme-work' },
        { id: 'professional', label: 'Career', themeClass: 'theme-professional' },
        { id: 'personal', label: 'Personal', themeClass: 'theme-personal' },
        { id: 'design', label: 'Design', themeClass: 'theme-design' } 
    ];

    // Variável global para guardar os artigos carregados
    let articlesData = [];

    // --- 2. ELEMENTOS DO DOM ---
    const cardsGrid = document.getElementById('cardsGrid');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');
    const dropdownTrigger = document.getElementById('dropdownTrigger');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownArrow = document.getElementById('dropdownArrow');
    const categoryList = document.getElementById('categoryList');
    const selectedText = document.getElementById('selectedText');

    let currentCategory = 'all';

    // --- 3. CARREGAR DADOS DO JSON (Fetch) ---
    async function loadArticles() {
        try {
            const response = await fetch('../assets/data/blog.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            articlesData = await response.json();

            // --- NOVO: ORDENAR PELO ID (MAIOR NUMERO PRIMEIRO) ---
            // Isso garante que o ID 6 fique antes do ID 5, etc.
            articlesData.sort((a, b) => b.id - a.id); 

            renderArticles();
            
        } catch (error) {
            console.error('Erro ao carregar artigos:', error);
            cardsGrid.innerHTML = `<p class="text-red-500">Error to load articles.</p>`;
        }
    }

    // --- 4. RENDERIZAR CARDS ---
    function renderArticles() {
        cardsGrid.innerHTML = ''; // Limpa grid

        articlesData.forEach(article => {
            // Mapeia a categoria do JSON para a classe CSS
            const catConfig = categories.find(c => c.id === article.category);
            const themeClass = catConfig ? catConfig.themeClass : 'theme-all';

            const articleHTML = `
                <article class="blog-card group" data-category="${article.category}">
                    <div class="relative overflow-hidden aspect-[16/10]">
                        <img src="${article.image}" class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" alt="${article.title}">
                        <!-- A cor vem do CSS através da classe themeClass -->
                        <span class="badge-pill ${themeClass} absolute top-4 left-4">${article.category.toUpperCase()}</span>
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="text-xs font-mono text-gray-500 mb-3 flex items-center">
                            <span>${article.date}</span>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-[current] transition-colors">${article.title}</h3>
                        <p class="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">${article.excerpt}</p>
                        <div class="mt-auto">
                            <a href="${article.link}" target="_blank" class="inline-flex items-center text-xs font-bold text-white uppercase tracking-widest hover:text-[current] transition-colors">Read Article &rarr;</a>
                        </div>
                    </div>
                </article>
            `;
            
            cardsGrid.insertAdjacentHTML('beforeend', articleHTML);
        });

        window.currentCards = document.querySelectorAll('.blog-card');
        renderDropdown();
    }

    // --- 5. RENDERIZAR DROPDOWN (Baseado nos dados reais) ---
    function renderDropdown() {
        categoryList.innerHTML = '';
        // Descobre quais categorias existem no JSON
        const availableCats = new Set(articlesData.map(a => a.category));

        categories.forEach(cat => {
            const isAvailable = cat.id === 'all' || availableCats.has(cat.id);

            if (isAvailable) {
                const li = document.createElement('li');
                const btn = document.createElement('button');
                btn.className = `dropdown-item group w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 ${cat.themeClass}`;
                btn.setAttribute('data-value', cat.id);
                btn.setAttribute('data-label', cat.label);
                
                btn.innerHTML = `
                    <span class="dropdown-dot w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"></span>
                    <span class="font-medium text-gray-300 group-hover:text-white transition-colors">${cat.label}</span>
                `;

                btn.addEventListener('click', () => selectCategory(cat));
                li.appendChild(btn);
                categoryList.appendChild(li);
            }
        });
    }

    // --- 6. FUNÇÃO DE FILTRAGEM ---
    function filterCards() {
        const searchTerm = searchInput.value.toLowerCase();
        let visibleCount = 0;

        if (window.currentCards) {
            window.currentCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const cardCategory = card.getAttribute('data-category');

                const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
                const matchesCategory = currentCategory === 'all' || cardCategory === currentCategory;

                if (matchesSearch && matchesCategory) {
                    card.style.display = 'flex';
                    setTimeout(() => card.style.opacity = '1', 50);
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
        }
        
        noResults.classList.toggle('hidden', visibleCount > 0);
    }

    // --- 7. CONTROLES DO DROPDOWN ---
    function selectCategory(cat) {
        currentCategory = cat.id;
        selectedText.innerText = cat.label;
        selectedText.className = `text-sm font-medium ${cat.themeClass}`;
        closeDropdown();
        filterCards();
    }

    dropdownTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdownMenu.classList.contains('show');
        isOpen ? closeDropdown() : openDropdown();
    });

    function openDropdown() {
        dropdownMenu.classList.add('show');
        dropdownArrow.classList.add('rotate-180');
        dropdownTrigger.classList.add('bg-white/5');
    }

    function closeDropdown() {
        dropdownMenu.classList.remove('show');
        dropdownArrow.classList.remove('rotate-180');
        dropdownTrigger.classList.remove('bg-white/5');
    }

    document.addEventListener('click', (e) => {
        if (!dropdownTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) closeDropdown();
    });

    // --- INICIALIZAÇÃO ---
    loadArticles(); // Carrega o JSON primeiro
    searchInput.addEventListener('input', filterCards);
});