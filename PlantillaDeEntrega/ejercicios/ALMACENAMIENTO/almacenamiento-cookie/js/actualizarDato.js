'use strict';

function actualizarDato(nombre, valor) {
  const campoNombre = document.getElementById("nombre");
  const campoValor = document.getElementById("valor");

  // Cargar valores en el formulario
  campoNombre.value = decodeURIComponent(nombre.trim());
  campoValor.value = decodeURIComponent(valor);
  campoNombre.focus();

  // Borrar la cookie antigua
  borrarDato(nombre.trim());
}
