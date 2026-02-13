import React, { useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import { TiStar } from 'react-icons/ti'
import { getImageURL } from '../services/api'
import { useMovies } from '../context/MoviesContext'
import { IoIosInformationCircle } from 'react-icons/io'

const MovieSlider = ({ title, movies, subtitle = "" }) => {

    const sliderRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [hoveredMovieId, setHoveredMovieId] = useState(null);
    const { openMoviesDetails } = useMovies();

    const scroll = (direction) => {
        if (isScrolling) return;
        setIsScrolling(true);
        const { current } = sliderRef;
        const scrollAmount =
            direction === "left"
                ? -current.clientWidth * 0.75
                : current.clientWidth * 0.75;

        current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });

        setTimeout(() => {
            setIsScrolling(false);
        }, 500);
    };

    const formatRating = (rating) => {
        return (Math.round(rating * 10) / 10).toFixed(1);
    };

    const handleMovieClick = (moviesId) => {
        openMoviesDetails(moviesId);
    };

    if (!movies || movies.length === 0) {
        return null;
    }

    return (
        <section className='py-12' id=''>
            <div className='container mx-auto px-4'>
                <div className='flex items-baseline justify-between mb-8'>
                    <div className='text-2xl md:text-3xl font-bold text-primaryText-dark'>
                        <h2>{title}</h2>
                        {/* CONDITIONAL RENDERING */}
                        {subtitle &&
                            <p className='text-secondaryText-dark/64 text-sm mt-1'>{subtitle}</p>}
                    </div>
                    <div className='flex space-x-2'>
                        <button
                            className='p-2 rounded-full bg-surface-dark/80 hover:bg-neutral-700/50 text-primaryText-dark transition-all'
                            aria-label='Scroll Left'
                            onClick={() => scroll("left")}
                        >
                            <BsChevronLeft className='text-lg font-bold' />
                        </button>
                        <button
                            className='p-2 rounded-full bg-surface-dark/80 hover:bg-neutral-700/50 text-primaryText-dark transition-all'
                            aria-label='Scroll right'
                            onClick={() => scroll("right")}
                        >
                            <BsChevronRight className='text-lg font-bold' />
                        </button>
                    </div>
                </div>

                {/* MOVIE SLIDER */}
                <div className='relative'>
                    <div ref={sliderRef}
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        className='flex space-x-4 overflow-x-hidden scrollbar-hide pb-4 snap-x'>
                        {/* CONDITIONAL RENDERING */}
                        {movies.map((movie) => {
                            return (
                                <div key={movie.id}
                                    onMouseEnter={() => setHoveredMovieId(movie.id)}
                                    onMouseLeave={() => setHoveredMovieId(null)}
                                    onClick={() => handleMovieClick(movie.id)}
                                    className='min-w-50 md:min-w-60 snap-start relative group cursor-pointer'
                                >
                                    <div className='rounded-lg overflow-hidden bg-black/50'>
                                        <div className='relative aspect-2/3'>
                                            <img
                                                src={getImageURL(movie.poster_path, "w500")}
                                                alt={movie.title}
                                                className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35'
                                            />

                                            {/* HOVER OVERLAY */}
                                            <div
                                                className={`absolute inset-0 bg-linear-to-t from-theme-bg-dark/90 via-bg-dark/40 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300`}
                                            >
                                                <div className='transform translate-y-2 group-hover:-translate-y-2 transition-transform duration-300 space-y-3'>
                                                    <div className='flex items-center justify-between'>
                                                        <div className='flex items-center space-x-1'>
                                                            <TiStar className='text-yellow-400 text-xl' />
                                                            <span className='text-yellow-400 text-sm font-medium'>
                                                                {formatRating(movie.vote_average)}
                                                            </span>
                                                        </div>
                                                        <span className='text-secondaryText-dark text-sm'>
                                                            {movie.release_date?.substring(0, 4) || "N/A"}
                                                        </span>
                                                    </div>
                                                    <button
                                                        className='w-full bg-theme-red hover:bg-theme-darkred text-primaryText-dark py-3 rounded-md flex items-center justify-center gap-2 transition-all text-sm shadow-lg'
                                                    >
                                                        <IoIosInformationCircle  /> View Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* MOVIS INFO */}
                                    <div className='mt-3'>
                                        <h3 className=' text-primaryText-dark text-sm font-medium truncate'>
                                            {movie.title}
                                        </h3>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center space-x-1'>
                                                <TiStar className='text-yellow-400 text-xl' />
                                                <span className='text-secondaryText-dark/64 text-xs'>
                                                    {formatRating(movie.vote_average)}
                                                </span>
                                            </div>
                                            <span className='text-secondaryText-dark/64 text-xs'>
                                                {movie.release_date?.substring(0, 4) || "N/A"}
                                            </span>
                                        </div>
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieSlider
