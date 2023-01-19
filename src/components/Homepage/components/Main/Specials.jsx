import React from 'react';
import * as Styled from 'components/Homepage/styled';

export default function Specials({ image, title, description, price }) {
  return (
    <Styled.Section>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h6>{price}</h6>
      </div>
      <p>{description}</p>
      <a href='#'>Order a delivery</a>
    </Styled.Section>
  );
}
