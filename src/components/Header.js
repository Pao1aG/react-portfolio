import React from 'react';
import "./styles/Header.css";


//Links to About Me, Portfolio, Contact, and Resume

//Destructuring currentPage and handlePageChange props from Navigation
function Header({ currentPage, handlePageChange }) {
    return(
        <header>
        <nav>
            <div className="nav-wrapper pink darken-4">
              <a href="/" className="brand-logo">Paola Gonzalez</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className={currentPage === "About" ? "active" : ""}>
                    <a 
                    href="#about" 
                    onClick={() => handlePageChange("About")}>
                    About Me
                    </a>
                </li>
                <li className={currentPage === "Portfolio" ? "active" : ""}>
                    <a 
                    href="#portfolio" 
                    onClick={() => handlePageChange("Portfolio")}>
                    Porfolio
                    </a>
                </li>
                <li className={currentPage === "Contact" ? "active" : ""}>
                    <a 
                    href="#contact" 
                    onClick={() => handlePageChange("Contact")}>
                    Contact Me
                    </a>
                </li>
                <li className={currentPage === "Resume" ? "active" : ""}>
                    <a 
                    href="#resume" 
                    onClick={() => handlePageChange("Resume")}>
                    Resume
                    </a>
                </li>
              </ul>
            </div>
        </nav>
    </header>
    )
}

export default Header;