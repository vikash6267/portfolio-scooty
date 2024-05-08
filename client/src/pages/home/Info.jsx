import React from 'react'
import img from "../../../public/assests/image.jpg"
function Info() {
  return (
<div className=' w-screen bg-white p-2'>
<div className=' w-11/12 mx-auto mt-[100px]'>
    
    <div className=' text-center font-bold text-2xl flex flex-col gap-16 '>
        <div className=' flex w-full justify-center'>
            <p className=' shadow-2xl shadow-black '>
                    Wroley Scooter : The SmartTest Choise 
            </p>
        </div>

        <div>
            <img src={img} alt=""  className=' object-cover '/>
        </div>
    </div>
    </div>
</div>
  )
}

export default Info