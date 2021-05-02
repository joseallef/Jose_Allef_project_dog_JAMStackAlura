import React from 'react';
import styled from 'styled-components';

const ImgStart = styled.div`
  display: block;
  margin: auto;

`;

const Img = styled.img`
  display: block;
  height: 150px;
  margin: 0 auto;
`;

export default function RacaNaoSelecionada(){
  return (
    <ImgStart>
      <Img
        alt="Pug triste"
        src="https://www.oversodoinverso.com.br/wp-content/uploads/2015/05/pugs-tristes-2.jpg"
      />
    </ImgStart>
  );
}
