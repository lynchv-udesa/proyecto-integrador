// header-scroll.js

// Seleccionar el encabezado
var header = document.querySelector('header');

// Función para cambiar el color de fondo del encabezado cuando se hace scroll
function toggleHeaderBackground() {
  if (window.scrollY > 0) {
    // Si se ha desplazado hacia abajo, agregar la clase 'scrolled'
    header.classList.add('scrolled');
  } else {
    // Si se encuentra en la parte superior de la página, eliminar la clase 'scrolled'
    header.classList.remove('scrolled');
  }
}

// Escuchar el evento de scroll y llamar a la función
window.addEventListener('scroll', toggleHeaderBackground);