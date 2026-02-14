
export const fetchTrendingMovies = async () => {
    try {
        const response = await fetch(
            `/api/tmdb?path=trending/movie/week&language=en-US`
        );

        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error fetching trending movies.", error);
        return [];
    }
};

export const fetchPopularMovies = async () => {
    try {
        const response = await fetch(
            `/api/tmdb?path=movie/popular&language=en-US&page=1`
        );

        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error fetching popular movies.", error);
        return [];
    }
};

export const fetchTopRatedMovies = async () => {
    try {
        const response = await fetch(
            `/api/tmdb?path=movie/top_rated&language=en-US&page=1`
        );

        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error fetching top rated movies.", error);
        return [];
    }
};

export const fetchMoviesByGenre = async (genreId) => {
    try {
        const response = await fetch(
            `/api/tmdb?path=discover/movie&language=en-US&with_genres=${genreId}&page=1`
        );

        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error fetching movies by genre.", error);
        return [];
    }
};

export const fetchGenres = async () => {
    try {
        const response = await fetch(
            `/api/tmdb?path=genre/movie/list&language=en-US`
        );

        const data = await response.json();
        return data.genres || [];
    } catch (error) {
        console.error("Error fetching genres.", error);
        return [];
    }
};

export const fetchMoviesDetails = async (movieId) => {
    try {
        const response = await fetch(
            `/api/tmdb?path=movie/${movieId}&language=en-US`
        );

        const data = await response.json();
        return data || null;
    } catch (error) {
        console.error("Error fetching movie details.", error);
        return null;
    }
};

export const searchMovies = async (searchQuery) => {
    if (!searchQuery) return [];

    try {
        const response = await fetch(
            `/api/tmdb?path=search/movie&language=en-US&query=${encodeURIComponent(searchQuery)}&page=1&include_adult=false`
        );

        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error searching movies.", error);
        return [];
    }
};

export const getImageURL = (path, size = "original") => {
    if (!path)
        return "https://via.placeholder.com/400x600?text=No+Image+Available";

    return `https://image.tmdb.org/t/p/${size}${path}`;
};

