import React, { memo } from 'react';
import { type AlertProps } from './Alert.types';

import { Body } from '../Body';
import { Heading } from '../Heading';
import { Conditional } from '../_internal/Conditional';

const alertClassNames = {
  root: 'h-alert',
  body: 'h-alert-body-content'
} as const;

function AlertComponent(props: AlertProps) {
  const { message, severity, dismissable = false, onDismiss } = props;
  return (
    <div className={alertClassNames.root} role="alert">
      <span data-severity={severity} />
      <div className={alertClassNames.body}>
        <Heading as="h6" data-severity={severity}>{message.heading}</Heading>
        <Body as="p" accent bold>{message.body}</Body>
      </div>
      <Conditional condition={dismissable}>
        <span role="button" onClick={onDismiss}>
          {/* Close Icon */}
        </span>
      </Conditional>
    </div>
  );
}

export const Alert = memo(AlertComponent);
