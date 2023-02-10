import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oo3taei', 'template_fpsdi4g', form.current, 'MoThDXRG7S4qDHFZA')

    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
  
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>felixakinloye247@gmail.com</h5>
            <a href='mailto:felixakinloye247@gmail.com' className='send' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon' />
            <h4>linkedin</h4>
            <h5>Felix Akinloye</h5>
            <a href='https://linkedin.com/in/felix-akinloye' className='send' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+2347087659219</h5>
            <a href='https://api.whatsapp.com/send?phone=2347087659219' className='send' target='_blank'>Send a message</a>
          </article>
        </div>
        
        {/* CONTACT FORM */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn__send'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
