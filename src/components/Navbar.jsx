import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { ImSpinner9 } from 'react-icons/im'
import { LuSearch } from 'react-icons/lu'
import { RiLoader2Fill } from 'react-icons/ri'
import { getImageURL, searchMovies } from '../services/api'
import { useMovies } from '../context/MoviesContext'

const Navbar = () => {
    const { openMoviesDetails } = useMovies();
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

    useEffect(() => {
        const handleSearch = async () => {
            if (searchQuery.trim().length > 2) {
                setIsSearching(true);
                try {
                    const result = await searchMovies(searchQuery);
                    setSearchResult(result ? result.slice(0, 5) : []);
                } catch (error) {
                    console.error("Error searching movies:", error);
                } finally {
                    setIsSearching(false);
                    setShowSearchResult(true);
                }
            } else {
                setSearchResult([]);
                setShowSearchResult(false);
            }
        };

        const debounceTimer = setTimeout(() => {
            handleSearch();
        }, 500);

        return () => {
            clearTimeout(debounceTimer);
        }
    }, [searchQuery]);


    const handleSearchFocus = () => {
        if (searchQuery.trim().length > 2 && searchResult.length > 0) {
            setShowSearchResult(true);
        }
    };

    const handleClickOutside = (e) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
            setShowSearchResult(false);
        }
    };

    const handleMovieSelect = (movieId) => {
        openMoviesDetails(movieId);
        setShowSearchResult(false);
        setSearchQuery("");
    }


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
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={handleSearchFocus}
                            type="text"
                            placeholder='Search movies...'
                            className='bg-surface-dark text-primaryText-dark border-divider-dark px-4 py-2 rounded-full w-48 focus:w-64 focus:ring-2 focus:ring-theme-red transition-all duration-300 focus:outline-none'
                        />

                        {/* CONDITIONAL RENDERING */}
                        {isSearching
                            ?
                            <div className='absolute right-3 top-3'>
                                <ImSpinner9 className='w-3 h-3 text-neutral-500 animate-spin' />
                            </div>
                            :
                            <LuSearch className='w-4 h-4 absolute right-3 top-2.5 text-neutral-500' />
                        }
                    </div>

                    {/* SEARCH RESULT DROPDOWN CONDITIONAL RENDERING */}
                    {showSearchResult && searchResult && searchResult.length > 0 &&
                        <div className='absolute mt-2 w-72 bg-bg-dark rounded-lg shadow-lg overflow-hidden z-50 border border-divider-dark'>
                            <ul className='divide-y divide-divider-dark'>
                                {searchResult.map((movie) => {
                                    return <li className='hover:bg-surface-dark'>
                                        <button className='flex items-center p-3 w-full text-left'
                                            onClick={() => handleMovieSelect(movie.id)}
                                        >
                                            <div className='w-10 h-10 bg-surface-dark rounded-full overflow-hidden shrink-0'>
                                                {/* CONDITIONAL RENDERING */}
                                                {movie.poster_path
                                                    ? <img
                                                        src={getImageURL(movie.poster_path, "w92")}
                                                        alt={movie.title}
                                                        className='w-full h-full object-cover'
                                                    />
                                                    :
                                                    <div className='w-full h-full flex items-center justify-center text-primaryText-dark text-xs'>
                                                        {` `}
                                                        No Image
                                                    </div>
                                                }
                                                {/* ELSE */}
                                            </div>

                                            <div className='ml-3 flex-1'>
                                                <p className='text-sm font-medium text-primaryText-dark truncate'>
                                                    {movie.title}
                                                </p>
                                                <p className='text-xs text-secondaryText-dark'>
                                                    {movie.release_date?.split("-")[0] || "N/A"}
                                                </p>
                                            </div>
                                        </button>
                                    </li>
                                })}
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
                <button className='md:hidden text-primaryText-dark'
                    onClick={() => setIsMobileMenuopen(!isMobileMenuOpen)}>
                    {/* CONDITIONAL RENDERING */}
                    {isMobileMenuOpen
                        ? <HiOutlineX className='text-xl' />
                        : <HiOutlineMenuAlt3 className='text-xl' />}
                </button>
            </div>

            {/* MOBILE NAVIGATION CONDITIONAL RENDERING */}
            {isMobileMenuOpen && (
                <div className='mt-4 px-4 py-6 space-y-4 md:hidden border border-divider-dark bg-neutral-900/95 backdrop-blur-sm shadow-lg rounded-xl'>
                    <a
                        href="#"
                        className='block text-primaryText-dark hover:text-theme-red transition-all'
                    >
                        Home
                    </a>
                    <a href="#trending"
                        className='block text-primaryText-dark hover:text-theme-red transition-all'
                    >
                        Trending
                    </a>
                    <a href="#popular"
                        className='block text-primaryText-dark hover:text-theme-red transition-all'
                    >
                        Popular
                    </a>
                    <a href="#top-rated"
                        className='block text-primaryText-dark hover:text-theme-red transition-all'
                    >
                        Top Rated
                    </a>

                    {/* MOBILE SEARCH */}
                    <div ref={searchContainerRef}
                        className='relative mt-3 search-container'>
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={handleSearchFocus}
                            type="text"
                            placeholder='Search movies...'
                            className='bg-surface-dark text-primaryText-dark border-divider-dark px-4 py-2 rounded-full w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-theme-red/70'
                        />

                        {/* CONDITIONAL RENDERING */}
                        {isSearching
                            ?
                            <div className='absolute right-3 top-2.5'>
                                <ImSpinner9 className='opacity-25 animate-spin' />
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
                                    {searchResult.map((movie) => {
                                        return <li className='hover:bg-surface-dark'>
                                            <button className='flex items-center p-3 w-full text-left border border-divider-dark'
                                                onClick={() => handleMovieSelect(movie.id)}
                                            >
                                                <div className='w-14 h-14 bg-surface-dark rounded-full overflow-hidden shrink-0'>
                                                    {/* CONDITIONAL RENDERING */}
                                                    {movie.poster_path
                                                        ? <img
                                                            src={getImageURL(movie.poster_path, "w92")}
                                                            alt={movie.title}
                                                            className='w-full h-full object-cover'
                                                        />
                                                        : <div className='w-full h-full flex items-center justify-center text-primaryText-dark text-xs'>
                                                            No Image
                                                        </div>
                                                    }
                                                    {/* ELSE */}
                                                </div>

                                                <div className='ml-3 flex-1'>
                                                    <p className='text-sm font-medium text-primaryText-dark truncate'>
                                                        {movie.title}
                                                    </p>
                                                    <p className='text-xs text-secondaryText-dark'>
                                                        {movie.release_date?.split("-")[0] || "N/A"}
                                                    </p>
                                                </div>
                                            </button>
                                        </li>
                                    })}
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
