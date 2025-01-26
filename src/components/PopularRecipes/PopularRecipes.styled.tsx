import { devices } from '@/src/constants/devices';
import styled from 'styled-components';

export const SectionTitle = styled.h2`
  margin-bottom: 20px;

  color: ${({ theme }) => theme.colors.black};

  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;

  ${devices.lg} {
    margin-bottom: 32px;

    font-size: 24px;
    line-height: 28px;
  }
`;

export const RecipeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${devices.md} {
    gap: 16px;
  }

  ${devices.lg} {
    gap: 32px;
  }
`;

export const Recipe = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;

  &:nth-child(n + 3) {
    display: none;
  }

  ${devices.md} {
    gap: 8px;

    &:nth-child(n + 3) {
      display: flex;
    }
  }

  ${devices.lg} {
    gap: 16px;
  }
`;

export const Image = styled.img`
  max-width: 64px;

  border-radius: 8px;

  ${devices.md} {
    max-width: 48px;
  }

  ${devices.lg} {
    max-width: 64px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 8px;

  color: ${({ theme }) => theme.colors.black};

  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;

  ${devices.md} {
    display: -webkit-box; /* Enables the use of -webkit-line-clamp */
    -webkit-line-clamp: 1; /* Limits the text to desired number of lines */
    -webkit-box-orient: vertical; /* Specifies vertical text orientation */
    overflow: hidden; /* Ensures content beyond the desired line is hidden */
    text-overflow: ellipsis; /* Adds ellipses when text overflows */
  }
`;

export const Description = styled.p`
  color: rgba(5, 5, 5, 0.8);

  font-size: 12px;
  line-height: 16px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${devices.md} {
    font-size: 10px;
    line-height: 14px;

    -webkit-line-clamp: 3;
  }
`;
