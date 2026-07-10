import axios from "axios";
import type { Movie } from "../types/movie";


console.log(import.meta.env);
const instance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_URL,
  headers: {
    Authorization: import.meta.env.VITE_TMDB_TOKEN,
  },
});

interface FetchMoviesResponse {
  results: Movie[];
}

// Функция поиска фильмов по ключевому слову
export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await instance.get<FetchMoviesResponse>("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
    },
  });
  return response.data.results;
};