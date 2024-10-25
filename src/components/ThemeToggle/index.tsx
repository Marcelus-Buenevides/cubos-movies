import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ToggleButton } from './styles';

const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </ToggleButton>
  );
};

export default ThemeToggle;
