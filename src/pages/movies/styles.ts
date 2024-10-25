import { SecondaryButton } from './../../components/Button/styles';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px!important;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 1440px;
  margin: 0 auto;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const MovieDetailsContainer = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${({ backgroundImage }) => `
    linear-gradient(90deg, #121113 0%, rgba(18, 17, 19, 0.8) 50%, rgba(18, 17, 19, 0) 100%),
    url(${backgroundImage}) no-repeat center center
  `};
  background-size: cover;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;
  color: white;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ backgroundImage }) => `
      linear-gradient(90deg, #121113 0%, rgba(18, 17, 19, 0.8) 50%, rgba(18, 17, 19, 0) 100%)
    `};
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const InfoIMG = styled.div`
  padding: 20px;
  border-radius: 4px;
  img{
    border-radius: 4px;
  }
  
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 40px;

`;

export const InfoBoxSinopse = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .sinapse{
    background: #232225BF;
    padding: 16px;
    gap: 8px;
    border-radius: 4px;
    width: 100%;
  }

`;
export const InfoBoxTexts = styled.div`
  width: 100%;
  .d-flex{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

`;

export const GenresContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const Genre = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 5px 10px;
  border-radius: 15px;
  color: #fff;
  font-size: 0.9rem;
`;

export const InfoItem = styled.div`
  margin-bottom: 10px;
  font-size: 0.9rem;
  background: #232225BF;
  padding: 16px;
  gap: 8px;
  border-radius: 4px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

`;

export const BoldText = styled.span`
  font-weight: bold;
  color: #EEE;
`;

export const CircularProgressWrapper = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
`;

export const TrailerContainer = styled.div`
  margin-top: 30px;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  
  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textColor};
    margin-bottom: 15px;
  }

  iframe {
    width: 100%;
    height: 315px;

    @media (min-width: 768px) {
      height: 450px;
    }
  }
`;
