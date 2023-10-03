import { NavLink, Link } from 'react-router-dom';
import { RouterPath } from '../../router/router';
import './Header.scss';
import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header className="header">
      <Link to={RouterPath.main}>
        <img src={logo} alt="The Wonderful World" className="logo" />
      </Link>
      <nav className="menu">
        <NavLink to={RouterPath.catalog}>Catalog</NavLink>
        <NavLink to={RouterPath.about}>About us</NavLink>
        <NavLink to={RouterPath.basket}>Basket</NavLink>
        <NavLink to={RouterPath.profile}>Profile</NavLink>
      </nav>
      <div className="menu-autorization">
        <NavLink to={RouterPath.login}>Log in</NavLink>
        <NavLink to={RouterPath.registration}>Registration</NavLink>
        <button>Log out</button>
      </div>
    </header>
  );
};
