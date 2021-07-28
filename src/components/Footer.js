import React from 'react';
import "./styles/Footer.css";

//Text or icon links to my GitHub, LinkedIn, and third profile platform (Stack Overflow, twitter, etc)

function Footer() {
    return(
        <footer className="page-footer pink darken-4">
            <div className="container">
                <ul className="center-align flexLinks">
                    <li><a className="grey-text text-lighten-3" href="https://www.github.com/Pao1aG/">GitHub</a></li>
                    <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/paolaagonzalezm/">LinkedIn</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                </ul>
            </div>

            <div className="footer-copyright">
            <div className="container center-align">
            © 2014 Copyright Text
            </div>
            </div>
      </footer>
    )

}

export default Footer;