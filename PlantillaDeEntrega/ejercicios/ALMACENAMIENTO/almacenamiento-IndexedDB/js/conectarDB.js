"use strict"

async function conectarDB() {
    console.log("Conectando a la db...");
    
    return new Promise((resultado, error) => {
        const peticion = indexedDB.open("Datos", 1); // version 1

        peticion.onupgradeneeded = function (event) {
            console.log(`event: ${event}`)
            const db = event.target.result;
            if (!db.objectStoreNames.contains("campos")) {
                db.createObjectStore("campos", { keyPath: "nombre" });
            }
        }

        peticion.onsuccess = function (event) {
            console.log("✅ DB conectada");
            resultado(event.target.result);
        }

        peticion.onerror = function (event) {
            console.error(`❌ Error de conexión con la DB: ${event}`);
            error(request.error || event); // <- aquí rechazas la promesa
        }
    });
}