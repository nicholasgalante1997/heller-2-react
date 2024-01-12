import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
    title: 'REACT/Components/Alert',
    component: Alert
};

export default meta;

export const Info: StoryObj<typeof Alert> = {
    args: {
        dismissable: false,
        severity: 'info',
        message: {
            heading: 'Join our Discord!',
            body: 'Visit the link attached here to join our discord community. You can receive access to early release tech merchandise.'
        }
    },
    render: (args) => <Alert {...args} />
}

export const Warning: StoryObj<typeof Alert> = {
    args: {
        dismissable: false,
        severity: 'warning',
        message: {
            heading: 'Warning! Beta Feature',
            body: 'This feature is experimental and subject to change with further updates.'
        }
    },
    render: (args) => <Alert {...args} />
}