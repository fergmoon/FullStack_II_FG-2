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
                    <a href="home.html">home</a>
                </li>            
                <li id="dropdown" class="dropdown">
                    <a class="dropbtn" href="work.html">Work</a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        <a href="#">Link 4</a>
                        <a href="#">Link 5</a>
                        <a href="#">Link 6</a>
                        <a href="#">Link 7</a>
                        <a href="#">Link 8</a>
                        <a href="#">Link 9</a>
                        <a href="#">Link 10</a>
                        <a href="#">Link 11</a>
                        <a href="#">Link 12</a>
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
