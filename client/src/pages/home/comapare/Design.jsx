import React from 'react'
import img from "../../../../public/assests/compare/des1.jpg"
function Design() {
  return (
    <div>


<div className=' w-[80%] mx-auto text-center flex flex-col gap-5 mb-7 mt-4'>
<h1 className=' font-bold text-xl'>Smart style, practical design and unmatched build</h1>
<p className=' text-sm'>The all-new TVS iQube is designed to give you the best of comfort, convenience and superior riding experience. Add to this striking good looks and trusted build quality from TVS, and what you get is an electric scooter that’s just the best!</p>
</div>

<div className=' w-[80%] mx-auto'>
<img src={img} alt="" />
</div>


    </div>
  )
}

export default Design