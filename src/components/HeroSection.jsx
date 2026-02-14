import React, { useEffect, useState } from 'react'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import { HiPlay } from 'react-icons/hi'
import { HiPlayCircle } from 'react-icons/hi2'
import { TiStar } from 'react-icons/ti'
import { useMovies } from '../context/MoviesContext'
import { ImSpinner9 } from 'react-icons/im'
import { getImageURL } from '../services/api'

const HeroSection = () => {

    const { trendingMovies, loading } = useMovies();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const featuredMovies = trendingMovies.slice(0, 5);

    useEffect(() => {
        if (loading || featuredMovies.length === 0) return;

        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
                setIsTransitioning(false);
            }, 500);
        }, 8000);

        return () => clearInterval(interval);
    }, [loading, featuredMovies.length]);

    if (loading || featuredMovies.length === 0) {
        return (
            <div className='relative w-full h-screen flex items-center justify-center bg-neutral-900'>
                <div className='animate-pulse flex flex-col items-center'>
                    <ImSpinner9
                        className='w-12 h-12 animate-spin text-theme-red'
                    />
                    <p className='mt-4 text-secondaryText-dark'>Loading Movies...</p>
                </div>
            </div>
        );
    }

    const currentMovie = featuredMovies[currentSlide];
    const formatRating = (rating) => {
        return (Math.round(rating * 10) / 10).toFixed(1);
    };

    return (
        <div id='#' className='relative w-full h-screen'>
            {/* BACKDROP FOR MOVIES */}
            <div
                className={`absolute inset-0 bg-cover bg-center bg-bg-dark transition-all duration-700 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                style={{ backgroundImage: `url(${getImageURL(currentMovie.backdrop_path)})` }}
            >
                {/* GRADIENT OVERLAY */}
                <div className='absolute inset-0 bg-linear-to-r from-bg-dark via-bg-dark/70 to-bg-dark/20' />
                <div className='absolute inset-0 bg-linear-to-r from-bg-dark to-transparent' />
            </div>


            {/* CONTENT HERE */}
            <div className='absolute inset-0 flex items-center z-10 container mx-auto px-4'>
                <div className='max-w-3xl'>

                    {/* MOVIES INFO. */}
                    <div className={`transition-all duration-700 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                        <div className='flex items-center space-x-3 mb-4'>
                            <span className='bg-theme-darkred text-primaryText-dark text-xs font-semibold px-2 py-1 rounded-sm'>
                                FEATURED
                            </span>

                            {/* CONDITIONAL RENDERING */}
                            {currentMovie.vote_average > 0 && (
                                <div className='flex items-center'>
                                    <TiStar
                                        className='text-yellow-400 text-xl' />
                                    <span>{formatRating(currentMovie.vote_average)}</span>
                                </div>
                            )}

                            {/* CONDITIONAL RENDERING CLOSE */}
                            <span className='text-neutral-400 text-xs'>•</span>
                            <span className='text-neutral-300 text-sm'>
                                {currentMovie.release_date?.substring(0, 4) || "N/A"}
                            </span>
                            {/* CONDITIONAL RENDERING */}
                            {currentMovie.adult &&
                                <>
                                    <span className='text-neutral-400 text-xs'>•</span>
                                    <span className='bg-neutral-700 text-secondaryText-dark text-xs px-1.5 py-0.5 rounded'>
                                        18+
                                    </span>
                                </>}
                            {/* CONDITIONAL RENDERING CLOSE */}
                        </div>

                        <h1 className='text-4xl md:text-6xl font-bold text-primaryText-dark mb-4 tracking-normal'>
                            {currentMovie.title}
                        </h1>
                        <p className='text-secondaryText-dark mb-8'>
                            {currentMovie.overview}
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <button className='w-36 md:w-42 bg-theme-red hover:bg-theme-darkred text-primaryText-dark px-3 py-3 rounded-lg flex items-center justify-center gap-2 transition-all border border-transparent'>
                                <FaPlay />
                                Watch Now
                            </button>
                            <button className='w-42 md:w-42 bg-surface-dark/80 hover:bg-neutral-700/50 text-primaryText-dark px-3 py-3 rounded-lg flex items-center justify-center gap-2 transition-all border border-divider-light/25'>
                                <BsFillBookmarkPlusFill />
                                Add to Watch List
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGINATION */}
            <div className='absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10'>
                {featuredMovies.map((_, index) => {
                    return (
                        <button 
                            key={index}
                            onClick={() => {
                                setIsTransitioning(true);
                                setTimeout(() => {
                                    setCurrentSlide(index);
                                    setIsTransitioning(false);
                                }, 500);
                            }}
                            className={`h-1.5 rounded-full transition-all ${currentSlide === index
                            ? "w-8 bg-theme-red"
                            : "w-4 bg-neutral-600/50"
                            }`}></button>
                    );
                })}
                {/* CONDITIONAL RENDERING */}
            </div>
        </div>
    )
}

export default HeroSection
