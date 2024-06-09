import React, { useEffect, useState } from 'react'
import './Header.scss'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-scroll';
import logo from '../../assets/logos.png'
const Header = () => {

  let [burger , setBurger] = useState(false)


  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>
    <header className={`header ${shrink ? 'shrink' : ''}`}>
        <div className="container">
            <div className="navbar">
                <div>
                  <Link to='banner' href='/' spy={true} smooth={true} offset={-100} durati on={100}> 
                       <img src={logo} alt="" />
                  </Link>
                </div>
                <div className={`nav__list ${burger ? 'show' : ''}`}>
                    <ul>
                    <li>
                      <Link
                       onClick={()=> setBurger(false)} to='banner' spy={true} smooth={true} offset={-100} duration={300} >HOME
                       </Link>
                    </li>
                    <li>
                      <Link onClick={()=> setBurger(false)} to='about' spy={true} smooth={true} offset={-100} durati on={300} >ABOUT</Link>
                    </li>
                      <li>
                        <Link onClick={()=> setBurger(false)} to='skills' spy={true} smooth={true} offset={-100} durati on={300} >SKILLS</Link>
                      </li>
                      <li>
                        <Link onClick={()=> setBurger(false)} to='projects' spy={true} smooth={true} offset={-100} durati on={300} >PROJECTS</Link>
                      </li>
                      <li>
                        <Link onClick={()=> setBurger(false)} to='contact' spy={true} smooth={true} offset={-100} durati on={300} >CONTACT</Link>
                      </li>
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