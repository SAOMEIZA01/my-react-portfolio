import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import five_circles from '../../assets/five_circles.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  
  useEffect(()=>{
    const handleClickOutside =(event)=>{
      if(menuRef.current && !menuRef.current.contains(event.target)){
      closeMenu();
    }
    };
    
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  },[]);

  return (
    <div className='navbar'>
        <img src={logo} alt="My Logo" />
        <div className='nav-mob-open' onClick={(e)=>{e.stopPropagation(); openMenu();}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul ref={menuRef} className="nav-menu" onClick={(e)=>e.stopPropagation()}>
          <FontAwesomeIcon icon={faClose} onClick={closeMenu} className='nav-mob-close'/>
          <li><AnchorLink className="anchor-link" href="#home" onClick={()=>setMenu("home")}>Home</AnchorLink>{menu==="home"? <img src={five_circles} alt=""/> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#about" onClick={()=>setMenu("about")}>About</AnchorLink>{menu==="about"? <img src={five_circles} alt=""/> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#services" onClick={()=>setMenu("services")}>Services</AnchorLink>{menu==="services"? <img src={five_circles} alt=""/> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#work" onClick={()=>setMenu("work")}>Portfolio</AnchorLink>{menu==="work"? <img src={five_circles} alt=""/> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#contact" onClick={()=>setMenu("contact")}>Contact</AnchorLink>{menu==="contact"? <img src={five_circles} alt=""/> : <></>}</li>
        </ul>
        <AnchorLink className="nav-connect anchor-link" offset={50} href="#contact" onClick={()=>setMenu("contact")}>Connect with me</AnchorLink>
    </div>
  )
}

export default Navbar