import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';
import ThemeToggle from '../components/ThemeToggle';
import SearchFilters from '../components/SearchFilters';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import { useTheme } from '../contexts/ThemeContext';
import { MainContainer } from './styles';
import Header from '@/components/Header';

const Home: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({ genre: '', sort: 'newest', query: '' });

  const handleFilterChange = (newFilters: { genre?: string; sort?: string; query?: string }) => {
    setFilters({ ...filters, ...newFilters });
  };


  const resetFilters = () => {
    setFilters({ genre: '', sort: 'newest', query: '' });
  };

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(currentPage, filters.genre || '', filters.query || '', filters.sort || '');
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
  
    loadMovies();
  }, [filters, currentPage]);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <MainContainer>
      <SearchFilters onFilterChange={handleFilterChange} onResetFilters={() => setFilters({ genre: '', sort: 'newest', query: '' })} />
      <MovieList movies={movies.slice(0, 10)} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </MainContainer>
  );
};

export default Home;
