import React from 'react';
import logo from 'assets/logo.svg';
import { NavLink } from 'react-router-dom';
import * as Routes from 'core/Routes';

export default function Nav() {
  return (
    <nav>
      <ul>
        <img src={logo} alt='Svg logo' />
        <li>
          <NavLink to={Routes.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink to={Routes.ABOUT}>About</NavLink>
        </li>
        <li>
          <NavLink to={Routes.MENU}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={Routes.RESERVATIONS}>Reservations</NavLink>
        </li>
        <li>
          <NavLink to={Routes.RESERVATIONS}>Order Online</NavLink>
        </li>
        <li>
          <NavLink to={Routes.LOGIN}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
