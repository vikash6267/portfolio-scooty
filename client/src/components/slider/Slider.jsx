import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import one from "../../../public/assests/1.jpg"
import two from "../../../public/assests/2.jpg"

const Slider = () => {
  return (
    <div className=" w-screen h-screen">
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
        className="w-screen "
      >
        <SwiperSlide >
          <img
            src={one}
            alt="not found"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={two}
            alt="not found"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://wroleyelectricscooter.in/assets/images/about-1.png"
            alt="not found"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://wroleyelectricscooter.in/assets/images/e-scooter-transformed.png"
            alt="not found"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
