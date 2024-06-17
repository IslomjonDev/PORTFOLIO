import React from 'react'
import { FaGoogle , FaGithub , FaTwitter} from "react-icons/fa";
import './Footer.scss'
import { IoIosArrowRoundDown } from "react-icons/io";

const Footer = () => {
  return (
    <>
     <footer>
        <div className="container">
            <div className="df">
                <div className="about-me">
                    <h2>Say Hello</h2>
                    <span>
                        <FaGoogle />
                        <a target='blank' href="https://myaccount.google.com/?hl=ru&utm_source=OGB&utm_medium=act&pli=1">mamadiyevislomjon2@gmail.com</a>
                    </span>
                    <span>
                        <FaGithub />
                        <a target='blank' href="https://github.com/IslomjonDev">IslomjonDev</a>
                    </span>
                    <span>
                        <FaTwitter />
                        <a target='blank' href="https://x.com/Islomjonnnn">Islomjonnnn</a>
                    </span>
                </div>
                <div>
                    <div className="div">
                        <h2>My Rezume</h2>
                        <IoIosArrowRoundDown />
                    </div>
                    <a target='blank' href="https://www.canva.com/design/DAGGKWaHxG4/oWF0-mJYEdNJKXLC5Tr26Q/view?utm_content=DAGGKWaHxG4&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                         <button>Click Me !</button>
                    </a> 
                </div>
            </div>
        </div>
     </footer>
     <p className='p'>Thank for your attention</p>
    </>
  )
}

export default Footer