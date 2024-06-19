import React from 'react'
import './Banner.scss'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <>
      <div id='banner' className="banner">
         <div className="container">
             <div className="banner-content">
                <div className='orderl' data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div  className="banner-left">
                        <Typewriter
                            options={{
                              strings: ['Mamadiyev Islomjon'],
                              autoStart: true,
                              loop: true,
                            }}
                          />
                      <h1>FRONTEND DEVELOPER</h1>
                      <p>I am a programmer who perfects the frontend part of the program and pays attention to its design</p>
                      <Link to='contact' spy={true} smooth={true} offset={-100} durati on={300}>
                          <button> Contact Me <HiOutlineArrowNarrowRight className='black' />  </button>
                      </Link>
                    </div>
                </div>
                <div className='orderr' data-aos="zoom-out-left">
                  <div className="banner__right">
                  </div>
                </div>
             </div>
         </div>
      </div>
    </>
  )
}

export default Banner