import React from 'react'
import './Projects.scss'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/project2.png'
import card3 from '../../assets/project3.png'
import card4 from '../../assets/project4.png'

import { FaEarthAmericas } from "react-icons/fa6";
import { FaGithub , FaArrowLeft } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div id="projects">
         <div className="container">
            <h1>Projects</h1>
            <div className="cards">
                <div className="card">
                    <div className="card-left">
                          <img src={card1} alt="" />
                        <div className="card__content">
                          <a target='blank'  href="https://html-css-exam-2-eak6.vercel.app/">
                          <FaEarthAmericas />
                          </a>
                          <a  target='blank' href="https://github.com/IslomjonDev/HTML-CSS-EXAM-2">
                          <FaGithub />
                          </a>
                        </div>
                    </div>
                    <div className="card-right">
                        <h2>Turkish restaurant</h2>
                        <p>this site is about fake restaurant, it has many pages and it is written in html and js</p>
                        <button> <FaArrowLeft/>hover here</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                          <img src={card2} alt="" />
                        <div className="card__content">
                          <a target='blank'  href="https://exam-extra.vercel.app/">
                          <FaEarthAmericas />
                          </a>
                          <a  target='blank' href="https://github.com/IslomjonDev/EXAM-EXTRA">
                          <FaGithub />
                          </a>
                        </div>
                    </div>
                    <div className="card-right">
                        <h2>Harley Quinn Portfoilo</h2>
                        <p>This site is a harley quinn portfolio written on youtube and written in html and js</p>
                        <button> <FaArrowLeft/>hover here</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                          <img src={card3} alt="" />
                        <div className="card__content">
                          <a target='blank'  href="https://react2-lesson4.vercel.app/">
                          <FaEarthAmericas />
                          </a>
                          <a  target='blank' href="https://github.com/IslomjonDev/react2-lesson4">
                          <FaGithub />
                          </a>
                        </div>
                    </div>
                    <div className="card-right">
                        <h2>online market</h2>
                        <p>this site is about the online market, it is written in react and has card wishlist pages</p>
                        <button> <FaArrowLeft/>hover here</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                          <img src={card4} alt="" />
                        <div className="card__content">
                          <a target='blank'  href="https://figma-exam.vercel.app/">
                          <FaEarthAmericas />
                          </a>
                          <a  target='blank' href="https://github.com/IslomjonDev/FIGMA-EXAM">
                          <FaGithub />
                          </a>
                        </div>
                    </div>
                    <div className="card-right">
                        <h2>Superb Home</h2>
                        <p>This site is a figma for house searching</p>
                        <button> <FaArrowLeft/>hover here</button>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Projects
