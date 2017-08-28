import React, { Component } from 'react';
import { render } from 'react-dom';

import Animated, { FadeAnimations } from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <Animated animation={FadeAnimations.FadeInBottom}>
          This is an animated component
        </Animated>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
