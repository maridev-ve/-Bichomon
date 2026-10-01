
document.getElementById("gen-1").innerText;
let cambioNombre = document.getElementById("gen-1").innerText = "Generasión 1 Pokimon";


//EJERCICIOOOOOOOOOO   2
console.log(document.querySelector(".infocard-list"))
document.querySelector(".infocard-list").style.backgroundColor = "antiquewhite";

//EJERCICIOOOOOOOOOO 3
let url = window.location.href;
console.log(url)

//EJERCICIOOOOOOOOOO 4
let dominio = window.location.hostname;
console.log(dominio)


//EJERCICIOOOOOOOOOO 5
console.log(document.querySelectorAll("img"))

//EJERCICIOOOOOOOOOO 6

function nuevoSrc(nuevo) {
    let containerSrc = document.querySelectorAll("img");
    for (let i = 0; i < containerSrc.length; i++) {
        containerSrc[i].src = nuevo;
    }
}
nuevoSrc("https://media.giphy.com/media/2v170e71aanfi/giphy.gif");


//EJERCICIOOOOOOOOOOO 7

console.log(document.querySelectorAll(".itype.flying"))

function newColor(color) {
    const cambioColor = document.querySelectorAll(".itype.flying");
    for (let i = 0; i < cambioColor.length; i++) {

        let recuadro = cambioColor[i].closest(".infocard-lg-data");
        recuadro.style.backgroundColor = color;
    }
}
newColor("#d1dff4")



