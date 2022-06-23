import React from 'react'
import './banner.css'
import banner from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className="banner__section">
      <img src={banner} alt="Banner" className='banner__section_img' />
    </div>
  )
}

export default Banner