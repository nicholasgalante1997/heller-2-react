import React from 'react';
import { type BannerProps } from './Banner.types';
import { Conditional } from '../_internal';

const bannerClassNames = {} as const;

function BannerComponent(props: BannerProps) {
  const { message } = props;
  return <div role="banner"></div>;
}

export const Banner = React.memo(BannerComponent);
