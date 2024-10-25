import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  
  a {
    color: ${({ theme }) => theme.colors.link};
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;