'use strict';

function actualizarDato(nombre, valor) {
  const campoNombre = document.getElementById("nombre");
  const campoValor = document.getElementById("valor");

  campoNombre.value = nombre;
  campoValor.value = valor;
  campoNombre.focus();

  sessionStorage.removeItem(nombre); // borra para que se reemplace con la nueva versión
  mostrarDatos();
}
