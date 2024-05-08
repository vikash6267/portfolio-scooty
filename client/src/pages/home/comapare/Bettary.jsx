import React from 'react'
import ImageSlide from './Slider'
import one from "../../../../public/assests/compare/c1.jpg"
import two from "../../../../public/assests/compare/c2.jpg"

function Bettary() {

    const images = [
       one,two
    
    ]
  return (
    <div>


    <div className=' w-[80%] mx-auto text-center flex flex-col gap-5 mb-7 mt-4'>
    <h1 className=' font-bold text-xl'>Refuel your TVS iQube - anywhere.</h1>
    <p className=' text-sm'>Now charge your iQube from 0 - 80% in less than 5hours. That's 115+ km. range in less than 5 hours. All with the convenience of charging anywhere with the easy to use, portable new 650 W charger.</p>
    </div>
    
    <div >
    <ImageSlide images={images} />

    </div>

    
        </div>
  )
}

export default Bettary