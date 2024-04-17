import React from 'react'
import BlackFacebook from './assests/Whitescreen/Facebook.svg';
import Blackinstagram from './assests/Whitescreen/Instagram.svg';
import Blacktwitter from './assests/Whitescreen/Twitter.svg';
import Blackgithub from './assests/Whitescreen/GitHub.svg';
import BlackLinkedin from './assests/Whitescreen/LinkedIn.svg';
import BlackTelegram from './assests/Whitescreen/Telegram.svg';
import Blackkoo from './assests/Whitescreen/Koo.svg';
import Whitefacebook from './assests/Darkscreen/Group 9.svg';
import whiteInstagram from './assests/Darkscreen/instagram.png';
import whitetwitter from './assests/Darkscreen/twitter.png';
import whitegithub from './assests/Darkscreen/github.png';
import whitelinkedin from './assests/Darkscreen/linkedin.png';
import whitetelegram from './assests/Darkscreen/telegram.png';
import whitekooeclipse from './assests/Darkscreen/kooeclipse.png';
import whitekoo from './assests/Darkscreen/kooinner.png';

const Sociallinks = ({isNight}) => {
  return (<>
    {isNight?    
     <div className='fixed bottom-10 left-14 text-white flex-col'>
    <div className='my-2 w-8 h-8 cursor-pointer'><img src={Whitefacebook}/></div>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={whiteInstagram}/></div>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={whitetwitter}/></div>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={whitegithub}/></div>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={whitelinkedin}/></div>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={whitetelegram}/></div>
       <div className="my-2 flex items-center justify-center">
  <div className="relative w-8 h-8 cursor-pointer">
    <img src={whitekooeclipse} className="absolute inset-0 w-full h-full" />
    <img src={whitekoo} className="absolute inset-0 w-full h-full object-contain" />
  </div>
</div>

    </div>  
    :     <div className='fixed bottom-10 left-14 text-black flex-col'>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={BlackFacebook}/></div>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={Blackinstagram}/></div>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={Blacktwitter}/></div>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={Blackgithub}/></div>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={BlackLinkedin}/></div>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={BlackTelegram}/></div>
       <div className='my-2 w-8 h-8 cursor-pointer'><img src={Blackkoo}/></div>
      </div>
      }

    </>)
}

export default Sociallinks;