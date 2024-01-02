import React, { type HTMLProps } from 'react';
import classNames from 'classnames';
import { type HasChildNodes } from '@/types/HasChildren';

interface InternalButtonProps {
  v?: 'primary' | 'secondary' | 'tertiary' | 'noir';
  size?: 'small' | 'medium' | 'large';
  hover?: {
    animationType: 'raise-elevation' | 'background-transition';
  }
}

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'size' | 'type'> & HasChildNodes & InternalButtonProps;

const buttonVariantClassNameMap = new Map<InternalButtonProps['v'], string>([
  ['primary', 'h-button-primary'],
  ['secondary', 'h-button-secondary'],
  ['tertiary', 'h-button-tertiary'],
  ['noir', 'h-button-noir']
]);

const buttonSizeClassMap = new Map<InternalButtonProps['size'], string>([
  ['small', 'h-button-size-small'],
  ['medium', 'h-button-size-medium'],
  ['large', 'h-button-size-large']
]);

function ButtonComponent({
  children,
  hover,
  v = 'primary',
  size = 'medium',
  className: classNameProp = '',
  ...rest
}: ButtonProps) {
  const buttonDefaultClassName = 'h-button';
  const buttonVClassName = React.useMemo(() => buttonVariantClassNameMap.get(v), [v]);
  const buttonSizeClassName = React.useMemo(() => buttonSizeClassMap.get(size), [size]);
  const buttonHoverClassName = React.useMemo(() => {
    if (hover) {
      if (hover.animationType === 'raise-elevation') {
        return 'hover-raise-elevation-100';
      } else {
        return `h-button-hover-${v}`
      }
    } else { 
      return '';
    }
  }, [hover]);
  const className = React.useMemo(
    () =>
      classNames(
        buttonDefaultClassName,
        buttonSizeClassName,
        buttonVClassName,
        buttonHoverClassName,
        classNameProp
      ),
    [
      buttonVClassName, 
      buttonSizeClassName, 
      classNameProp, 
      buttonHoverClassName
    ]
  );
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export const Button = React.memo(ButtonComponent);
