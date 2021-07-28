import React from 'react';
import "./styles/Footer.css";

//Text or icon links to my GitHub, LinkedIn, and third profile platform (Stack Overflow, twitter, etc)

function Footer() {
    return(
        <footer className="page-footer pink darken-4">
            <div className="container">
                <ul className="center-align flexLinks">
                    <li>
                        <a className="grey-text text-lighten-3" 
                        href="https://www.github.com/Pao1aG/" target="_blank" rel="noreferrer"> 
                        <img src="/images/icons/github.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a className="grey-text text-lighten-3" 
                        href="https://www.linkedin.com/in/paolaagonzalezm/" target="_blank" rel="noreferrer">
                        <img src="/images/icons/linkedin.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a className="grey-text text-lighten-3" href="mailto:paolaagonzalezm@email.arizona.edu" target="_blank" rel="noreferrer">
                        <img src="/images/icons/email.png" alt=""/>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer-copyright">
            <div className="container center-align">
            © 2021 Paola Gonzalez
            </div>
            </div>
      </footer>
    )

}

export default Footer;