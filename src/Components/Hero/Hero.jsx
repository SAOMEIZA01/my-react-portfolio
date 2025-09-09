import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Profile Image" />
        <h1><span>I'm Abdulrazaq,</span> Front-end Developer</h1>
        <p>I'm a Front-end Developer based in Nigeria, passionate about building responsive, visually appealing, user-friendly, and modern web applications.</p>
        <div className="hero-action">
            <AnchorLink className="anchor-link hero-connect" offset={50} href="#contact">Connect With Me</AnchorLink>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero