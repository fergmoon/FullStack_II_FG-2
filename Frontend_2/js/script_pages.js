class headermain extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <p>FERNANDO GOMEZ</p>
        <nav>
            <ul>
                <li>
                    <a href="work.html">Work</a>
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

    previousButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'proyecto012.html';
    });

    nextButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'proyecto002.html';
    });
});
/*=======OBTENER PAGINA ANTERIOR======== */
document.addEventListener('DOMContentLoaded', function() {
    var paginaAnterior = document.referrer;
    if (paginaAnterior) {
        console.log('Página anterior:', paginaAnterior);
    } else {
        console.log('No hay página anterior');
    }
});