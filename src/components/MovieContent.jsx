import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'
import GenreSection from './GenreSection'
import MoviesDetails from './MoviesDetails'
import { useMovies } from '../context/MoviesContext'

const MovieContent = () => {
    const { trendingMovies } = useMovies();

    return (
        <>
            <HeroSection />
            <div className='bg-linear-to-b from-bg-dark to-black'>
                <MovieSlider
                    title="Trending This Week"
                    subtitle="Stay updated with what everyone's watching"
                    movies={trendingMovies}
                    id = "trending"
                />
                <GenreSection />
            </div>

            {/* CONDITIONAL RENDERING */}
            {/* <MoviesDetails /> */}
        </>
    );
}

export default MovieContent
