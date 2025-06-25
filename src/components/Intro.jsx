import React from 'react'

const Intro = () => {
    return (
         <section id='intro'>
        <div className='bg-black p-20 flex justify-between'>
           
            <div className="matter text-white">
                <h2 className='text-3xl'>Hello I'm</h2>
                <h1 className='font-extrabold text-6xl mt-2'>Kranthi Prasad</h1>
                <h2 className='text-3xl mt-2'>And I'm good at ...</h2>
                <div className="introimgs flex gap-2 mt-9 cursor-pointer">
                    <a href="https://linkedin.com/in/kranthiprasad17" target="_blank" rel="noopener noreferrer">
                    <img src="pictures/linkedin.png" alt="" className='size-16' />
                    </a>
                    <a href="https://github.com/Kranthi-tech-eng" target="_blank" rel="noopener noreferrer">
                    <img src="pictures/github.png" alt="" className='invert size-15' />
                    </a>
                    <a href="https://leetcode.com/u/Kondani_kranthi_prasad/" target="_blank" rel="noopener noreferrer">
                    <img src="pictures/skills.png" alt="" className='invert size-15' />
                    </a>
                    <button className='bg-blue-500 rounded-full gap-6 cursor-pointer text-white font-bold p-3 hover:bg-cyan-950'>Download Resume</button>

                </div>

            </div>
            <div className="profilepic">
                <img src="pictures/portfoliopic.jpg" alt="" className='rounded-l-full rounded-r-full size-70 m-0' />
            </div>
            
        </div>
        </section>
    )
}

export default Intro
