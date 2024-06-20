import React, { useState } from 'react'
import about from '../../assets/about2.jpg'
import { CgDetailsMore } from "react-icons/cg";
import './About.scss'

let item = [
  {
    layoutId : "1" ,
    subtitle : 'lorem10sadiak',
    title : 'asdikamksd'
  }
]

const About = () => {
  return (
    <>
      <div id='about' className="about">
         <div className="container">
          <div className="about__title">
              <h2><span>Education</span></h2>
          </div>
          <div className="education">
             <div className="items">
                   <div className="item">
                       <div className="item__dot"> </div>
                           <div className="item__date">2023</div>
                           <div className="items__content">
                              <h2> HIGH SCHOOL</h2>
                              <p> In May 2023, I graduated from high school and entered a vocational college !</p>
                           </div>
                   </div>
                   <div className="item">
                       <div className="item__dot"></div>
                           <div className="item__date">2023</div>
                           <div className="items__content">
                              <h2>NAJOT TALIM</h2>
                              <p> In 2023, I entered the Najot Talim educational center in the field of IT and completed the frontend course for 1 year !</p>
                           </div>
                   </div>
                   <div className="item">
                       <div className="item__dot"></div>
                           <div className="item__date">2024</div>
                          <div className="items__content">
                              <h2>COLLEGE</h2>
                              <p>In 2024, I finished the first course of the vocational college in the field of IT </p>
                           </div>
                   </div>
                   <div className="item">
                       <div className="item__dot"></div>
                           <div className="item__date">2024</div>
                           <div className="items__content">
                              <h2>MY FIRST JOB</h2>
                              <p>Coming Soon !</p>
                           </div>
                       
                   </div>
              </div>
           </div>
         </div>
      </div>
    </>
  )
}

export default About