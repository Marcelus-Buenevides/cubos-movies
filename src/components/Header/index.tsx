import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { HeaderContainer, LogoWrapper, Logo, Title, ThemeToggleButton } from './styles';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <HeaderContainer $isDarkMode={isDarkMode}>
      <LogoWrapper>
        <a href="/">
          <Logo src="/logo-cubos.svg" alt="Cubos Logo" />
        </a>
        <Title>Movie</Title>
      </LogoWrapper>
      <ThemeToggleButton onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ThemeToggleButton>
    </HeaderContainer>
  );
};

export default Header;