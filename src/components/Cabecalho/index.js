import styled from 'styled-components';

export const Title = styled.header`
  color: #ffa5ae;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  text-align: center;

  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: bold;
`;


export default function Header() {
  return (
    <Title>
      <h1>Seja bem-vindo ao Infocão</h1>
      <p>Clique em um nome e te daremos informações úteis sobre a raça e uma imagem bem bonita.</p>
    </Title>
  );
}
