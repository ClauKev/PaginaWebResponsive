document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 700) { 
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

function MostrarMenu(){
    const barrademenu = document.getElementById("barrademenu");
    barrademenu.classList.remove("ocultar");
    barrademenu.classList.add("mostrar");
}

function CerrarMenu(){
    const barrademenu = document.getElementById("barrademenu");
    barrademenu.classList.remove("mostrar");
    barrademenu.classList.add("ocultar");
}

