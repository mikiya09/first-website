
import React from 'react' 

import Header from './header/Header.jsx'
import About from './about/About.jsx'
import Experience from './experience/Experience.jsx'
import Services from './services/Services.jsx' 
import Portfolio from './portfolio/Portfolio.jsx'
import Testimonials from './testimonials/Testimonials.jsx'
import Contact from './contact/Contact.jsx'
import Footer from './footer/Footer.jsx'

const Nav = () => {
    return (
    <>
        <Header />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
    )
}

export default Nav
