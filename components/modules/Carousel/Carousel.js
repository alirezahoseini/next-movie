'use clinet'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import MovieCard from "../MovieCard/MovieCard";
import Title from "../Title/Title";
import { useState } from "react";

export default function Carousel({ items, moreTitle, title, moreHref, type }) {
    const [slidesArray, setSlidesArray] = useState([]);

    if (items.status === 200 && slidesArray.length === 0) {
        setSlidesArray(items.data.results.slice(0, 7))
    }
    if (items.status === 404 || items.status === 'error') {
        setSlidesArray([]);
    }

    return (
        <>
            <div className="mt-8 px-3">
                <Title title={title} href={moreHref} moreTitle={moreTitle} />
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
                        '@0.00': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.50': {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        '@1.75': {
                            slidesPerView: 5,
                            spaceBetween: 35,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mt-5 max-w-screen-2xl">
                    {slidesArray.map(item => (
                        <SwiperSlide key={item.id} {...item}>
                            <MovieCard  type={type} {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
