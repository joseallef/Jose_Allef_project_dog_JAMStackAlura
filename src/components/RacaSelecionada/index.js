import React from 'react'
import styled from 'styled-components';
import RacaAtual from '../RacaAtual';

export default async function RacaSelecionada(dog){

  const resporta = await fetch('https://api.thedogapi.com/v1/breeds')
  .then(async (res) => {
    const novaRes = await res.json();
    return [...novaRes];
  });

  const dogSelect = resporta.filter(about => about.name === dog);
  const objDog = {
    name: dogSelect[0].name,
    life: dogSelect[0].life_span,
    img: dogSelect[0].image.url,
  }
  return objDog;
}
