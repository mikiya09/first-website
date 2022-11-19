import React from 'react'
import './footer.css'

import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href="#home" className='footer__logo'>JoJo</a>

            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Service</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://youtube.com"><FaFacebookF /></a>
                <a href="https://youtube.com"><FiInstagram /></a>
                <a href="https://youtube.com"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; JOJO's domain. All rights reserved</small>
            </div>
        </footer>
    )
}


export default Footer
