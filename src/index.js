import React from 'react';
import styled from 'styled-components';
import * as Animations from './animations';

const Wrapper = styled.div`
  pointer-events: none;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  animation-duration: ${({ duration }) => (duration ? `${duration}s` : '1s')};
  animation-name: ${({ animation }) =>
    animation ? Animations[animation] : Animations['FadeIn']};
  animation-iteration-count: ${({ iteration }) =>
    iteration ? iteration : '1'};
`;

const Animated = ({ children, duration, animation, iteration }) =>
  <Wrapper animation={animation} duration={duration} iteration={iteration}>
    {children}
  </Wrapper>;

export default Animated;
