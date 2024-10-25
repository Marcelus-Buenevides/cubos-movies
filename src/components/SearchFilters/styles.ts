import styled from 'styled-components';

export const SearchFiltersContainer = styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  padding: 16px;
  border-radius: 8px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.accent};
  background-color: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.textColor};
`;

export const Input = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.accent};
  background-color: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.textColor};
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.accent};
  color: #fff;
  cursor: pointer;
  border: none;
`;

export const FilterToggleButton = styled.button`
  background-color: ${(props) => props.theme.colors.accent};
  padding: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
