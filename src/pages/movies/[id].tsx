import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../services/tmdb';
import {
  Container,
  MovieDetailsContainer,
  InfoBox,
  GenresContainer,
  Genre,
  InfoItem,
  BoldText,
  CircularProgressWrapper,
  TrailerContainer,
  InfoIMG,
  InfoBoxSinopse,
  InfoBoxTexts,
} from './styles';
import CircularProgress from '../../components/CircularProgres';
import { Movie } from '../../interfaces/Movie';

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const movieId = Array.isArray(id) ? id[0] : id;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const loadMovie = async () => {
      if (movieId) {
        try {
          const movieData = await fetchMovieDetails(movieId);
          setMovie(movieData);
        } catch (error) {
          console.error('Erro ao buscar detalhes do filme:', error);
        }
      }
    };

    loadMovie();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const {
    title,
    backdrop_path,
    poster_path,
    overview,
    genres,
    vote_average,
    vote_count,
    popularity,
    release_date,
    runtime,
    status,
    original_language,
    budget,
    revenue,
    tagline,
  } = movie;

  const profit = revenue - budget;

  const backgroundImageUrl = backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : "/default-background.jpg";

  return (
    <Container>
      <MovieDetailsContainer backgroundImage={backgroundImageUrl}>
        <InfoIMG>
          <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "/default-poster.jpg"} alt={title} style={{ borderRadius: '10px', width: '300px' }} />
        </InfoIMG>
        <InfoBox>
          <InfoBoxSinopse>

            <h1>{title}</h1>
            <p style={{ fontStyle: 'italic', color: '#EEE' }}>{tagline}</p>
            <p className='sinapse'>{overview}</p>
            <GenresContainer>
              <p>Generos</p>
              <div>
                {genres.map((genre) => (
                  <Genre key={genre.id}>{genre.name}</Genre>
                ))}
              </div>
            </GenresContainer>
          </InfoBoxSinopse>
          <InfoBoxTexts>
            <div className='d-flex'>
              <InfoItem><BoldText>Popularidade:</BoldText> {popularity}</InfoItem>
              <InfoItem><BoldText>Votos:</BoldText> {vote_count}</InfoItem>
              <CircularProgressWrapper>
                <CircularProgress percentage={vote_average * 10} />
              </CircularProgressWrapper>
            </div>
            <div className='d-flex'>
              <InfoItem><BoldText>Lançamento:</BoldText> {release_date}</InfoItem>
              <InfoItem><BoldText>Duração:</BoldText> {`${Math.floor(runtime / 60)}h ${runtime % 60}m`}</InfoItem>
            </div>
            <div className='d-flex'>
              <InfoItem><BoldText>Situação:</BoldText> {status}</InfoItem>
              <InfoItem><BoldText>Idioma:</BoldText> {original_language.toUpperCase()}</InfoItem>
            </div>
            <div className='d-flex'>
              <InfoItem><BoldText>Orçamento:</BoldText> ${budget.toLocaleString()}</InfoItem>
              <InfoItem><BoldText>Receita:</BoldText> ${revenue.toLocaleString()}</InfoItem>
              <InfoItem><BoldText>Lucro:</BoldText> ${profit.toLocaleString()}</InfoItem>
            </div>
          </InfoBoxTexts>

          
        </InfoBox>
      </MovieDetailsContainer>

      {movie.videos?.results.find(video => video.site === 'YouTube' && video.type === 'Trailer') && (
        <TrailerContainer>
          <h2>Trailer</h2>
          <iframe
            src={`https://www.youtube.com/embed/${movie.videos.results.find(video => video.site === 'YouTube' && video.type === 'Trailer').key}`}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </TrailerContainer>
      )}
    </Container>
  );
};

export default MovieDetails;
