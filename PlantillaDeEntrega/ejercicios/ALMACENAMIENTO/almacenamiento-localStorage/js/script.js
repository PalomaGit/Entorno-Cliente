'use strict';
//se niega dos veces para convertir en booleano
if (!!window.localStorage) {
  const nombre = document.getElementById("nombre");
  const valor = document.getElementById("valor");
  const botonGuardar = document.getElementById("guardar");

  botonGuardar.addEventListener("click", function () {
    grabarDato(nombre.value, valor.value);
    mostrarDatos();
    nombre.value = "";
    valor.value = "";
    nombre.focus();
  });

  mostrarDatos();
} else {
  alert("El uso de localStorage está desactivado en tu navegador.");
}
