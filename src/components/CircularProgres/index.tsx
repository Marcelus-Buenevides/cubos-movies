import React from 'react';
import { CircularProgressContainer, CircleBackground, CircleProgress, PercentageText } from './styles';

interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  const radius = 30; // Raio do círculo
  const stroke = 4;  // Espessura da borda
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (Math.min(percentage, 100) / 100) * circumference;

  const displayPercentage = Math.round(percentage);

  return (
    <CircularProgressContainer>
      <svg height={radius * 2} width={radius * 2}>
        <CircleBackground
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={stroke}
        />
        <CircleProgress
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <PercentageText>{`${displayPercentage}%`}</PercentageText>
    </CircularProgressContainer>
  );
};

export default CircularProgress;
