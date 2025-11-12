let num1 = 0;
let num2 = 0;

function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText + valor;
}

function mostrarResultado(valor) {
    const elemento = document.getElementById('display');
    elemento.innerText = String(valor);
}

function limpiar() {
    document.getElementById('display').innerText = '';
}

function borrar() {
    const elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText.slice(0, -1);
}

// Función para evaluar y separar la expresión del display
function evaluarExpresion() {
    const elemento = document.getElementById('display');
    const expr = elemento.innerText;

    if (!expr) return null;

    // Buscar el último operador en la expresión
    const operadores = ['+', '-', '*', '/'];
    let ultimoOperador = '';
    let posicionOperador = -1;

    for (let i = expr.length - 1; i >= 0; i--) {
        if (operadores.includes(expr[i])) {
            ultimoOperador = expr[i];
            posicionOperador = i;
            break;
        }
    }

    if (posicionOperador === -1) return null;

    const num1 = parseFloat(expr.substring(0, posicionOperador));
    const num2 = parseFloat(expr.substring(posicionOperador + 1));

    if (isNaN(num1) || isNaN(num2)) return null;

    return { num1, num2, operador: ultimoOperador };
}

// function calcular() {
//     const elemento = document.getElementById('display');
//     const expr = elemento.innerText;
//     if (!expr) return;
//     try {
//         // Sanitizar: permitir sólo dígitos, operadores básicos, paréntesis y punto
//         const sanitized = expr.replace(/[^0-9+\-*/(). ]/g, '');
//         if (sanitized.trim() === '') {
//             elemento.innerText = 'Error';
//             return;
//         }

//         // Usar Function en lugar de eval por un pequeño aumento de seguridad
//         const result = Function('"use strict"; return (' + sanitized + ')')();
//         elemento.innerText = String(result);
//     } catch (e) {
//         elemento.innerText = 'Error';
//     }
// }

function calcularConFunciones() {
    const datos = evaluarExpresion();
    if (!datos) return;

    const { num1, num2, operador } = datos;

    switch (operador) {
        case '+':
            sumar(num1, num2);
            break;
        case '-':
            restar(num1, num2);
            break;
        case '*':
            multiplicar(num1, num2);
            break;
        case '/':
            dividir(num1, num2);
            break;
    }
}

function sumar(num1, num2) {
    mostrarResultado(num1 + num2);
}

function restar(num1, num2) {
    mostrarResultado(num1 - num2);
}

function multiplicar(num1, num2) {
    mostrarResultado(num1 * num2);
}

function dividir(num1, num2) {
    if (num2 === 0) {
        mostrarResultado('Error: División por cero');
        return;
    }
    mostrarResultado(num1 / num2);
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
        const result = value;
        elemento.innerText = String(result / 100);
    } catch (e) {
        elemento.innerText = 'Error';
    }
}
