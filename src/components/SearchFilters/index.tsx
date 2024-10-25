// SearchFilters.tsx
import React, { useState } from 'react';
import { useGenres } from '../../contexts/GenreContext';
import {
  SearchFiltersContainer,
  Select,
  Button,
  FilterToggleButton,
  Input,
  FiltersWrapper
} from './styles';
import { FiSliders } from 'react-icons/fi';

interface SearchFiltersProps {
  onFilterChange: (filters: { genre?: string; sort?: string; query?: string }) => void;
  onResetFilters: () => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilterChange, onResetFilters }) => {
  const { genres } = useGenres();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenreId = e.target.value;
    setSelectedGenre(selectedGenreId);
    onFilterChange({ genre: selectedGenreId, sort: sortOption, query: searchQuery });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    onFilterChange({ genre: selectedGenre, sort: e.target.value, query: searchQuery });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onFilterChange({ genre: selectedGenre, sort: sortOption, query: e.target.value });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center', paddingBottom: '40px' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Input
          placeholder="Pesquise por filmes"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <FilterToggleButton onClick={toggleFilters}>
          <FiSliders />
        </FilterToggleButton>
      </div>
      {showFilters && (
        <SearchFiltersContainer>
          <FiltersWrapper>
            <Select value={selectedGenre} onChange={handleGenreChange}>
              <option value="">Selecione Gênero</option>
              {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
            </Select>
            <Select value={sortOption} onChange={handleSortChange}>
              <option value="newest">Mais Recentes</option>
              <option value="popular">Mais Populares</option>
              <option value="rating">Melhor Avaliados</option>
            </Select>
            <Button onClick={onResetFilters}>Resetar Filtros</Button>
          </FiltersWrapper>
        </SearchFiltersContainer>
      )}
    </div>
    
  );
};

export default SearchFilters;
