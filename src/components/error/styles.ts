import styled, { keyframes } from 'styled-components';

export const spinAnimation = keyframes`
  0% {
    transform: scale(1) rotate(0);
  }

  20%, 25% {
    transform: scale(1.3) rotate(90deg);
  }

  45%, 50% {
    transform: scale(1) rotate(180deg);
  }

  70%, 75% {
    transform: scale(1.3) rotate(270deg);
  }

  95%, 100% {
    transform: scale(1) rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  --dim: 3rem;
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: ${spinAnimation} 2s linear infinite;
`;

export const Circle = styled.div`
  --color: #333;
  --dim: 1.2rem;
  width: var(--dim);
  height: var(--dim);
  background-color: var(--color);
  border-radius: 50%;
  position: absolute;
`;

export const Circle1 = styled(Circle)`
  top: 0;
  left: 0;
`;

export const Circle2 = styled(Circle)`
  top: 0;
  right: 0;
`;

export const Circle3 = styled(Circle)`
  bottom: 0;
  left: 0;
`;

export const Circle4 = styled(Circle)`
  bottom: 0;
  right: 0;
`;