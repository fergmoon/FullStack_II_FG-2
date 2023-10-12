class headermain extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <h2>FERNANDO GOMEZ</h2>
        <nav>
            <ul>
                <li>                
                    <a href="index.html">home</a>
                </li>            
                <li id="dropdown" class="dropdown">
                    <a class="dropbtn" href="work.html">Work</a>
                    <div class="dropdown-content">
                        <a href="proyecto001.html">Vitrina Punto de Venta</a>
                        <a href="proyecto002.html">Iluminación Navideña</a>
                        <a href="proyecto003.html">Mobiliario Hogar 01</a>
                        <a href="proyecto004.html">Estantes Cocina</a>
                        <a href="proyecto005.html">Punto de Venta Itinerante 01</a>
                        <a href="proyecto006.html">Proyectos especiales 01</a>
                        <a href="proyecto007.html">Escritorio Pequeño</a>
                        <a href="proyecto008.html">Punto de venta Itinerante 02</a>
                        <a href="proyecto009.html">Exhibición Comercial</a>
                        <a href="proyecto010.html">Exhibidor Móvil</a>
                        <a href="proyecto011.html">Mobiliario Hogar 02</a>
                        <a href="proyecto012.html">Proyectos Especiales 02</a>

                    </div>                    
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
            </ul>
        </nav>
        `;
    }
}

window.customElements.define("menu-main", headermain);

/* ======= NAVEGACION ============ */

document.addEventListener('DOMContentLoaded', function() {
    var previousButton = document.getElementById('previous');
    var nextButton = document.getElementById('next');

    var numeroPagina = parseInt(window.location.pathname.match(/\d+/)[0]); // Extrae el número de la página actual desde la URL

    previousButton.addEventListener('click', function(event) {
        event.preventDefault();
        var paginaAnterior = (numeroPagina - 1) <= 0 ? 12 : numeroPagina - 1; // Si es la página 1, la anterior es la 12
        window.location.href = 'proyecto' + paginaAnterior.toString().padStart(3, '0') + '.html'; // Genera la URL de la página anterior
    });

    nextButton.addEventListener('click', function(event) {
        event.preventDefault();
        var paginaSiguiente = (numeroPagina + 1) > 12 ? 1 : numeroPagina + 1; // Si es la página 12, la siguiente es la 1
        window.location.href = 'proyecto' + paginaSiguiente.toString().padStart(3, '0') + '.html'; // Genera la URL de la página siguiente
    });
});


