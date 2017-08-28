import React, { Component } from 'react';
import { render } from 'react-dom';

import Animated, { SlideAnimations } from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <Animated animation={SlideAnimations.SlideTop}>
          This is an animated component
        </Animated>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
