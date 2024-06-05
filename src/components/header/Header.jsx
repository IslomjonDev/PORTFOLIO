import React from 'react'
import './Header.scss'
const Header = () => {
  return (
    <>
    <header>
        <div className="container">
            <div className="navbar">
                <div>
                  <h2>Islomjon</h2>
                </div>
                <div>
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">PROJECTS</a></li>
                        <li><a href="">SKILLS</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header