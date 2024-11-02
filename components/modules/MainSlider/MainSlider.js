"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SliderItem from "./SliderItem";
import { useEffect, useState } from "react";
import useApi from "@/hooks/useApi";

export default function MainSlider({ items }) {
  const [slidesArray, setSlidesArray] = useState([]);
  const { data, error, isLoading, setApiUrl } = useApi();

  useEffect(() => {
    setApiUrl({
      value: "trending/movie/week",
      queries: false,
    });
  }, []);
  useEffect(() => {
    if (data?.results) {
      setSlidesArray(data.results.slice(0, 5));
    }
    if (data) {
      setSlidesArray([]);
    }
  }, [data, error]);

  // if(items.status === 404 || items.status === 'error'){
  //   setSlidesArray([]);
  // }

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="max-w-screen-2xl bg-black h-[90vh]"
      >
        {slidesArray.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
