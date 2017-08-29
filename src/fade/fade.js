import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
 0% {
   opacity: 0;
 }
 100% {
   opacity: 1;
 }
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
