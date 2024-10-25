import React from 'react';
import { PrimaryButton, SecondaryButton } from './styles';

interface ButtonProps {
  label: string;
  onClick: () => void;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, primary = true }) => {
  return primary ? (
    <PrimaryButton onClick={onClick}>{label}</PrimaryButton>
  ) : (
    <SecondaryButton onClick={onClick}>{label}</SecondaryButton>
  );
};

export default Button;
