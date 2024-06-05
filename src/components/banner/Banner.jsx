import React from 'react'
import './Banner.scss'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Banner = () => {
  return (
    <>
      <div className="banner">
         <div className="container">
             <div className="banner-content">
                <div className="banner-left">
                <h2> Mamadiyev Islomjon </h2>
                 <h1>FRONTEND DEVELOPER</h1>
                 <p>I am a programmer who perfects the frontend part of the program and pays attention to its design</p>
                 <a href="/">
                    <button> Contact Me <HiOutlineArrowNarrowRight />  </button>
                 </a>
                </div>
             </div>
         </div>
      </div>
    </>
  )
}

export default Banner