import React from 'react'
import './About.css'
import ME from '../../assets/Felixx.jpg'
import {GoDeviceDesktop} from 'react-icons/go'
import {GiStarFormation} from 'react-icons/gi'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <GoDeviceDesktop className='about__icon' />
              <h5>Coding</h5>
              <small>10+ Months Learning</small>
            </article>

            <article className='about__card'>
              <AiOutlineSafetyCertificate className='about__icon' />
              <h5>Certificates</h5>
              <small>2+ Certificates</small>
            </article>

            <article className='about__card'>
              <GiStarFormation className='about__icon' />
              <h5>Projects</h5>
              <small>39+ Completed</small>
            </article>
          </div>

          <p>
            Hi! My name is Felix Akinloye, I am a Frontend Developer with great technical and problem-solving skills.
            Graduated from GOMYCODE NIGERIA, ready to acquire real world experience with my skills..
            My framework is React.js
          </p>

          <a href='#contact' className='btn talk-btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
