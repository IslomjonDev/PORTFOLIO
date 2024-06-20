import React from 'react'
import './Projects.scss'
import Aos from 'aos'
import 'aos/dist/aos.css';
Aos.init()
import card1 from '../../assets/card1.png'
import card2 from '../../assets/project2.png'
import card3 from '../../assets/project3.png'
import card4 from '../../assets/project4.png'
import { FaEarthAmericas } from "react-icons/fa6";
import { FaGithub  } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div id="projects">
         <div className="container">
            <h1>Projects</h1>
            <div className="cards">      
                <div className="cards__df">             
                <div data-aos="fade-right">
                    <div className="card">
                        <div className="card-left">
                              <img src={card1} alt="" />
                            <div className="card__content">
                                <div className='codes'>
                                    <a target='blank'  href="https://html-css-exam-2-eak6.vercel.app/">
                                      <FaEarthAmericas />
                                      Open a brauzer
                                    </a>
                                    <a  target='blank' href="https://github.com/IslomjonDev/HTML-CSS-EXAM-2">
                                      <FaGithub />
                                      wiew github
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-right">
                          <h2>Turkish restaurant</h2>
                          <p>this site is about fake restaurant, it has many pages and it is written in html and js</p>
                          <h3>Tech stack : <span>HTML</span> <span>SCSS</span> <span>JS</span> <span>AOS</span></h3>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left">
                      <div className="card">
                      <div className="card-left">
                            <img src={card2} alt="" />
                          <div className="card__content">
                              <div className='codes'>
                                  <a target='blank'  href="https://exam-extra.vercel.app/">
                                    <FaEarthAmericas />
                                    Open a brauzer
                                  </a>
                                  <a  target='blank' href="https://github.com/IslomjonDev/EXAM-EXTRA">
                                    <FaGithub />
                                    wiew github
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="card-right">
                        <h2>Harley Quinn Portfolio</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, atque.</p>
                        <h3>Tech stack : <span>HTML</span> <span>CSS</span> <span>JS</span><span>AOS</span></h3>
                      </div>
                  </div>  
                </div>
                </div>
                <div className="cards__df">       
                <div data-aos="flip-left">
                    <div className="card">
                        <div className="card-left">
                              <img src={card3} alt="" />
                            <div className="card__content">
                                <div className='codes'>
                                    <a target='blank'  href="https://react2-lesson4.vercel.app/">
                                      <FaEarthAmericas />
                                      Open a brauzer
                                    </a>
                                    <a  target='blank' href="https://github.com/IslomjonDev/HTML-CSS-EXAM-2">
                                      <FaGithub />
                                      wiew github
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-right">
                          <h2>Online market</h2>
                          <p>this site is about the online market, it is written in react and has card wishlist pages</p>
                          <h3>Tech stack : <span>HTML</span> <span>SCSS</span> <span>JS</span> <span>AOS</span><span>REACT</span></h3>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-right">                      
                      <div className="card">
                      <div className="card-left">
                            <img src={card4} alt="" />
                          <div className="card__content">
                              <div className='codes'>
                                  <a target='blank'  href="https://figma-exam.vercel.app/">
                                    <FaEarthAmericas />
                                    Open a brauzer
                                  </a>
                                  <a  target='blank' href="https://github.com/IslomjonDev/FIGMA-EXAM">
                                    <FaGithub />
                                    wiew github
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="card-right">
                        <h2>Superb Home</h2>
                        <p>This site is a figma for house searching and buying</p>
                        <h3>Tech stack : <span>HTML</span> <span>CSS</span> <span>JS</span></h3>
                      </div>
                  </div>  
                </div>


                </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Projects











