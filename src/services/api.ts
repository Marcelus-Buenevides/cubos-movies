import axios from 'axios';
import { Movie } from '../interfaces/Movie';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;;

export const fetchMovies = async (page: number, genre: string, query: string, sortBy: string) => {
  const sortMap: { [key: string]: string } = {
    newest: 'release_date.desc',
    popular: 'popularity.desc',
    rating: 'vote_average.desc',
  };

  const endpoint = query
    ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}${genre ? `&with_genres=${genre}` : ''}&sort_by=${sortMap[sortBy]}`;

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return { results: [], total_pages: 0 };
  }
};


export const fetchMovieDetails = async (id: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do filme:', error);
    return null;
  }
};


export const fetchGenres = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    return response.data.genres; // { id: number, name: string }
  } catch (error) {
    console.error('Erro ao buscar gêneros:', error);
    return [];
  }
};

