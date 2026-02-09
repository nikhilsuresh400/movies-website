import { BsFillBookmarkPlusFill } from "react-icons/bs"
import { FaImdb, FaPlay } from "react-icons/fa"
import { HiOutlineGlobe } from "react-icons/hi"
import { ImSpinner9 } from "react-icons/im"
import { IoClose } from "react-icons/io5"
import { MdError } from "react-icons/md"
import { TiStar } from "react-icons/ti"

const MoviesDetails = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-auto">
            <div className="relative w-full max-w-5xl bg-neutral-900 rounded-lg shadow-xl max-h-[900vh] overflow-hidden">

                {/* CLOSE BUTTON */}
                <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-surface-dark/80 text-primaryText-dark hover:bg-neutral-700/60 transition-all">
                    <IoClose className="h-6 w-6" />
                </button>

                {/* CONDITIONAL RENDERING */}
                <div className="flex items-center justify-center h-96">
                    <div className="animate-pulse">
                        <ImSpinner9
                            className="w-12 h-12 animate-spin text-theme-darkred"
                        />
                        <p className="mt-4">Loading Details</p>
                    </div>

                    {/* IF */}
                    <div className="flex items-center justify-center h-96">
                        <div className="text-center">
                            <MdError
                                className="h-16 w-16 mx-auto text-theme-darkred"
                            />
                            <h2 className="font-semibold mt-4">
                                Failed to Load Movies Details
                            </h2>
                            <p className="mt-2 text-secondaryText-dark">Error</p>
                            <button className="mt-6 bg-theme-red hover:bg-theme-darkred text-primaryText-dark px-6 py-2 rounded-md transition-colors">
                                Close
                            </button>
                        </div>
                    </div>

                    {/* ELSE */}
                    <div>
                        {/* BACKDROP HEADER */}
                        <div className="relative h-72 md:h-96 w-full">
                            {/* CONDITIONAL RENDERING */}
                            <img
                                src=""
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            {/* ELSE */}
                            <div className="w-full h-full bg-neutral-900"></div>

                            {/* GRADIENT OVERLAY */}
                            <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/64 to-transparent"></div>
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="md:flex gap-8 -mt-32 md:-mt-48 relative">
                                {/* POSTER */}
                                <div className="w-32 md:w-64 shrink-0 mb-4 md:mb-0">
                                    <div className="rounded-lg overflow-hidden shadow-lg border border-divider-dark">
                                        {/* CONDITIONAL RENDERING */}
                                        <img
                                            src=""
                                            alt=""
                                            className="w-full h-auto"
                                        />
                                        {/* ELSE */}
                                        <div className="w-full aspect-2/3 bg-surface-dark flex items-center justify-center">
                                            No Poster Available
                                        </div>
                                    </div>
                                </div>

                                {/* MOVIES INFO */}
                                <div className="flex-1">
                                    <h1 className="text-3xl md:text-4xl font-bold text-primaryText-dark">
                                        Movies Title
                                        {/* CONDITIONAL RENDERING */}
                                        <span className="text-secondaryText-dark font-normal ml-2"></span>
                                    </h1>

                                    {/* RATING & OTHER META */}
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center">
                                        {/* CONDITIONAL RENDERING */}
                                        <div className="flex items-center">
                                            <TiStar
                                                className="h-5 w-5 text-yellow-500"
                                            />
                                            <span className="ml-1 font-medium">
                                                Movies Vote Average
                                            </span>
                                        </div>
                                        {/* ELSE */}
                                        <span className="text-secondaryText-dark">Movie Runtime</span>
                                        {/* CONDITIONAL RENDERING */}
                                        <span className="text-secondaryText-dark">Movie Release Date</span>
                                        {/* CONDITIONAL RENDERING */}
                                        <span className="bg-red-500/80 text-primaryText-dark text-xs px-1 py-0.5 rounded">
                                            18+
                                        </span>
                                    </div>

                                    {/* GENRES */}
                                    {/* CONDITIONAL RENDERING */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="bg-neutral-700 text-secondaryText-dark px-3 py-1 rounded-full text-xs">
                                            Genre Name
                                        </span>
                                    </div>

                                    {/* TAGLINE */}
                                    <p className="mt-4 text-secondaryText-dark italic">Movies Tagline</p>

                                    {/* OVERVIEW */}
                                    <div className="mt-6">
                                        <h2 className="text-xl font-semibold text-primaryText-dark mb-2">Overview</h2>
                                        <p className="text-neutral-300">Movie Overview</p>
                                    </div>

                                    {/* BUTTONS */}
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <button className="bg-theme-red hover:bg-theme-darkred text-primaryText-dark px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                                            <FaPlay
                                                className="h-5 w-5"
                                            />
                                            Watch Now
                                        </button>
                                        <div className="bg-neutral-700 hover:bg-neutral-600 text-primaryText-dark px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                                            <BsFillBookmarkPlusFill
                                                className="h-5 w-5"
                                            />
                                            Add to Watchlist
                                        </div>
                                    </div>
                                </div>

                                {/* ADDDITIONAL DETAILS */}
                                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-xl font-semibold text-primaryText-dark mb-4">
                                            Details
                                        </h2>
                                        <div className="space-y-4">
                                            {/* CONDITIONAL RENDERING */}
                                            <div className="text-secondaryText-darktext-sm mb-1">
                                                <h3 className="text-secondaryText-dark text-sm mb-1">
                                                    Production Companies
                                                </h3>
                                                <p className="text-primaryText-dark">Movies Production Countries</p>
                                            </div>

                                            <div className="text-secondaryText-darktext-sm mb-1">
                                                <h3 className="text-secondaryText-dark text-sm mb-1">
                                                    Languages
                                                </h3>
                                                <p className="text-primaryText-dark">Langauge</p>
                                            </div>

                                            <div className="text-secondaryText-darktext-sm mb-1">
                                                <h3 className="text-secondaryText-dark text-sm mb-1">
                                                    Budget
                                                </h3>
                                                <p className="text-primaryText-dark">Movie Budget</p>
                                            </div>

                                            <div className="text-secondaryText-darktext-sm mb-1">
                                                <h3 className="text-secondaryText-dark text-sm mb-1">
                                                    Revenue
                                                </h3>
                                                <p className="text-primaryText-dark">Revenue</p>
                                            </div>

                                            <div className="text-secondaryText-darktext-sm mb-1">
                                                <h3 className="text-secondaryText-dark text-sm mb-1">
                                                    Status
                                                </h3>
                                                <p className="text-primaryText-dark">Status</p>
                                            </div>

                                            <div className="text-secondaryText-darktext-sm mb-1">
                                                <h3 className="text-secondaryText-dark text-sm mb-1">
                                                    Original Language
                                                </h3>
                                                <p className="text-primaryText-dark">Original Language</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT COLUMN */}
                                    <div>
                                        <h2 className="text-xl font-semibold text-primaryText-dark mb-4">
                                            Rating
                                        </h2>
                                        {/* CONDITIONAL RENDERING */}
                                        <div className="flex items-center">
                                            <div className="w-24 h-24 rounded-full border-4 border-theme-darkred flex items-center justify-center mr-4">
                                                <span className="text-3xl font-bold">
                                                    Movie Average
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-secondaryText-dark/70">Votes</p>
                                                <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-2">
                                                    <div className="bg-theme-red h-2.5 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ELSE */}
                                        <p className="text-secondaryText-dark">No Rating Available</p>
                                    </div>

                                    {/* IMDB & OFFICIAL WEBSITE LINK */}
                                    <div className="mt-8 space-y-4">
                                        {/* CONDITIONAL RENDERING */}
                                        <a 
                                            href=""
                                            className="inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-primaryText-dark px-4 py-2 rounded transition-all"
                                        >
                                            <HiOutlineGlobe 
                                                className="h-5 w-5 mr-2"
                                            />
                                            Official Website
                                        </a>
                                        {/* CONDITONAL RENDERING */}
                                        <a 
                                            href=""
                                            className="inline-flex items-center bg-yellow-700 hover:bg-yellow-600 text-primaryText-dark px-4 py-2 rounded transition-colors"
                                        >
                                            <FaImdb 
                                                className="h-5 w-5 mr-2"
                                            />
                                            View on IMDB
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesDetails
