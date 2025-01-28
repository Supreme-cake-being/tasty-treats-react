import { ReactNode } from 'react';
import { StyledButton } from './Button.styled';

interface IButton {
  variant?: 'contained' | 'outlined' | 'text';
  location: 'hero' | 'categories' | 'filters' | 'card' | 'modal';
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({
  variant = 'contained',
  location,
  active = false,
  disabled = false,
  onClick,
  children,
}: IButton) => {
  return (
    <StyledButton
      variant={variant}
      location={location}
      active={active}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </StyledButton>
  );
};
