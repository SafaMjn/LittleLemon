import React from 'react';
import logo from '../../assets/logo.svg';

export default function Nav() {
  return (
    <nav>
      <ul>
        <img src={logo} alt='Svg logo' />
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Menu</a>
        </li>
        <li>
          <a href='#'>Reservations</a>
        </li>
        <li>
          <a href='#'>Order Online</a>
        </li>
        <li>
          <a href='#'>Login</a>
        </li>
      </ul>
    </nav>
  );
}
