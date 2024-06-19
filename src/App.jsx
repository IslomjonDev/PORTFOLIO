import {  useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import AnimatedCursor from 'react-animated-cursor'


function App() {
  return (
    <>
    <AnimatedCursor
      innerSize={12}
      outerSize={10}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
     
     />
    <Header/>
    <Banner/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
