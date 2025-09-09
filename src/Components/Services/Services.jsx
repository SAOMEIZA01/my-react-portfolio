import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import wings_diamond from '../../assets/wings_diamond.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={wings_diamond} alt="Blob Pattern" />
        </div>
        <div className="services-container">
            {Services_Data.map((services,index) => {
                return <div key={index} className="services-format">
                    <h3>{services.s_no}</h3>
                    <h2>{services.s_name}</h2>
                    <p>{services.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read more</p>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services