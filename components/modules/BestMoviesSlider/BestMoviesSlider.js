import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Title from "../Title/Title";
import BsetMoviesItem from "./BsetMoviesItem";

function BestMoviesSlider() {
    const slides = [
        {
          id: 1,
          title: 'Movie Title',
          poster: 'https://avamovie29.top/wp-content/uploads/2024/09/66de5acef289d-1024x576.jpg',
          url: '/n'
        },
        {
          id: 2,
          title: 'From',
          poster: 'https://avamovie29.top/wp-content/uploads/2024/01/16554773271603956480.ZARFILM-1024x576.jpg',
          url: '/a'
        },
        {
          id: 3,
          title: 'My title',
          poster: 'https://avamovie29.top/wp-content/uploads/2024/08/6PnnfODvQfEIAdJ5PbqYMXKdfwX-1024x462.jpg',
          url: '/d'
        },
        {
          id: 4,
          title: 'My popster',
          poster: 'https://avamovie29.top/wp-content/uploads/2024/09/olzdOzwunu3J5Lc0Mk4ICafm9Xb-1024x425.jpg',
          url: '/d'
        }
      ]

    return (
        <>
            <div className="mt-8 px-3 max-w-screen-2xl mx-auto">
                <Title title="Best Movies" href="/nn" moreTitle="See more " />
                <Swiper
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    breakpoints={{
                        '@0.50': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.50': {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        '@1.75': {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        '@2.0': {
                            slidesPerView: 3.2,
                            spaceBetween: 30,
                        },
                    }}
                    className="mt-5">
                    {slides.map(item => (
                        <SwiperSlide key={item.id}>
                            <BsetMoviesItem  {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}


export default BestMoviesSlider