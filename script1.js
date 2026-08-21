const bgm = document.getElementById('bgm');
const btn = document.getElementById('bgmBtn');
const txt = document.getElementById('bgmText');

const setPlayingState = (isPlaying) => {
    btn.dataset.playing = isPlaying;
    txt.textContent = isPlaying ? 'Sound On' : 'Sound Off';
};

const toggleBgm = (e) => {
    e?.stopPropagation();
    if(!bgm) return;

    if (bgm.paused) {
        bgm.play().then(() => setPlayingState(true)).catch(() => {});
    } else {
        bgm.pause();
        setPlayingState(false);
    }
};
const startBgm = () => {
    if (bgm && bgm.paused) {
        bgm.play().then(() => setPlayingState(true)).catch(() => {});
    }
};

['click', 'touchstart'].forEach(event => window.addEventListener(event, startBgm, { once: true }));
btn.addEventListener('click', toggleBgm);

