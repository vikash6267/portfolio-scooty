import React from 'react'
import { support } from '../../constant/support'
import { FaAward, FaTools, FaShieldAlt, FaHeadphones } from 'react-icons/fa'

const iconMap = {
  1: <FaAward className="w-full h-full text-amber-500" />,
  2: <FaTools className="w-full h-full text-blue-500" />,
  3: <FaShieldAlt className="w-full h-full text-green-500" />,
  4: <FaHeadphones className="w-full h-full text-red-500" />
}

function WroleySupport() {
  return (
    <div className='p-8 bg-white border border-slate-200 rounded-3xl max-w-6xl mx-auto my-12 shadow-md'>
      <div className='text-center font-extrabold text-3xl mb-8 text-slate-800 uppercase tracking-wide'>
        Wroley Support
      </div>

      <div className='flex justify-evenly flex-wrap gap-10'>
        {support.map((one) => (
          <div key={one.id} className='flex flex-col w-[120px] text-center items-center group'>
            <div className='p-6 bg-slate-50 rounded-2xl w-[120px] h-[120px] shadow-sm border border-slate-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md flex items-center justify-center'>
              {iconMap[one.id] || <img src={one.image} alt="" className="object-contain" />}
            </div>
            <div className='font-bold text-[13px] text-slate-700 mt-4 group-hover:text-[#0c93cb] transition-colors leading-tight'>
              {one.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WroleySupport