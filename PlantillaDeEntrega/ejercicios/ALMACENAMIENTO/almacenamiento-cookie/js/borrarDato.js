'use strict';

function borrarDato(nombre) {
  console.log("Borrando cookie:", nombre);

  // Restar tiempo para que caduque
  let fecha = new Date();
  fecha.setTime(fecha.getTime() - 1000); // hace 1 segundo

  // Sobrescribimos la cookie con esa fecha
  document.cookie = encodeURIComponent(nombre) + "=;expires=" + fecha.toUTCString()
    + ";path=./;SameSite=Strict;Secure";

  // Volvemos a mostrar la lista actualizada
  mostrarDatos();
}