document.addEventListener('DOMContentLoaded', function () {
    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }

    var camTcs = document.querySelectorAll('.cam-tc');
    if (camTcs.length) {
        setInterval(function () {
            var d = new Date();
            var ts = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
            for (var i = 0; i < camTcs.length; i++) {
                camTcs[i].textContent = ts;
            }
        }, 1000);
    }

    var cams = document.querySelectorAll('.cam-wall .cam');
    var camIndex = document.querySelector('.cam-index');
    var staticCv = document.querySelector('.cam-static');
    var staticCtx = staticCv ? staticCv.getContext('2d') : null;
    var camCur = 0;
    var staticTimer = null;
    var switchTimer = null;

    function sizeStatic() {
        if (!staticCv) return;
        var rect = staticCv.parentElement.getBoundingClientRect();
        staticCv.width = Math.max(2, Math.round(rect.width));
        staticCv.height = Math.max(2, Math.round(rect.height));
    }

    function staticBurst(duration) {
        if (!staticCtx) return;
        staticCv.style.opacity = 1;
        clearInterval(staticTimer);
        var start = performance.now();
        staticTimer = setInterval(function () {
            if (performance.now() - start > duration) {
                clearInterval(staticTimer);
                staticCv.style.opacity = 0;
                return;
            }
            var w = staticCv.width;
            var h = staticCv.height;
            var img = staticCtx.createImageData(w, h);
            var d = img.data;
            for (var p = 0; p < d.length; p += 4) {
                var v = (Math.random() * 255) | 0;
                d[p] = v;
                d[p + 1] = v;
                d[p + 2] = v;
                d[p + 3] = 255;
            }
            staticCtx.putImageData(img, 0, 0);
        }, 50);
    }

    function playCam(i) {
        var v = cams[i].querySelector('video');
        if (!v) return;
        try { v.currentTime = 0; } catch (e) {}
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
    }

    if (cams.length) {
        sizeStatic();
        window.addEventListener('resize', sizeStatic);
        playCam(0);
        if (cams.length > 1) {
            setInterval(function () {
                staticBurst(500);
                clearTimeout(switchTimer);
                switchTimer = setTimeout(function () {
                    var old = cams[camCur];
                    var oldV = old.querySelector('video');
                    if (oldV) oldV.pause();
                    old.classList.remove('active');
                    camCur = (camCur + 1) % cams.length;
                    cams[camCur].classList.add('active');
                    playCam(camCur);
                    if (camIndex) {
                        camIndex.textContent = pad(camCur + 1) + '/' + pad(cams.length);
                    }
                }, 350);
            }, 6000);
        }
    }
});
