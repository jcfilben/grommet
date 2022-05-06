import * as React from 'react';
import {
  A11yTitleType,
  AlignSelfType,
  GridAreaType,
  MarginType,
} from '../../utils';

import { GridProps } from '../Grid';
export interface PageHeaderProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  children?: React.ReactNode;
  gridArea?: GridAreaType;
  margin?: MarginType;
  actions?: JSX.Element;
  gridProps?: GridProps;
  parent?: JSX.Element;
  subtitle?: string | JSX.Element;
  title?: string | JSX.Element;
}

declare const PageHeader: React.FC<PageHeaderProps>;
export type PageHeaderType = PageHeaderProps;

export { PageHeader };
