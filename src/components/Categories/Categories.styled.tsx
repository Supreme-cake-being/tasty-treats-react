import { devices } from '@/src/constants/devices';
import styled from 'styled-components';

export const CategoriesBox = styled.div`
  margin-bottom: 40px;

  ${devices.md} {
    margin-bottom: 64px;
  }
`;

export const CategoriesList = styled.div`
  height: 198px;

  margin-top: 24px;

  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 18px;

  overflow-y: scroll;

  ${devices.md} {
    height: 416px;
    margin-top: 30px;
    gap: 24px;
  }

  ${devices.lg} {
    margin-top: 42px;
  }
`;
