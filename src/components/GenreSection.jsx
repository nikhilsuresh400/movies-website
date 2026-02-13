import { HiLightningBolt } from "react-icons/hi"
import { ImSpinner9 } from "react-icons/im"
import { IoIosInformationCircle } from "react-icons/io"
import { LuInfo } from "react-icons/lu"
import { TiStar } from "react-icons/ti"
import { useMovies } from "../context/MoviesContext"
import { useEffect, useState } from "react"
import { fetchMoviesByGenre, getImageURL } from "../services/api"

const GenreSection = () => {

    const { genres, loading, openMoviesDetails } = useMovies();
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [genreMovies, setGenreMovies] = useState([]);
    const [loadingGenreMovies, setLoadingGenreMovies] = useState([]);

    useEffect(() => {
        if (!loading && genres.length > 0) {
            setSelectedGenre(genres[0]);
        }
    }, [loading, genres]);

    useEffect(() => {
        const loadGenreMovies = async () => {
            if (!selectedGenre) return;
            setLoadingGenreMovies(true);
            const movies = await fetchMoviesByGenre(selectedGenre.id);
            setGenreMovies(movies.slice(0, 8));
            setLoadingGenreMovies(false);
        };
        loadGenreMovies();
    }, [selectedGenre]);

    if (loading || !selectedGenre) {
        return (
            <section className="py-12 bg-neutral-900">
                <div className="container mx-auto px-4">
                    <div className="h-64 flex items-center justify-center">
                        <div className="animate-pulse">
                            <ImSpinner9
                                className="w-12 h-12 text-theme-red animate-spin"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const formatRating = (rating) => {
        return (Math.round(rating * 10) / 10).toFixed(1);
    };

    return (
        <section className="py-12 bg-bg-dark/80" id="">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primaryText-dark mb-6">
                    Browse by Genre
                </h2>

                {/* GENRE TABS */}
                <div className="mb-8 overflow-x-auto pb-2">
                    <div className="flex space-x-2 min-w-max">
                        {/* CONDITIONAL RENDERING */}
                        {genres.slice(0, 10).map((gen) => {
                            return (
                                <button
                                    className={`px-4 py-2 rounded-md transition-colors text-sm ${selectedGenre?.id === gen.id ? "bg-theme-red text-primaryText-dark" : "bg-neutral-800 text-secondaryText-dark hover:bg-neutral-700"}`}
                                    onClick={() => setSelectedGenre(gen)}
                                >
                                    {gen.name}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* CONDITIONAL RENDERING */}
                {loadingGenreMovies
                    ?
                    <div className="h-64 flex items-center justify-center">
                        <div className="animate-pulse">
                            {/* <div className="w-12 h-12 border-4 border-theme-red border-t-transparent rounded-full animate-spin"></div> */}
                            <ImSpinner9
                                className="w-14 h-14 text-theme-red animate-spin"
                            />
                        </div>
                    </div>
                    :
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* MAP METHOD */}
                        {genreMovies.map((movie) => {
                            return (
                                <div className="group cursor-pointer"
                                    onClick={() => openMoviesDetails(movie.id)}>
                                    <div className="relative rounded-lg overflow-hidden bg-neutral-800">
                                        <div className="aspect-2/3">
                                            <img
                                                src={getImageURL(movie.poster_path, "w500")}
                                                alt={movie.title}
                                                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-neutral-900/90 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-1">
                                                        <TiStar
                                                            className="text-yellow-400 h-4 w-4" />
                                                        <span className="text-yellow-400 text-sm font-medium">
                                                            {formatRating(movie.vote_average)}
                                                        </span>
                                                    </div>
                                                    <span className="text-secondaryText-dark text-sm">
                                                        {movie.release_date?.substring(0, 4) || "N/A"}
                                                    </span>
                                                </div>

                                                <button className="w-full bg-theme-red hover:bg-theme-darkred text-primaryText-dark py-2 rounded-md flex items-center justify-center gap-1 transition-all text-sm">
                                                    <IoIosInformationCircle
                                                        className="w-4 h-4" />
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="text-primaryText-dark text-sm font-medium truncate">
                                            {movie.title}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-1">
                                                <TiStar
                                                    className="H-3 W-3 text-yellow-500"
                                                />
                                                <span className="text-secondaryText-dark text-xs">
                                                    {formatRating(movie.vote_average)}
                                                </span>
                                            </div>
                                            <span className="text-secondaryText-dark text-xs">
                                                {movie.release_date?.substring(0, 4) || "N/A"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                }
            </div>
        </section>
    )
}

export default GenreSection
