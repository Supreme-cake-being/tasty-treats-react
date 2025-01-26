import { createPortal } from 'react-dom';
import LoaderAnimation from '@assets/animations/loader.json';
import { LoaderContainer, Overlay, StyledLottie } from './Loader.styled';

const modalRoot = document.querySelector('#modal-root');

export const Loader = () => {
  return createPortal(
    <Overlay>
      <LoaderContainer>
        <StyledLottie animationData={LoaderAnimation} loop={true} />
      </LoaderContainer>
    </Overlay>,
    modalRoot
  );
};
