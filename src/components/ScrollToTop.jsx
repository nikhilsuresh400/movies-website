import React from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { PiArrowFatUpFill } from 'react-icons/pi'

const ScrollToTop = () => {
    return (
        <div className='fixed bottom-6 right-6 z-40'>
            <button
                type='button'
                className={`bg-theme-red hover:bg-theme-darkred text-primaryText-dark p-2.5 rounded-full shadow-lg transition-all duration-300 focus:outline-none`}
            >
                <FaChevronUp 
                        className='h-5 w-5'
                />
            </button>
        </div>
    )
}

export default ScrollToTop
