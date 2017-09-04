import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
 0% {
   opacity: 0;
 }
 100% {
   opacity: 1;
 }
`;

export const FadeOut = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

export const FadeInTop = keyframes`
 0% {
   transform: translateY(-50px);
   opacity: 0;
 }
 100% {
   transform: translateY(0);
   opacity: 1;
 }
`;

export const FadeOutTop = keyframes`
0% {
  transform: translateY(0px);
  opacity: 1;
}
100% {
  transform: translateY(-50px);
  opacity: 0;
}
`;

export const FadeInBottom = keyframes`
 0% {
   transform: translateY(50px);
   opacity: 0;
 }
 100% {
   transform: translateY(0);
   opacity: 1;
 }
`;

export const FadeOutBottom = keyframes`
 0% {
   transform: translateY(0);
   opacity: 1;
 }
 100% {
   transform: translateY(50px);
   opacity: 0;
 }
`;

export const FadeInLeft = keyframes`
 0% {
   transform: translateX(-50px);
   opacity: 0;
 }
 100% {
   transform: translateX(0);
   opacity: 1;
 }
`;

export const FadeOutLeft = keyframes`
 0% {
   transform: translateX(0);
   opacity: 1;
 }
 100% {
   transform: translateX(-50px);
   opacity: 0;
 }
`;

export const FadeInRight = keyframes`
 0% {
   transform: translateX(50px);
   opacity: 0;
 }
 100% {
   transform: translateX(0);
   opacity: 1;
 }
`;

export const FadeOutRight = keyframes`
 0% {
   transform: translateX(0);
   opacity: 1;
 }
 100% {
   transform: translateX(50px);
   opacity: 0;
 }
`;

export const FadeInForwards = keyframes`
 0% {
   transform: scale(0.6);
   opacity: 0;
 }
 100% {
   transform: scale(1);
   opacity: 1;
 }
`;

export const FadeOutForwards = keyframes`
 0% {
   transform: scale(1);
   opacity: 1;
 }
 100% {
   transform: scale(1.4);
   opacity: 0;
 }
`;

export const FadeInBackwards = keyframes`
 0% {
   transform: scale(1.4);
   opacity: 0;
 }
 100% {
   transform: scale(1);
   opacity: 1;
 }
`;

export const FadeOutBackwards = keyframes`
0% {
  transform: scale(1);
  opacity: 1;
}
100% {
  transform: scale(0.6);
  opacity: 0;
}
`;

export const FadeInBottomLeft = keyframes`
 0% {
   transform: translateX(-50px) translateY(50px);
   opacity: 0;
 }
 100% {
   transform: translateX(0) translateY(0);
   opacity: 1;
 }
`;

export const FadeOutBottomLeft = keyframes`
 0% {
   transform: translateX(0) translateY(0);
   opacity: 1;
 }
 100% {
   transform: translateX(-50px) translateY(50px);
   opacity: 0;
 }
`;

export const FadeInBottomRight = keyframes`
0% {
  transform: translateX(50px) translateY(50px);
  opacity: 0;
}
100% {
  transform: translateX(0) translateY(0);
  opacity: 1;
}
`;

export const FadeOutBottomRight = keyframes`
 0% {
   transform: translateX(0) translateY(0);
   opacity: 1;
 }
 100% {
   transform: translateX(50px) translateY(50px);
   opacity: 0;
 }
`;

export const FadeInTopLeft = keyframes`
0% {
  transform: translateX(-50px) translateY(-50px);
  opacity: 0;
}
100% {
  transform: translateX(0) translateY(0);
  opacity: 1;
}
`;

export const FadeOutTopLeft = keyframes`
 0% {
   transform: translateX(0) translateY(0);
   opacity: 1;
 }
 100% {
   transform: translateX(-50px) translateY(-50px);
   opacity: 0;
 }
`;

export const FadeInTopRight = keyframes`
 0% {
   transform: translateX(50px) translateY(-50px);
   opacity: 0;
 }
 100% {
   transform: translateX(0) translateY(0);
   opacity: 1;
 }
`;

export const FadeOutTopRight = keyframes`
 0% {
   transform: translateX(0) translateY(0);
   opacity: 1;
 }
 100% {
   transform: translateX(50px) translateY(-50px);
   opacity: 0;
 }
`;
