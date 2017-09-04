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
import CSSProperties from './css-properties';
import { transitionTypes } from './type-transitions';

const Wrapper = styled.div`
  display: inline-block;
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

class Animated extends Component {
  state = {
    delay_waited: false,
    transite_in: false,
    transite_out: false,
    transite_continuous: false
  };
  async componentDidMount() {
    // Retreive the props we need
    const { animation, transition } = this.props;

    // Validate Animation
    this.validateAnimation(animation);
    // Validate Transitions
    this.validateTransitions(transition);

    // Do we have an animation in?
    if (this.haveAnimationIn(animation)) {
      // Do we have a delay in?
      if (this.haveDelayIn(animation)) {
        // Wait untill the delay in is done
        await this.waitUntill(this.calculateDelayInTime(animation));
        // Set the delay as waited
        this.setDelayAsWaited();
        // Then trigger the IN animation
        this.triggerInAnimation();
        // Do we have a continouos animation
        if (this.haveAnimationContinuous(animation)) {
          // Wait untill the duration of the IN animation is done
          await this.waitUntill(this.calculateDurationInTime(animation));
          // Then trigger the CONTINUOUS animation
          this.triggerContinuousAnimation();
          // Do we have an animation out?
          if (this.haveAnimationOut(animation)) {
            // Wait untill the duration between animations is done
            await this.waitUntill(
              this.calculateDurationDelayBetween(animation)
            );
            // Then trigger the OUT animation
            this.triggerOutAnimation();
          }
        } else {
          // Do we have an animation out?
          if (this.haveAnimationOut(animation)) {
            // Wait untill the duration between animations is done
            await this.waitUntill(
              this.calculateDurationDelayBetween(animation)
            );
            // Then trigger the OUT animation
            this.triggerOutAnimation();
          }
        }
      } else {
        // We don't have a delay in so we set the delay as waited
        this.setDelayAsWaited();
        // Then we trigger the IN animation
        this.triggerInAnimation();
        // Do we have a continouos animation?
        if (this.haveAnimationContinuous(animation)) {
          // Wait untill the duration of the IN animation is done
          await this.waitUntill(this.calculateDurationInTime(animation));
          // Then trigger the CONTINUOUS animation
          this.triggerContinuousAnimation();
          // Do we have an animation out?
          if (this.haveAnimationOut(animation)) {
            // Wait untill the duration between animations is done
            await this.waitUntill(
              this.calculateDurationDelayBetween(animation)
            );
            // Then trigger the OUT animation
            this.triggerOutAnimation();
          }
        } else {
          // Do we have an animation out?
          if (this.haveAnimationOut(animation)) {
            // Wait untill the duration between animations is done
            await this.waitUntill(
              this.calculateDurationDelayBetween(animation)
            );
            // Then trigger the OUT animation
            this.triggerOutAnimation();
          }
        }
      }
    } else {
      // We don't have an IN animation so we set the delay as waited
      this.setDelayAsWaited();
      // Trigger the animation IN even it's not going to be shown
      this.triggerInAnimation();
      // Do we have a continous animation?
      if (this.haveAnimationContinuous(animation)) {
        // Trigger directly the continuous animation
        this.triggerDirectContinuousAnimation();
        // Do we have an animation out?
        if (this.haveAnimationOut(animation)) {
          // Wait untill the duration between animations is done
          await this.waitUntill(this.calculateDelayOutTime(animation));
          // Then trigger the OUT animation
          this.triggerOutAnimation();
          console.log('Out animation triggered after delay out');
        }
      } else {
        // Do we have an animation out?
        if (this.haveAnimationOut(animation)) {
          // Wait untill the duration between animations is done
          await this.waitUntill(this.calculateDelayOutTime(animation));
          // Then trigger the OUT animation
          this.triggerOutAnimation();
          console.log('Out animation triggered after delay out');
        }
      }
    }
  }

  waitUntill = amount =>
    new Promise((resolve, reject) => {
      setTimeout(function() {
        return resolve();
      }, amount);
    });

  triggerDelayedTransiteInAnimation = animation => {
    return this.waitUntill(this.calculateDelayInTime(animation)).then(() => {
      return this.setState(function(state, props) {
        return { transite_in: true };
      });
    });
  };

  triggerDelayedTransiteOutAnimation = animation => {
    return this.waitUntill(this.calculateDelayOutTime(animation)).then(() => {
      this.setState(function(state, props) {
        return { transite_out: true };
      });
    });
  };

  triggerDelayedTransiteOutAnimationWithInAnimation = animation => {
    return this.waitUntill(
      this.calculateTimeToExitWithInAnimation(animation)
    ).then(() => {
      this.setState(function(state, props) {
        return { transite_out: true };
      });
    });
  };

  triggerInAnimation = () => {
    return this.setState(function(state, props) {
      return { transite_in: true };
    });
  };

  triggerOutAnimation = () => {
    return this.setState(function(state, props) {
      return { transite_out: true, transite_continuous: false };
    });
  };

  triggerContinuousAnimation = () => {
    return this.setState(function(state, props) {
      return { transite_continuous: true };
    });
  };

  triggerDirectContinuousAnimation = () => {
    return this.setState(function(state, props) {
      return { transite_in: true, transite_continuous: true };
    });
  };

  triggerContinuousAfterInAnimation = animation => {
    return this.waitUntill(animation.duration_in).then(() => {
      return this.setState(function(state, props) {
        return { transite_continuous: true };
      });
    });
  };

  setDelayAsWaited = () => {
    return this.setState(function(state, props) {
      return { delay_waited: true };
    });
  };

  haveDelayIn = animation => {
    return 'delay_in' in animation;
  };

  haveDelayOut = animation => {
    return 'delay_out' in animation;
  };

  haveAnimationIn = animation => {
    return 'in' in animation;
  };

  haveAnimationOut = animation => {
    return 'out' in animation;
  };

  haveAnimationContinuous = animation => {
    return 'continuous' in animation;
  };

  calculateDelayInTime = animation => {
    return animation.delay_in * 1000;
  };

  calculateDelayOutTime = animation => {
    return animation.delay_out * 1000;
  };

  calculateDurationInTime = animation => {
    return animation.duration_in * 1000;
  };

  calculateDurationContinousTime = animation => {
    return animation.duration_continuous * 1000;
  };

  calculateDurationOutTime = animation => {
    return animation.duration_out * 1000;
  };

  calculateDurationDelayBetween = animation => {
    return animation.delay_between * 1000;
  };

  calculateTimeToExitWithInAnimation = animation => {
    return (
      (animation.delay_in + animation.duration_in + animation.delay_between) *
      1000
    );
  };

  checkForValidCSSProperty = property => {
    return CSSProperties.includes(property);
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
    } else {
      if ('delay_between' in animation) {
        throw new TypeError(
          `You cannot have a delay between in and out animations if you're missing any of them`
        );
      }
    }
    // Check of an out animation
    if ('out' in animation) {
      // Check if that animation has also a duration
      if (!('duration_out' in animation)) {
        throw new TypeError(
          'If you have an out animation you need to specify a duration for that animation'
        );
      }
    } else {
      if ('delay_between' in animation) {
        throw new TypeError(
          `You cannot have a delay between in and out animations if you're missing any of them`
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
    // Check for a continuous animation
    if ('continuous' in animation) {
      if ('duration_continuous' in animation) {
        // Check for Valid Animation Duration In
        if (!this.checkForValidDuration(animation.duration_continuous)) {
          throw new TypeError(
            `${animation.duration_continuous} is not a valid duration for a continuous animation`
          );
        }
      } else {
        throw new TypeError(
          `${animation.duration_out} is not a valid duration out for an animation`
        );
      }
    }
  };

  validateTransitions = transition => {
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
        `${transition.from.property} is not a valid CSS property at FROM object`
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
  };

  getCurrentAnimation = () => {
    const { animation } = this.props;
    const { transite_out, transite_in, transite_continuous } = this.state;

    return transite_in && !transite_continuous && !transite_out
      ? animation.in
      : transite_in && transite_continuous
        ? animation.continuous
        : ((transite_in && !transite_continuous) ||
            (!transite_in && !transite_continuous)) &&
          transite_out
          ? animation.out
          : null;
  };

  getCurrentDuration = () => {
    const { animation } = this.props;
    const { transite_out, transite_in, transite_continuous } = this.state;
    return transite_in
      ? animation.duration_in
      : transite_continuous
        ? animation.duration_continuous
        : transite_out ? animation.duration_out : null;
  };

  getCurrentIteration = () => {
    const { animation } = this.props;
    const { transite_out, transite_in, transite_continuous } = this.state;
    return transite_continuous ? 'infinite' : animation.iteration;
  };

  getTransitionFrom = () => {
    const { transition } = this.props;

    return transition.type === 'hover'
      ? `${transition.from.property}: ${transition.from.value}`
      : '';
  };

  getTransitionTo = () => {
    const { transition } = this.props;

    return transition.type === 'hover'
      ? `${transition.to.property}: ${transition.to.value};`
      : '';
  };

  render() {
    const { children, animation, transition } = this.props;
    const {
      delay_waited,
      transite_out,
      transite_in,
      transite_continuous
    } = this.state;
    return delay_waited ? (
      <Wrapper
        animation={this.getCurrentAnimation()}
        duration={this.getCurrentDuration()}
        iteration={this.getCurrentIteration()}
        transitionFrom={this.getTransitionFrom()}
        transitionTo={this.getTransitionTo()}
      >
        {children}
      </Wrapper>
    ) : null;
  }
}

Animated.PropTypes = {
  animation: PropTypes.object,
  transitions: PropTypes.arrayOf(PropTypes.object)
};

export default Animated;
export {
  FadeAnimations,
  BounceAnimations,
  ScaleAnimations,
  RotateAnimations,
  SlideAnimations
};
