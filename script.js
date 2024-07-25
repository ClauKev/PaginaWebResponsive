document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 550) { 
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

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.slider-wrapper', {
      loop: true,
      grabCursor: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  });

