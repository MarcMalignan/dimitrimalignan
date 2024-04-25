import classnames from 'classnames';
import { PropsWithChildren } from 'react';

import { WithClassName } from '@types';
import './Gallery.scss';

interface GalleryProps {
  large?: boolean;
}

export const Gallery = ({ children, className, large }: GalleryProps & WithClassName & PropsWithChildren) => (
  <div className={classnames('Gallery', { large }, className)}>{children}</div>
);

export const GalleryItem = ({ children, className }: WithClassName & PropsWithChildren) => (
  <div className={classnames('Gallery-item', className)}>{children}</div>
);
