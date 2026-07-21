const start = () => document.getElementById('bgm').play();
['click', 'touchstart'].forEach(e => window.addEventListener(e, start, { once: true }));
