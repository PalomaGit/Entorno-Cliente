'use strict';

function grabarDato(nombre, valor) {
  console.log("Grabando dato...");

  // Convertimos la clave y valor a texto plano (aunque no es necesario codificar)
  localStorage.setItem(nombre, valor);

  console.log("LocalStorage actualizado:", localStorage);
}
