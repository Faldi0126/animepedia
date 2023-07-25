import React from 'react';
import styled from '@emotion/styled';

// Define a type for the component props
type CircleProps = {
  size?: number; // The size of the circle in pixels (default: 50)
  color?: string; // The color of the circle (default: blue)
  speed?: number; // The duration of one spin in seconds (default: 2)
};

const Circle = styled.div<CircleProps>`
  width: ${(props) => props.size || 50}px;
  height: ${(props) => props.size || 50}px;
  border-radius: 50%;
  background: ${(props) => props.color || 'blue'};
  animation: spin ${(props) => props.speed || 2}s infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function CirclingAnimation({ size, color, speed }: CircleProps) {
  return <Circle size={size} color={color} speed={speed} />;
}

export default CirclingAnimation;
