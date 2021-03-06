import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faMicroscope } from '@fortawesome/free-solid-svg-icons'

const Header = ({ props }) => {
  return (
    <div className='header'>
      <div className="header__title">
        {props === "home"
          ? <></>
          : props === "research"
            ? <FontAwesomeIcon icon={faMicroscope} />
            : <FontAwesomeIcon icon={faLeaf} />
        }
        {props === "home"
          ? <span>Your Lab Slogan</span>
          : props === "research"
            ? <span>Research</span>
            : <span>Blog</span>
        }
      </div>
      <div className="header__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  )
}

export default Header