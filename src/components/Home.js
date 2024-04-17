import React from 'react';
import './Navbar.css';

import MessageBox from './assests/Message Box.png';
import Helloimg from './assests/Wave1.png';
import HeroBackground from './assests/Hero Background.svg';
import Herobackground2 from './assests/Vector 1.svg';
import Facelessavatar from './assests/Faceless-Male-Avatar-In-Suit.svg';
const Home = ({ isNight }) => {

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1YpTSNj0xHpWYp7LyW_ZbOUSCz8dik8hh/view?usp=sharing', '_blank');
  };

  const handleGetInTouch = () => {
    window.location.href = 'mailto:mohammedimran1407.mi@gmail.com';
  };

  return (
<div id="home" className={`flex flex-col md:flex-row justify-center md:justify-between items-center w-full ${isNight ? 'text-white bg-black' : 'text-black bg-white'} w-full h-screen`}>
  <div className="flex flex-col justify-center items-start md:mb-0 md:h-full w-full md:ml-48 ">
   <div className='w-28 relative'><img src={MessageBox} />
   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">Hello!</div>
   </div>


   <div className="flex flex-row text-4xl font-semibold mt-2 items-center justify-center">
  <div className={`mr-2 ${isNight ? 'text-white bg-black' : 'text-black bg-white'}`}>I'm</div>
  <div className={`text-gray-500 ${isNight ? 'border-b-4 border-white' : 'border-b-4 border-black'}`}>Imran</div>
  
  <div className="ml-2 flex items-center justify-center">
    <img src={Helloimg} className=" w-8 h-8"  />
  </div>
</div>
<div >Iam a Professional Mern Stack Developer, Based in India.</div>
<div className='flex flex-row mt-14'>
<div
      className={`cursor-pointer border-2 border-white rounded-md font-bold px-2 ont-bold py-2 text-xs bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 shadow-lg ${
        isNight ? 'shadow-none' : 'shadow-gray-400'
      } text-white`}
      onClick={handleDownloadCV}
    >
      Download CV
    </div>
    
    <div className={`cursor-pointer ml-6 border-2 border-white rounded-md font-bold px-2 ont-bold py-2 text-xs bg-gradient-to-r from-gray-700  to-black shadow-lg ${isNight ? 'shadow-none bg-gradient-to-r from-gray-700 via-gray-500 to-gray-600' : 'shadow-gray-400'} text-white`}>
  <a href="mailto:mohammedimran1407.mi@gmail.com" className="block w-full h-full text-center" target="_blank" rel="noopener noreferrer">
    Get in Touch
  </a>
</div>


</div>



  </div>
  <div className="flex flex-col justify-center items-center md:flex-row h-full w-full">

{isNight ? 
  <div className="relative w-96 h-96 mt-16">
  <img src={Herobackground2} className="absolute inset-0 w-full h-full" />
  <img src={Facelessavatar} className="absolute inset-0 left-0 bottom-72 m-auto w-80 h-80" />
</div>
:
<div className="relative w-96 h-96 mt-16">
  <img src={HeroBackground} className="absolute inset-0 w-full h-full" />
  <img src={Facelessavatar} className="absolute inset-0 left-0 bottom-72 m-auto w-80 h-80" />
</div>

}



  </div>
</div>

  
  );
};

export default Home;
