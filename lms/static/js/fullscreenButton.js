'use strict';

$(function () {
    const fs = document.getElementById('fullscreen'),
          main = document.getElementById('course-content');

    function changeXlink(val) {
        document.querySelector('.fullscreen-button use').setAttributeNS('http://www.w3.org/1999/xlink', 'href', val);
    }

    function toggleFullScreen() {
        const fullscreen = document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;

        if (!fullscreen) {
            if (main.msRequestFullscreen) main.msRequestFullscreen();

            if (main.webkitRequestFullscreen) main.webkitRequestFullscreen();

            if (main.mozRequestFullScreen) main.mozRequestFullScreen();

            changeXlink('#ico-fs-shrink');
        } else {
            if (document.msExitFullscreen) document.msExitFullscreen();

            if (document.mozCancelFullScreen) document.mozCancelFullScreen();

            if (document.webkitExitFullscreen) document.webkitExitFullscreen();

            changeXlink('#ico-fs-expand');
        }
    }

    function onFullScreenChange() {
            const fullscreen = document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;

            if (!fullscreen) changeXlink('#ico-fs-expand');
        }

    if (fs) {
        fs.addEventListener('click', toggleFullScreen);
        document.addEventListener("fullscreenchange", onFullScreenChange, false);
        document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
        document.addEventListener("mozfullscreenchange", onFullScreenChange, false);
        document.addEventListener('MSFullscreenChange', onFullScreenChange, false);
    }
});
