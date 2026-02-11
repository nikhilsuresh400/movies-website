import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { ImSpinner9 } from 'react-icons/im'
import { LuSearch } from 'react-icons/lu'
import { RiLoader2Fill } from 'react-icons/ri'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuopen] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const searchContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })


    return (<header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-neutral-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
        <div className='container mx-auto px-4 py-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <a href="/" className='flex items-center'>
                        <span className='text-theme-red font-semibold text-xl'>
                            Watch<span className='text-primaryText-dark'>Nest</span>
                        </span>
                    </a>
                </div>

                {/* DESKTOP NAVIGATIONS */}
                <nav className='hidden md:flex space-x-8'>
                    <a href="#"
                        className='text-primaryText-dark hover:text-theme-red transition-all font-medium'
                    >
                        Home
                    </a>
                    <a href="#trending"
                        className='text-primaryText-dark hover:text-theme-red transition-all font-medium'
                    >
                        Trending
                    </a>
                    <a href="#popular"
                        className='text-primaryText-dark hover:text-theme-red transition-all font-medium'
                    >
                        Popular
                    </a>
                    <a href="#top-rated"
                        className='text-primaryText-dark hover:text-theme-red transition-all font-medium'
                    >
                        Top Rated
                    </a>
                </nav>

                {/* DESKTOP SEARCH */}
                <div
                    ref={searchContainerRef}
                    className='hidden md:block relative search-container'>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder='Search movies...'
                            className='bg-surface-light text-primaryText-light border-divider-dark px-4 py-2 rounded-full w-48 focus:w-64 focus:ring-2 focus:ring-theme-red transition-all duration-300 focus:outline-none'
                        />

                        {/* CONDITIONAL RENDERING */}
                        {isSearching
                            ?
                            <div className='absolute right-3 top-3'>
                                <ImSpinner9 className='w-3 h-3 text-neutral-500' />
                            </div>
                            :
                            <LuSearch className='w-4 h-4 absolute right-3 top-2.5 text-neutral-500' />
                        }
                    </div>

                    {/* SEARCH RESULT DROPDOWN CONDITIONAL RENDERING */}
                    {showSearchResult && searchResult && searchResult.length > 0 &&
                        <div className='absolute mt-2 w-72 bg-bg-dark rounded-lg shadow-lg overflow-hidden z-50 border border-divider-dark'>
                            <ul className='divide-y divide-divider-dark'>
                                <li className='hover:bg-surface-dark'>
                                    <button className='flex items-center p-3 w-full text-left'>
                                        <div className='w-10 h-10 bg-surface-dark rounded-full overflow-hidden shrink-0'>
                                            {/* CONDITIONAL RENDERING */}
                                            <img
                                                src=""
                                                alt=""
                                                className='w-full h-full object-cover'
                                            />
                                            {/* ELSE */}
                                            <div className='w-full h-full flex items-center justify-center text-primaryText-dark text-xs'>
                                                {` `}
                                                No Image
                                            </div>
                                        </div>

                                        <div className='ml-3 flex-1'>
                                            <p className='text-sm font-medium text-primaryText-dark truncate'>
                                                Movie Title
                                            </p>
                                            <p className='text-xs text-secondaryText-dark'>
                                                Movies release date
                                            </p>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    }

                    {/* CONDITIONAL RENDERING */}
                    {showSearchResult && searchQuery.trim().length > 2 && (!searchResult || searchResult.length === 0) && !isSearching &&
                        <div className='absolute mt-2 w-72 bg-bg-dark rounded-lg shadow-lg overflow-hidden z-50 border border-divider-dark'>
                            <div className='p-4 text-center text-secondaryText-dark'>
                                No movies found...
                            </div>
                        </div>
                    }
                </div>

                {/* MOBILE MENU BUTTON */}
                <button onClick={() => setIsMobileMenuopen(!isMobileMenuOpen)} className='md:hidden text-primaryText-dark'>
                    {/* CONDITIONAL RENDERING */}
                    {isMobileMenuOpen
                        ? <HiOutlineMenuAlt3 className='text-xl' />
                        : <HiOutlineX className='text-xl' />}
                </button>
            </div>

            {/* MOBILE NAVIGATION CONDITIONAL RENDERING */}
            {isMobileMenuOpen && (
                <div className='mt-4 pb-4 space-y-4 md:hidden border'>
                    <a
                        href="#"
                        className='block text-primaryText-dark hover:text-theme-red transition-colors py-2'
                    >
                        Home
                    </a>
                    <a href="#trending"
                        className='text-primaryText-dark hover:text-theme-red transition-all font-medium'
                    >
                        Trending
                    </a>
                    <a href="#popular"
                        className='text-primaryText-dark hover:text-theme-red transition-all font-medium'
                    >
                        Popular
                    </a>
                    <a href="#top-rated"
                        className='text-primaryText-dark hover:text-theme-red transition-all font-medium'
                    >
                        Top Rated
                    </a>
                    <div ref={searchContainerRef}
                        className='relative mt-3 search-container'>
                        <input
                            type="text"
                            placeholder='Search movies...'
                            className='bg-surface-light text-primaryText-light border-divider-light px-4 py-2 rounded-full w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-theme-red/70'
                        />

                        {/* CONDITIONAL RENDERING */}
                        {isSearching
                            ?
                            <div className='absolute right-3 top-2.5'>
                                <ImSpinner9 className='opacity-25' />
                            </div>
                            :
                            <div>
                                <LuSearch className='h-4 w-4 absolute right-3 top-2.5 text-neutral-500' />
                            </div>
                        }

                        {/* MOBILE SEARCH RESULT CONDITIONAL RENDERING */}
                        {showSearchResult && searchResult && searchResult.length > 0 &&
                            <div className='absolute mt-2 w-full bg-bg-dark rounded-lg shadow-lg overflow-hidden z-50'>
                                <ul className='divide-y divide-neutral-700'>
                                    {/* MAP METHOD */}
                                    <li className='hover:bg-surface-dark'>
                                        <button className='flex items-center p-3 w-full text-left border border-divider-dark'>
                                            <div className='w-14 h-14 bg-surface-dark rounded-full overflow-hidden shrink-0'>
                                                {/* CONDITIONAL RENDERING */}
                                                <img
                                                    src=""
                                                    alt=""
                                                    className='w-full h-full object-cover'
                                                />
                                                {/* ELSE */}
                                                <div className='w-full h-full flex items-center justify-center text-primaryText-dark text-xs'>
                                                    No Image
                                                </div>
                                            </div>

                                            <div className='ml-3 flex-1'>
                                                <p className='text-sm font-medium text-primaryText-dark truncate'>
                                                    Movies Title
                                                </p>
                                                <p className='text-xs text-secondaryText-dark'>
                                                    Movies release date
                                                </p>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        }

                        {/* CONDITIONAL RENDERING */}
                        {showSearchResult && searchQuery.trim().length > 2 && (!searchResult || searchResult.length === 0) && !isSearching &&
                            <div className='absolute mt-2 w-full bg-bg-dark rounded-lg shadow-lg border border-divider-dark overflow-hidden z-50'>
                                <div className='p-4 text-center text-secondaryText-dark text-sm'>
                                    No movies found...
                                </div>
                            </div>
                        }
                    </div>
                </div>
            )}
        </div>
    </header >
    )
}

export default Navbar
