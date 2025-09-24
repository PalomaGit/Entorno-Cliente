"use strict"

let intervalo = null;
let velocidad = 1000;
let offset = 200;

function iniciar() {
    if (intervalo == null) {
        intervalo = setInterval(pulsarAleatorio, velocidad);
    }
}

function parar() {
    clearInterval(intervalo);
    intervalo = null;
}

function acelerar() {
    if (intervalo !== null) {
        clearInterval(intervalo);
        velocidad = velocidad - offset;
        intervalo = setInterval(pulsarAleatorio, velocidad);
    }
}

function decelerar() {
    if (intervalo !== null) {
        clearInterval(intervalo);
        velocidad = velocidad + offset;
        intervalo = setInterval(pulsarAleatorio, velocidad);
        console.log(intervalo);
    }
}