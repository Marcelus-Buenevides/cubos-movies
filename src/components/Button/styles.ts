import styled from 'styled-components';

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.secondary};
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
`;
