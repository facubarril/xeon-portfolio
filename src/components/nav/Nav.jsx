import {React, useState} from 'react'
import './nav.min.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home')

    const sections = document.querySelectorAll("section");
    window.onscroll = () => {
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 300) {
                setActiveNav('#'+section.getAttribute("id"));
            } else if (window.pageYOffset == 0) {
                setActiveNav('#home');
            }
        });
    };

    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#home' ? 'active' : null}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : null}><AiOutlineUser/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : null}><BiBook/></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : null}><MdWorkOutline/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : null}><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default Nav