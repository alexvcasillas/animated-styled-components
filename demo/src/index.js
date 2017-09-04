import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import Animated, { FadeAnimations, RotateAnimations } from '../../src';

const Card = styled.div`
  min-width: 250px;
  max-width: 300px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: #495057;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.div`
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  margin-bottom: 20px;
`;

const Content = styled.div``;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Action = styled.button`
  cursor: pointer;
  outline: none;
  border: 0;
  padding: 10px 20px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  }
`;

const CancelAction = styled(Action)`
  background-image: linear-gradient(to top left, #f78ca0 0%, #fe9a8b 100%);
  color: #ffffff;
`;

const AcceptAccion = styled(Action)`
  background-image: linear-gradient(to top left, #4facfe 0%, #00f2fe 100%);
  color: #ffffff;
`;

class Demo extends Component {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#f1f3f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Animated
          animation={{
            in: FadeAnimations.FadeInBackwards,
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
          <Card>
            <Title>Animated Styled Components</Title>
            <Content>
              React Animated Styled Components is a work in progress project
              that aims to make ease to use plug and play animated components.
            </Content>
            <Actions>
              <CancelAction>Nope</CancelAction>
              <AcceptAccion>Ok, got it!</AcceptAccion>
            </Actions>
          </Card>
        </Animated>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
