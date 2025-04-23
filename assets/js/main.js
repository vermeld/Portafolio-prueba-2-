// Función para mostrar el formulario
function mostrarFormulario() {
    document.getElementById('formularioModal').style.display = 'block';
}

// Función para cerrar el formulario
function cerrarFormulario() {
    document.getElementById('formularioModal').style.display = 'none';
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == document.getElementById('formularioModal')) {
        cerrarFormulario();
    }
}

// Manejar el envío del formulario
document.getElementById('formularioContacto').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    cerrarFormulario();
});

// Efecto de seguimiento para la barra de navegación
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 