"use strict"

const texto = document.getElementById("texto");
const botones = document.getElementsByClassName("boton");
Array.from(botones).forEach(boton => {
  switch (boton.dataset.fn) {
    case "A-Z": boton.addEventListener("click", todoMayusculas); break;
    case "a-z": boton.addEventListener("click", todoMinusculas); break;
    case "A_": boton.addEventListener("click", primeraMayuscula); break;
    case "_Z": boton.addEventListener("click", ultimaMayuscula); break;
    case "a_": boton.addEventListener("click", primeraMinuscula); break;
    case "_z": boton.addEventListener("click", ultimaMinuscula); break;
    case "AEOIU": boton.addEventListener("click", vocalesMayusculas); break;
    case "aeiou": boton.addEventListener("click", vocalesMinusculas); break;
    case "BC": boton.addEventListener("click", consonantesMayusculas); break;
    case "bc": boton.addEventListener("click", consonantesMinusculas); break;
    case "🔁": boton.addEventListener("click", pulsarAleatorio); break;
    case "▶️": boton.addEventListener("click", iniciar); break;
    case "⏹️": boton.addEventListener("click", parar); break;
    case "⏩": boton.addEventListener("click", acelerar); break;
    case "⏪": boton.addEventListener("click", decelerar); break;
    case "⏬": boton.addEventListener("click", recibirDatos); break;
  }
}); 
