import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import MovieCard from "../MovieCard/MovieCard";
import Title from "../Title/Title";

export default function Carousel() {
    const slides = [
        {
            id: 1,
            title: 'Movie Title',
            poster: 'https://avamovie28.top/cdn/300x450/2024/08/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_SX500.jpg',
            score: 7,
            url: '/n'
        },
        {
            id: 2,
            title: "The Walking Dead: Daryl Dixon",
            poster: 'https://avamovie28.top/cdn/300x450/2023/04/From-scaled.jpg',
            score: 8.3,
            url: '/a'
        },
        {
            id: 3,
            title: 'From',
            poster: 'https://avamovie28.top/cdn/300x450/2023/04/From-scaled.jpg',
            score: 8.3,
            url: '/a'
        },
        {
            id: 4,
            title: 'From',
            poster: 'https://avamovie28.top/cdn/300x450/2023/04/From-scaled.jpg',
            score: 8.3,
            url: '/a'
        },
        {
            id: 5,
            title: 'From',
            poster: 'https://avamovie28.top/cdn/300x450/2023/04/From-scaled.jpg',
            score: 8.3,
            url: '/a'
        }
    ]

    return (
        <>
            <div className="mt-8 px-3">
                <Title title="New Movies" href="/nn" moreTitle="More movies" />
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
                    {slides.map(item => (
                        <SwiperSlide key={item.id} {...item}>
                            <MovieCard  {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
