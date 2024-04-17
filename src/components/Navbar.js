import React,{useState} from 'react';
import { Link } from "react-scroll";
import Day from './assests/Group 21.png';
import Night from './assests/Moon.png';
import Logo from './assests/Logo.svg';
import WhiteLogo from './assests/Group 15.png';
const Navbar = ({setIsNight,isNight}) => {
    // const [isNight,setIsNight]=useState(false);
    const handleDayNight=()=>{
        setIsNight(!isNight);
    }
    const [pages,setPages]=useState('home');

    const handleDownloadCV = () => {
      window.open('https://drive.google.com/file/d/1YpTSNj0xHpWYp7LyW_ZbOUSCz8dik8hh/view?usp=sharing', '_blank');
    };
    const handleotherlinks=()=>{
      window.open('https://github.com/MohammedImran03', '_blank');
    };
  
    const handleGetInTouch = () => {
      window.location.href = 'mailto:mohammedimran1407.mi@gmail.com';
    };



  return (
  
  <>
    <div className={` fixed top-0 flex w-full justify-between items-center py-2 flex-col md:flex-row ${isNight? 'text-white bg-black' : 'text-black'} md:fixed md:top-0`}>
        <div className={`flex items-center flex-row md:ml-16 ${isNight? 'text-white bg-black' : 'text-black bg-white'}`}>
            <div className='cursor-pointer w-5 h-5'>{isNight ? <img src={WhiteLogo}/>:<img src={Logo} />}</div>
            <div className='font-bold ml-4 text-md cursor-pointer'>Mohammed Imran</div>
        </div>
        <div className='flex items-center flex-col md:flex-row md:mr-16'>
  <Link to='home' smooth duration={800}><div className={`cursor-pointer text-md font-semibold mx-5 ${isNight ? 'text-white' : 'text-black'}`}>Home</div>
  </Link>
<Link to='about' smooth duration={800}> <div className={`cursor-pointer text-md font-semibold mx-5 ${isNight ? 'text-white' : 'text-black'}`}>About</div></Link> 
  <div onClick={handleDownloadCV} className={`cursor-pointer text-md font-semibold mx-5 ${isNight ? 'text-white' : 'text-black'}`}>Resume</div>
  <div onClick={handleotherlinks} className={`cursor-pointer text-md font-semibold mx-5 ${isNight ? 'text-white' : 'text-black'}`}>Skills</div>
  <div onClick={handleotherlinks} className={`cursor-pointer text-md font-semibold mx-5 ${isNight ? 'text-white' : 'text-black'}`}>Projects</div>
  <div className={`cursor-pointer text-md font-semibold mx-5 ${isNight ? 'text-white' : 'text-black'}`}>
  <a href="mailto:mohammedimran1407.mi@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
</div>

  <div className='ml-8 w-5 h-5 cursor-pointer' onClick={handleDayNight}>{isNight? <img src={Day}/>: <img src={Night} />}</div>
        </div>
    </div>
  </>
  
)
}

export default Navbar;