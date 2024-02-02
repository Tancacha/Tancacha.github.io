document.addEventListener('DOMContentLoaded', function () {
    const buscador = document.getElementById('buscador');
    const botonBuscar = document.getElementById('boton-buscar');
    const listaOrdenanzas = document.getElementById('lista-ordenanzas');

    botonBuscar.addEventListener('click', function () {
        const textoBusqueda = buscador.value.toLowerCase();
        const ordenanzas = listaOrdenanzas.getElementsByTagName('li');

        for (let i = 0; i < ordenanzas.length; i++) {
            const tituloOrdenanza = ordenanzas[i].innerText.toLowerCase();

            if (tituloOrdenanza.includes(textoBusqueda)) {
                ordenanzas[i].style.display = 'block';
            } else {
                ordenanzas[i].style.display = 'none';
            }
        }

        listaOrdenanzas.style.display = 'block';
    });
});