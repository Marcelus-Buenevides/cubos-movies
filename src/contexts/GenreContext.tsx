import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { fetchGenres } from '../services/api';

interface Genre {
  id: number;
  name: string;
}

interface GenreContextType {
  genres: Genre[];
}

interface GenreProviderProps {
  children: ReactNode;
}

const GenreContext = createContext<GenreContextType | undefined>(undefined);

export const GenreProvider: React.FC<GenreProviderProps> = ({ children }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const genreTranslations: { [key: string]: string } = {
    Action: 'Ação',
    Adventure: 'Aventura',
    Animation: 'Animação',
    Comedy: 'Comédia',
    Crime: 'Crime',
    Documentary: 'Documentário',
    Drama: 'Drama',
    Family: 'Família',
    Fantasy: 'Fantasia',
    History: 'História',
    Horror: 'Terror',
    Music: 'Música',
    Mystery: 'Mistério',
    Romance: 'Romance',
    'Science Fiction': 'Ficção Científica',
    'TV Movie': 'Filme de TV',
    Thriller: 'Suspense',
    War: 'Guerra',
    Western: 'Faroeste',
  };
  
  const translateGenre = (genreName: string) => genreTranslations[genreName] || genreName;

  useEffect(() => {
    const loadGenres = async () => {
      const genreList = await fetchGenres();
      setGenres(genreList);
    };

    loadGenres();
  }, []);

  return (
    <GenreContext.Provider value={{ genres }}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenres = () => {
  const context = useContext(GenreContext);
  if (!context) {
    throw new Error('useGenres must be used within a GenreProvider');
  }
  return context;
};
