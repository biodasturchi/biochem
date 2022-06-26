import React from 'react'
import './hilights.css'
import photo from '../../assets/photo.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hilights = () => {
  return (
    <div className='hilights'>
      <div className="hilights__title">
        Hilights
      </div>

      <div className="hilights__box">
        <img src={photo} alt="Research" className="hilights__box_img" />
        <div className="hilights__box_content">
          <div className="hilights__box_content-title">
            Our Research
          </div>
          <div className="hilights__box_content-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className="hilights__box_content-link">
            <Link to='/research'>
              See what we've published <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>

      <div className="hilights__box">
        <img src={photo} alt="Research" className="hilights__box_img" />
        <div className="hilights__box_content">
          <div className="hilights__box_content-title">
            Our Blog
          </div>
          <div className="hilights__box_content-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className="hilights__box_content-link">
            <Link to='/blog'>
              See what we've published <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>

      <div className="hilights__box">
        <img src={photo} alt="Research" className="hilights__box_img" />
        <div className="hilights__box_content">
          <div className="hilights__box_content-title">
            Our Team
          </div>
          <div className="hilights__box_content-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className="hilights__box_content-link">
            <Link to='/team'>
              See what we've published <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hilights