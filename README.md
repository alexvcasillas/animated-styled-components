### Animated Styled Components

![Animated Styled Components Logotype](https://raw.githubusercontent.com/alexvcasillas/animated-styled-components/master/logotype/animated-styled-components-logo.jpg)

React Animated Styled Components is a work in progress project that aims to make 
ease to use plug and play animated components.

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/kHpsrcebN6AQb2ERfWQbVbeX/alexvcasillas/animated-styled-components'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/kHpsrcebN6AQb2ERfWQbVbeX/alexvcasillas/animated-styled-components.svg' />
</a>

### Installing Animated Styled Components

`npm i animated-styled-components`

### Using the Animated Component

To make use of the **Animated** component all you need is to include the library into your project and create a new component just like you would do with any other react component.

```js
import React, { Component } from 'react';
// Make the import into your react component file
import Animated, { FadeAnimations, RotateAnimations } from 'animated-styled-components';

class Showcase extends Component {
  render() {
    return (
      <div>
        <Animated
          animation={{
            delay_in: 5,
            in: FadeAnimations.FadeInBottom,
            duration_in: 1,
            continuous: RotateAnimations.RotateCenter,
            duration_continuous: 1,
            out: FadeAnimations.FadeOutTop,
            duration_out: 1,
            delay_between: 5
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

At the above example you can see a basic structure of an **Animated Component**. We will dig more into all the props later on this documentation.

### Props

The **Animated Component** doesn't need to be filled with any props, if you don't provide props, it will just simply do nothing, but, to make the magic happen, those props are the following: `animation` and `transitions`.

### Animation Prop

The `animation` prop is an `object` that needs to have the following structure:

```js
animation={{
  delay_in: 5,
  in: FadeAnimations.FadeInBottom,
  duration_in: 1,
  continuous: RotateAnimations.RotateCenter,
  duration_continuous: 1,
  out: FadeAnimations.FadeOutTop,
  duration_out: 1,
  delay_between: 5,
  iteration: 
}}
```

**Deconstructing the `animation` prop**

* `in`: This property receives an animation keyframe that will be used to animate in the component.
* `delay_in`: This property receives and integer and will set the time that the component will take to start being animated. While this time isn't reached, the component will be mounted but will display nothing. If this property is not setted there won't be any delay in for the component to start animating.
* `duration_in`:  This property receives and integer greater than 0 and will set the duration in seconds for the `in` animation.
* `continuous`: This property receives an animation keyframe that will be used to animate between `in` and `out` (if proceed).
* `duration_continuous`: This property receives an integer greater than 0 and will set the duration in seconds for the `continuous` animation.
* `out`: This property receives an animation keyframe that will be used to animate out the component.
* `duration_out`: This property receives and integer greater than 0 and will set the duration in seconds for the `out` animation.
* `delay_between`: This property receives and integer geater or equals to 0 and will set the time that will wait between the `in` and `out` animations.
* `iteration`: This property receives and integer greater than 0 or the **literal** 'infinite' and will set the amount of iterations the animation should be doing until it goes out (if it should).

### Transitions Prop

*NOTE: the validation logic of the transitions are implemented but not the transition logic itself so this will not work yet even if you pass valid data in the prop.*

The `transitions` prop is an `array` of `objects` with the desired transitions that should be handled and needs to have the following structure:

```js
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


### Animations

This component gives you a lot of built-in animations that are well tested and ready to be used.

If you want to use our built-in animations you only need to to the following when importing `animated-styled-components`:

`{ AnimationsType } from 'animated-styled-components';`

Where **AnimationsType** are one of the following avaible grouped animations. Each of this groups have the animations.

#### BounceAnimations

With the following implemented animations:

`BounceInTop`

`BounceOutTop`

`BounceInRight`

`BounceOutRight`

`BounceInBottom`

`BounceOutBottom`

`BounceInLeft`

`BounceOutLeft`

`BounceInForwards`

`BounceOutForwards`

`BounceInBackwards`

`BounceOutBackwards`

---

#### ScaleAnimations

With the following implemented animations:

`ScaleInCenter`

`ScaleOutCenter`

`ScaleInBottomLeft`

`ScaleOutBottomLeft`

`ScaleInVerticalCenter`

`ScaleOutVerticalCenter`

`ScaleInTop`

`ScaleOutTop`

`ScaleInLeft`

`ScaleOutLeft`

`ScaleInVerticalTop`

`ScaleOutVerticalTop`

`ScaleInTopRight`

`ScaleOutTopRight`

`ScaleInTopLeft`

`ScaleOutTopLeft`

`ScaleInVerticalBottom`

`ScaleOutVerticalBottom`

`ScaleInRight`

`ScaleOutRight`

`ScaleInHorizontalCenter`

`ScaleOutHorizontalCenter`

`ScaleInBottomRight`

`ScaleOutBottomRight`

`ScaleInHorizontalLeft`

`ScaleOutHorizontalLeft`

`ScaleInBottom`

`ScaleOutBottom`

`ScaleInHorizontalRight`

`ScaleOutHorizontalRight`

---

#### FadeAnimations

With the following implemented animations:

`FadeIn`

`FadeOut`

`FadeInTop`

`FadeOutTop`

`FadeInBottom`

`FadeOutBottom`

`FadeInLeft`

`FadeOutLeft`

`FadeInRight`

`FadeOutRight`

`FadeInForwards`

`FadeOutForwards`

`FadeInBackwards`

`FadeOutBackwards`

`FadeInBottomLeft`

`FadeOutBottomLeft`

`FadeInBottomRight`

`FadeOutBottomRight`

`FadeInTopLeft`

`FadeOutTopLeft`

`FadeInTopRight`

`FadeOutTopRight`

---

#### RotateAnimations

With the following implemented animations:

`RotateInCenter`

`RotateOutCenter`

`RotateInBottomLeft`

`RotateOutBottomLeft`

`RotateInTop`

`RotateOutTop`

`RotateInLeft`

`RotateOutLeft`

`RotateInTopRight`

`RotateOutTopRight`

`RotateInTopLeft`

`RotateOutTopLeft`

`RotateInRight`

`RotateOutRight`

`RotateInHorizontal`

`RotateOutHorizontal`

`RotateInBottomRight`

`RotateInVertical`

`RotateOutVertical`

`RotateInBottom`

`RotateOutBottom`

`RotateInDiagonal`

`RotateOutDiagonal`

`RotateInDiagonalReverse`

`RotateOutDiagonalReverse`

`RotateIn45Right`

`RotateOut45Right`

`RotateIn45Left`

`RotateOut45Left`

`RotateInForwards`

`RotateOutForwards`

`RotateInBackwards`

`RotateOutBackwards`

---

#### SlideAnimations

With the following implemented animations:

`SlideInTop`

`SlideOutTop`

`SlideInLeft`

`SlideOutLeft`

`SlideInTopRight`

`SlideOutTopRight`

`SlideInTopleft`

`SlideOutTopLeft`

`SlideInRight`

`SlideOutRight`

`SlideInBottomRight`

`SlideOutBottomRight`

`SlideInBottom`

`SlideOutBottom`

`SlideInBottomLeft`

`SlideOutBottomLeft`
