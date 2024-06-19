import React from 'react'
import about from '../../assets/about2.jpg'
import { CgDetailsMore } from "react-icons/cg";

import './About.scss'
const About = () => {
  return (
    <>
      <div id='about' className="about">
         <div className="container">
          <div className="about__title">
              <h2>About <span>Me</span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maiores repellendus velit, porro dignissimos autem sint accusamus cumque optio, quas fugit? Possimus tempore voluptatibus hic maiores, ut quaerat adipisci inventore vitae sapiente iusto vel eaque nulla, maxime aut, provident obcaecati cum eius ipsum soluta autem harum? Doloremque pariatur, earum consequuntur quae maxime suscipit voluptatum rerum iusto, velit consectetur, fugit voluptatibus. Praesentium dicta error culpa molestias voluptate asperiores suscipit, nulla at reprehenderit veritatis exercitationem? Necessitatibus quaerat molestias obcaecati voluptates, natus vel corporis consequatur in eaque quasi, ullam aliquam eos commodi, eum iusto. Sit harum amet et nesciunt, distinctio aspernatur quos enim!</p>
          </div>
            <div className="about__me">
                <div className="about-left">
                    <img src={about} alt="" />
                </div>
                <div className="about-right">
                    <h2>Hi I'm <span>Mamadiyev Islomjon !</span> </h2>
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