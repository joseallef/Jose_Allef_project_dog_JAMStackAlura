import React from 'react';
import { WrapperContainer } from '../src/components/wrappers';
import ListaRacas from '../src/components/ListaRacas';
import Header from '../src/components/Cabecalho';
import { Main, Button, State, InfoDog, Section } from '../src/components/Main';
import RacaSelecionada from '../src/components/RacaSelecionada';
import CurrentRace from '../src/components/RacaAtual'; 

const dogState = {
  DEFAULT: 'DEFAULT',
  DONE: 'DONE',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
}

export default function Home({ resporta }) {
  const [state, setState] = React.useState(dogState.DEFAULT);
  const [currentDog, setCurrentDog] = React.useState({
    alt: 'Pug triste',
    img: 'https://www.oversodoinverso.com.br/wp-content/uploads/2015/05/pugs-tristes-2.jpg',
    life: '',
    name: '',
  });
  return (
    <WrapperContainer>
      <Header />
      <Main>
        <State>
          {state === 'DEFAULT' && (
            <span>Você ainda não selecionou nenhum cachorro :(</span>          
          )}
          {state === 'DONE' && (
            <span>A imagem sempre será diferente, pode clicar quantas vezes quiser!</span>
          )}
          {state === 'ERROR' && (
            <span>Ooops algo deu errado:(</span>
          )}
          {state === 'LOADING' && (
            <span>Carregando...</span>
          )}
        </State>
        <InfoDog>
          <h2>{currentDog.name}</h2>
          <span>Tempo de vida:{currentDog.life}</span>
          <CurrentRace 
            name={currentDog.name}
            life={currentDog.life}
            img={currentDog.img}
            alt={currentDog.alt}
          />
        </InfoDog>
        <Section>
          {resporta.map((dog) => (
            <li key={dog.id}>
              <Button onClick={(event) =>{
                const dogSelected = event.target.outerText;
                RacaSelecionada(dogSelected).then(res => setCurrentDog(res));
                setState(dogState.DONE);
              }}>
                {dog.name}
                {/* <img src={dog.image.url} alt="Imagem cão" /> */}
              </Button>
            </li>
          ))}
        </Section>
      </Main>
    </WrapperContainer>
  );
}


export async function getStaticProps() {
  const resporta = await ListaRacas();
  return {
    props: {
      resporta,
    },
  }
}
