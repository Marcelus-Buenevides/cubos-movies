import React from 'react';
import Link from 'next/link';
import { Movie } from '../../interfaces/Movie';
import CircularProgress from '../CircularProgres';
import { MovieCard, MovieInfo, MovieListContainer, MovieGenres, ProgressContainer } from './styles';
import { useGenres } from '../../contexts/GenreContext';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const { genres } = useGenres();

  const getGenreNames = (ids: number[]) => {
    return ids.map(id => {
      const genre = genres.find(g => g.id === id);
      return genre ? genre.name : '';
    }).filter(name => name !== '');
  };

  return (
    <MovieListContainer>
      {movies.slice(0, 10).map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`} passHref>
          <MovieCard>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <ProgressContainer>
              <CircularProgress percentage={movie.vote_average * 10} />
            </ProgressContainer>
            <MovieInfo>
              <p>{movie.title}</p>
              <MovieGenres>
                {getGenreNames(movie.genre_ids).map((genreName) => (
                  <span key={genreName}>{genreName}</span>
                ))}
              </MovieGenres>
            </MovieInfo>
          </MovieCard>
        </Link>
      ))}
    </MovieListContainer>
  );
};

export default MovieList;
