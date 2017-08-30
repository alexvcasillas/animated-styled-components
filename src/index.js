import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FadeAnimations,
  BounceAnimations,
  ScaleAnimations,
  RotateAnimations,
  SlideAnimations
} from './animations';
import CSSProperties from './css-specs/properties.json';
import { transitionTypes } from './type-transitions';

const Wrapper = styled.div`
  display: inline-block;
  animation-duration: ${({ duration }) => (duration ? `${duration}s` : '1s')};
  animation-name: ${({ animation }) =>
    animation ? animation : 'no-animation'};
  animation-fill-mode: forwards;
  animation-iteration-count: ${({ iteration }) =>
    iteration ? iteration : '1'};
`;

class Animated extends Component {
  state = {
    transite_in: false,
    transite_out: false
  };
  componentDidMount() {
    // Retreive the props we need
    const { animation, transitions } = this.props;
    // Validate Animation
    this.validateAnimation(animation);
    // Validate Transitions
    this.validateTransitions(transitions);
    // Check if we have a delay in
    if (this.haveDelayIn(animation)) {
      /**
       * If we have it, we need to transite the element
       * from not showing to showing and playing the animation
       */
      (function(context) {
        setTimeout(function() {
          context.setState(function(state, props) {
            return { transite_in: true };
          });
        }, context.calculateDelayInTime(animation));
      })(this);
    } else {
      this.setState(function(state, props) {
        return { transite_in: true };
      });
    }
    // Check if we have an out animation
    if (this.haveAnimationOut(animation)) {
      /**
       * If we have it, we calculate the time to exit and
       * update the state to trigger the out animation
       * when the time is done
       */
      (function(context) {
        setTimeout(function() {
          context.setState(function(state, props) {
            return { transite_out: true };
          });
        }, context.calculateTimeToExit(animation));
      })(this);
    }
  }

  haveDelayIn = animation => {
    return 'delay_in' in animation;
  };

  haveAnimationOut = animation => {
    return 'out' in animation;
  };

  calculateDelayInTime = animation => {
    return animation.delay_in * 1000;
  };

  calculateTimeToExit = animation => {
    return (
      (animation.delay_in + animation.duration_in + animation.delay_between) *
      1000
    );
  };

  checkForValidCSSProperty = property => {
    return property in CSSProperties;
  };

  checkForValidDuration = duration => {
    return typeof duration === 'number' && duration >= 0;
  };

  checkForValidTransitionType = transitionType => {
    return transitionTypes.includes(transitionType);
  };

  checkForValidIteration = iteration => {
    const rounds = parseInt(iteration, 10);
    return (
      (typeof rounds === 'number' && rounds >= 1) || iteration === 'infinite'
    );
  };

  checkForValidFromToObject = fromToObject => {
    return 'property' in fromToObject && 'value' in fromToObject;
  };

  validateAnimation = animation => {
    // Check of an in animation
    if ('in' in animation) {
      // Check if that animation has also a duration
      if (!('duration_in' in animation)) {
        throw new TypeError(
          'If you have an in animation you need to specify a duration for that animation'
        );
      } else {
        // Check for Valid Animation Duration In
        if (!this.checkForValidDuration(animation.duration_in)) {
          throw new TypeError(
            `${animation.duration_in} is not a valid duration in for an animation`
          );
        }
      }
      // Check if this in animation is going to iterate
      if ('iteration' in animation) {
        // Check for Valid Iteration
        if (!this.checkForValidIteration(animation.iteration)) {
          throw new TypeError(
            `${animation.iteration} is not a valid type of iteration property. Should be real number or the 'inifite' literal`
          );
        }
      }
      // Check if there's a delay in before animating
    }
    // Check of an out animation
    if ('out' in animation) {
      // Check if that animation has also a duration
      if (!('duration_out' in animation)) {
        throw new TypeError(
          'If you have an out animation you need to specify a duration for that animation'
        );
      }
    }
    // Check for both animations (in and out) at the same time
    if ('in' in animation && 'out' in animation) {
      // Check if there's also a delay between those animations
      if (!('delay_between' in animation)) {
        throw new TypeError(
          'If you have an in animation and an out animation you need to specify a delay between those animations'
        );
      }
      // Check for Valid Animation Duration In
      if (!this.checkForValidDuration(animation.duration_out)) {
        throw new TypeError(
          `${animation.duration_out} is not a valid duration out for an animation`
        );
      }
    }
  };

  validateTransitions = transitions => {
    // Iterate though transitions
    transitions.forEach(transition => {
      if (!('type' in transition)) {
        throw new TypeError(
          `You're missing the type of transition property. Eg: hover, focus, blur, active, ...`
        );
      }
      // Check for Valid Transition Type
      if (!this.checkForValidTransitionType(transition.type)) {
        throw new TypeError(
          `${transition.type} is not a valid type of transition`
        );
      }
      // Check for from transition object
      if (!('from' in transition)) {
        throw new TypeError(
          `You're missing the from property of the transition that sets the point to start at`
        );
      }
      // Check if from object is valid and meet the requirements
      if (!this.checkForValidFromToObject(transition.from)) {
        throw new TypeError(
          `${JSON.stringify(
            transition.from
          )} is not a valid transition FROM object. It needs to have the following structure: { property: string, value: string || Number }`
        );
      }
      // Check if the from css property is valid
      if (!this.checkForValidCSSProperty(transition.from.property)) {
        throw new TypeError(
          `${transition.from
            .property} is not a valid CSS property at FROM object`
        );
      }
      // Check for to transition object
      if (!('to' in transition)) {
        throw new TypeError(
          `You're missing the to property of the transition that sets the point of where to end at`
        );
      }
      // Check if to object is valid and meet the requirements
      if (!this.checkForValidFromToObject(transition.to)) {
        throw new TypeError(
          `${JSON.stringify(
            transition.from
          )} is not a valid transition TO object. It needs to have the following structure: { property: string, value: string || Number }`
        );
      }
      // Check if the to css property is valid
      if (!this.checkForValidCSSProperty(transition.to.property)) {
        throw new TypeError(
          `${transition.from.property} is not a valid CSS property at TO object`
        );
      }
    });
  };

  render() {
    const { children, animation } = this.props;
    const { transite_out, transite_in } = this.state;
    return transite_in ? (
      <Wrapper
        animation={!transite_out ? animation.in : animation.out}
        duration={
          !transite_out ? animation.duration_in : animation.duration_out
        }
        iteration={animation.iteration}
      >
        {children}
      </Wrapper>
    ) : null;
    // return (
    //   <Wrapper
    //     animation={!transite_out ? animation.in : animation.out}
    //     duration={
    //       !transite_out ? animation.duration_in : animation.duration_out
    //     }
    //     iteration={animation.iteration}
    //   >
    //     {children}
    //   </Wrapper>
    // );
  }
}

Animated.PropTypes = {
  animation: PropTypes.object,
  transition: PropTypes.arrayOf(PropTypes.object)
};

export default Animated;
export {
  FadeAnimations,
  BounceAnimations,
  ScaleAnimations,
  RotateAnimations,
  SlideAnimations
};
