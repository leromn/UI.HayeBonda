import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function SwiperComp() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
