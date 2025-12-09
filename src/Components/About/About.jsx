import React from 'react'
import './About.css'
import blob_pattern from '../../assets/blob_pattern.svg'
/*import profile_img from '../../assets/profile_img.jpg'
import five_stars_depth from '../../assets/five_stars_depth.svg'*/

const About = () => {
  return (
    <div className='about-container'>
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={blob_pattern} alt="blob pattern" />
        </div>
        <div className="about-sections">
            {/*
            <div className="about-left">
                <img src={profile_img} alt="Profile Image"className='about-left-image'/>
                <img src={five_stars_depth} alt="wings diamond" className='about-left-dwings' />
            </div> */}
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate <span className='txt-grad'>full-stack developer</span> with strong interest in building clean, user-friendly, responsive, and scalable web & mobile applications. With skills in <span className='txt-grad'>HTML, CSS, JavaScript, React.js, Node.js, and Python,</span> I enjoy turning ideas into functional and visually appealing designs. My journey into tech has been fueled by curiosity, creativity, and the drive to keep improving with every project.</p>
                    <p>Beyond coding, <span className='txt-grad'>I'm focused</span> on continuous learning and problem solving. I value simplicity, attention to detail, and creating solutions that are both practical and impactful. <span className='txt-grad'>My goal</span> is to grow as a developer while contributing to projects that make a real difference for users and businesses.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <span><hr style={{width: "90%"}} /></span></div>
                    <div className="about-skill"><p>JavaScript</p> <span><hr style={{width: "65%"}} /></span></div>
                    <div className="about-skill"><p>React.js</p> <span><hr style={{width: "80%"}} /></span></div>
                    <div className="about-skill"><p>Node.js</p> <span><hr style={{width: "65%"}} /></span></div>
                    <div className="about-skill"><p>Python</p> <span><hr style={{width: "60%"}} /></span></div>
                    <div className="about-skill"><p>Tailwindcss</p> <span><hr style={{width: "75%"}} /></span></div>
                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h2>2+</h2>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievment">
                <h2>37+</h2>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievment">
                <h2>29+</h2>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About