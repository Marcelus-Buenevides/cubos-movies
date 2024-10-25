import styled from 'styled-components';
import { mauveDark, mauve, purple, purpleDark } from '@radix-ui/colors';

export const HeaderContainer = styled.header<{ $isDarkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  border-bottom: 1px solid #F1E6FD30;
  color: ${({ $isDarkMode }) => ($isDarkMode ? mauveDark.mauve1 : mauve.mauve12)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  height: 40px;
  filter: brightness(0) invert(1); 
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #EEEEF0;
  margin: 0;
`;

export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${purple.purple11};
  transition: color 0.3s ease;

  &:hover {
    color: ${purpleDark.purple11};
  }
`;
