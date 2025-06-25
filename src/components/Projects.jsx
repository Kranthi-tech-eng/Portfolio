import React from 'react'

const Projects = () => {
  return (
    <div className='bg-black mb-0'>
      <section id="myprojects">
      <button className='bg-blue-600 w-full h-10 font-bold text-3xl text-white justify-center'>Projects</button>
      <h1 className='font-bold text-white justify-center text-center mt-2 text-3xl font-serif'>Attendence Calc</h1>
      <img src="pictures/project1.png" alt="" className='size-130 mx-auto mt-4' />
      <p className='text-white mt-2 text-2xl'>A simple web-based tool to calculate current attendance percentage and determine the number of future classes required to reach a desired attendance level. Users can input total classes, classes attended, and target attendance percentage. The app dynamically updates the results and provides guidance to help students maintain sufficient attendance.</p>

      <p className='text-white mt-2.5 text-3xl'>Technologies used: HTML, CSS, JavaScript</p>
      <div className="tomiddle flex justify-center">
        <a href="https://github.com/Kranthi-tech-eng/Attendence-calc" target="_blank" rel="noopener noreferrer">
          <button className='bg-blue-500 rounded-full gap-6 cursor-pointer text-white font-bold p-3 hover:bg-cyan-950 mb-4 mt-4'>Project Code</button>
        </a>


      </div>
      <div className="flex justify-center">
        <a href="https://attendence-calc.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button class="bg-blue-500 rounded-full cursor-pointer text-white font-bold p-3 hover:bg-cyan-950 mb-4">
            Live Demo
          </button>
        </a>

      </div>
      </section>
    </div>
  )
}

export default Projects
