const myIMAGES = 5;
let myGallery = document.getElementById("gallery");
for (let i = 0; i <= myIMAGES; i++) {
    let img = document.createElement("img");
    img.src = "pictures/kissel" + i + ".jpeg";
    myGallery.appendChild(img);
}
