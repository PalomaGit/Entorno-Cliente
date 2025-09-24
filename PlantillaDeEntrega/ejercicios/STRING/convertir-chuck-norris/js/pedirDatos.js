"use strict"


 async function pedirChisteAzar() {
    
    return  (await fetch(`https://api.chucknorris.io/jokes/random`)).json();
    
     
      
}
 async function listaCategorias() {
    
    return  (await fetch(`https://api.chucknorris.io/jokes/categories`)).json();
    
     
      
}
 async function pedirchisteAzarCategorias(categoria) {
    
    return  (await fetch(`https://api.chucknorris.io/jokes/random?category=${categoria}`)).json();
    
     
      
}
  

   
    