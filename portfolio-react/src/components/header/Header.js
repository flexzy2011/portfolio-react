import React from 'react'
import './Header.css'
import Resume from './info' 
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Felix Akinloye</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <Resume />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;
