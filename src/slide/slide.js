import { keyframes } from 'styled-components';

export const SlideInTop = keyframes`
 0% {
   transform: translateY(-1000px);
   opacity: 0;
 }
 100% {
   transform: translateY(0);
   opacity: 1;
 }
`;

export const SlideOutTop = keyframes`
 0% {
   transform: translateY(0);
   opacity: 1;
 }
 100% {
   transform: translateY(-1000px);
   opacity: 0;
 }
`;

export const SlideInLeft = keyframes`
 0% {
   transform: translateX(-1000px);
   opacity: 0;
 }
 100% {
   transform: translateX(0);
   opacity: 1;
 }
`;

export const SlideOutLeft = keyframes`
 0% {
   transform: translateX(0);
   opacity: 1;
 }
 100% {
   transform: translateX(-1000px);
   opacity: 0;
 }
`;

export const SlideInTopRight = keyframes`
 0% {
   transform: translateY(-1000px) translateX(1000px);
   opacity: 0;
 }
 100% {
   transform: translateY(0) translateX(0);
   opacity: 1;
 }
`;

export const SlideOutTopRight = keyframes`
 0% {
   transform: translateY(0) translateX(0);
   opacity: 1;
 }
 100% {
   transform: translateY(-1000px) translateX(1000px);
   opacity: 0;
 }
`;

export const SlideInTopLeft = keyframes`
 0% {
   transform: translateY(-1000px) translateX(-1000px);
   opacity: 0;
 }
 100% {
   transform: translateY(0) translateX(0);
   opacity: 1;
 }
`;

export const SlideOutTopLeft = keyframes`
 0% {
   transform: translateY(0) translateX(0);
   opacity: 1;
 }
 100% {
   transform: translateY(-1000px) translateX(-1000px);
   opacity: 0;
 }
`;

export const SlideInRight = keyframes`
 0% {
   transform: translateX(1000px);
   opacity: 0;
 }
 100% {
   transform: translateX(0);
   opacity: 1;
 }
`;

export const SlideOutRight = keyframes`
 0% {
   transform: translateX(0);
   opacity: 1;
 }
 100% {
   transform: translateX(1000px);
   opacity: 0;
 }
`;

export const SlideInBottomRight = keyframes`
 0% {
   transform: translateY(1000px) translateX(1000px);
   opacity: 0;
 }
 100% {
   transform: translateY(0) translateX(0);
   opacity: 1;
 }
`;

export const SlideOutBottomRight = keyframes`
 0% {
   transform: translateY(0) translateX(0);
   opacity: 1;
 }
 100% {
   transform: translateY(1000px) translateX(1000px);
   opacity: 0;
 }
`;

export const SlideInBottom = keyframes`
 0% {
   transform: translateY(1000px);
   opacity: 0;
 }
 100% {
   transform: translateY(0);
   opacity: 1;
 }
`;

export const SlideOutBottom = keyframes`
 0% {
   transform: translateY(0);
   opacity: 1;
 }
 100% {
   transform: translateY(1000px);
   opacity: 0;
 }
`;

export const SlideInBottomLeft = keyframes`
 0% {
   transform: translateY(1000px) translateX(-1000px);
   opacity: 0;
 }
 100% {
   transform: translateY(0) translateX(0);
   opacity: 1;
 }
`;

export const SlideOutBottomLeft = keyframes`
 0% {
   transform: translateY(0) translateX(0);
   opacity: 1;
 }
 100% {
   transform: translateY(1000px) translateX(-1000px);
   opacity: 0;
 }
`;
