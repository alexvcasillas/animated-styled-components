import { keyframes } from 'styled-components';

export const BounceInForwards = keyframes`
 0% {
   transform: scale(0);
   animation-timing-function: ease-in;
   opacity: 0;
 }
 38% {
   transform: scale(1);
   animation-timing-function: ease-out;
   opacity: 1;
 }
 55% {
   transform: scale(0.7);
   animation-timing-function: ease-in;
 }
 72% {
   transform: scale(1);
   animation-timing-function: ease-out;
 }
 81% {
   transform: scale(0.84);
   animation-timing-function: ease-in;
 }
 89% {
   transform: scale(1);
   animation-timing-function: ease-out;
 }
 95% {
   transform: scale(0.95);
   animation-timing-function: ease-in;
 }
 100% {
   transform: scale(1);
   animation-timing-function: ease-out;
 }
`;
