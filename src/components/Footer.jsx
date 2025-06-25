import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black h-20 mt-0'>
      <section id="connectme">
        <div className="headline">
            <button className='bg-blue-600 w-full h-10 font-bold text-3xl text-white justify-center'>Connect</button>
        </div>
        <div className="pictures flex justify-center gap-3 mt-1">
          <a href="https://linkedin.com/in/kranthiprasad17" target="_blank" rel="noopener noreferrer">
            <img src="pictures/linkedin.png" alt="" className='size-9 '/>
            </a>
            <a href="https://github.com/Kranthi-tech-eng" target="_blank" rel="noopener noreferrer">
            <img src="pictures/github.png" alt="" className='invert size-8 m-0.5' />
            </a>
           <a href="">
            <img src="pictures/whatsapp.png" alt="" className='invert size-8 m-0.5' />
            </a>
        </div>
        </section>

    </footer>
  )
}

export default Footer
