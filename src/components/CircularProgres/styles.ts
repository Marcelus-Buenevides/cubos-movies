import styled from 'styled-components';

export const CircularProgressContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: #e6e6e6; 
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: #ffc107;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

export const PercentageText = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: white;
`;
