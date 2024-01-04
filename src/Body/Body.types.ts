import { HTMLProps } from 'react';
import { HasChildNodes } from '@/types/HasChildren';

type TextHtmlProps = HTMLProps<HTMLSpanElement | HTMLParagraphElement | HTMLLabelElement>;
type InternalBodyTextProps = {
  bold?: boolean;
  italic?: boolean;
  accent?: boolean;
  as: 'p' | 'label' | 'span';
};

export type BodyProps = TextHtmlProps & InternalBodyTextProps & HasChildNodes;
