import React from 'react'
import './Contact.scss'
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane , FaFacebookF , FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact">
         <div className="container">           
            <form action="">
                <h2>Contact</h2>
                <div className="df">
                    <span>
                        <label htmlFor="">Name</label>
                        <input type="text" required  placeholder='John'/>
                    </span>
                    <span>
                        <label htmlFor="">LastName</label>
                        <input type="text" placeholder='Doe' required/>
                    </span>
                </div>
                <span>
                    <label htmlFor="">for reference</label>
                    <textarea placeholder='ask me quation ?'  name="" id=""></textarea>
                </span>
            </form>
            <h2>CONNECT WITH ME</h2>
            <div className="contact-me">
                <div className="contact__card">
                    <IoLogoInstagram />
                    <p>Instagramm</p>
                </div>
                <div className="contact__card">
                    <FaTelegramPlane />
                    <p>Telegramm</p>
                </div>
                <div className="contact__card">
                    <FaFacebookF />
                    <p>Facebook</p>
                </div>
                <div className="contact__card">
                    <FaLinkedinIn />
                    <p>Linkedin</p>
                </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Contact