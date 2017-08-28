import { keyframes } from 'styled-components';

export const RotateInCenter = keyframes`
 0% {
   transform: rotate(-360deg);
   opacity: 0;
 }
 100% {
   transform: rotate(0);
   opacity: 1;
 }

`;
