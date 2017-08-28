import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SlideInUp = keyframes`
from {
  transform: translateY(20px);
}
to {
  transform: translateY(0);
}
`;
