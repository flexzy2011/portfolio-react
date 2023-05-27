import React from 'react'
import './Footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>FELIX</a>

      <ul className='peramlinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/felix-akinloye' target='_blank'><FaLinkedin /></a>
        <a href='https://www.instagram.com/iam_flexzyd' target='_blank'><BsInstagram /></a>
        <a href='https://twitter.com/iam_Flexzy' target='_blank'><BsTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Flexzy 2023.</small>
      </div>
    </footer>
  )
} 

export default Footer;
