document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('texto');
  const btnRandom = document.getElementById('btn-random');

  if (!textarea || !btnRandom) {
    console.warn("No se encontró el textarea o el botón aleatorio.");
    return;
  }

  btnRandom.addEventListener('click', async () => {
    try {
      const respuesta = await fetch('https://api.chucknorris.io/jokes/random');
      const datos = await respuesta.json();
      textarea.value = datos.value;
    } catch (error) {
      console.error('Error al obtener el chiste aleatorio:', error);
      textarea.value = 'Error al cargar el chiste aleatorio.';
    }
  });
});
