import React from 'react';
import VectorRightimg from './assests/Vector 3.svg';
import VectorDown from './assests/Vector 5.svg';
import Handtoabout from './assests/Handtoabout.svg';
import Vectorleft from './assests/Vector 4.svg';
const About = ({isNight}) => {
  return (


<div id="about" className={`pt-8 h-screen w-full flex flex-col justify-center items-center ${isNight ? 'text-white bg-black' : 'text-black bg-white'}`}>
  {/* About */}
  <div className='relative h-full w-full flex justify-center items-center'>
    <div className='absolute w-full inset-x-0 top-20 flex justify-center items-center flex-col '>
      <div className='flex flex-col md:w-3/5 md:ml-20'>
      <div className={` flex  flex-row items-end w-full whitespace-nowrap  ${isNight ? 'text-white' : 'text-black'}`}>
<div className='md:text-5xl font-semibold'>T</div><div className='md:text-2xl font-semibold'>his is it. ;)</div><div className={`ml-10 border-b-2 w-full ${isNight ? 'border-white': 'border-black'}`}></div>
      </div>
      <div className='flex flex-col '>
      <div className='w-full my-10'>
        <div>  <span className='font-semibold'>Hello there,</span>
  I am Mohammed Imran.</div>
 As an Engineering graduate equipped with a strong foundation in <span className='font-semibold'>web development</span>, including proficiency in HTML, CSS, and JavaScript, I possess the necessary skills to create engaging and <span className='font-semibold'>user-friendly websites.</span> With expertise in popular libraries such as React, also popular in Node.js, and MongoDB, I am well-versed in building dynamic and scalable applications.
  <div>
  With a passion for web development, I'm eager to leverage my skills for complex projects, delivering high-quality solutions. With hands-on experience and continuous learning, I create innovative web applications. Joining a dynamic team, I aim to collaborate, exchange ideas, and stay updated with <span className='font-semibold'>industry trends.</span>
  </div>
</div>
</div>
      <div className='w-full flex justify-center'>
      <div className={` w-60 border-b-2 ${isNight ? 'border-white' : 'border-black'}`}></div>
      </div>
      </div>
    </div>
    <div className='h-32 w-72 absolute left-0 flex justify-center items-center pb-36'>
      <img src={Handtoabout} className=''/>
    </div>
    <div className='absolute left-64 bottom-10 '>
      <img src={Vectorleft} className='h-40  object-contain' />
    </div>
    <div className='absolute right-0 mb-40 '>
      <img src={VectorRightimg} className='h-96  object-contain' />
    </div>
    <div className='absolute right-24 bottom-0'>
      <img src={VectorDown} className='h-64 object-contain' />
    </div>
  </div>
</div>


  
  
  
  

  )
}

export default About;