
function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}

function cambiarTexto(id_elemento, nuevo_texto) {
    document.getElementById(id_elemento).innerText = nuevo_texto;
}

function cambiarTamano(id_elemento, tamano) {
    document.getElementById(id_elemento).style.fontSize = tamano;
}

function concatenar() {
    document.getElementById('id_h1').innerText = document.getElementById('id_label_1').innerText + document.getElementById('id_label_2').innerText;
}

function agregarElemento() {
    document.getElementById('id_div').innerHTML += '<h1 id="id_calculadora">Calculador</h1>';
}

function agregarElemento2(idelementopadre, html) {
    document.getElementById(idelementopadre).innerHTML = html;
}

function construirH1() {
    return '<h1 id="id_calculadora">Calculador</h1>';
}

function eliminarElemento(id_elemento) {
    document.getElementById(id_elemento).remove();

}

function ocultarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'none';
}

function mostrarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'block';
}

function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error: División por cero no permitida.";
    }
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;
    if (tipo === '+') {
        resultado = sumar(num1, num2);
    }
    if (tipo === '-') {
        resultado = restar(num1, num2);
    }
    if (tipo === '*') {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === '/') {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = 'Resultado: ' + resultado;
}