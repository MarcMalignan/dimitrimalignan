import classnames from 'classnames';
import { PropsWithChildren } from 'react';

import { WithClassName } from '@types';
import './Gallery.scss';

export const Gallery = ({ children, className }: WithClassName & PropsWithChildren) => (
  <div className={classnames('Gallery', className)}>{children}</div>
);

export const GalleryItem = ({ children, className }: WithClassName & PropsWithChildren) => (
  <div className={classnames('Gallery-item', className)}>{children}</div>
);
