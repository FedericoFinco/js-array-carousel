
let sliderElement = document.getElementById("slider");
let sideSliderElement = document.getElementById("sideSlider");
let album=["./img/01.webp","./img/02.webp","./img/03.webp","./img/04.webp","./img/05.webp"]
// ,"./img/02.webp","./img/03.webp"
// let x = document.createElement("img");
// x.src = album
// x.className = "slide hidden";
// sliderElement.append(x);

let btnBack = document.getElementById("btnBack");
let btnNext = document.getElementById("btnNext");
let nextSlide= 1


for (let i = 0; i < album.length; i++) {
    const image = album[i];
    let x = document.createElement("img");
    x.src = image
    x.className = "slide hidden";
    sliderElement.append(x);
    let y = document.createElement("img");
    y.src = image
    y.className = "sideImg opacity05";
    sideSliderElement.append(y);
}
let slideElements = document.getElementsByClassName("slide");
let sideElements = document.getElementsByClassName("sideImg");
slideElements[0].classList.remove("hidden")
sideElements[0].classList.add("greenBorder")
sideElements[0].classList.remove("opacity05")
console.log(slideElements)
btnNext.addEventListener("click", function(){

    console.log("Current Slide: ", nextSlide);

        for (let c = 0; c < slideElements.length; c++) {
            const slide = slideElements[c];
            const sideSlide= sideElements[c]
            if(c == nextSlide ) {
                slide.classList.remove("hidden");
                sideSlide.classList.add("greenBorder")
                sideSlide.classList.remove("opacity05")
                console.log("Slide corrente: " + c + " -> Va visualizzata");
            } else {
                slide.classList.add("hidden");
                console.log("Slide corrente: " + c + " -> Va nascosta");
                sideSlide.classList.add("opacity05")
                sideSlide.classList.remove("greenBorder")
            }
        }
    

    nextSlide++;
    console.log(nextSlide)

    if (nextSlide>4) {
        nextSlide=0
    }
})

btnBack.addEventListener("click", function(){

    
        for (let c = 0; c < slideElements.length; c++) {
                const slide = slideElements[c];
                const sideSlide= sideElements[c]

                if (nextSlide<2) {
                    nextSlide=6
                }

            if(c == nextSlide-2 ) {
                slide.classList.remove("hidden");
                sideSlide.classList.add("greenBorder")
                sideSlide.classList.remove("opacity05")
                console.log("Slide corrente: " + c + " -> Va visualizzata");
            } else {
                slide.classList.add("hidden");
                sideSlide.classList.add("opacity05")
                sideSlide.classList.remove("greenBorder")
                console.log("Slide corrente: " + c + " -> Va nascosta");
            }
        }
        
        nextSlide--;
        console.log(nextSlide)


});



// sideSliderElement.addEventListener("click", function(e){
//     console.log(indexOf(e))
// })
