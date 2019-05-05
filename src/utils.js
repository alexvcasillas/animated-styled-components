import CSSProperties from "./css-properties";
import { transitionTypes } from "./type-transitions";

export const validateAnimation = animation => {
  if (!animation) return;
  // Check of an in animation
  if ("in" in animation) {
    // Check if that animation has also a duration
    if (!("duration_in" in animation)) {
      throw new TypeError(
        "If you have an in animation you need to specify a duration for that animation"
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
    if ("iteration" in animation) {
      // Check for Valid Iteration
      if (!this.checkForValidIteration(animation.iteration)) {
        throw new TypeError(
          `${
            animation.iteration
          } is not a valid type of iteration property. Should be real number or the 'inifite' literal`
        );
      }
    }
  } else {
    if ("delay_between" in animation) {
      throw new TypeError(
        `You cannot have a delay between in and out animations if you're missing any of them`
      );
    }
  }
  // Check of an out animation
  if ("out" in animation) {
    // Check if that animation has also a duration
    if (!("duration_out" in animation)) {
      throw new TypeError(
        "If you have an out animation you need to specify a duration for that animation"
      );
    }
  } else {
    if ("delay_between" in animation) {
      throw new TypeError(
        `You cannot have a delay between in and out animations if you're missing any of them`
      );
    }
  }
  // Check for both animations (in and out) at the same time
  if ("in" in animation && "out" in animation) {
    // Check if there's also a delay between those animations
    if (!("delay_between" in animation)) {
      throw new TypeError(
        "If you have an in animation and an out animation you need to specify a delay between those animations"
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
  if ("continuous" in animation) {
    if ("duration_continuous" in animation) {
      // Check for Valid Animation Duration In
      if (!this.checkForValidDuration(animation.duration_continuous)) {
        throw new TypeError(
          `${
            animation.duration_continuous
          } is not a valid duration for a continuous animation`
        );
      }
    } else {
      throw new TypeError(
        `${animation.duration_out} is not a valid duration out for an animation`
      );
    }
  }
};

export const validateTransition = transition => {
  if (!transition) return;
  if (!("type" in transition)) {
    throw new TypeError(
      `You're missing the type of transition property. Eg: hover, focus, blur, active, ...`
    );
  }
  // Check for Valid Transition Type
  if (!this.checkForValidTransitionType(transition.type)) {
    throw new TypeError(`${transition.type} is not a valid type of transition`);
  }
  // Check for from transition object
  if (!("from" in transition)) {
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
  if (!("to" in transition)) {
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

export const haveDelayIn = animation => {
  if (!animation) return;
  return "delay_in" in animation;
};

export const haveDelayOut = animation => {
  if (!animation) return;
  return "delay_out" in animation;
};

export const haveAnimationIn = animation => {
  if (!animation) return;
  return "in" in animation;
};

export const haveAnimationOut = animation => {
  if (!animation) return;
  return "out" in animation;
};

export const haveAnimationContinuous = animation => {
  if (!animation) return;
  return "continuous" in animation;
};

export const calculateDelayInTime = animation => {
  if (!animation) return;
  return animation.delay_in * 1000;
};

export const calculateDelayOutTime = animation => {
  if (!animation) return;
  return animation.delay_out * 1000;
};

export const calculateDurationInTime = animation => {
  if (!animation) return;
  return animation.duration_in * 1000;
};

export const calculateDurationContinousTime = animation => {
  if (!animation) return;
  return animation.duration_continuous * 1000;
};

export const calculateDurationOutTime = animation => {
  if (!animation) return;
  return animation.duration_out * 1000;
};

export const calculateDurationDelayBetween = animation => {
  if (!animation) return;
  return animation.delay_between * 1000;
};

export const calculateTimeToExitWithInAnimation = animation => {
  if (!animation) return;
  return (
    (animation.delay_in + animation.duration_in + animation.delay_between) *
    1000
  );
};

export const checkForValidCSSProperty = property => {
  return CSSProperties.includes(property);
};

export const checkForValidDuration = duration => {
  return typeof duration === "number" && duration >= 0;
};

export const checkForValidTransitionType = transitionType => {
  return transitionTypes.includes(transitionType);
};

export const checkForValidIteration = iteration => {
  const rounds = parseInt(iteration, 10);
  return (
    (typeof rounds === "number" && rounds >= 1) || iteration === "infinite"
  );
};

checkForValidFromToObject = fromToObject => {
  return "property" in fromToObject && "value" in fromToObject;
};

export const waitUntill = amount =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      return resolve();
    }, amount);
  });

export const getCurrentAnimation = (animation, state) => {
  if (!animation) return;
  const { transite_out, transite_in, transite_continuous } = state;

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

export const getCurrentDuration = (animation, state) => {
  if (!animation) return;
  const { transite_out, transite_in, transite_continuous } = state;
  return transite_in
    ? animation.duration_in
    : transite_continuous
    ? animation.duration_continuous
    : transite_out
    ? animation.duration_out
    : null;
};

export const getCurrentIteration = (animation, state) => {
  if (!animation) return;
  const { transite_out, transite_in, transite_continuous } = state;
  return transite_continuous ? "infinite" : animation.iteration;
};

export const getTransitionFrom = transition => {
  if (!transition) return;
  return transition.type === "hover"
    ? `${transition.from.property}: ${transition.from.value}`
    : "";
};

export const getTransitionTo = transition => {
  if (!transition) return;
  return transition.type === "hover"
    ? `${transition.to.property}: ${transition.to.value};`
    : "";
};
