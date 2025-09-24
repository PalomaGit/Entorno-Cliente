"use strict"
//funcion que pide los datos a la Api


 async function pedirDatos() {
   
    return (await fetch(`https://jsonplaceholder.typicode.com/posts/`)).json();
    
     
      
}
    