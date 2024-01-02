import React from 'react';
import { type HasChildNodes } from '@/types/HasChildren';

interface InternalButtonProps {
  v?: 'primary' | 'secondary' | 'tertiary' | 'noir';
  size?: 'small' | 'medium' | 'large';
  hover?: {
    animationType: 'raise-elevation' | 'background-transition';
  }
}

export type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type'> & HasChildNodes & InternalButtonProps;