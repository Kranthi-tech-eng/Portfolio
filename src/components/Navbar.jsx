import React from 'react'

const Navbar = () => {
    return (
     
        <nav className='sm:h-15 flex flex-col bg-black sm:flex-row sm:justify-between sm:items-center p-4'>
            <a href="https://kranthiprasad.vercel.app/">
                <div className="gap flex gap-1 justify-center items-center">
                    <img src="pictures/portfoliopic.jpg" alt="" className='rounded-4xl h-8 ml-3 size-9' />
                    <h1 className='text-white font-bold mr-auto pt-1 cursor-pointer'>Kranthi</h1>
                </div>
            </a>
            <div className="options">
               
                <ul className='cursor-pointer flex gap-2  text-white'>
                    
                    <a href="#intro"><img src="pictures/aboutme.png" alt="" className='invert size-6' /></a>

                    <li className='hover:font-bold '><a href="#intro">About Me</a></li>
                   
                    <a href="#myprojects"><img src="pictures/projects.png" alt="" className='invert size-6' /></a>
                    <li className='hover:font-bold'><a href="#myprojects">Projects</a></li>
                   
                    <a href="#Myskills"><img src="pictures/skills.png" alt="" className='invert size-6' /></a>
                    <li className='hover:font-bold'><a href="#Myskills">Skills</a></li>
                   
                    <a href="#connectme"><img src="pictures/concat.png" alt="" className='invert size-6' /></a>
                    <li className='hover:font-bold'><a href="#connectme">Connect</a></li>
                </ul>
            </div>
        </nav>
       

    )
}

export default Navbar
