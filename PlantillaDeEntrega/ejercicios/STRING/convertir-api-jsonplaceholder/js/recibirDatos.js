"use strict"

async function recibirDatos() {
    try {
        const respuesta = await pedirDatos();
 const posts = aleatorioRangoDiferente(1,respuesta.length);
        console.log(respuesta[posts].title);
        console.log(respuesta[posts].id);
       texto.value = respuesta[posts].title
        
    } catch (error) {
        console.log("Error de la Promesa en el await");
        console.log(error);
      
    }
}
