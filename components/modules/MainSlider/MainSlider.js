"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SliderItem from "./SliderItem";
import useApi from "@/hooks/useApi";
import MainSliderLoader from "./MainSliderLoader";

export default function MainSlider() {
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
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  return (
    <>
      {data !== undefined ? (
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
      ) : (
        <MainSliderLoader isLoading={isLoading} error={error} data={data} />
      )}
    </>
  );
}
