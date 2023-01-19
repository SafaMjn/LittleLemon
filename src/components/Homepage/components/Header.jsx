import React from 'react';
import image from 'assets/restauranfood.jpg';
import * as Styled from '../styled';

export function Chicago() {
  return (
    <Styled.Content>
      <Styled.Title>Little Lemon</Styled.Title>
      <Styled.Subtitle>Chicago</Styled.Subtitle>
      <p>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with modern twist.
      </p>
      <Styled.Button>Reserve a table</Styled.Button>
    </Styled.Content>
  );
}
export default function Header() {
  return (
    <Styled.HeaderContainer>
      <Chicago />
      <img src={image} alt='' />
    </Styled.HeaderContainer>
  );
}
