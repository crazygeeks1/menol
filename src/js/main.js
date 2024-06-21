// main.js

function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

// List of scripts to load
const scripts = [
    'src/js/components/accordion.js',
    'src/js/components/header.js',
    'src/js/components/footer.js',
    'src/js/components/megamenu.js',
    'src/js/components/hero.js',
    'src/js/components/brand-video.js',
    'src/js/components/timeline.js',
    'src/js/components/video-light-box.js',
    'src/js/components/video-play-pause.js',
    'src/js/components/video-play-sound.js',
    'src/js/components/hide-controls.js',
];

// Load scripts sequentially
let index = 0;

function loadNextScript() {
    if (index < scripts.length) {
        loadScript(scripts[index], loadNextScript);
        index++;
    }
}

// Start loading scripts
loadNextScript();
