let num1 = 0;
let num2 = 0;

function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText + valor;
}

function limpiar() {
    document.getElementById('display').innerText = '';
}

function borrar() {
    const elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText.slice(0, -1);
}

function calcular() {
    const elemento = document.getElementById('display');
    const expr = elemento.innerText;
    if (!expr) return;
    try {
        // Sanitizar: permitir sólo dígitos, operadores básicos, paréntesis y punto
        const sanitized = expr.replace(/[^0-9+\-*/(). ]/g, '');
        if (sanitized.trim() === '') {
            elemento.innerText = 'Error';
            return;
        }
        // Usar Function en lugar de eval por un pequeño aumento de seguridad
        const result = Function('"use strict"; return (' + sanitized + ')')();
        elemento.innerText = String(result);
    } catch (e) {
        elemento.innerText = 'Error';
    }
}

function sumar(num1, num2) {
    mostrarDisplay(num1 + num2);
}

function restar(num1, num2) {
    mostrarDisplay(num1 - num2);
}

function multiplicar(num1, num2) {
    mostrarDisplay(num1 * num2);
}

function dividir(num1, num2) {
    mostrarDisplay(num1 / num2);
}

function porcentaje() {
    const elemento = document.getElementById('display');
    const expr = elemento.innerText;
    if (!expr) return;
    try {
        // Si es un número simple, convertirlo a porcentaje
        const value = parseFloat(expr);
        if (!isNaN(value) && String(value) === expr) {
            elemento.innerText = String(value / 100);
            return;
        }
        // Si es una expresión, evaluar y luego dividir por 100
        const sanitized = expr.replace(/[^0-9+\-*/(). ]/g, '');
        const result = Function('"use strict"; return (' + sanitized + ')')();
        elemento.innerText = String(result / 100);
    } catch (e) {
        elemento.innerText = 'Error';
    }
}
