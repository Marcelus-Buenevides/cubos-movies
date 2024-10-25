import styled from 'styled-components';

export const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;

  svg {
    margin-right: 8px;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;
