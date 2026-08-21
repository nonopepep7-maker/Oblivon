const scenesList = [
    {
        id: 'scene1',
        label: 'Panorama 1 of 20',
        url: "https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg"
    },
    {
        id: 'scene2',
        label: 'Panorama 2 of 20',
        url: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/2294472375_24a3b8ef46_o.jpg"
    },
    {
        id: 'scene3',
        label: 'Panorama 3 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/zwinger_night.jpg"
    },
    {
        id: 'scene4',
        label: 'Panorama 4 of 20',
        url: "https://photo-sphere-viewer-data.netlify.app/assets/sphere-night.jpg"
    },
    {
        id: 'scene5',
        label: 'Panorama 5 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/canary_wharf.jpg"
    },
    {
        id: 'scene6',
        label: 'Panorama 6 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/venice_sunset.jpg"
    },
    {
        id: 'scene7',
        label: 'Panorama 7 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/kloppenheim_05.jpg"
    },
    {
        id: 'scene8',
        label: 'Panorama 8 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/kloppenheim_04.jpg"
    },
    {
        id: 'scene9',
        label: 'Panorama 9 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/kloppenheim_03.jpg"
    },
    {
        id: 'scene10',
        label: 'Panorama 10 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/kloppenheim_02.jpg"
    },
    {
        id: 'scene11',
        label: 'Panorama 11 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/kloppenheim_01.jpg"
    },
    {
        id: 'scene12',
        label: 'Panorama 12 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/cape_hill.jpg"
    },
    {
        id: 'scene13',
        label: 'Panorama 13 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/limpopo_golf_course.jpg"
    },
    {
        id: 'scene14',
        label: 'Panorama 14 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/photo_studio_01.jpg"
    },
    {
        id: 'scene15',
        label: 'Panorama 15 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/abandoned_hall_01.jpg"
    },
    {
        id: 'scene16',
        label: 'Panorama 16 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/drakensberg_solitary_mountain.jpg"
    },
    {
        id: 'scene17',
        label: 'Panorama 17 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/piazza_san_marco.jpg"
    },
    {
        id: 'scene18',
        label: 'Panorama 18 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/belfast_farmhouse.jpg"
    },
    {
        id: 'scene19',
        label: 'Panorama 19 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/aerodynamics_workshop.jpg"
    },
    {
        id: 'scene20',
        label: 'Panorama 20 of 20',
        url: "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/industrial_sunset.jpg"
    },
    

    
];

let currentIndex = 0;

const viewer = pannellum.viewer('panorama', {
    "default":{
    "type": "equirectangular",
    "firstScene": scenesList[0].id,
    "autoLoad": true,
    "autoRotate": -2,
    "hfov": 100,
    "minHfov": 100,
    "maxHfov": 100,
    "showZoomCtrl": false,
    "showFullscreenCtrl": false
},
"scenes": {
    "scene1": {
        "type": "equirectangular",
        "panorama": scenesList[0].url
    },
    "scene2": {
        "type": "equirectangular",
        "panorama": scenesList[1].url
    },
    "scene3": {
        "type": "equirectangular",
        "panorama": scenesList[2].url
    },
    "scene4": {
        "type": "equirectangular",
        "panorama": scenesList[3].url
    },
    "scene5": {
        "type": "equirectangular",
        "panorama": scenesList[4].url
    },
    "scene6": {
        "type": "equirectangular",
        "panorama": scenesList[5].url
    },
    "scene7": {
        "type": "equirectangular",
        "panorama": scenesList[6].url
    },
    "scene8": {
        "type": "equirectangular",
        "panorama": scenesList[7].url
    },
    "scene9": {
        "type": "equirectangular",
        "panorama": scenesList[8].url
    },
    "scene10": {
        "type": "equirectangular",
        "panorama": scenesList[9].url
    },
    "scene11": {
        "type": "equirectangular",
        "panorama": scenesList[10].url
    },
    "scene12": {
        "type": "equirectangular",
        "panorama": scenesList[11].url
    },
    "scene13": {
        "type": "equirectangular",
        "panorama": scenesList[12].url
    },
    "scene14": {
        "type": "equirectangular",
        "panorama": scenesList[13].url
    },
    "scene15": {
        "type": "equirectangular",
        "panorama": scenesList[14].url
    },
    "scene16": {
        "type": "equirectangular",
        "panorama": scenesList[15].url
    },
    "scene17": {
        "type": "equirectangular",
        "panorama": scenesList[16].url
    },
    "scene18": {
        "type": "equirectangular",
        "panorama": scenesList[17].url
    },
    "scene19": {
        "type": "equirectangular",
        "panorama": scenesList[18].url
    },
    "scene20": {
        "type": "equirectangular",
        "panorama": scenesList[19].url
    },
}
});

function loadCurrentScene() {
    viewer.loadScene(scenesList[currentIndex].id);
    document.getElementById('scene-indicator').innerText = scenesList[currentIndex].label;
}

function nextPanorama() {
    currentIndex = (currentIndex + 1) % scenesList.length;
    loadCurrentScene();
}

function prevPanorama () {
    currentIndex = (currentIndex - 1 + scenesList.length) % scenesList.length;
    loadCurrentScene();
}

const projects = [
    { cat: 'Web', title: 'My First Website', desc: 'just normal things here..but sm impressive too', icon: `<img src="https://images.icon-icons.com/81/PNG/256/arrow_top_15603.png" class="w-5 h-5 object-contain rounded-sm" alt="icon">`, url: 'https://nonopepep7-maker.github.io/Web-collection/' },
    { cat: 'Web', title: 'Nirdesh OS', desc: 'A perfect os with Camera Gallery and functional apps .Check this to explore', icon: `<img src="https://nonopepep7-maker.github.io/Nirdesh-OS/favicon.ico" class="w-5 h-5 object-contain rounded-sm" alt="icon">`, url: 'https://nonopepep7-maker.github.io/Nirdesh-OS/' },
    { cat: 'Game', title: 'My Game', desc: 'Interactive browser game experience.', icon: `<svg class="w-5 h-5 fill-amber-400" viewBox="0 0 24 24"><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-7C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>` },
    { cat: 'Other', title: 'Other tools', desc: 'Utility scripts and web tools.', icon: `<svg class="w-5 h-5 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L18.8 8 12 11.2 5.2 8 12 4.8zM4 9.3l7 3.3v6.6l-7-3.5V9.3zm16 6.4l-7 3.5v-6.6l7-3.3v6.4z"/></svg>` }
];

const cats = ['All', 'Web', 'App', 'Game', 'Other'];
let mode = 'grid', activeCat = 'All', idx = 0, isOpen = false;
let audioCtx = null;

function playSnd() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.frequency.setValueAtTime(320, audioCtx.currentTime);
    o.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.07);
    g.gain.setValueAtTime(0.1, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.07);
    o.connect(g);
    g.connect(audioCtx.destination);
    o.start();
    o.stop(audioCtx.currentTime + 0.07);
}

function toggleModal(open) {
    isOpen = open;
    const modal = document.getElementById('modal');
    modal.classList.toggle('opacity-0', !open);
    modal.classList.toggle('pointer-events-none', !open);
    if (open) playSnd();
}

function setMode(m) {
    mode = m;
    document.getElementById('btnGrid').className = `px-2.5 py-1 rounded-md transition ${m === 'grid' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400 hover:text-slate-200'}`;
    document.getElementById('btnDeck').className = `px-2.5 py-1 rounded-md transition ${m === 'deck' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400 hover:text-slate-200'}`;
    playSnd();
    render();
}

function getFilteredList() {
    const q = document.getElementById('search').value.toLowerCase().trim();
    return projects.filter(c =>
        (activeCat === 'All' || c.cat.toLowerCase() === activeCat.toLowerCase()) &&
        (c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q))
    );
}

function render() {
    const list = getFilteredList();
    document.getElementById('count').textContent = list.length;
    document.getElementById('categories').innerHTML = cats.map(c => `
        <button onclick="activeCat='${c}'; playSnd(); render();"
            class="px-2.5 py-1 rounded-md border text-xs transition ${c === activeCat ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-semibold' : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'}">${c}</button>
    `).join('');

    const box = document.getElementById('box');
    const deckNav = document.getElementById('deckNav');

    if (!list.length) {
        deckNav.classList.add('hidden');
        deckNav.classList.remove('flex');
        return box.innerHTML = `<p class="text-center text-slate-500 py-8 text-xs">No projects found</p>`;
    }

    if (mode === 'grid') {
        deckNav.classList.add('hidden');
        deckNav.classList.remove('flex');
        box.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">` +
            list.map(c => `
                <a href="${c.url || '#'}" target="_blank" rel="noopener noreferrer"
                   class="p-3 bg-slate-950/40 border border-white/10 hover:border-amber-500/40 rounded-xl flex items-center gap-3 transition group">
              <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">${c.icon}</div>     
              <div class="overflow-hidden">
                <h4 class="font-bold text-slate-200 text-xs truncate">${c.title}</h4>
                <p class="text-[11px] text-slate-400 truncate mt-0.5">${c.desc}</p>
              </div>
            </a>`).join('') + `</div>`;
    } else {
        idx = Math.min(idx, list.length - 1);
        if (idx < 0) idx = 0;
        const c = list[idx];
        deckNav.classList.remove('hidden');
        deckNav.classList.add('flex');
        box.innerHTML = `
          <a href="${c.url || '#'}" target="_blank" rel="noopener noreferrer"
             class="p-5 bg-slate-950/40 border border-white/10 hover:border-amber-500/40 rounded-xl flex items-center gap-4 transition group">
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">${c.icon}</div>
            <div>
              <span class="text-[9px] font-mono uppercase tracking-wider text-amber-400/80">${c.cat}</span>
              <h4 class="font-bold text-slate-100 text-sm">${c.title}</h4>
              <p class="text-xs text-slate-300/80 mt-0.5">${c.desc}</p>
            </div>
          </a>`;
        document.getElementById('dots').innerHTML = list.map((_, i) => `<div class="h-1 rounded-full transition-all ${i === idx ? 'w-5 bg-amber-400' : 'w-1 bg-white/20'}"></div>`).join('');
    }
}

function go(dir) {
    const list = getFilteredList();
    if (!list.length) return;
    idx = (idx + dir + list.length) % list.length;
    playSnd();
    render();
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) toggleModal(false);
    if (!isOpen || document.activeElement === document.getElementById('search') || mode !== 'deck') return;
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
});

render();
