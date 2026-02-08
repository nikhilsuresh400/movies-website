import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import { TiStar } from 'react-icons/ti'

const MovieSlider = () => {
    return (
        <section className='py-12' id=''>
            <div className='container mx-auto px-4'>
                <div className='flex items-baseline justify-between mb-8'>
                    <div className='text-2xl md:text-3xl font-bold text-primaryText-dark'>
                        <h2>Title</h2>
                        {/* CONDITIONAL RENDERING */}
                        <p className='text-secondaryText-dark/64 text-sm mt-1'>Subtitle</p>
                    </div>
                    <div className='flex space-x-2'>
                        <button 
                            className='p-2 rounded-full bg-surface-dark/80 hover:bg-neutral-700/50 text-primaryText-dark transition-all'
                            aria-label='Scroll Left'
                        >
                            <BsChevronLeft className='text-lg font-bold' />
                        </button>
                        <button
                            className='p-2 rounded-full bg-surface-dark/80 hover:bg-neutral-700/50 text-primaryText-dark transition-all'
                            aria-label='Scroll right'
                        >
                            <BsChevronRight className='text-lg font-bold' />
                        </button>
                    </div>
                </div>

                {/* MOVIE SLIDER */}
                <div className='relative'>
                    <div className='flex space-x-4 overflow-x-hidden scrollbar-hide pb-4 snap-x'>
                        {/* CONDITIONAL RENDERING */}
                        <div className='min-w-50 md:min-w-60 snap-start relative group cursor-pointer'>
                            <div className='rounded-lg overflow-hidden bg-neutral-800'>
                                <div className='relative aspect-2/3'>
                                    <img 
                                        src="" 
                                        alt=""
                                        className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35'
                                    />

                                    {/* HOVER OVERLAY */}
                                    <div
                                        className={`absolute inset-0 bg-linear-to-t from-neutral-900/90 via-neutral-900/40 to-transparent flex flex-col justify-end p-4 oopacity-0 group-hover:opacity-100 transition-all duration-300`}
                                    >
                                        <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3'>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center space-x-1'>
                                                    <TiStar className='text-yellow-400 text-xl'/>
                                                    <span className='text-yellow-400 text-sm font-medium'>
                                                        Movies Vote Average
                                                    </span>
                                                </div>
                                                <span className='text-secondaryText-dark text-sm'>
                                                    Movies Release Date
                                                </span>
                                            </div>
                                            <button
                                                className='w-full bg-theme-blue hover:bg-theme-darkred text-primaryText-dark py-3 rounded-md flex items-center justify-center gap-1 transition-all text-sm'
                                            >
                                                <FaPlay />
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MOVIS INFO */}
                            <div className='mt-3'>
                                <h3 className=' text-primaryText-dark text-sm font-medium truncate'>
                                    Movies Title
                                </h3>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-1'>
                                        <TiStar className='text-yellow-400 text-xl' />
                                        <span className='text-secondaryText-dark/64 text-xs'>
                                            Movies Vote Average
                                        </span>
                                    </div>
                                    <span className='text-secondaryText-dark/64 text-xs'>
                                        Movies Release Date
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieSlider
