"use strict"

let db;

if (!!window.indexedDB) {

    async function iniciar() {
        db = await conectarDB();
        await mostrarDatos();

        const nombre = document.getElementById("nombre");
        const valor = document.getElementById("valor");
        const guardar = document.getElementById("guardar");

        guardar.addEventListener("click", async function () {
            await grabarDato(nombre.value, valor.value);
            await mostrarDatos(); // por motivos del callback de la promesa
            nombre.value = "";
            valor.value = "";
            nombre.focus();
        });
    }

    iniciar();
} else {
    alert("El uso de storage está desactivado en tu navegador.");
}