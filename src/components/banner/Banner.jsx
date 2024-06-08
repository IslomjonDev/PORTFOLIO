import React from 'react'
import './Banner.scss'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <>
      <div id='banner' className="banner">
         <div className="container">
             <div className="banner-content">
                <div className="banner-left">
                   <Typewriter
                      options={{
                        strings: ['Mamadiyev Islomjon'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                 <h1>FRONTEND DEVELOPER</h1>
                 <p>I am a programmer who perfects the frontend part of the program and pays attention to its design</p>
                 <a href="/">
                    <button> Contact Me <HiOutlineArrowNarrowRight className='black' />  </button>
                 </a>
                </div>
             </div>
         </div>
      </div>
    </>
  )
}

export default Banner