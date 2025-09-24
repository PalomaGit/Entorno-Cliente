'use strict';

function grabarDato(nombre, valor) {
    console.log("Grabando dato...");

    // Paso 1: duración de la cookie (1 minuto)
    let caducidadMs = 1 * 60 * 1000; // 1 minuto en milisegundos

    // Paso 2: obtener fecha actual y sumarle la duración
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + caducidadMs);
    let fechaExpiracion = fecha.toUTCString();

    // Paso 3: codificar y crear cookie
    document.cookie = encodeURIComponent(nombre) + "=" + encodeURIComponent(valor)
        + ";expires=" + fechaExpiracion
        + ";path=./;SameSite=Strict;Secure";

    console.log("Cookie creada:", document.cookie);
}