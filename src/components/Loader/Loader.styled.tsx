import { devices } from '@constants/devices';
import Lottie from 'lottie-react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black80};
  z-index: 1200;
`;

const LoaderContainer = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

const StyledLottie = styled(Lottie)`
  max-width: 250px;
  max-height: 250px;

  ${devices.md} {
    max-width: 300px;
    max-height: 300px;
  }

  ${devices.lg} {
    max-width: 400px;
    max-height: 400px;
  }
`;

export { Overlay, LoaderContainer, StyledLottie };
