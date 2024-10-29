"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Title from "../Title/Title";
import BsetMoviesItem from "./BsetMoviesItem";
import { useState } from "react";

function BestMoviesSlider({ items, moreTitle, title, moreHref }) {
  const [slidesArray, setSlidesArray] = useState([]);

  if (items.status === 200 && slidesArray.length === 0) {
    setSlidesArray(items.data.results.slice(0, 7));
  }
  if (items.status === 404 || items.status === "error") {
    setSlidesArray([]);
  }

  return (
    <>
      <div className="mt-8 px-3 max-w-screen-2xl mx-auto">
        <Title title={title} href={moreHref} moreTitle={moreTitle} />
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            "@0.50": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            "@1.75": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@2.0": {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
          }}
          className="mt-5"
        >
          {slidesArray.map((item) => (
            <SwiperSlide key={item.id}>
              <BsetMoviesItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default BestMoviesSlider;
