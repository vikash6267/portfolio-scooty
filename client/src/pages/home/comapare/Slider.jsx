import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const ImageSlide = ({images}) => {
 
  return (
    <div className="w-[80%] mx-auto bg-red-400 flex items-center justify-center ">
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
          images.map((scooty,ind)=>{
            return(
              
            <SwiperSlide key={ind} className="flex items-center ">

<div className=" flex items-center w-screen  ">
      <img
        className="   "
        src={scooty}
        alt={"hello"}
       
      />
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

export default ImageSlide;
