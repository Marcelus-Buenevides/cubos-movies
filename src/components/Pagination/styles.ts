import styled from 'styled-components';

interface PageButtonProps {
  $active: boolean;
}

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;

export const PageButton = styled.button<PageButtonProps>`
  padding: 8px 12px;
  border: none;
  background-color: ${({ $active }) => ($active ? '#EBEAF814' : '#8E4EC6')};
  color: ${({ $active }) => ($active ? '#8E4EC6' : 'white')};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
  box-shadow: ${({ $active }) => ($active ? '0 0 5px rgba(0, 0, 0, 0.3)' : 'none')};

  &:hover {
    background-color: ${({ $active }) => ($active ? '#EBEAF814' : '#6D3AAC')};
    color: white;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const NavigationButton = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: #2b2b2b;
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;

  &:hover:not(:disabled) {
    background-color: #8E4EC6;
    color: white;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
