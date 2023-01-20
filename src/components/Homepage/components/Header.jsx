import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RESERVATIONS } from 'core/Routes';
import image from 'assets/restauranfood.jpg';
import * as Styled from '../styled';

export function Chicago() {
  const navigate = useNavigate();
  return (
    <Styled.Content>
      <Styled.Title>Little Lemon</Styled.Title>
      <Styled.Subtitle>Chicago</Styled.Subtitle>
      <p>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with modern twist.
      </p>
      <button onClick={() => navigate(RESERVATIONS)}>Reserve a table</button>
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
