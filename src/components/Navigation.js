import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import About from "../components/pages/About";
import Portfolio from "../components/pages/Portfolio";
import Contact from "../components/pages/Contact";
import Resume from "../components/pages/Resume";

// A single Navigation component within the header that will be used 
//to conditionally render the different sections of your portfolio-----------

function Navigation() {

    //making the default useState the About page
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />
        }
        if (currentPage === "Contact") {
            return <Contact />
        }
        if (currentPage === "Resume") {
            return <Resume />
        }
    }

    //Function to update useState

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </>
    );
    
}

export default Navigation;