import React from 'react'
import './Banner.scss'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <>
      <div id='banner' className="banner">
         <div className="container">
             <div className="banner-content">
                <motion.div
                  className="banner-left"
                  animate={{
                    x:70, 
                    opacity:1        
                   }}
                   initial={{
                     opacity : 0.1
                   }}
                   transition={{
                      duration : 2
                   }}
                  >
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
                </motion.div>
                <div className="banner-right">
                      <motion.div className='box'

                      animate={{
                        x:-80, 
                        opacity:1        
                       }}
                       initial={{
                         opacity : 0.1
                       }}
                       transition={{
                          duration : 2
                       }}
                      
                      >
                      </motion.div>
                </div>
             </div>
         </div>
      </div>
    </>
  )
}

export default Banner