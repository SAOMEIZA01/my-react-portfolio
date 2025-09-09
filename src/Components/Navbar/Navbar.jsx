import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import five_squares_depth from '../../assets/five_squares_depth.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="My Logo" />
        <FontAwesomeIcon icon={faBars} onClick={openMenu} className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
          <FontAwesomeIcon icon={faClose} onClick={closeMenu} className='nav-mob-close'/>
          <li><AnchorLink className="anchor-link" href="#home" onClick={()=>setMenu("home")}>Home</AnchorLink>{menu==="home"? <img src={five_squares_depth} alt=""/> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#about" onClick={()=>setMenu("about")}>About me</AnchorLink>{menu==="about"? <img src={five_squares_depth} alt=""/> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#services" onClick={()=>setMenu("services")}>Services</AnchorLink>{menu==="services"? <img src={five_squares_depth} alt=""/> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#work" onClick={()=>setMenu("work")}>Portfolio</AnchorLink>{menu==="work"? <img src={five_squares_depth} alt=""/> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#contact" onClick={()=>setMenu("contact")}>Contact</AnchorLink>{menu==="contact"? <img src={five_squares_depth} alt=""/> : <></>}</li>
        </ul>
        <AnchorLink className="nav-connect anchor-link" offset={50} href="#contact" onClick={()=>setMenu("contact")}>Connect With Me</AnchorLink>
    </div>
  )
}

export default Navbar