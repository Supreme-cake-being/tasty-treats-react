import { devices } from '@/src/constants/devices';
import styled from 'styled-components';

export const StyledButton = styled.button<{
  variant: string;
  location: string;
  active: boolean;
  disabled: boolean;
}>`
  padding: 12px 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 16px;

  font-family: 'Inter', sans-serif;

  ${devices.md} {
    padding: 14px 28px;
  }

  ${({ theme, variant }) =>
    variant === 'contained' &&
    `
    color: ${theme.colors.white};
    
    background-color: ${theme.colors.green};

    font-weight: 500;
    font-size: 14px;

    transition: color 250ms linear;

    &:hover {
      color: ${theme.colors.black};
    }
  `}

  ${({ variant, location }) =>
    variant === 'contained' &&
    location === 'card' &&
    `
    padding: 8px 14px;

    border-radius: 8px;

    font-size: 12px;

    ${devices.md} {
      padding: 8px 14px;
    }

    ${devices.lg} {
      padding: 8px 16px;
    }
  `}

  ${({ theme, variant }) =>
    variant === 'outlined' &&
    `
    padding: 14px 28px;

    color: rgba(5, 5, 5, 0.5);

    background-color: transparent;
    
    border: 1px solid rgba(5, 5, 5, 0.2);

    font-weight: 500;
    font-size: 18px;
    
    transition: color 250ms linear, background-color 250ms linear, border-color 250ms linear;

    &:hover {
      color: ${theme.colors.white};

      background-color: ${theme.colors.green};

      border-color: transparent;
    }
  `}

  ${({ theme, variant, location }) =>
    variant === 'outlined' &&
    location === 'hero' &&
    `
    padding: 10px 20px;

    color: ${theme.colors.black};
    
    border: 1px solid ${theme.colors.green};  
    border-radius: 12px;

    font-size: 14px; 

    ${devices.md} {
      border-radius: 16px;
    }
  `}

  ${({ theme, variant, active }) =>
    variant === 'text' &&
    `
    padding: 0;

    color: ${active ? theme.colors.green : `rgba(5, 5, 5, 0.3)`};

    background-color: transparent;

    font-size: 14px;
    line-height: 18px;

    ${devices.md} {
      padding: 0;

      font-size: 16px;
      line-height: 20px;
    }
  `}

  ${({ theme, variant, location }) =>
    variant === 'text' &&
    location === 'filters' &&
    `
    color:  rgba(5, 5, 5, 0.5);

    font-size: 12px;
    line-height: 16px;

    ${devices.md} {
      font-size: 12px;
      line-height: 16px;
    }
  `}
`;
