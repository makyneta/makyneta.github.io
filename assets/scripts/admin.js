        // JavaScript for Client-Side Login Logic
        const CORRECT_PASSWORD_1 = 'makyneta';
        const CORRECT_PASSWORD_2 = 'tomasmota';

        function checkPassword() {
            const passwordInput = document.getElementById('password-input').value.trim();
            const loginSection = document.getElementById('login-section');
            const contentSection = document.getElementById('content-section');
            const loginMessage = document.getElementById('login-message');

            if (passwordInput === CORRECT_PASSWORD_1 || passwordInput === CORRECT_PASSWORD_2) {
                // Correct Password: Hide login, show content
                loginSection.style.display = 'none';
                contentSection.style.display = 'block';
                // Scroll to Projects (Primeira seção de conteúdo)
                document.getElementById('projects-section').scrollIntoView(); 
            } else {
                // Incorrect Password
                loginMessage.textContent = '❌ Invalid Credentials. Please try again.';
                document.getElementById('password-input').value = '';
                setTimeout(() => {
                    loginMessage.textContent = '';
                }, 3000);
            }
        }
        
        function logout() {
            if (confirm("Are you sure you want to log out of the panel?")) {
                // Clear password, hide content, show login
                document.getElementById('password-input').value = '';
                document.getElementById('content-section').style.display = 'none';
                document.getElementById('login-section').style.display = 'flex';
                // Scroll to top of the page
                window.scrollTo(0, 0); 
            }
        }
        
        // --- Mobile Menu Functions (Open/Close Navigation) ---
        const nav = document.getElementById('admin-nav');
        const menuToggle = document.querySelector('.menu-toggle');
        
        function toggleMenu() {
            nav.classList.toggle('open');
            // Altera o ícone do menu
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        }

        function closeMenu() {
            // Fecha o menu após o clique (se estiver aberto)
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
                // Restaura o ícone para barras
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        }
        
        // Adiciona um estilo para o menu mobile na própria tag style para evitar problemas
        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = `
            @media (max-width: 768px) {
                /* CORREÇÃO CRÍTICA AQUI: Usar left: 15px e right: 15px para forçar o alinhamento */
                #admin-nav {
                    display: none;
                    flex-direction: column;
                    position: absolute;
                    top: 52px; 
                    left: 15px;  
                    right: 15px; 
                    width: auto; 
                    background-color: var(--color-dark-gray);
                    border-top: 1px solid var(--color-border);
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
                    padding-bottom: 10px;
                }
                #admin-nav.open {
                    display: flex;
                }
                #admin-nav a {
                    margin: 10px 0; 
                    padding: 8px 15px; 
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    text-align: right;
                }
                #admin-nav a:last-child {
                    border-bottom: none;
                }
                .menu-toggle {
                    display: block;
                }
            }
        `;
        document.head.appendChild(styleSheet);


        // Ensures only the login screen is visible on initial load
        window.onload = function() {
             document.getElementById('content-section').style.display = 'none';
             document.getElementById('login-section').style.display = 'flex';
        };