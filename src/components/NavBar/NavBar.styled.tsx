import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BurgerIcon from '@assets/images/menu.svg?react';
import { devices } from '@/src/constants/devices';

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${devices.sm} {
    & > div:first-child {
      display: none;
    }
  }
`;

export const Logo = styled(Link)`
  & > p {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }

  & span {
    color: ${({ theme }) => theme.colors.green};
  }

  ${devices.md} {
    & > p {
      font-size: 18px;
      line-height: 20px;
    }
  }
`;

export const Links = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  ${devices.md} {
    flex-direction: row;
  }
`;

export const StyledLink = styled(Link)<{ active?: boolean }>`
  color: ${({ theme }) => theme.colors.white};

  font-size: 12px;
  line-height: 16px;
  font-weight: 500;

  ${devices.md} {
    color: ${({ theme, active }) =>
      active ? theme.colors.green : theme.colors.black};
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.green};

  ${devices.md} {
    display: none;
  }
`;

export const MenuIcon = styled(BurgerIcon)`
  ${devices.md} {
    display: none;
  }
`;

export const Cross = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
