"use strict";
let gallery = document.getElementById("gallery");
let images = gallery.getElementsByTagName("img");
for (let elem of images) {
    elem.addEventListener("click", () => {
        openFulscreen(elem);
    });
}
function openFulscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
}
