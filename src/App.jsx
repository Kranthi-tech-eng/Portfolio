import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
// import portfoliopic from './components/portfoliopic'
import Footer from './components/Footer'
import Main from './components/Main'
import Intro from './components/Intro'
import Education from'./components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="min-h-screen flex flex-col scroll-smooth">

        <Navbar />
        <div className="w-full h-[1px] bg-gray-300 " />
        <Intro/>
        {/* <div className="w-full h-[1px] bg-gray-300" /> */}
        <Education/>
        {/* <div className="w-full h-[1px] bg-gray-300" /> */}
        <Skills/>
        {/* <div className="w-full h-[1px] bg-gray-300" /> */}
        <Projects/>
       <Main/>
       {/* <div className="w-full h-[1px] bg-gray-300" /> */}

        <Footer />
       
      </div>


    </>
  )
}

export default App
