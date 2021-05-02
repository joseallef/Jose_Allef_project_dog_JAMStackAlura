import styled from 'styled-components';
import theme from '../../theme';

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;  
  list-style: none;
  text-align: center;

`;

export const State = styled.p`
  display: inline-block;
  width: 100%;
  padding: 10px;
  background-color: ${theme.colors.background.light.color};
  color: #ffa5ae;
  font-weight: bold;  
  box-shadow: 0 0 8px rgb(255 215 223 / 50%);

`;

export const InfoDog = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 4px solid #ffa5ae;
  border-radius: 5px;
  text-align: center;
  background-color: #ffa5ae;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  display: flex;
  float: left;
  background-color: #ffa5ae;
  border: 2px solid #ffd7df;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  flex-grow: 1;
  margin: 10px;
  padding: 15px;
  text-align: center;
  font-size: 18px;

  &:hover {
    background-color: #ffd7df;
    color: #ffa5ae;
  }
`;

export const Section = styled.section`
  display: block;
  width: 100%;

`;
