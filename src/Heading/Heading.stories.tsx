import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'REACT/Components/Typography/Heading',
  component: Heading
};

export default meta;

type HeadingStory = StoryObj<typeof Heading>;

export const H1: HeadingStory = {
  render: (args) => (
    <Heading {...args} as="h1">
      Heading 100
    </Heading>
  )
};

export const H2: HeadingStory = {
  render: (args) => (
    <Heading {...args} as="h2">
      Heading 200
    </Heading>
  )
};

export const H3: HeadingStory = {
  render: (args) => (
    <Heading {...args} as="h3">
      Heading 300
    </Heading>
  )
};

export const H4: HeadingStory = {
  render: (args) => (
    <Heading {...args} as="h4">
      Heading 400
    </Heading>
  )
};

export const H5: HeadingStory = {
  render: (args) => (
    <Heading {...args} as="h5">
      Heading 500
    </Heading>
  )
};

export const H6: HeadingStory = {
  render: (args) => (
    <Heading {...args} as="h6">
      Heading 600
    </Heading>
  )
};
