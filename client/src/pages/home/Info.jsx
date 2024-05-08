import React from 'react'
import img from "../../../public/assests/image.jpg"
function Info() {
  return (
<div className=' w-screen  p-2'>
<div className=' w-[85%] mx-auto mt-[100px]'>
    
    <div className=' text-center font-bold lg:text-2xl flex flex-col gap-16 text- '>
        <div className=' flex w-full justify-center'>
            <p className=' shadow-2xl shadow-black '>
                    Wroley Scooter : The SmartTest Choise 
            </p>
        </div>

        <div className='lg:w-[70%] mx-auto h-auto'>
            <img src={img} alt=""  className=' object-cover w-full '/>
        </div>
    </div>
    </div>
</div>
  )
}

export default Info