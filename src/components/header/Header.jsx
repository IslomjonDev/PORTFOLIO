import React, { useState } from 'react'
import './Header.scss'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-scroll';

const Header = () => {

  let [burger , setBurger] = useState(false)

  return (

    <>
    <header>
        <div className="container">
            <div className="navbar">
                <div>
                  <Link to='banner' href='/' spy={true} smooth={true} offset={-100} durati on={100}> <h2>Islomjon</h2>
                  </Link>
                </div>
                <div className={`nav__list ${burger ? 'show' : ''}`}>
                    <ul>
                    <li><Link to='banner' spy={true} smooth={true} offset={-100} durati on={300} >HOME</Link></li>
                    <li><Link to='about' spy={true} smooth={true} offset={-100} durati on={300} >ABOUT</Link></li>
                      <li><Link to='skills' spy={true} smooth={true} offset={-100} durati on={300} >SKILLS</Link></li>
                      <li><Link to='projects' spy={true} smooth={true} offset={-100} durati on={300} >PROJECTS</Link></li>
                      <li><Link to='contact' spy={true} smooth={true} offset={-100} durati on={300} >CONTACT</Link></li>
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