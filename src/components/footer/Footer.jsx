import React from 'react'
import './footer.min.css'
import Socials from '../socials/Socials'

const Footer = () => {
  return (
    <footer>
        <a href="#" className="footer__logo"><img src="https://webcreatio.net/public/logo_w.svg" alt="WebCreatio" /></a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <Socials/>

        <div className="footer__copyright">
            &copy; XEON Porfolio. Free to use.
        </div>
    </footer>
  )
}

export default Footer