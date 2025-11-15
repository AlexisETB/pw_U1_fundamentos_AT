function guardar() {
    validarCampos();
}

function validarCampos() {
    ocultarMensaje();
    const arregloErrores = [];

    let cardHolder = document.getElementById("id_cardholder_name").value
    if (cardHolder === "") {
        arregloErrores.push("El campo Titular de la Tarjeta es obligatorio.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_cardhold");
    }
    let numeroTarjeta = document.getElementById("id_card_number").value
    if (numeroTarjeta === "") {
        arregloErrores.push("El campo Número de Tarjeta es obligatorio.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_cardNumber");
    } else if (!validarNumeroTarjeta(numeroTarjeta)) {
        arregloErrores.push("El campo Número de Tarjeta no es válido.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_cardNumber");
    }
    let fechaExpiracion = document.getElementById("id_expiration_date").value
    if (fechaExpiracion === "") {
        arregloErrores.push("El campo Fecha de Expiración es obligatorio.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_expirationDate");
    }
    let cvv = document.getElementById("id_cvv").value
    if (cvv === "") {
        arregloErrores.push("El campo CVV es obligatorio.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_cvv");

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

    function validarNumeroTarjeta(numeroTarjeta) {
        const patron = /^\d{16}$/;
        return patron.test(numeroTarjeta);
    }
}