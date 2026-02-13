import { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className='fixed bottom-6 right-6 z-40'>
            <button
                type='button'
                onClick={scrollToTop}
                className={`bg-theme-red hover:bg-theme-darkred text-primaryText-dark p-2.5 rounded-full shadow-lg transition-all duration-300 focus:outline-none 
                    ${isVisible 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-10 pointer-events-none"}`}
            >
                <FaChevronUp 
                        className='h-4 w-4'
                />
            </button>
        </div>
    )
}

export default ScrollToTop
