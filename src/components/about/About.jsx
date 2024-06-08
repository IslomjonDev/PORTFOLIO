import React from 'react'
import about from '../../assets/about2.jpg'
import { CgDetailsMore } from "react-icons/cg";

import './About.scss'
const About = () => {
  return (
    <>
      <div className="about">
         <div className="container">
            <div className="about__me">
                <div className="about-left">
                    <img src={about} alt="" />
                </div>
                <div className="about-right">
                    <h2>Hi I'm Mamadiyev Islomjon ! </h2>
                    <p>I am a frontend developer, my main task is to write the part of the browser visible to the user in the code, to ensure the fast operation and beautiful appearance of the site.</p>
                    <a target='blank' href="https://www.canva.com/design/DAGGKWaHxG4/oWF0-mJYEdNJKXLC5Tr26Q/view?utm_content=DAGGKWaHxG4&utm_campaign=celebratory_first_publish&utm_medium=link&utm_source=editor_celebratory_first_publish"> 
                        <button>More <CgDetailsMore />  </button>
                    </a>
                </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default About