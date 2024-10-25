import styled from 'styled-components';

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background};
  background: #EBEAF814;
  backdrop-filter: blur(4px);
  border-radius: 4px;
`;

export const MovieCard = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s;
  background-color: ${({ theme }) => theme.background};

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: scale(1.05);

    & > div {
      opacity: 1;
      visibility: visible;
    }

    img {
      opacity: 0.6;
    }
  }
`;

export const ProgressContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
`;

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  padding: 8px;
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  p{
    color: #EEEEEE;
    font-size: 16px;
  }
`;

export const MovieGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;

  span {
    background: ${({ theme }) => theme.accent};
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 10px;
    color: white;
  }
`;
