import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode, SiNetlify} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/felix-akinloye/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/flexzy2011' target='_blank'><FaGithub /></a>
      <a href='https://app.netlify.com/teams/flexzy2011/' target='_blank'><SiNetlify /></a>
    </div>
  )
}

export default HeaderSocials
