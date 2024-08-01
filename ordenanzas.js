document.addEventListener('DOMContentLoaded', function () {
    const buscador = document.getElementById('buscador');
    const botonBuscar = document.getElementById('boton-buscar');
    const listaOrdenanzas = document.getElementById('lista-ordenanzas');

    // Función para normalizar texto (eliminar tildes y convertir a minúsculas)
    function normalizarTexto(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    botonBuscar.addEventListener('click', function () {
        const textoBusqueda = normalizarTexto(buscador.value);
        const ordenanzas = listaOrdenanzas.getElementsByTagName('li');

        for (let i = 0; i < ordenanzas.length; i++) {
            const tituloOrdenanza = normalizarTexto(ordenanzas[i].innerText);

            if (tituloOrdenanza.includes(textoBusqueda)) {
                ordenanzas[i].style.display = 'block';
            } else {
                ordenanzas[i].style.display = 'none';
            }
        }

        listaOrdenanzas.style.display = 'block';
    });
});