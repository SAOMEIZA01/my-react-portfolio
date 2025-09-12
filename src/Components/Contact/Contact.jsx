import React from 'react'
import './Contact.css'
import blob_pattern from '../../assets/blob_pattern.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPaperPlane, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={blob_pattern} alt="blob pattern" />
        </div>
        <div className="contact-section">
          <div className='contact-left'>
            <h1>Let's talk</h1>
            <p>I'm open to exciting projects and opportunities where I can add value. If my skills fit what you're looking for, let's connect and make it happen.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <FontAwesomeIcon icon={faEnvelope} className='icon-envelope txt-grad' />  <p>almanntechnologies@gmail.com</p>
              </div>
              <div className="contact-detail">
                <FontAwesomeIcon icon={faPhoneVolume} className='icon-phonevolume' /> <p>+234 816 7094 610 | +234 708 3321 437</p>
              </div>
              <div className="contact-detail">
                <FontAwesomeIcon icon={faLocationDot} className='icon-locationdot' /> <p>GH, Opposite Police Barrack, Daura, Katsina State, Nigeria.</p>
              </div>
            </div>
          </div>
          <form className="contact-right" action="https://formspree.io/f/xandlabz" method="POST">
            <label htmlFor="">Your Name:</label>
            <input type="text" placeholder='Enter your name' name="name" />
            <label htmlFor="">Your Email:</label>
            <input type="email" placeholder='Enter your email' name="email" />
            <label htmlFor="">Your Message:</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button type="submit" id="contact-submit" className='contact-submit'>
              <FontAwesomeIcon icon={faPaperPlane} className='fa-paper-plane' />Submit Form
            </button>
          </form>
        </div>
    </div>
  )
}

export default Contact