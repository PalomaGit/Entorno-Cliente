document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('texto');
  const btnFiltrado = document.getElementById('btn-filtrado');

  if (!textarea || !btnFiltrado) {
    console.warn("No se encontró el textarea o el botón filtrado.");
    return;
  }

  const categoriasAEliminar = ['animal', 'celebrity', 'explicit', 'food', 'political', 'religion'];

  function eliminarCategorias(array, cadenasAEliminar) {
    return array.filter(item => !cadenasAEliminar.includes(item));
  }

  btnFiltrado.addEventListener('click', async () => {
    try {
      const respuestaCategorias = await fetch('https://api.chucknorris.io/jokes/categories');
      const todasLasCategorias = await respuestaCategorias.json();

      const categoriasSeguras = eliminarCategorias(todasLasCategorias, categoriasAEliminar);

      if (categoriasSeguras.length === 0) {
        textarea.value = 'No hay categorías seguras disponibles.';
        return;
      }

      const categoriaAleatoria = categoriasSeguras[Math.floor(Math.random() * categoriasSeguras.length)];

      const respuestaChiste = await fetch(`https://api.chucknorris.io/jokes/random?category=${categoriaAleatoria}`);
      const chiste = await respuestaChiste.json();

      textarea.value = chiste.value;
    } catch (error) {
      console.error('Error al obtener el chiste filtrado:', error);
      textarea.value = 'Error al cargar el chiste filtrado.';
    }
  });
});
