import React, { useState } from 'react'
import './Header.scss'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {

  let [burger , setBurger] = useState(false)

  return (

    <>
    <header>
        <div className="container">
            <div className="navbar">
                <div>
                  <h2>Islomjon</h2>
                </div>
                <div className={`nav__list ${burger ? 'show' : ''}`}>
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">PROJECTS</a></li>
                        <li><a href="">SKILLS</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </div>
                <div className="burger">
                  <button onClick={() => setBurger(!burger)}>
                   <RxHamburgerMenu />
                  </button>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header