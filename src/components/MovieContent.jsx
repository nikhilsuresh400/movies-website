import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'
import GenreSection from './GenreSection'
import MoviesDetails from './MoviesDetails'

const MovieContent = () => {
    return (
        <>
            <HeroSection />
            <div className='bg-linear-to-b from-bg-dark to-black'>
                <MovieSlider />
                <GenreSection />
            </div>

            {/* CONDITIONAL RENDERING */}
            {/* <MoviesDetails /> */}
        </>
    );
}

export default MovieContent
