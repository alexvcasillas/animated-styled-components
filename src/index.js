import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import {
  FadeAnimations,
  BounceAnimations,
  ScaleAnimations,
  RotateAnimations,
  SlideAnimations
} from './animations';

import {
  validateAnimation,
  validateTransition,
  haveAnimationIn,
  haveAnimationOut,
  haveAnimationContinuous,
  haveDelayIn,
  haveDelayOut,
  waitUntill,
  calculateDelayInTime,
  getCurrentAnimation,
  calculateDurationDelayBetween,
  getTransitionFrom,
  getTransitionTo,
  getCurrentDuration,
  getCurrentIteration
} from './utils';

const Wrapper = styled.div`
  animation-duration: ${({ duration }) => (duration ? `${duration}s` : '1s')};
  animation-name: ${({ animation }) =>
    animation ? animation : 'no-animation'};
  animation-fill-mode: forwards;
  animation-iteration-count: ${({ iteration }) =>
    iteration ? iteration : '1'};

  > * {
    ${({ transitionFrom }) =>
      transitionFrom && transitionFrom !== '' ? transitionFrom : ''};
    transition: all 0.3s ease-in-out;

    &:hover {
      ${({ transitionTo }) =>
        transitionTo && transitionTo !== '' ? transitionTo : ''};
    }
  }

  &:focus {
    ${({ transitionTo }) =>
      transitionTo && transitionTo !== '' ? transitionTo : ''};
  }

  &:active {
  }
`;

function Animated({ transition, animation, children }) {
  const [delayWaited, setDelayWaited] = useState(false);
  const [transiteIn, setTransiteIn] = useState(false);
  const [transiteOut, setTransiteOut] = useState(false);
  const [transiteContinuous, setTransiteContinuous] = useState(false);
  // MEMO FOR TRANSITION
  useMemo(validateTransition, [transition]);
  // MEMO FOR ANIMATION
  useMemo(validateAnimation, [animation]);
  // MEMO FOR THE GETTERS
  useMemo(getCurrentAnimation, [transiteIn, transiteOut, transiteContinuous])
  useMemo(getCurrentDuration, [transiteIn, transiteOut, transiteContinuous])
  useMemo(getCurrentIteration, [transiteIn, transiteOut, transiteContinuous])
  useMemo(getTransitionFrom, [transition])
  useMemo(getTransitionTo, [transition])
  // TRIGGER IR ANIMATION FUNCTION
  function triggerInAnimation() {
    console.log('Transite In');
    setTransiteIn(true);
  }
  // TRIGGER OUT ANIMATION FUNCTION
  function triggerOutAnimation() {
    console.log('Transite Out');
    setTransiteOut(true);
  }
  // TRIGGER CONTINUOUS ANIMATION FUNCTION
  function triggerContinuousAnimation() {
    console.log('Transite Continuous');
    setTransiteContinuous(true);
  }
  // CHECK FOR VALID ANIMATIONS & TRANSITIONS WHEN THEY CHANGE
  useEffect(() => {
    validateAnimation(animation);
    validateTransition(transition);
  }, [animation, transition]);
  // USE EFFECT FOR THE FIRST RENDER TO CHECK IF IT HAS INITIAL DELAY
  useEffect(() => {
    async function checkForDelayIn() {
      console.log('Check for delay in');
      if (haveDelayIn(animation)) {
        await waitUntill(calculateDelayInTime(animation));
      }
      setDelayWaited(true);
    }
    checkForDelayIn()
  }, []);
  // DELAY WAITED EFFECT
  useEffect(() => {
    if (haveAnimationIn(animation)) {
      triggerInAnimation();
    }
  }, [delayWaited])
  // TRANSITE IN EFFECT
  useEffect(() => {
    async function checkForContinuousAnimation() {
      if (haveAnimationContinuous(animation)) {
        await waitUntill(calculateDurationInTime(animation));
        triggerContinuousAnimation();
      } else {
        checkForOutAnimation();
      }
    }
    async function checkForOutAnimation() {
      if(haveAnimationOut(animation)) {
        await waitUntill(calculateDurationDelayBetween(animation));
        triggerOutAnimation();
      }
    }
    checkForContinuousAnimation();
  }, [transiteIn]);
  // TRANSITE CONTINUOUS EFFECT
  useEffect(() => {
    async function checkForOutAnimation() {}
  }, [transiteContinuous]);
  // TRANSITE OUT EFFECT
  useEffect(() => {
    // Nothing to do here
  }, [transiteOut]);

  const currentAnimation = getCurrentAnimation(animation, { transiteIn, transiteOut, transiteContinuous });
  const currentDuration = getCurrentDuration(animation, { transiteIn, transiteOut, transiteContinuous });
  const currentIteration = getCurrentIteration(animation, { transiteIn, transiteOut, transiteContinuous });
  const transitionFrom = getTransitionFrom(transition);
  const transitionTo = getTransitionTo(transition);

  return (
    <Wrapper
      animation={currentAnimation}
      duration={currentDuration}
      iteration={currentIteration}
      transitionFrom={transitionFrom}
      transitionTo={transitionTo}
    >
      {children}
    </Wrapper>
  )
}

export {
  Animated,
  FadeAnimations,
  BounceAnimations,
  ScaleAnimations,
  RotateAnimations,
  SlideAnimations
};
