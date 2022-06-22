import React from 'react'
import logo from '../../assets/icon.svg'

const Navbar = () => {
  return (
    <div className='navbar__container'>
      <div className="navbar__container-lists">
        <div className="navbar__container-lists_brand">
          <img src={logo} alt="" width={40} height={40} />
        </div>
      </div>
    </div>
  )
}

export default Navbar