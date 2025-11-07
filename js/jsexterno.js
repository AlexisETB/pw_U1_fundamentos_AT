
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
function fundamentosJS() {
    /* Tipos de variables */
    var nombre = "Alexis"; //Antigua y obsoleta
    let apellido = "Troya"; //Variables ca\mbiables
    let apellido2 = 15; //Tipado dinamico, no necesita declara tipo
    apellido2 = "Bermudez"; //Reasignacion, no muy recomendada
    let arreglo = [1, 2, 3, 4, 5]; //Arreglos
    let diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]; //Arreglos
    const IVA = 0.15; //Constante, no cambia su valor
    console.log('Fundamentos JS ejecutado');
    console.log('Nombre: ' + nombre);
    console.log(IVA)
    console.log(arreglo);

    const arreglosDiasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    arreglosDiasSemana.push("Feriado"); //Agregar elemento al final
    console.log(arreglosDiasSemana);
    arreglosDiasSemana.unshift("Pre-feriado"); //Agregar elemento al inicio
    console.log(arreglosDiasSemana);
    console.log('Elemento en posicion 2: ' + arreglosDiasSemana[2]); //Acceder a elemento por posicion
    console.log("Manejo de nulos, undefined y vacios");
    arreglosDiasSemana.push(null);
    arreglosDiasSemana.push("");
    arreglosDiasSemana.push(undefined);
    console.log(arreglosDiasSemana[9]); //null
    console.log(arreglosDiasSemana[10]); //vacio
    console.log(arreglosDiasSemana[11]); //undefined

    const numerosPares = [2, 4, 6, 8, 10];
    const numerosImpares = [1, 3, 5, 7, 9];

    const numerosTodos = numerosImpares.concat(numerosPares); //Concatena arreglos
    console.log(numerosTodos);

    /* Sentencias de control */
    let edad = 19;
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }

    let dia = 'lunes';
    switch (dia) {
        case 'lunes':
            console.log("Primer dia de la semana");
            break;
        case 'martes':
            console.log("Segundo dia de la semana");
            break;
        default:
            console.log("Otro dia de la semana");
    }

    for (let i = 0; i <= 5; i++) {
        console.log("Iteración: " + i);
    }

    const frutas = ['Manzana', 'Banana', 'Cereza'];
    for (let fruta of frutas) {
        console.log("Fruta: " + fruta);
    }

    /*manejo de objetos */
    const profesor = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    };
    console.log(profesor);
    console.log("Nombre del profesor: " + profesor.nombre);
    profesor.apellido = "Guayaquil"; //Modificar propiedad
    console.log(profesor);

    if (profesor.ciudad === 'Quito') {
        console.log("El profesor es de la capital");
    }

    if (profesor.edad !== 36) {
        console.log("El profesor no tiene 36 años");
    } else {
        console.log("El profesor tiene 36 años");
    }


    for (let clave in profesor) {
        console.log(profesor[clave]);
    }

    const e1 = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    };
    const e2 = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    };

    const arregloObjetos = [e1, e2, {
        nombre: "Edison3",
        apellido: "Cayambe",
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }];
    console.log(arregloObjetos);
    console.log(arregloObjetos[2]);

    /* Desestructuracion */
    //arreglos

    const arr1 = [1, 2, 3, 4, 5, 6, 7];
    const [a, b, c, d, e] = arr1;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);

    const [primero, , , , , , ultimo] = arr1;
    console.log(primero);
    console.log(ultimo);

    const [pos1, pos2] = [1, 2, 3, 4, 5, 6, 7];
    imprime(arr1);

    //Objetos
    const e3 = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    };
    const { nombre: n, ciudad: ciu } = e3;
    console.log(n);
    console.log(ciu);

    const { nombre: n1, apellido: a1 } = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    };
    console.log(n1);
    console.log(a1);

    const e4 = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito',
        direccion: {
            calle: "Av. Siempre Viva",
            barrio: "Springfield",
            numeracion: 742,
        }
    };

    console.log(e4.direccion.barrio);

    const { edad: eda1, direccion } = e4;
    console.log(eda1);
    console.log(direccion);
    const { calle } = direccion;
    console.log(calle);

    const { direccion: { numeracion, barrio, calle: calle2 } } = e4;
    console.log(numeracion);
    console.log(barrio);
    console.log(calle2);
}

function imprime([a, b, c]) {
    console.log(a);
    console.log(b);
    console.log(c);
}