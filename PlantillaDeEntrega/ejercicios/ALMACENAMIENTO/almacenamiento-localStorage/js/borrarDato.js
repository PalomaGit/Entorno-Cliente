'use strict';

function borrarDato(nombre) {
  console.log("Borrando dato en localStorage:", nombre);

  localStorage.removeItem(nombre); // 👈 elimina la clave y su valor

  mostrarDatos(); // actualiza la tabla
}
