import { Link, useLocation } from 'react-router-dom';

import Nav from '../Nav';
import './Header.scss';

const Header = () => {
  const { search } = useLocation();

  const link = {
    pathname: '/',
    search,
  };

  return (
    <header className="Header">
      <div className="Header-logo">
        <Link to={link}>Dimitri Malignan</Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
