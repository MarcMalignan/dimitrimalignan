import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import { WithClassName } from '@types';
import SpotifyIcon from '../Icons/SpotifyIcon';
import './Button.scss';

const Button = ({ children, className }: WithClassName & PropsWithChildren) => (
  <button className={classNames('Button', className)} type="button">
    {children}
  </button>
);

export const SpotifyButton = () => (
  <Button className="spotify">
    <SpotifyIcon height="24" />
  </Button>
);

export default Button;
