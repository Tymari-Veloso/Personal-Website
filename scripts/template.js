class MyHeader extends HTMLElement{ //Custom element that contains header html content
    connectedCallback(){    //Run this code when it is connected to a document
        this.innerHTML = `
        <header class="header">
            <h1 class="title"> <a href="../index.html">Tymari Veloso</a></h1>
            <nav class="nav-bar">
                <ul class="nav-list">
                    <li><a href="../pages/about.html">About</a></li>
                    <li><a href="../pages/projects.html">Projects</a></li>
                    <li><a href="../pages/contact.html">Contact</a></li>
                </ul>
            </nav>
            <button id="color-btn" type="button">Color Mode</button>
        </header>
    `
    }
}
customElements.define("my-header", MyHeader)
class MyFooter extends HTMLElement{ //Custom element that contains footer html content
    connectedCallback(){    //Run this code when it is connected to a document
        this.innerHTML = `
        <footer class="footer">
            <div class="contact-links">
                <a href="https://github.com/Tymari-Veloso"><img src="../src/logos/github-mark-white.png" alt="GitHub logo link"></a>
                <a href="https://www.linkedin.com/in/tymari-veloso/"><img src="../src/logos/LI-In-Bug.png" alt="Linkedin logo link"></a>
            </div>
        </footer>
    `
    }
}
//Defines the custom elements above so they can be used insde my html document
customElements.define("my-footer", MyFooter)
