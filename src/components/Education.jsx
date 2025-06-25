import React from 'react'

const Education = () => {
  return (
    <div className='bg-black'>
      <button className='bg-blue-600 w-full h-10 font-bold text-3xl text-white justify-center'>Education</button>
      <div className="edumatter">
        <h1 className='font-extrabold text-white justify-center text-center mt-2 text-3xl'>SR University - (2023-2027)</h1>
        
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/SRUniversity.png" alt="" className='size-25 mx-auto mt-2'/>

            <ol className='text-white list-disc ml-5 '>
                <li>Bachelor of Technology in Computer Science
</li>
<li>CGPA : 9.04/10
</li>
<li>Course Works
</li>

            </ol>
            <div className="otherlist text-white">
                <ul className='list-disc ml-19 '>
                    <li>Data Structures and Algorithms</li>
<li>Operating System</li>
<li>Database Management Systems</li>
<li>Computer Networks</li>
<li>Artificial Intelligence & Machine Learning</li>


                </ul>
            </div>
       
    
      </div>
    </div>
  )
}

export default Education
