import React from 'react';
import styled from 'styled-components';
import {
  FadeAnimations,
  BounceAnimations,
  ScaleAnimations,
  RotateAnimations,
  SlideAnimations
} from './animations';

const Wrapper = styled.div`
  display: inline-block;
  animation-duration: ${({ duration }) => (duration ? `${duration}s` : '1s')};
  animation-name: ${({ animation }) =>
    animation ? animation : 'no-animation'};
  animation-iteration-count: ${({ iteration }) =>
    iteration ? iteration : '1'};
`;

const Animated = ({ children, duration, animation, iteration }) =>
  <Wrapper animation={animation} duration={duration} iteration={iteration}>
    {children}
  </Wrapper>;

export default Animated;
export {
  FadeAnimations,
  BounceAnimations,
  ScaleAnimations,
  RotateAnimations,
  SlideAnimations
};
