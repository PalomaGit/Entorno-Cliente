'use strict';

function mostrarDatos() {
  const cuerpo = document.getElementById("cuerpo");
  cuerpo.innerHTML = "";

  if (document.cookie && document.cookie.length > 0) {
    const listaCookies = document.cookie.split(";");

    listaCookies.forEach(function (lineaCookie) {
      const fila = document.createElement("tr");
      const celdaNombre = document.createElement("td");
      const celdaValor = document.createElement("td");
      const celdaAcciones = document.createElement("td");

      const [clave, valor] = lineaCookie.split("=");

      celdaNombre.textContent = decodeURIComponent(clave.trim());
      celdaValor.textContent = decodeURIComponent(valor);

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
        borrarDato(clave.trim());
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
        actualizarDato(clave.trim(), valor);
      });

      // Insertar ambos botones
      celdaAcciones.appendChild(botonBorrar);
      celdaAcciones.appendChild(document.createTextNode(" "));
      celdaAcciones.appendChild(botonActualizar);

      fila.appendChild(celdaNombre);
      fila.appendChild(celdaValor);
      fila.appendChild(celdaAcciones);
      cuerpo.appendChild(fila);
    });
  } else {
    cuerpo.innerHTML = "<tr><td colspan='3'>No hay cookies almacenadas</td></tr>";
  }
}
