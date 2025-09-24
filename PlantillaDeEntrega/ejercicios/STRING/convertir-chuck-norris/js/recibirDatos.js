"use strict"

async function recibirDatos() {
    try {
        const categorias = await listaCategorias();
        const categoriasCensuradas = ["animal","celebrity","explicit","food","political","religión"];
        const categoriasFiltradas = categorias.filter(categoria => !categoriasCensuradas.includes(categoria));
        console.log("categoriasFiltradas: ",categoriasFiltradas);
        
        let categoriaRandom = aleatorioRangoDiferente(0,categoriasFiltradas.length-1)
        console.log("Random: ",categoriaRandom);
        
        const respuesta = await pedirchisteAzarCategorias(categoriasFiltradas[categoriaRandom]);
        console.log("Respuesta: ",respuesta.value);
        
        
       texto.value = respuesta.value;
       console.log(respuesta.value);
       
        
    } catch (error) {
        console.log("Error de la Promesa en el await");
        console.log(error);
      
    }
}
//Conexión a API con fetch().then()
function recibirDatosThen() {
    listaCategorias()
        .then(categorias => {
            const categoriasCensuradas = ["animal", "celebrity", "explicit", "food", "political", "religión"];
            const categoriasFiltradas = categorias.filter(categoria => !categoriasCensuradas.includes(categoria));
            console.log("categoriasFiltradas: ", categoriasFiltradas);

            let categoriaRandom = aleatorioRangoDiferente(0, categoriasFiltradas.length - 1);
            console.log("Random: ", categoriaRandom);

            return pedirchisteAzarCategorias(categoriasFiltradas[categoriaRandom]);
        })
        .then(respuesta => {
            console.log("Respuesta: ", respuesta.value);
            const texto = document.getElementById("texto");
            if (texto) texto.value = respuesta.value;
        })
        .catch(error => {
            console.log("Error de la Promesa");
            console.log(error);
        });
}
