import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import five_stars_depth from "../../assets/five_stars_depth.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-top">
        <div className="hero-top-left">
          <img src={profile_img} alt="Profile Image" className="hero-image" />
          <img src={five_stars_depth} alt="wings diamond" className="img-decor"/>
        </div>
        <div className="hero-top-right">
          <h1><span>I'm Abdulrazaq,</span></h1>
          <h1>Full-Stack Developer</h1>
          <p>I build clean, responsive, and scalable web and mobile applications — Turning ideas into fast, reliable, and user-focused digital experiences. Core Technologies I Work With:</p>
          <div className="tech">
            <p>HTML & CSS</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>React Native</p>
            <p>Node.js</p>
            <p>Python</p>
            <p>Tailwincss</p>
          </div>
        </div>
      </div>
      <div className="hero-action">
        <AnchorLink
          className="anchor-link hero-connect"
          offset={50}
          href="#contact"
        >
          My Contact
        </AnchorLink>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
