import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

function MoviesGrid() {
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
        <div className='flex flex-wrap mt-4 max-w-screen-2xl mx-auto'>
            {slides.map(item => (
                <div key={item.id} className='w-1/2 md:w-4/12 lg:w-3/12 xl:w-2/12  p-3'>
                    <MovieCard  {...item} />
                </div>
            ))}
        </div>
    )
}

export default MoviesGrid