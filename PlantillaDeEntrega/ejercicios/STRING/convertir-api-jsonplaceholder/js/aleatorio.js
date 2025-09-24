"use strict"

let anterior = null;

function aleatorioRangoDiferente(min, max) {
    let aleatorio;
    do {
        aleatorio = parseInt(Math.random() * (max - min + 1) + min);
    } while (aleatorio === anterior);
    anterior = aleatorio;
    return aleatorio;
}

function pulsarAleatorio() {
    let pulsarBoton = aleatorioRangoDiferente(1, 10);
    console.log(pulsarBoton);

    switch (pulsarBoton) {
        case 1: todoMayusculas(); break;
        case 2: todoMinusculas(); break;
        case 3: primeraMayuscula(); break;
        case 4: ultimaMayuscula(); break;
        case 5: primeraMinuscula(); break;
        case 6: ultimaMinuscula(); break;
        case 7: vocalesMayusculas(); break;
        case 8: vocalesMinusculas(); break;
        case 9: consonantesMayusculas(); break;
        case 10: consonantesMinusculas(); break;
        default: console.log("Botón incorrecto"); break;
    }
}