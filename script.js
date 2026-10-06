"use strict";


/*
    FUNCIÓN PRINCIPAL

    Recibe el número del ejercicio.
*/

function ejecutar(opcion) {

    switch (opcion) {

        case 4:

            listarImpares();

            break;

        default:

            console.log("Ejercicio no disponible");

            break;

    }

}


/*
    EJERCICIO 4

    Mostrar los números impares
    desde el 1 hasta el 7.
*/

function listarImpares() {

    let resultado = "";


    for (let i = 1; i <= 7; i = i + 2) {

        console.log(i);

        resultado = resultado + i + " ";

    }


    document.getElementById("resultado").innerHTML =
        "Números impares: " + resultado;

}