import React from 'react';
import { type ConditionalProps } from './Conditional.types';

function ConditionalComponent({ children, condition }: ConditionalProps) {
  if (!children || !condition) return false;
  return children;
}

export const Conditional = React.memo(ConditionalComponent);
