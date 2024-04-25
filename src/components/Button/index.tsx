import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import { WithClassName } from '@types';
import './Button.scss';

import iconSpotify from '../../icons/spotify_button.svg';

const Button = ({ children, className }: WithClassName & PropsWithChildren) => (
  <button className={classNames('Button', className)} type="button">
    {children}
  </button>
);

export const SpotifyButton = () => (
  <Button className="spotify">
    <img height="28" src={iconSpotify} alt="Spotify" />
  </Button>
);

export default Button;
