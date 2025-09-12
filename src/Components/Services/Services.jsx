import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import blob_pattern from '../../assets/blob_pattern.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={blob_pattern} alt="Blob Pattern" />
        </div>
        <div className="services-container">
            {Services_Data.map((services,index) => {
                return <div key={index} className="services-format">
                    <h2>{services.s_no}</h2>
                    <h3>{services.s_name}</h3>
                    <p>{services.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read more</p>
                        <FontAwesomeIcon icon={faArrowRight} className='icon-farwr'/>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services