// ---------Index---------

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
          slidesPerView: 2
        }
      }
    });
});

// ---------EXTRA---------

document.addEventListener('DOMContentLoaded', function() {
  let items = document.querySelectorAll('.slider .list .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let thumbnails = document.querySelectorAll('.thumbnail .item');

  let countItem = items.length;
  let itemActive = 0;

  next.onclick = function() {
      itemActive = itemActive + 1;
      if (itemActive >= countItem) {
          itemActive = 0;
      }
      showSlider();
  };

  prev.onclick = function() {
      itemActive = itemActive - 1;
      if (itemActive < 0) {
          itemActive = countItem - 1;
      }
      showSlider();
  };
  function showSlider() {
      let itemActiveOld = document.querySelector('.slider .list .item.active');
      let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
      if (itemActiveOld) itemActiveOld.classList.remove('active');
      if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');

      items[itemActive].classList.add('active');
      thumbnails[itemActive].classList.add('active');
  }

  thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
          itemActive = index;
          showSlider();
      });
  });
  showSlider();
});


// ---------Login---------

function ValidarLogin(){
  var usuario = document.getElementById("usuario").value;
  var contrasenia = document.getElementById("contrasenia").value;
  var validator = true;
  if (usuario.length>=8) {
    document.getElementById("ErrorUsuario").style.display = "none";
  } else {
    var validator = false;
    document.getElementById("ErrorUsuario").style.display = "block";
  }

  if (contrasenia.length>=8) {
    document.getElementById("ErrorContrasenia").style.display = "none";
  } else {
    var validator = false;
    document.getElementById("ErrorContrasenia").style.display = "block";
  }

  if (validator==true) {
    if (usuario == "Kevin2006" && contrasenia == "SAO.2006") {
      alert("Esta es una cuenta de administrador");
    } else {
      alert("Ingresaste exitosamente!");
    }
  }

  if (validator==true) {
    document.getElementById("formulario").submit();
  }
}

// ---------Register---------

function ValidarRegister(){
  var usuario = document.getElementById("usuario").value;
  var contrasenia = document.getElementById("contrasenia").value;
  var email = document.getElementById("email").value;
  var ccontrasenia = document.getElementById("Ccontrasenia").value;
  var validator = true;

  if (email.length>0) {
    document.getElementById("ErrorEmail").style.display = "none";
  } else {
    var validator = false;
    document.getElementById("ErrorEmail").style.display = "block";
  }

  if (usuario.length>0) {
    document.getElementById("ErrorUsuario").style.display = "none";
  } else {
    var validator = false;
    document.getElementById("ErrorUsuario").style.display = "block";
  }

  if (ccontrasenia==contrasenia) {
    document.getElementById("ErrorCcontrasenia").style.display = "none";
  } else {
    var validator = false;
    document.getElementById("ErrorCcontrasenia").style.display = "block";
  }

  if (contrasenia.length>=8) {
    document.getElementById("ErrorContrasenia").style.display = "none";
  } else {
    var validator = false;
    document.getElementById("ErrorContrasenia").style.display = "block";
  }

  if (validator==true) {
    if (usuario == "Kevin2006" && contrasenia == "SAO.2006") {
      alert("Esta cuenta ya existe, por favor inicia sesión");
      validator = false;
    } else {
      alert("Ingresaste exitosamente!");
    }
  }

  if (validator==true) {
    document.getElementById("formulario").submit();
  }
}


// ---------System Payment---------

function EnviaraPayment(button){
  const payment = document.getElementById("SystemPayment");
  payment.classList.add("container");
  payment.classList.remove("ocultar-payment");

  const price = button.getAttribute('data-price');
  
  // Guardar el precio en localStorage
  localStorage.setItem('selectedPrice', price);

  // Actualizar el texto del botón de pago
  const payButton = document.querySelector('.submit-btn');
  payButton.textContent = `Pagar $${price}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
  const savedPrice = localStorage.getItem('selectedPrice');
  if (savedPrice) {
      // Actualizar el texto del botón de pago al cargar la página
      const payButton = document.querySelector('.submit-btn');
      payButton.textContent = `Pagar $${savedPrice}`;
  }
});

function ValidarPago() {
  const savedPrice = localStorage.getItem('selectedPrice');
  var email = document.querySelector("input[type='email']").value;
  var pais = document.querySelector("input[placeholder='Argentina']").value;
  var localidad = document.querySelector("input[placeholder='Capital Federal']").value;
  var calle = document.querySelector("input[placeholder='Av. Corrientes 2037']").value;
  var codigoPostal = document.querySelector("input[placeholder='1234']").value;
  var nombreTarjeta = document.querySelector("input[placeholder='Miku Hatsune']").value;
  var numeroTarjeta = document.querySelector("input[placeholder='1111-2222-3333-4444']").value;
  var telefono = document.querySelector("input[placeholder='11 1234-1234']").value;
  var caducidad = document.getElementById("expiryDate").value;
  var cvv = document.getElementById("CVV").value;
  
  var validator = true;

  // Validar Email
  if (email.length > 0) {
    document.getElementById("ErrorEmail").style.display = "none";
  } else {
    validator = false;
    document.getElementById("ErrorEmail").style.display = "block";
  }

  // Validar País
  if (pais.length > 0) {
    document.getElementById("ErrorPais").style.display = "none";
  } else {
    validator = false;
    document.getElementById("ErrorPais").style.display = "block";
  }

  // Validar Localidad
  if (localidad.length > 0) {
    document.getElementById("ErrorLoca").style.display = "none";
  } else {
    validator = false;
    document.getElementById("ErrorLoca").style.display = "block";
  }

  // Validar Calle
  if (calle.length > 0) {
    document.getElementById("ErrorCalle").style.display = "none";
  } else {
    validator = false;
    document.getElementById("ErrorCalle").style.display = "block";
  }

  // Validar Código Postal
  if (codigoPostal.length === 4) {
    document.getElementById("ErrorCodP").style.display = "none";
  } else {
    validator = false;
    document.getElementById("ErrorCodP").style.display = "block";
  }

  // Validar Nombre en la Tarjeta
  if (nombreTarjeta.length > 0) {
    document.getElementById("ErrorNombre").style.display = "none";
  } else {
    validator = false;
    document.getElementById("ErrorNombre").style.display = "block";
  }

  // Validar Número de la Tarjeta
  if (numeroTarjeta.length === 19) {
    document.getElementById("ErrorNT").style.display = "none";
  } else {
    validator = false;
    document.getElementById("ErrorNT").style.display = "block";
  }

  // Validar Teléfono
  if (telefono.length === 13) {
    document.getElementById("ErrorT").style.display = "none";
  } else {
    validator = false;
    document.getElementById("ErrorT").style.display = "block";
  }

  // Validar Caducidad
  if (caducidad.length === 7) {
    document.getElementById("ErrorCadu").style.display = "none";
  } else {
    validator = false;
    document.getElementById("ErrorCadu").style.display = "block";
  }

  // Validar CVV
  if (cvv.length === 3) {
    document.getElementById("ErrorCVV").style.display = "none";
  } else {
    validator = false;
    document.getElementById("ErrorCVV").style.display = "block";
  }

  // Si todos los campos son válidos
  if (validator) {
    alert(`Pagaste exitosamente $${savedPrice}, se enviara la informacion del pago al correo. Gracias por tu compra.`);
    document.querySelector("form").submit();
  } else {
    alert("Por favor, corrige los errores en el formulario.");
  }
}

function formatDate(input) {

  let value = input.value.replace(/\D/g, '');
  
  if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 6);
  }
  
  input.value = value;
}

function formatCardNumber(input) {

  let value = input.value.replace(/\D/g, ''); 
  
  if (value.length > 4) {
      value = value.slice(0, 4) + '-' + value.slice(4, 8);
  }
  if (value.length > 8) {
      value = value.slice(0, 9) + '-' + value.slice(5, 10);
  }
  if (value.length > 12) {
      value = value.slice(0, 14) + '-' + value.slice(10, 19);
  }

  input.value = value;
}

function formatPhoneNumber(input) {
  // Obtener el valor actual del campo de entrada
  let value = input.value.replace(/\D/g, ''); // Elimina todo lo que no es número

  // Agregar formato al valor
  if (value.length > 1) {
      value = '+' + value.slice(0, 2) + ' ' + value.slice(2, 7);
  }
  if (value.length > 8) {
      value = value.slice(0, 8) + '-' + value.slice(5, 15);
  }

  // Establecer el valor del input
  input.value = value;
}

function formatCVV(input) {

  let value = input.value.replace(/\D/g, '');
  
  input.value = value;
}

