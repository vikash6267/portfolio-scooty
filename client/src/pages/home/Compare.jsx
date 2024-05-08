import React, { useState } from 'react';
import Design from "./comapare/Design";
import Performance from './comapare/Performance';
import Bettary from './comapare/Bettary';

function Compare() {
  const [design, setDesign] = useState(true);
  const [per, setPer] = useState(false);
  const [bettry, setBettry] = useState(false);

  return (
    <div className='flex flex-col items-center mt-8 '>

      <div className='w-full flex justify-center '>
        <div className='  relative  '> 
         <div className=' flex gap-7'>
          <button >Design</button>
          <button >Performance</button>
          <button >Battery</button></div>

          <div className=' absolute w-full h-[2px] bg-black -bottom-2'></div>
        </div>
      </div>

      <div>
        {design && <Design />}
        {per && <Performance />}
        {bettry && <Bettary />}
      </div>

    </div>
  );
}

export default Compare;
