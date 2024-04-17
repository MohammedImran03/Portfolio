// Mail.js
import React from 'react';

const Mail = ({ isNight }) => {
  return (
    <div className={`fixed right-14 bottom-10 font-semibold border-t-4 pt-8 text-xs ${isNight ? 'text-white border-white' : 'text-black border-black'}`} style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
      mohammedimran1407.mi@gmail.com
    </div>
  );
}

export default Mail;
