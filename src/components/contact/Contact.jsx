import React, { useState } from 'react'
import './Contact.scss'
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane , FaFacebookF , FaLinkedinIn } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const BOT_TOKEN = '6741914349:AAGl2R75SFfTugVGZbtsnMfPgWEiMQlzQVU'
const chatId = '-4200519677'
const userId = '5489414806'


const Contact = () => {
        
    const [name , setName] = useState("")
    const [lastName , setLastName] = useState("")
    const [text, setText] = useState("")
    
    
    
    const handleSubmit = (e) => {
      e.preventDefault()
      let newUser = {
        name , 
        lastName , 
        text
      }
    
      setName("")
      setLastName("")
      setText("")
    
      let texts = 'User %0A%0A'
      texts += `name : ${newUser.name} %0A%0A `
      texts += `lastName : ${newUser.lastName} %0A%0A `
      texts += `text : ${newUser.text} %0A%0A ` 
    
    
      let url  = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${texts}`
      let api = new XMLHttpRequest()
      api.open('GET' , url , true)
      api.send()
      toast.success('send massage')
    }
    

  return (
    <>
      <div id='contact' className="contact">
         <div className="container">           
            <form onSubmit={handleSubmit} action="">
                <h2>Contact</h2>
                <div className="df">
                    <span>
                        <label htmlFor="">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)}  type="text" required  placeholder='John'/>
                    </span>
                    <span>
                        <label htmlFor="">LastName</label>
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Doe' required/>
                    </span>
                </div>
                <span>
                    <label htmlFor="">for reference</label>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='ask me quation ?'  name="" id=""></textarea>
                </span>
                <button>SHOOT <GoArrowRight /></button>
            </form>
            <h2>CONNECT WITH ME</h2>
            <div className="contact-me">
                <a target='blank' href="https://www.instagram.com/_islomjon_088_/">
                  <div className="contact__card">
                        <IoLogoInstagram />
                        <p>Instagramm</p>
                    </div>
                </a>
                <a target='blank' href="https://t.me/Mamad1yev_1">
                    <div className="contact__card">
                        <FaTelegramPlane />
                        <p>Telegramm</p>
                    </div>
                </a>
                <a target='blank' href="https://www.facebook.com/profile.php?id=100058908317565">
                    <div className="contact__card">
                        <FaFacebookF />
                        <p>Facebook</p>
                    </div>
                </a>
                <a target='blank' href="https://www.linkedin.com/in/islomjon-mamadiyev-7796b930a/">
                    <div className="contact__card">
                        <FaLinkedinIn />
                        <p>Linkedin</p>
                    </div>
                </a>
            </div>
         </div>
      </div>
    </>
  )
}

export default Contact