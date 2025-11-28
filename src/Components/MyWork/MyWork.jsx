import React from 'react'
import './MyWork.css'
import blob_pattern from '../../assets/blob_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Works</h1>
        <img src={blob_pattern} alt="Blob Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index) => {
          return <a href={work.w_link} key={index}>
            <img src={work.w_img} alt="work image" />
          </a>
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <FontAwesomeIcon icon={faArrowRight}/>
      </div>
    </div>
  )
}

export default MyWork