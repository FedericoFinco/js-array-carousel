
let sliderElement = document.getElementById("slider");
let album=["./img/03.webp"]
// ,"./img/02.webp","./img/03.webp"
// let x = document.createElement("img");
// x.src = album
// x.className = "slide hidden";
// sliderElement.append(x);

for (let i = 0; i < album.length; i++) {
    const image = album[i];
    let x = document.createElement("img");
    x.src = image
    x.className = "slide hidden";
    sliderElement.append(x);
}