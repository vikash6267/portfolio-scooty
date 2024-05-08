import React from 'react'
import { support } from '../../constant/support'

function WroleySupport() {
  return (
    <div className=' p-6 bg-gray-300 '>

    <div className=' text-center font-bold text-2xl my-6 mb-7'>Wroley Support</div>

    <div className=' flex justify-evenly flex-wrap gap-10 '>
{
    support.map((one)=>(
        <div className=' flex flex-col w-[120px] text-center '>
            <div className=' p-[20px] bg-white rounded-xl w-[120px] h-[120px]'>
<img src={one.image} alt=""  />
            </div>

            <div className=' font-semibold text-[12px] '>
                {one.title}
            </div>
        </div>
    ))
}


    </div>


    </div>
  )
}

export default WroleySupport