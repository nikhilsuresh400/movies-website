export default async function handler(req, res) {
    const { path, query } = req.query;

    const API_KEY = process.env.TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";

    try {
        const response = await fetch(
            `${BASE_URL}/${path}?api_key=${API_KEY}&${query || ""}`
        );

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch from TMDB" });
    }
}
