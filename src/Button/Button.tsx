import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './Button.types';

const buttonVariantClassNameMap = new Map<ButtonProps['v'], string>([
  ['primary', 'h-button-primary'],
  ['secondary', 'h-button-secondary'],
  ['tertiary', 'h-button-tertiary'],
  ['noir', 'h-button-noir']
]);

const buttonSizeClassMap = new Map<ButtonProps['size'], string>([
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
        return `h-button-hover-${v}`;
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
    [buttonVClassName, buttonSizeClassName, classNameProp, buttonHoverClassName]
  );
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

export const Button = React.memo(ButtonComponent);
