'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import SliderItem from "./SliderItem";
import { useEffect, useState } from "react";

export default function MainSlider({ items }) {
  const [slidesArray, setSlidesArray] = useState([]);

  if (items.status === 200 && slidesArray.length === 0) {
    setSlidesArray(items.data.results.slice(0, 4))
  }
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="max-w-screen-2xl bg-black h-[90vh]">
        {slidesArray.map(item => (
          <SwiperSlide key={item.id}  >
            <SliderItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
