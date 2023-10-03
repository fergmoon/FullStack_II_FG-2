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
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="work.html">Work</a>
                </li>
            </ul>
        </nav>
        `;
    }
}

window.customElements.define("menu-main", headermain);