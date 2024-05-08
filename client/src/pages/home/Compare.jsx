import React, { useState } from 'react';
import Design from "./comapare/Design";
import Performance from './comapare/Performance';
import Bettary from './comapare/Bettary';

function Compare() {
  const [activeTab, setActiveTab] = useState('design');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex flex-col items-center mt-8'>
      <div className='w-full flex justify-center'>
        <div className='relative'>
          <div className='flex gap-7'>
            <button
              className={`font-bold ${activeTab === 'design' ? 'mb-3 text-blue-800' : ''}`}
              onClick={() => handleTabChange('design')}
            >
              Design
            </button>
            <button
              className={`font-bold ${activeTab === 'performance' ? 'mb-3 text-blue-800' : ''}`}
              onClick={() => handleTabChange('performance')}
            >
              Performance
            </button>
            <button
              className={`font-bold ${activeTab === 'battery' ? 'mb-3 text-blue-800' : ''}`}
              onClick={() => handleTabChange('battery')}
            >
              Battery
            </button>
          </div>
          <div className='absolute w-full h-[2px] bg-yellow-400 bottom-0'></div>
        </div>
      </div>

      <div className='mt-3'>
        {activeTab === 'design' && <Design />}
        {activeTab === 'performance' && <Performance />}
        {activeTab === 'battery' && <Bettary />}
      </div>
    </div>
  );
}

export default Compare;
