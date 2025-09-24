"use strict"

async function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "";

    return new Promise((respuesta, error) => {
        const transaccion = db.transaction(["campos"], "readonly");
        const almacen = transaccion.objectStore("campos");

        const peticion = almacen.getAll();

        peticion.onsuccess = function (event) {
            console.log("✅ Datos leidos correctamente");
            const datos = peticion.result;

            if (datos.length > 0) {
                datos.forEach(dato => {
                    const fila = document.createElement("tr");
                    const celdaNombre = document.createElement("td");
                    const celdaValor = document.createElement("td");
                    const celdaBorrar = document.createElement("td");
                    const celdaActualizar = document.createElement("td");

                    celdaNombre.textContent = dato.nombre;
                    celdaValor.textContent = dato.valor;

                    const botonBorrar = document.createElement("button");
                    const iconoBorrar = document.createElement("img");
                    iconoBorrar.src = "./img/delete.svg";
                    iconoBorrar.width = 22;
                    iconoBorrar.height = 22;
                    iconoBorrar.style.verticalAlign = "middle";
                    botonBorrar.textContent = "Borrar";
                    botonBorrar.appendChild(iconoBorrar);
                    botonBorrar.addEventListener("click", async function () {
                        await borrarDato(dato.nombre);
                        await mostrarDatos(); // por motivos del callback de la promesa
                    })
                    celdaBorrar.appendChild(botonBorrar);

                    const botonActualizar = document.createElement("button");
                    const iconoActualizar = document.createElement("img");
                    iconoActualizar.src = "./img/recover.svg";
                    iconoActualizar.width = 22;
                    iconoActualizar.height = 22;
                    iconoActualizar.style.verticalAlign = "middle";
                    botonActualizar.textContent = "Actualizar";
                    botonActualizar.appendChild(iconoActualizar);
                    botonActualizar.addEventListener("click", async function () {
                        await actualizarDato(dato.nombre, dato.valor);
                    })
                    celdaActualizar.appendChild(botonActualizar);

                    fila.appendChild(celdaNombre);
                    fila.appendChild(celdaValor);
                    fila.appendChild(celdaBorrar);
                    fila.appendChild(celdaActualizar);

                    cuerpo.appendChild(fila);
                });
            } else {
                cuerpo.innerHTML = "<tr><td colspan='3'>No hay datos almacenados</td></tr>";
            }
            respuesta(event.target.result); // <- aquí resuelves la promesa
        };

        peticion.onerror = function (event) {
            console.error("❌ Error al mostrar los datos");
            error(event.error); // <- aquí rechazas la promesa
        }
    });
}