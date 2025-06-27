import React, { useState, useEffect } from 'react';

const Intro = () => {
  const skills = ["DSA", "Frontend Development", "Backend Development", "SQL"];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex+1) % skills.length);
    }, 2000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-black p-10 sm:p-20 flex flex-col-reverse sm:flex-row sm:justify-between items-center'>
      <div className="matter text-white text-center sm:text-left mt-6 sm:mt-0">
        <h2 className='text-2xl sm:text-3xl'>Hello I'm</h2>
        <h1 className='font-extrabold sm:text-6xl text-4xl mt-2'>Kranthi Prasad</h1>
        <h2 className='sm:text-3xl mt-2 text-2xl sm:flex sm:gap-4'>And I'm good at<h2 className='text-blue-400 sm:mt-0 text-2xl sm:text-3xl font-bold mt-2 transition-opacity duration-700 ease-in-out'>
          {skills[currentSkillIndex]}
        </h2></h2>
        {/* <h2 className='text-blue-400 text-2xl sm:text-3xl font-bold mt-2 transition-opacity duration-700 ease-in-out'>
          {skills[currentSkillIndex]}
        </h2> */}

        <div className="introimgs flex justify-center sm:justify-start flex-wrap gap-4 mt-9 cursor-pointer">
          <a href="https://linkedin.com/in/kranthiprasad17" target="_blank" rel="noopener noreferrer">
            <img src="pictures/linkedin.png" alt="LinkedIn" className='size-12 sm:size-16' />
          </a>
          <a href="https://github.com/Kranthi-tech-eng" target="_blank" rel="noopener noreferrer">
            <img src="pictures/github.png" alt="GitHub" className='invert size-12 sm:size-16' />
          </a>
          <a href="https://leetcode.com/u/Kondani_kranthi_prasad/" target="_blank" rel="noopener noreferrer">
            <img src="pictures/skills.png" alt="LeetCode" className='invert size-12 sm:size-16' />
          </a>
          <a href="https://drive.google.com/file/d/1z8UJ4BzpqQVgqmHGHPx-6wGssz57_4Ui/view?usp=sharing" download>
            <button className='bg-blue-500 rounded-full px-4 py-2 text-sm sm:text-base mt-3 text-white font-bold hover:bg-cyan-950'>
              Download Resume
            </button>
          </a>
        </div>
      </div>

      <div className="profilepic mb-6 sm:mb-0">
        <img src="pictures/portfoliopic.jpg" alt="Profile" className='rounded-full size-52 sm:size-70 m-0' />
      </div>
    </div>
  );
};

export default Intro;
