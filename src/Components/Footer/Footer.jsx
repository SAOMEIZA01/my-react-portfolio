import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="Logo" />
                <p>Full-Stack Developer | Graphic Designer | Solar Energy Technitian. <br/>Daura, Katsina State, Nigeria. </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <FontAwesomeIcon icon={faUser} className='user-icon' />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Abdulrazaq Shuaibu | All Rights Reserved</p>
            <div className="footer-bottom-right">
                <p>Term Of Service</p>
                <p>Privacy Policy</p>
                <p><a href="#contact">Connect With Me</a></p>
            </div>
        </div>
    </div>
    
  )
}

export default Footer