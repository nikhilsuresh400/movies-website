export default async function handler(req, res) {
    const { path, ...params } = req.query;

    const API_KEY = process.env.TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";

    if (!path) {
        return res.status(400).json({ error: "Path is required" });
    }

    const queryString = new URLSearchParams({
        api_key: API_KEY,
        ...params,
    }).toString();

    try {
        const response = await fetch(`${BASE_URL}/${path}?${queryString}`);

        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch from TMDB" });
    }
}
