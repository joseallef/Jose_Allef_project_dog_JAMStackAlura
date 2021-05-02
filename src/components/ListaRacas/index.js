import React from 'react';

export default async function ListaRacas() {

const imagensApiUrl = 'https://api.thedogapi.com/v1/breeds'
const sobreApiUrl = 'https://api.thedogapi.com/v1/'

const resporta = await fetch('https://api.thedogapi.com/v1/breeds')
  .then(async (res) => {
    const novaRes = await res.json();
    return [...novaRes];
  })

  return resporta;

}
