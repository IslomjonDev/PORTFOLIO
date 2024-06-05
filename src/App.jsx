import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Skills from './components/skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    <Skills/>
    </>
  )
}

export default App
