import React from 'react'
import './contact.min.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine, RiWhatsappLine} from 'react-icons/ri'

const Contact = () => {
    function sendForm(e){
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('button').click();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>dummy@email.com</h5>
                        <a href="mailto:dummy@email.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>dummy_usr</h5>
                        <a href="https://m.me/username" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiWhatsappLine className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+233557788</h5>
                        <a href="https://api.whatsapp.com/send?phone=+233557788" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                    <a href="#contact" className="btn btn-primary" onClick={sendForm}>Send Message</a>
                </form>
            </div>
        </section>
    )
}

export default Contact