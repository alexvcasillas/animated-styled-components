### Animated Styled Components

React Animated Styled Components is a work in progress project that aims to make 
ease to use plug and play animated components.

### Installing Animated Styled Components

`npm i animated-styled-components`

### Using the Animated Component

To make use of the **Animated** component all you need is to include the library into your project and create a new component just like you would do with any other react component.

```
import React, { Component } from 'react';
// Make the import into your react component file
import Animated, { FadeAnimations } from 'animated-styled-components';

class Showcase extends Component {
  render() {
    return (
      <div>
        <Animated
          animation={{
            in: FadeAnimations.FadeInBottom,
            duration_in: 1,
            out: FadeAnimations.FadeOutTop,
            duration_out: 1,
            delay_between: 6
          }}
          transitions={[
            {
              type: 'hover',
              from: { property: 'border-radius', value: 0 },
              to: { property: 'border-radius', value: 10 }
            }
          ]}
        >
          This is an animated component
        </Animated>
      </div>
    );
  }
}

```

At the above example you can see a basic structure of an **Animated Component**. We will dig more into all the props later of this documentation.

### Props

The **Animated Component** doesn't need to be filled with any props, if you don't provide props, it will just simply do nothing, but, to make the magic happen, those props are the following: `animation` and `transitions`.

### Animation Prop

The `animation` prop is an `object` that needs to have the following structure:

```
animation={{
  in: FadeAnimations.FadeInBottom,
  duration_in: 1,
  out: FadeAnimations.FadeOutTop,
  duration_out: 1,
  delay_between: 6,
  iteration: 2
}}
```

**Deconstructing the `animation` prop**

* `in`: This property receives an animation keyframe that will be used to animate in the component.
* `duration_in`:  This property receives and integer greater than 0 and will set the duration in seconds for the `in` animation.
* `out`: This property receives an animation keyframe that will be used to animate out the component.
* `duration_out`: This property receives and integer greater than 0 and will set the duration in seconds for the `out` animation.
* `delay_between`: This property receives and integer and geater or equals to 0 and will set the duration between the `in` and `out` animations.
* `iteration`: This property receives and integer greater than 0 or the **literal** 'infinite' and will set the amount of iterations the animation should be doing until it goes out (if it should).

### Transitions Prop

*NOTE: the validation logic of the transitions are implemented but not the transition logic itself so this will not work yet even if you pass valid data in the prop.*

The `transitions` prop is an `array` of `objects` with the desired transitions that should be handled and needs to have the following structure:

```
transitions={[
  {
    type: 'hover',
    from: { property: 'border-radius', value: 0 },
    to: { property: 'border-radius', value: 10 }
  }
]}
```

**Deconstructing the `transitions` prop**

An array of objects that must contain the following structure:

* `type`: This property must be a string literal from the following literals available: `hover`, `focus`, `blur`, `active`. This property is the one who's going to set the type of transition we want to achieve.
* `from`: This property will define the starting values of the properties to transition. This property must be an object with the following inner properties:
  * `property`: This property must be a valid CSS property (it will be checked to avoid using unknown properties).
  * `value`: This property must be a string or a number depending on the property type (will be automatically checked to prevent inconsistencies).
* `to`: This property will define the ending values of the properties to transition. This property must be an object with the following inner properties:
  * `property`: This property must be a valid CSS property (it will be checked to avoid using unknown properties).
  * `value`: This property must be a string or a number depending on the property type (will be automatically checked to prevent inconsistencies).