import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'
import GenreSection from './GenreSection'
import MoviesDetails from './MoviesDetails'
import { useMovies } from '../context/MoviesContext'
import { MdError } from 'react-icons/md'

const MovieContent = () => {
    const {
        trendingMovies,
        popularMovies,
        topRatedMovies,
        selectedMovieId,
        closeMoviesDetails,
        error,
    } = useMovies();

    if (error) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-neutral-900 text-primaryText-dark'>
                <div className='text-center'>
                    <MdError
                        className='h-12 w-12 mx-auto text-shadow-theme-darkred'
                    />
                    <h2 className='text-2xl font-bold mt-4'>Error Loading Movies</h2>
                    <p className='mt-2 text-secondaryText-dark'>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className='mt-6 bg-theme-red hover:bg-theme-darkred text-primaryText-dark px-6 py-2 rounded-md'
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <HeroSection />
            <div className='bg-linear-to-b from-bg-dark to-black'>
                <MovieSlider
                    title="Trending This Week"
                    subtitle="Stay updated with what everyone's watching"
                    movies={trendingMovies}
                    id="trending"
                />
                <MovieSlider
                    title="Popular Movies"
                    subtitle="Most watched movies right now"
                    movies={popularMovies}
                    id="popular"
                />
                <GenreSection />
                <MovieSlider
                    title="Top Rated Movies"
                    subtitle="Highest rated movies of all time"
                    movies={topRatedMovies}
                    id="top-rated"
                />
            </div>

            {/* CONDITIONAL RENDERING */}
            {selectedMovieId &&
                <MoviesDetails movieId={selectedMovieId} onClose={closeMoviesDetails} />}
        </>
    );
}

export default MovieContent
