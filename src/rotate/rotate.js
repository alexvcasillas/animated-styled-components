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

export const RotateOutCenter = keyframes`
 0% {
   transform: rotate(0);
   opacity: 1;
 }
 100% {
   transform: rotate(-360deg);
   opacity: 0;
 }
`;

export const RotateInBottomLeft = keyframes`
 0% {
   transform: rotate(-360deg);
   transform-origin: bottom left;
   opacity: 0;
 }
 100% {
   transform: rotate(0deg);
   transform-origin: bottom left;
   opacity: 1;
 }
`;

export const RotateOutBottomLeft = keyframes`
 0% {
   transform: rotate(0);
   transform-origin: bottom left;
   opacity: 1;
 }
 100% {
   transform: rotate(-360deg);
   transform-origin: bottom left;
   opacity: 0;
 }
`;

export const RotateInTop = keyframes`
 0% {
   transform: rotate(-360deg);
   transform-origin: top;
   opacity: 0;
 }
 100% {
   transform: rotate(0deg);
   transform-origin: top;
   opacity: 1;
 }
`;

export const RotateOutTop = keyframes`
 0% {
   transform: rotate(0);
   transform-origin: top;
   opacity: 1;
 }
 100% {
   transform: rotate(-360deg);
   transform-origin: top;
   opacity: 0;
 }
`;

export const RotateInLeft = keyframes`
 0% {
   transform: rotate(-360deg);
   transform-origin: left;
   opacity: 0;
 }
 100% {
   transform: rotate(0deg);
   transform-origin: left;
   opacity: 1;
 }
`;

export const RotateOutLeft = keyframes`
 0% {
   transform: rotate(0);
   transform-origin: left;
   opacity: 1;
 }
 100% {
   transform: rotate(-360deg);
   transform-origin: left;
   opacity: 0;
 }
`;

export const RotateInTopRight = keyframes`
 0% {
   transform: rotate(-360deg);
   transform-origin: top right;
   opacity: 0;
 }
 100% {
   transform: rotate(0deg);
   transform-origin: top right;
   opacity: 1;
 }
`;

export const RotateOutTopRight = keyframes`
 0% {
   transform: rotate(0);
   transform-origin: top right;
   opacity: 1;
 }
 100% {
   transform: rotate(-360deg);
   transform-origin: top right;
   opacity: 0;
 }
`;

export const RotateInTopLeft = keyframes`
 0% {
   transform: rotate(-360deg);
   transform-origin: top left;
   opacity: 0;
 }
 100% {
   transform: rotate(0deg);
   transform-origin: top left;
   opacity: 1;
 }
`;

export const RotateOutTopLeft = keyframes`
 0% {
   transform: rotate(0);
   transform-origin: top left;
   opacity: 1;
 }
 100% {
   transform: rotate(-360deg);
   transform-origin: top left;
   opacity: 0;
 }
`;

export const RotateInRight = keyframes`
 0% {
   transform: rotate(-360deg);
   transform-origin: right;
   opacity: 0;
 }
 100% {
   transform: rotate(0deg);
   transform-origin: right;
   opacity: 1;
 }
`;

export const RotateOutRight = keyframes`
 0% {
   transform: rotate(0);
   transform-origin: right;
   opacity: 1;
 }
 100% {
   transform: rotate(-360deg);
   transform-origin: right;
   opacity: 0;
 }
`;

export const RotateInHorizontal = keyframes`
 0% {
   transform: rotateX(360deg);
   opacity: 0;
 }
 100% {
   transform: rotateX(0deg);
   opacity: 1;
 }
`;

export const RotateOutHorizontal = keyframes`
 0% {
   transform: rotateX(360deg);
   opacity: 1;
 }
 100% {
   transform: rotateX(0deg);
   opacity: 0;
 }
`;

export const RotateInBottomRight = keyframes`
 0% {
   transform: rotate(-360deg);
   transform-origin: bottom right;
   opacity: 0;
 }
 100% {
   transform: rotate(0deg);
   transform-origin: bottom right;
   opacity: 1;
 }
`;

export const RotateOutBottomRight = keyframes`
 0% {
   transform: rotate(0);
   transform-origin: bottom right;
   opacity: 1;
 }
 100% {
   transform: rotate(-360deg);
   transform-origin: bottom right;
   opacity: 0;
 }
`;

export const RotateInVertical = keyframes`
 0% {
   transform: rotateY(-360deg);
   opacity: 0;
 }
 100% {
   transform: rotateY(0deg);
   opacity: 1;
 }
`;

export const RotateOutVertical = keyframes`
 0% {
   transform: rotateY(360deg);
   opacity: 1;
 }
 100% {
   transform: rotateY(0deg);
   opacity: 0;
 }
`;

export const RotateInBottom = keyframes`
 0% {
   transform: rotate(-360deg);
   transform-origin: bottom;
   opacity: 0;
 }
 100% {
   transform: rotate(0deg);
   transform-origin: bottom;
   opacity: 1;
 }
`;

export const RotateOutBottom = keyframes`
 0% {
   transform: rotate(0);
   transform-origin: bottom;
   opacity: 1;
 }
 100% {
   transform: rotate(-360deg);
   transform-origin: bottom;
   opacity: 0;
 }
`;

export const RotateInDiagonal = keyframes`
 0% {
   transform: rotate3d(-1, 1, 0, -360deg);
   opacity: 0;
 }
 100% {
   transform: rotate3d(-1, 1, 0, 0deg);
   opacity: 1;
 }
`;

export const RotateOutDiagonal = keyframes`
 0% {
   transform: rotate3d(-1, 1, 0, 360deg);
   opacity: 1;
 }
 100% {
   transform: rotate3d(-1, 1, 0, 0deg);
   opacity: 0;
 }
`;

export const RotateInDiagonalReverse = keyframes`
 0% {
   transform: rotate3d(1, 1, 0, -360deg);
   opacity: 0;
 }
 100% {
   transform: rotate3d(1, 1, 0, 0deg);
   opacity: 1;
 }
`;

export const RotateOutDiagonalReverse = keyframes`
 0% {
   transform: rotate3d(1, 1, 0, 360deg);
   opacity: 1;
 }
 100% {
   transform: rotate3d(1, 1, 0, 0deg);
   opacity: 0;
 }
`;

export const RotateIn45Right = keyframes`
 0% {
   transform: rotate(-45deg);
   opacity: 0;
 }
 100% {
   transform: rotate(0);
   opacity: 1;
 }
`;

export const RotateOut45Right = keyframes`
 0% {
   transform: rotate(0);
   opacity: 1;
 }
 100% {
   transform: rotate(45deg);
   opacity: 0;
 }
`;

export const RotateIn45Left = keyframes`
 0% {
   transform: rotate(45deg);
   opacity: 0;
 }
 100% {
   transform: rotate(0);
   opacity: 1;
 }
`;

export const RotateOut45Left = keyframes`
 0% {
   transform: rotate(0);
   opacity: 1;
 }
 100% {
   transform: rotate(45deg);
   opacity: 0;
 }
`;

export const RotateInForwards = keyframes`
 0% {
   transform: translateZ(-200px) rotate(-45deg);
   opacity: 0;
 }
 100% {
   transform: translateZ(0) rotate(0);
   opacity: 1;
 }
`;

export const RotateOutForwards = keyframes`
 0% {
   transform: translateZ(0) rotate(0);
   opacity: 1;
 }
 100% {
   transform: translateZ(180px) rotate(45deg);
   opacity: 0;
 }
`;

export const RotateInBackwards = keyframes`
 0% {
   transform: translateZ(200px) rotate(45deg);
   opacity: 0;
 }
 100% {
   transform: translateZ(0) rotate(0);
   opacity: 1;
 }
`;

export const RotateOutBackwards = keyframes`
 0% {
   transform: rotate(0);
   opacity: 1;
 }
 100% {
   transform: rotate(-45deg);
   opacity: 0;
 }
`;
