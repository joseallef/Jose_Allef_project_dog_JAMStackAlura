import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: flex;
  height: 290px;
  width: 290px;
  margin: 0 auto;
`;


export default function CurrentRace({img}) {
  return (
      <Img
        alt="Pug triste"
        src={img}
      />
    );
  

}
