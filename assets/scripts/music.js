const albums = {
    'cosmic': { title: 'Cosmic Harmony', year: '2024', desc: '<p><strong>Exploração Espacial:</strong> Um mergulho em texturas sintetizadas e ritmos galácticos.</p><br><p>Tracklist sugerida:<br>• Starlink<br>• Nebula Heart</p>' },
    'everyday': { title: 'Everyday Life', year: '2019', desc: '<p><strong>Acústico:</strong> Um álbum experimental com influências de todo o mundo.</p>' },
    'dreams': { title: 'A Head Full of Dreams', year: '2015', desc: '<p><strong>Pop Vibrante:</strong> Explosão de cores e hits globais.</p>' },
    'ghost': { title: 'Ghost Stories', year: '2014', desc: '<p><strong>Introspectivo:</strong> Uma jornada melancólica através do minimalismo.</p>' }
};

function openDisco(key) {
    const a = albums[key];
    document.getElementById('dTitle').innerText = a.title;
    document.getElementById('dYear').innerText = a.year;
    document.getElementById('dDesc').innerHTML = a.desc;
    document.getElementById('discoModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDisco() {
    document.getElementById('discoModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
window.onclick = function (event) {
    if (event.target == document.getElementById('discoModal')) {
        closeDisco();
    }
}