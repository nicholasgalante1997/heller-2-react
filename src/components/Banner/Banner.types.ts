import { type HellerCompositeColor } from '@/types';

export interface BannerProps {
  background?: HellerCompositeColor;
  icon?: string;
  message: string;
  bold?: boolean;
  italic?: boolean;
  asLink?: {
    href: string;
    target?: string;
  };
  truncate?: boolean;
}
