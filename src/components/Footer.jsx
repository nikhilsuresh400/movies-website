import React from 'react'
import { FaGithub, FaImdb, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-neutral-900 text-secondaryText-dark border-t border-divider-dark'>
                
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <a href="/" className='inline-block mb-6'>
                                <span className='text-theme-red font-bold text-2xl'>
                                    Watch 
                                    <span className='text-primaryText-dark'>
                                        Nest
                                    </span>
                                </span>
                            </a>
                            <p className='mb-4 text-sm'>
                                Discover and explore the latest movies from around the world. WatchNest gives you access to a vast collection of films across all genres.
                            </p>
                            <div className='flex space-x-4'>
                                <a 
                                    href="https://github.com/nikhilsuresh400" 
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-neutral-500 hover:text-primaryText-dark transition-colors'
                                >
                                    <FaGithub 
                                        className='h-5 w-5' 
                                    />
                                </a>

                                <a 
                                    href="https://www.linkedin.com/in/nikhil-suresh-8694ba375/"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-neutral-500 hover:text-primaryText-dark transition-colors'
                                >
                                    <FaLinkedin
                                        className='h-5 w-5'
                                    />
                                </a>
                            </div>
                        </div>


                        <div className='text-neutral-300'>
                            <h3 className='text-primaryText-dark font-semibold text-lg mb-4'>
                                Quick Links
                            </h3>
                            <ul className='space-y-2 text-sm'>
                                <li>
                                    <a href="#" className='hover:text-primaryText-dark transition-all'>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#trending" className='hover:text-primaryText-dark transition-all'>
                                        Trending
                                    </a>
                                </li>
                                <li>
                                    <a href="#popular" className='hover:text-primaryText-dark transition-all'>
                                        Popular
                                    </a>
                                </li>
                                <li>
                                    <a href="#top-rated" className='hover:text-primaryText-dark transition-all'>
                                        Top Rated
                                    </a>
                                </li>
                                <li>
                                    <a href="#genres" className='hover:text-primaryText-dark transition-all'>
                                        Browse by Genre
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='text-neutral-300'>
                            <h3 className='text-primaryText-dark font-semibold text-lg mb-4'>
                                Resources
                            </h3>
                            <ul className='space-y-2 text-sm'>
                                <li>
                                    <a 
                                        href="#" className='hover:text-primaryText-dark'
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" className='hover:text-primaryText-dark'
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" className='hover:text-primaryText-dark'
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" className='hover:text-primaryText-dark'
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" className='hover:text-primaryText-dark'
                                    >
                                        Help Center
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-primaryText-dark font-semibold text-lg mb-4'>
                                Newsletter
                            </h3>
                            <p className='text-sm text-neutral-300 mb-4'>
                                Stay up to date with the latest movies and news.
                            </p>

                            <form className='space-y-3'>
                                <div className='relative'>
                                    <input 
                                        type="email"
                                        placeholder='Your email address'
                                        className='w-full bg-neutral-800 border-divider-dark text-primaryText-dark px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red/70 text-sm transition-all'
                                    />
                                </div>
                                <button className='w-full bg-theme-red hover:bg-theme-darkred text-primaryText-dark py-2 rounded-lg transition-all text-sm'>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className='text-neutral-300 border-t border-divider-dark mt-10 pt-6 flex flex-col md:flex-row justify-between'>
                        <p className='text-xs'>
                            &copy; WatchNest. All rights reserved. <br className='md:hidden' />
                            <span className='hidden md:inline'>.</span>
                            Powered by{" "}
                            <a href="#" className='hover:text-primaryText-dark hover:underline underline-offset-4 transition-all'>
                                TMDB API
                            </a>
                        </p>
                        <div className='fkex space-x-4 mt-4 md:mt-0 text-xs'>
                            <a 
                                href="Privacy Policy"
                                className='hover:text-primaryText-dark transition-all hover:underline underline-offset-4'
                            >
                                Privacy Policy
                            </a>
                            <a 
                                href="Privacy Policy"
                                className='hover:text-primaryText-dark transition-all hover:underline underline-offset-4'
                            >
                                Terms of Services
                            </a>
                            <a 
                                href="Privacy Policy"
                                className='hover:text-primaryText-dark transition-all hover:underline underline-offset-4'
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>

        </footer>
    )
}

export default Footer
