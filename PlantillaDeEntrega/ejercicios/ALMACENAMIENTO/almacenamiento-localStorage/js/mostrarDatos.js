'use strict';

function mostrarDatos() {
  const cuerpo = document.getElementById("cuerpo");
  cuerpo.innerHTML = "";
  const claves = Object.keys(localStorage); // ← obtenemos todas las claves

  
  if (claves.length > 0) {
    claves.forEach(function (clave) {
      const valor = localStorage.getItem(clave); // ← obtenemos su valor

      const fila = document.createElement("tr");
      const celdaNombre = document.createElement("td");
      const celdaValor = document.createElement("td");
      const celdaAcciones = document.createElement("td");

      celdaNombre.textContent = clave;
      celdaValor.textContent = valor;

      // Botón Borrar
      const botonBorrar = document.createElement("button");
      const iconoBorrar = document.createElement("img");
      iconoBorrar.src = "./img/delete.svg";
      iconoBorrar.width = 22;
      iconoBorrar.height = 22;
      iconoBorrar.style.verticalAlign = "middle";
      botonBorrar.textContent = "Borrar ";
      botonBorrar.appendChild(iconoBorrar);
      botonBorrar.addEventListener("click", function () {
        borrarDato(clave);
      });

      // Botón Actualizar
      const botonActualizar = document.createElement("button");
      const iconoActualizar = document.createElement("img");
      iconoActualizar.src = "./img/recover.svg";
      iconoActualizar.width = 22;
      iconoActualizar.height = 22;
      iconoActualizar.style.verticalAlign = "middle";
      botonActualizar.textContent = "Actualizar ";
      botonActualizar.appendChild(iconoActualizar);
      botonActualizar.addEventListener("click", function () {
        actualizarDato(clave, valor);
      });

      // Insertar botones en celda
      celdaAcciones.appendChild(botonBorrar);
      celdaAcciones.appendChild(document.createTextNode(" "));
      celdaAcciones.appendChild(botonActualizar);

      // Añadir a la fila
      fila.appendChild(celdaNombre);
      fila.appendChild(celdaValor);
      fila.appendChild(celdaAcciones);
      cuerpo.appendChild(fila);
    });
  } else {
    cuerpo.innerHTML = "<tr><td colspan='3'>No hay datos almacenados</td></tr>";
  }
}
