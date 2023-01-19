import React from 'react';
import * as Styled from 'components/Homepage/styled';
import Bruschetta from 'assets/bruchetta.svg';
import GreekSalad from 'assets/greeksalad.jpg';
import LemonDesert from 'assets/lemondesert.jpg';
import Specials from './Specials';

export default function Main() {
  const specials = [
    {
      image: GreekSalad,
      title: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad',
    },
    {
      image: Bruschetta,
      title: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruschetta',
    },
    {
      image: LemonDesert,
      title: 'Lemon Desert',
      price: '$5.00',
      description: 'This comes',
    },
  ];
  return (
    <Styled.MainContainer>
      <Styled.Headline>
        <h1>This week's specials!</h1>
        <button>Online Menu</button>
      </Styled.Headline>
      <Styled.Specials>
        {specials.map((special, index) => (
          <Specials
            key={index}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </Styled.Specials>
    </Styled.MainContainer>
  );
}
