import React from 'react'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import { HiPlay } from 'react-icons/hi'
import { HiPlayCircle } from 'react-icons/hi2'
import { TiStar } from 'react-icons/ti'

const HeroSection = () => {
    return (
        <div className='relative w-full h-screen'>
            {/* BACKDROP FOR MOVIES */}
            <div
                className={`absolute inset-0 bg-cover bg-center bg-bg-dark transition-all duration-700`}
            >
                {/* GRADIENT OVERLAY */}
                <div className='absolute inset-0 bg-linear-to-r from-bg-dark via-bg-dark/70 to-bg-dark/20' />
                <div className='absolute inset-0 bg-linear-to-r from-bg-dark to-transparent' />
            </div>

            
            {/* CONTENT HERE */}
            <div className='absolute inset-0 flex items-center z-10 container mx-auto px-4'>
                <div className='max-w-3xl'>

                    {/* MOVIES INFO. */}
                    <div className={`transition-all duration-700`}>
                        <div className='flex items-center space-x-3 mb-4'>
                            <span className='bg-theme-darkred text-primaryText-dark text-xs font-semibold px-2 py-1 rounded-sm'>
                                FEATURED
                            </span>

                            {/* CONDITIONAL RENDERING */}
                            <div className='flex items-center'>
                                <TiStar 
                                    className='text-yellow-400 text-xl' />
                                <span>Movie Voting Average</span>
                            </div>
                            
                            {/* CONDITIONAL RENDERING CLOSE */}
                            <span className='text-neutral-400 text-xs'>•</span>
                            <span className='text-neutral-300 text-sm'>
                                Movies Release Date
                            </span>
                            {/* CONDITIONAL RENDERING */}
                            <>
                                <span className='text-neutral-400 text-xs'>•</span>
                                <span className='bg-neutral-700 text-secondaryText-dark text-xs px-1.5 py-0.5 rounded'>
                                    18+
                                </span>
                            </>
                            {/* CONDITIONAL RENDERING CLOSE */}
                        </div>

                        <h1 className='text-4xl md:text-6xl font-bold text-primaryText-dark mb-4 tracking-normal'>
                            Movies Title
                        </h1>
                        <p className='text-secondaryText-dark mb-8'>
                            Movie Overview
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <button className='bg-theme-blue hover:bg-theme-darkred text-primaryText-dark px-6 py-3 rounded-lg flex items-center gap-2 transition-all'>
                                <FaPlay />
                                Watch Now
                            </button>
                            <button className='bg-surface-dark/80 hover:bg-neutral-700/50 text-primaryText-dark px-6 py-3 rounded-lg flex items-center gap-2 transition-all border border-divider-light/25'>
                                <BsFillBookmarkPlusFill />
                                Add to Watch List
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGINATION */}
            <div className='absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10'>
                {/* CONDITIONAL RENDERING */}
                <button className={`h-1.5 rounded-full transition-all`}>
                    
                </button>
            </div>
        </div>
    )
}

export default HeroSection
