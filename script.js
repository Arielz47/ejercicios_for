"use strict";

/*
    FUNCIÓN PRINCIPAL

    Recibe el número del ejercicio
    que se desea ejecutar.
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

    Mostrar en consola los números
    impares desde el 1 hasta el 7.
*/

function listarImpares() {

    for (let i = 1; i <= 7; i = i + 2) {

        console.log(i);

    }

}