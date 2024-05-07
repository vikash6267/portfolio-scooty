import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        style={{ width: "100%" }}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          555: {
            slidesPerView: 2,
          },
          788: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img
            src="https://wroleyelectricscooter.in/assets/images/e-scooter-transformed.png"
            alt="not found"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://wroleyelectricscooter.in/assets/images/wroley-platina-pic-1.png"
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
