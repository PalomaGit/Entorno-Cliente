'use strict';

function borrarDato(nombre) {
  console.log("Borrando dato en sessionStorage:", nombre);

  sessionStorage.removeItem(nombre); // 👈 elimina la clave y su valor

  mostrarDatos(); // actualiza la tabla
}
