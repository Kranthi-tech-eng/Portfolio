import React from 'react'

const Skills = () => {
  return (
    <div className='bg-black '>
      <section id="Myskills">
      <button className='bg-blue-600 w-full h-10 font-bold text-3xl text-white justify-center'>Skills</button>
      <h1 className='text-white font-black text-3xl font-serif'>Programming Languages</h1>
      <div className="prolang flex gap-5 mt-2 ">
    <img src="https://www.iwebstechnology.com/uploads/What-is-Java-cdea5.jpg"  alt="" className='size-20 '/>
    <img src="https://logos-world.net/wp-content/uploads/2021/10/Python-Logo-700x394.png" alt="" className='size-20 '/>
    <img src="pictures/c==.png" alt="" className='size-20 '/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpic_RAm8sI12YHEdBipSnzFBC_b7_ofbBw&s" alt="" className='size-20 ' />
      </div>
      <h1 className='text-white font-black text-3xl font-serif mt-2'>FrameWorks</h1>
      <div className="framelogo flex mt-1 gap-5">
        <img src="https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain" alt="" className='size-20'/>
        <img src="https://1000logos.net/wp-content/uploads/2020/08/Git-Logo.jpg" alt="" className='size-20'/>
      </div>
      <h1 className='text-white font-black text-3xl font-serif mt-2'>Data Bases</h1>
      <div className="database flex gap-5 mt-1">
        <img src="https://th.bing.com/th/id/OIP.JVt34lGxmm0GAGNNL_mwBgHaHa?o=7rm=3&rs=1&pid=ImgDetMain" alt="" className='size-20'/>
        <img src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png" alt="" className='size-20'/>
      </div>
      <h1 className='text-white font-black text-3xl font-serif mt-2'>Domain Knowledge</h1>
      <div className="domainimg ">
        <img src="https://static.vecteezy.com/system/resources/previews/013/899/429/original/machine-learning-icon-artificial-intelligence-smart-machine-logo-template-illustration-free-vector.jpg" alt="" className='size-20'/>
      </div>
      </section>
    </div>
  )
}

export default Skills
