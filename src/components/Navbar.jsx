import React from 'react'

const Navbar = () => {
    return (<header className={`flex w-full z-50 transition-all duration-300`}>
        <div className='container mx-auto px-4 py-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <a href="/" className='flex items-center'>
                        <span className='text-theme-blue font-semibold text-xl'>
                            Watch<span className='text-primaryText-light'>Nest</span>
                        </span>
                    </a>
                </div>

                {/* DESKTOP NAVIGATIONS */}
                <nav className='hidden md:flex space-x-8'>
                    <a href="#"
                        className='text-primaryText-light hover:text-theme-blue transition-all font-medium'
                    >
                        Home
                    </a>
                    <a href="#trending"
                        className='text-primaryText-light hover:text-theme-blue transition-all font-medium'
                    >
                        Trending
                    </a>
                    <a href="#popular"
                        className='text-primaryText-light hover:text-theme-blue transition-all font-medium'
                    >
                        Popular
                    </a>
                    <a href="#top-rated"
                        className='text-primaryText-light hover:text-theme-blue transition-all font-medium'
                    >
                        Top Rated
                    </a>
                </nav>

                {/* DESKTOP SEARCH */}
                <div className='hidden md:block relative search-container'>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder='Search movies...'
                            className='bg-surface-light text-primaryText-light border-divider-light px-4 py-2 rounded-full w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-theme-blue/70'
                        />

                        {/* CONDITIONAL RENDERING */}
                        <div className='absolute right-3 top-2.5'>
                            <svg
                                className='w-4 h-4 text-neutral-400'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <circle
                                    className='opacity-25'
                                    cx="12"
                                    cy="12"
                                    x="10"
                                    stroke='#161616'
                                    strokeWidth="4">
                                </circle>
                                <path
                                    className='opacity-75'
                                    fill='#161616'
                                    d='M4 12aB B 0 018-8V0CS.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                ></path>
                            </svg>
                        </div>
                        {/* ELSE */}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 absolute right-3 top-2.5 text-neutral-400'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='#7d7d7d'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            />
                        </svg>
                    </div>

                    {/* SEARCH RESULT DROPDOWN CONDITIONAL RENDERING */}
                    <div className='absolute mt-2 w-72 bg-bg-dark rounded-lg shadow-lg overflow-hidden z-50'>
                        <ul className='divide-y divide-neutral-700'>
                            <li className='hover:bg-surface-dark'>
                                <button className='flex items-center p-3 w-full text-left'>
                                    <div className='w-10 h-10 bg-surface-dark rounded overflow-hidden shrink-0'>
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

                    {/* CONDITIONAL RENDERING */}
                    <div className='absolute mt-2 w-72 bg-bg-dark rounded-lg shadow-lg overflow-hidden z-50'>
                        <div className='p-4 text-center text-secondaryText-dark'>
                            No movies found...
                        </div>
                    </div>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button className='md:hidden text-primaryText-dark'>
                    {/* CONDITIONAL RENDERING */}
                    <svg
                        xmlns='"http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#242424'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                        />
                    </svg>
                    {/* ELSE */}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#242424'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
            </div>

            {/* MOBILE NAVIGATION CONDITIONAL RENDERING */}
            <div className='mt-4 pb-4 space-y-4 md:hidden'>
                <a
                    href="#"
                    className='block text-primaryText-light hover:text-theme-blue transition-colors py-2'
                >
                    Home
                </a>
                <a href="#trending"
                    className='text-primaryText-light hover:text-theme-blue transition-all font-medium'
                >
                    Trending
                </a>
                <a href="#popular"
                    className='text-primaryText-light hover:text-theme-blue transition-all font-medium'
                >
                    Popular
                </a>
                <a href="#top-rated"
                    className='text-primaryText-light hover:text-theme-blue transition-all font-medium'
                >
                    Top Rated
                </a>
                <div className='relative mt-3 search-container'>
                    <input
                        type="text"
                        placeholder='Search movies...'
                        className='bg-surface-light text-primaryText-light border-divider-light px-4 py-2 rounded-full w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-theme-blue/70'
                    />

                    {/* CONDITIONAL RENDERING */}
                    <div className='absolute right-3 top-2.5'>
                        <div className='absolute right-3 top-2.5'>
                            <svg
                                className='w-4 h-4 text-neutral-400'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <circle
                                    className='opacity-25'
                                    cx="12"
                                    cy="12"
                                    x="10"
                                    stroke='#161616'
                                    strokeWidth="4">
                                </circle>
                                <path
                                    className='opacity-75'
                                    fill='#161616'
                                    d='M4 12aB B 0 018-8V0CS.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                ></path>
                            </svg>

                            {/* ELSE */}
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4 absolute right-3 top-2.5 text-neutral-400'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='#7d7d7d'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                />
                            </svg>

                            {/* MOBILE SEARCH RESULT CONDITIONAL RENDERING */}
                            <div className='absolute mt-2 w-full bg-bg-dark rounded-lg shadow-lg overflow-hidden z-50'>
                                <ul className='divide-y divide-neutral-700'>
                                    {/* MAP METHOD */}
                                    <li className='hover:bg-surface-dark'>
                                        <button className='flex items-center p-3 w-full text-left'>
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

                            {/* CONDITIONAL RENDERING */}
                            <div className='absolute mt-2 w-full bg-bg-dark rounded-lg shadow-lg overflow-hidden z-50'>
                                <div className='p-4 text-center text-secondaryText-dark text-sm'>
                                    No movies found...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Navbar
