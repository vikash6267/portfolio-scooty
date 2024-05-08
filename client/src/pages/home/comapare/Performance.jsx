import React from 'react'
import ImageSlide from './Slider'
import one from "../../../../public/assests/compare/p1.jpg"
import two from "../../../../public/assests/compare/p2.jpg"
import three from "../../../../public/assests/compare/p3.jpg"

function Performance() {

    const images = [
       one,two,three
    
    ]
  return (
    <div>


    <div className=' w-[80%] mx-auto text-center flex flex-col gap-5 mb-7 mt-4'>
    <h1 className=' font-bold text-xl'> Beat the traffic blues, without making any noise about it</h1>
    <p className=' text-sm'>The iQube meets your need for everyday riding requirement with maximum range available to you. Switch to power mode, and get the thrill of superior performance, faster pick-up and quick acceleration. All without making any noise about it.</p>
    </div>
    
    <div >
    <ImageSlide images={images} />

    </div>

    
        </div>
  )
}

export default Performance