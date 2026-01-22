        // Cursor
        const cursor = document.getElementById('cursor');
        const items = document.querySelectorAll('.gallery-item');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        items.forEach(item => {
            item.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            item.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });

        items.forEach(el => observer.observe(el));

        // Modal
        const modal = document.getElementById('galleryModal');
        const container = document.getElementById('modalImages'); 
        const title = document.getElementById('modalTitle');

        const data = {
            'fashion': ['https://picsum.photos/seed/vogue/800/1000', 'https://picsum.photos/seed/street/800/1000', 'https://picsum.photos/seed/art1/800/1000'],
            'portrait': ['https://picsum.photos/seed/man/800/1000', 'https://picsum.photos/seed/woman/800/1000']
        };

        function openModal(key) {
            container.innerHTML = ''; title.innerText = key === 'fashion' ? 'Fashion Collection' : 'Portraits';
            data[key].forEach(url => {
                const img = document.createElement('img'); img.src = url; img.className = 'modal-img'; container.appendChild(img);
            });
            modal.classList.add('active'); document.body.style.overflow = 'hidden';
        }

        function closeModal() { 
            modal.classList.remove('active'); 
            document.body.style.overflow = 'auto'; 
        }