import React, { Component } from 'react';
import { render } from 'react-dom';

import Animated, { FadeAnimations } from '../../src';

class Demo extends Component {
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

render(<Demo />, document.querySelector('#demo'));
