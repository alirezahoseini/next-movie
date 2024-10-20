'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import SliderItem from "./SliderItem";

export default function MainSlider() {
  const slides = [
    {
      id: 1,
      title: 'Movie Title',
      description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with ',
      poster: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg',
      bgImage: 'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg',
      url: '/n'
    },
    {
      id: 2,
      title: 'From',
      description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with ',
      poster: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
      bgImage: 'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
      url: '/a'
    }
  ]

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="max-w-screen-2xl bg-black h-[90vh]">
        {slides.map(item => (
          <SwiperSlide >
            <SliderItem key={item.id} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
