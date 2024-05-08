import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { escootySliderData } from "../../constant/sliderData";

const Slider = () => {
  useEffect(()=>{
console.log(escootySliderData)
  },[])
  return (
    <div className=" w-screen ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // style={{ width: "100vw !important" }} 
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          555: {
            slidesPerView: 1,
          },
          788: {
            slidesPerView: 1,
          },
        }}
        className="w-screen z-20  "
      ><div>
        {
          escootySliderData.map((scooty)=>{
            return(
              
            <SwiperSlide key={scooty.id} className="w-full relative">

<div className="  ">
      <img
        className=" ]  "
        src={scooty.image}
        alt={"hello"}
       
      />
    </div>

    <div className=" absolute top-0 right-0 w-ful h-full flex items-center  flex-col mt-10">

<div className=" lg:w-[50%] w-[60%] text-center flex flex-col gap-5 ">
<div className=" flex w-full justify-center">
<p className="  lg:text-2xl  shadow-2xl shadow-amber-300 font-bold p-2 rounded"> {scooty.title}</p>

</div>
<div className=" flex w-full justify-center">
<p className=" lg:text-2xl  shadow-2xl shadow-amber-300 font-bold p-2 rounded"> {scooty.desc}</p>

</div>
</div>


    </div>


</SwiperSlide>

            )
          })
        }
      </div>
      </Swiper>
    </div>
  );
};

export default Slider;
