// 2:56:18
import { useEffect, useState } from "react"
import { BsFillBookmarkPlusFill } from "react-icons/bs"
import { FaImdb, FaPlay } from "react-icons/fa"
import { HiOutlineGlobe } from "react-icons/hi"
import { ImSpinner9 } from "react-icons/im"
import { IoClose } from "react-icons/io5"
import { MdError } from "react-icons/md"
import { TiStar } from "react-icons/ti"
import { fetchMoviesDetails, getImageURL } from "../services/api"
import { LuGlobe } from "react-icons/lu"

const MoviesDetails = ({ movieId, onClose }) => {

    const [movie, setMovie] = useState(null);
    const [loading, setIsLoading] = useState(true);
    const [error, setIsError] = useState(null);

    useEffect(() => {
        async function getMoviesDetails() {
            try {
                setIsLoading(true);
                const movieData = await fetchMoviesDetails(movieId);
                setMovie(movieData);
            } catch (err) {
                console.error("Failed to load movie details, please try again.")
            } finally {
                setIsLoading(false);
            }
        }
        if (movieId) {
            getMoviesDetails();
        }
    }, [movieId])

    if (!movieId) return null;

    const formatRunTime = (minutes) => {
        if (!minutes) return "N/A";
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m`
    }

    const formatRating = (rating) => {
        return (Math.round(rating * 10) / 10).toFixed(1);
    };

    const formatRevenue = (revenue) => {
        if (!revenue) return "N/A";
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact",
            maximumFractionDigits: 1,
        }).format(revenue);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-auto">
            <div className="relative w-full max-w-5xl bg-neutral-900 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
                {/* CLOSE BUTTON */}
                <button onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-surface-dark/80 text-primaryText-dark hover:bg-neutral-700/60 transition-all">
                    <IoClose className="h-6 w-6" />
                </button>

                {/* CONDITIONAL RENDERING */}
                {loading ? (
                    <div className="flex items-center justify-center h-96">
                        <div className="animate-pulse">
                            <ImSpinner9
                                className="w-12 h-12 animate-spin text-theme-darkred"
                            />
                            <p className="mt-4">Loading Details</p>
                        </div>
                    </div>
                )
                    : error ? (
                        <div className="flex items-center justify-center h-96">
                            <div className="text-center">
                                <MdError
                                    className="h-16 w-16 mx-auto text-theme-darkred"
                                />
                                <h2 className="text-xl font-semibold mt-4">
                                    Failed to Load Movie Details
                                </h2>
                                <p className="mt-2 text-secondaryText-dark">{error}</p>
                                <button onClick={onClose} className="mt-6 bg-theme-red hover:bg-theme-darkred text-primaryText-dark px-6 py-2 rounded-md transition-colors">
                                    Close
                                </button>
                            </div>
                        </div>
                    ) : movie ?
                        <div>
                            {/* BACKDROP HEADER */}
                            <div className="relative h-72 md:h-96 w-full">
                                {/* CONDITIONAL RENDERING */}
                                {movie.backdrop_path ?
                                    <img
                                        src={getImageURL(movie.backdrop_path)}
                                        alt={movie.title}
                                        className="w-full h-full object-cover"
                                    />
                                    :
                                    <div className="w-full h-full bg-neutral-900"></div>
                                }

                                {/* GRADIENT OVERLAY */}
                                <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/64 to-transparent"></div>
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="md:flex gap-8 -mt-32 md:-mt-48 relative">
                                    {/* POSTER */}
                                    <div className="w-32 md:w-64 shrink-0 mb-4 md:mb-0">
                                        <div className="rounded-lg overflow-hidden shadow-lg border border-divider-dark">
                                            {/* CONDITIONAL RENDERING */}
                                            {movie.poster_path ?
                                                <img
                                                    src={getImageURL(movie.poster_path, "w500")}
                                                    alt={movie.title}
                                                    className="w-full h-auto"
                                                />
                                                :
                                                <div className="w-full aspect-2/3 bg-surface-dark flex items-center justify-center">
                                                    <span className="text-secondaryText-dark">
                                                        No Poster Available
                                                    </span>
                                                </div>
                                            }
                                        </div>
                                    </div>

                                    {/* MOVIES INFO */}
                                    <div className="flex-1">
                                        <h1 className="text-3xl md:text-4xl font-bold text-primaryText-dark">
                                            {movie.title}
                                            {/* CONDITIONAL RENDERING */}
                                            {movie.release_date &&
                                                <span className="text-secondaryText-dark font-normal ml-2"></span>
                                            }
                                        </h1>

                                        {/* RATING & OTHER META */}
                                        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center">
                                            {/* CONDITIONAL RENDERING */}
                                            {movie.vote_average > 0 &&
                                                <div className="flex items-center">
                                                    <TiStar
                                                        className="h-5 w-5 text-yellow-500"
                                                    />
                                                    <span className="ml-1 font-medium">
                                                        {formatRating(movie.vote_average)}
                                                    </span>
                                                </div>
                                            }
                                            {/* ELSE */}
                                            {movie.runtime > 0 &&
                                                <span className="text-secondaryText-dark">
                                                    {formatRunTime(movie.runtime)}
                                                </span>
                                            }
                                            {/* CONDITIONAL RENDERING */}
                                            {movie.release_date &&
                                                <span className="text-secondaryText-dark">
                                                    {movie.release_date}
                                                </span>
                                            }
                                            {/* CONDITIONAL RENDERING */}
                                            {movie.adult &&
                                                <span className="bg-red-500/80 text-primaryText-dark text-xs px-1 py-0.5 rounded">
                                                    18+
                                                </span>
                                            }
                                        </div>

                                        {/* GENRES */}
                                        {movie.genres && movie.genres.length > 0 &&
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {movie.genres.map((genre) => (
                                                    <span
                                                        key={genre.id}
                                                        className="bg-neutral-700 text-secondaryText-dark px-3 py-1 rounded-full text-xs"
                                                    >
                                                        {genre.name}
                                                    </span>
                                                ))}
                                            </div>
                                        }

                                        {/* TAGLINE */}
                                        {movie.tagline &&
                                            <p className="mt-4 text-secondaryText-dark italic">
                                                "{movie.tagline}"
                                            </p>
                                        }

                                        {/* OVERVIEW */}
                                        <div className="mt-6">
                                            <h2 className="text-xl font-semibold text-primaryText-dark mb-2">Overview</h2>
                                            <p className="text-neutral-300">
                                                {movie.overview || "No overview available."}
                                            </p>
                                        </div>

                                        {/* BUTTONS */}
                                        <div className="mt-8 flex flex-wrap gap-3">
                                            <button className="bg-theme-red hover:bg-theme-darkred text-primaryText-dark px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                                                <FaPlay
                                                    className="h-3 w-3"
                                                />
                                                Watch Now
                                            </button>
                                            <button className="bg-neutral-700 hover:bg-neutral-600 text-primaryText-dark px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                                                <BsFillBookmarkPlusFill
                                                    className="h-3 w-3"
                                                />
                                                Add to Watchlist
                                            </button>
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
                                            {movie.production_companies && movie.production_companies.length > 0 && (
                                                <div>
                                                    <h3 className="text-neutral-400 text-sm mb-1">
                                                        Production Companies
                                                    </h3>
                                                    <p className="text-primaryText-dark">
                                                        {movie.production_companies.map((company) => company.name).join(", ")}
                                                    </p>
                                                </div>
                                            )}


                                            {movie.production_countries && movie.production_countries.length > 0 && (
                                                <div>
                                                    <h3 className="text-neutral-400 text-sm mb-1">
                                                        Production Countries
                                                    </h3>
                                                    <p className="text-primaryText-dark">
                                                        {movie.production_countries.map((country) => country.name).join(", ")}
                                                    </p>
                                                </div>
                                            )}


                                            {movie.spoken_languages && movie.spoken_languages.length > 0 && (
                                                <div>
                                                    <h3 className="text-neutral-400 text-sm mb-1">
                                                        Languages
                                                    </h3>
                                                    <p className="text-primaryText-dark">
                                                        {movie.spoken_languages.map((language) => language.english_name).join(", ")}
                                                    </p>
                                                </div>
                                            )}



                                            {movie.budget > 0 && (
                                                <div>
                                                    <h3 className="text-neutral-400 text-sm mb-1">
                                                        Budget
                                                    </h3>
                                                    <p className="text-primaryText-dark">{formatRevenue(movie.budget)}</p>
                                                </div>
                                            )}



                                            {movie.revenue > 0 && (
                                                <div>
                                                    <h3 className="text-neutral-400 text-sm mb-1">
                                                        Revenue
                                                    </h3>
                                                    <p className="text-primaryText-dark">{formatRevenue(movie.revenue)}</p>
                                                </div>
                                            )}


                                            {movie.status && (
                                                <div>
                                                    <h3 className="text-neutral-400 text-sm mb-1">
                                                        Status
                                                    </h3>
                                                    <p className="text-primaryText-dark">{movie.status}</p>
                                                </div>
                                            )}


                                            {movie.original_language && (
                                                <div>
                                                    <h3 className="text-neutral-400 text-sm mb-1">
                                                        Original Language
                                                    </h3>
                                                    <p className="text-primaryText-dark">
                                                        {movie.original_language.toUpperCase()}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* RIGHT COLUMN */}
                                    <div>
                                        <h2 className="text-xl font-semibold text-primaryText-dark mb-4">
                                            Rating
                                        </h2>
                                        {/* CONDITIONAL RENDERING */}
                                        {movie.vote_average > 0 ? (
                                            <div className="flex items-center">
                                                <div className="w-24 h-24 rounded-full border-4 border-theme-darkred flex items-center justify-center mr-4">
                                                    <span className="text-3xl font-bold">
                                                        {formatRating(movie.vote_average)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-secondaryText-dark/70">
                                                        From {movie.vote_count.toLocaleString()} votes
                                                    </p>
                                                    <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-2">
                                                        <div className="bg-theme-red h-2.5 rounded-full"
                                                            style={{
                                                                width: `${(movie.vote_average / 10) * 100}%`,
                                                            }}
                                                        >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                            :
                                            <p className="text-secondaryText-dark">No Rating Available</p>
                                        }
                                        <div className="mt-8 space-y-4 flex gap-4">
                                            {/* CONDITIONAL RENDERING */}
                                            {movie.homepage && (
                                                <div>
                                                    <a
                                                        href={movie.homepage}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-primaryText-dark px-4 py-2 rounded transition-all"
                                                    >
                                                        <LuGlobe
                                                            className="h-3 w-3 mr-2"
                                                        />
                                                        Official Website
                                                    </a>
                                                </div>
                                            )}
                                            {/* CONDITONAL RENDERING */}
                                            {movie.imdb_id && (
                                                <div>
                                                    <a
                                                        href={`https://www.imdb.com/title/${movie.imdb_id}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center bg-yellow-700 hover:bg-yellow-600 text-primaryText-dark px-4 py-2 rounded transition-colors"
                                                    >
                                                        <FaImdb
                                                            className="h-3 w-3 mr-2"
                                                        />
                                                        View on IMDB
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* IMDB & OFFICIAL WEBSITE LINK */}

                                </div>
                            </div>
                        </div>
                        : null}
            </div>
        </div >
    );
}

export default MoviesDetails
