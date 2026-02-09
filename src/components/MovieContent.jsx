import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'
import GenreSection from './GenreSection'

const MovieContent = () => {
    return (
        <>
            <HeroSection />
            <div className='bg-linear-to-b from-bg-dark to-black'>
                <MovieSlider />
                <GenreSection />
            </div>
        </>
    )
}

export default MovieContent
