import React, { useState } from 'react'
import './Contact.scss'
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane , FaPhoneAlt, FaFacebookF , FaLinkedinIn } from "react-icons/fa";
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
                <h2>Contact<span>Me</span></h2>
                <div className="contact__content">
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
                <a target='blank' href="tel:9989911947484">
                  <div className="contact__card">
                        <FaPhoneAlt />
                        <h4>+998-91-194-74-84</h4>
                    </div>
                </a>
                      </div>
                    <div className="df">
                    <div className="dfinp">
                            <div className='fdinputs'>
                                    <span>
                                        <input value={name} onChange={(e) => setName(e.target.value)}  type="text" required  placeholder='FirstName'/>
                                    </span>
                                    <span>
                                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='LastName' required/>
                                    </span>
                            </div>
                            <div className='fdinputs'>
                                    <span>
                                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="email" placeholder='Email' required/>
                                    </span>
                                    <span>
                                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Subject' required/>
                                    </span>
                            </div>
                    </div>
                    <span>
                        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='ask me quation ?'  name="" id=""></textarea>
                        <button>Send Message <GoArrowRight /></button>
                    </span>
                    </div>
                </div>
            </form>
         </div>
      </div>
    </>
  )
}

export default Contact