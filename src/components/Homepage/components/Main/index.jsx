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
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      image: Bruschetta,
      title: 'Bruchetta',
      price: '$5.99',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
      image: LemonDesert,
      title: 'Lemon Desert',
      price: '$5.00',
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
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
