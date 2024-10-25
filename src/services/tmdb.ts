import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovieDetails = async (movieId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'videos',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do filme:', error);
    throw error;
  }
};
