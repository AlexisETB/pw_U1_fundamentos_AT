function guardar() {
    validarCampos();
}
function validarCampos() {
    ocultarMensaje();
    const arregloErrores = [];

    let nombre = document.getElementById("id_nombre").value
    if (nombre === "") {
        arregloErrores.push("El campo Nombre es obligatorio.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_nombre");
    }
    let apellido = document.getElementById("id_apellido").value
    if (apellido === "") {
        arregloErrores.push("El campo Apellido es obligatorio.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_apellido");
    }
    let fechaNacimiento = document.getElementById("id_fecha_nacimiento").value
    if (fechaNacimiento === "") {
        arregloErrores.push("El campo Fecha de Nacimiento es obligatorio.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_fecha_nacimiento");
    }
    let correo = document.getElementById("id_correo").value
    if (correo === "") {
        arregloErrores.push("El campo Correo Electrónico es obligatorio.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_correo");
    } else if (!validarEmail(correo)) {
        arregloErrores.push("El campo Correo Electrónico no es válido.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_correo");
    }

    let contrasena = document.getElementById("id_contrasena").value
    if (contrasena === "") {
        arregloErrores.push("El campo Contraseña es obligatorio.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_contrasena");
    }
}
function mostrarMensaje(msj) {
    let elemento = document.getElementById("id_msg_error");
    elemento.innerText = msj;
    elemento.style.display = "block";
}
function mostrarAsterisco(id_error) {
    document.getElementById(id_error).innerText = '*';

}
function ocultarMensaje() {
    let elemento = document.getElementById("id_msg_error");
    elemento.innerText = "";
    elemento.style.display = "none";

    const erroresAsterisco = document.querySelectorAll('.error_asterisco');
    erroresAsterisco.forEach(e => e.innerText = '');
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}