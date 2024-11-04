"use clinet";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbMoodSadSquint } from "react-icons/tb";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import MovieCard from "../MovieCard/MovieCard";
import Title from "../Title/Title";
import useApi from "@/hooks/useApi";
import CarouselLoader from "./CarouselLoader";

export default function Carousel({ url, moreTitle, title, moreHref, type }) {
  const [slidesArray, setSlidesArray] = useState([]);
  const { data, error, isLoading, setApiUrl } = useApi();

  useEffect(() => {
    setApiUrl(url);
  }, []);
  useEffect(() => {
    if (data?.results) {
      setSlidesArray(data.results.slice(0, 8));
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  console.log(data);

  return (
    <>
      <div className="mt-8 px-3">
        <Title title={title} href={moreHref} moreTitle={moreTitle} />

        {slidesArray.length && !error ? (
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              "@1.75": {
                slidesPerView: 5,
                spaceBetween: 35,
              },
            }}
            modules={[Autoplay]}
            className="mt-5 max-w-screen-2xl"
          >
            {slidesArray.map((item) => (
              <SwiperSlide key={item.id} {...item}>
                <MovieCard type={type} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : data?.results.length == 0 && !error ? (
          <div className="flex items-center justify-center flex-col gap-2 h-64 ">
            <TbMoodSadSquint className="text-slate-600 text-8xl" />
            <span className="font-bold text-sm text-slate-300">There is nothing</span>
          </div>
        ) : (
          <CarouselLoader isLoading={isLoading} error={error} data={data} />
        )}
      </div>
    </>
  );
}
