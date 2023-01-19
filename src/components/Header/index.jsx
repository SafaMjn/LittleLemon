import React from 'react';
import image from '../../assets/restauranfood.jpg';

export default function Header() {
  return (
    <header>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      {/* <img src={image} alt='' /> */}
      <p>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with modern twist.
      </p>
      <button>Reserve a table</button>
    </header>
  );
}
