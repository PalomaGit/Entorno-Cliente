"use strict"

async function borrarDato(nombre) {
    console.log("Borrando dato...");

    return new Promise((resultado, error) => {
        const transaccion = db.transaction(["campos"], "readwrite");
        const almacen = transaccion.objectStore("campos");

        const peticion = almacen.delete(nombre);

        peticion.onsuccess = async function (event) {
            console.log("✅ Dato borrado correctamente");
            resultado(event.target.result); // <- aquí resuelves la promesa
        }

        peticion.onerror = function (event) {
            console.error(`❌ Error al guardar el dato: ${event}`);
            error(request.error || event); // <- aquí rechazas la promesa
        }
    });
}
