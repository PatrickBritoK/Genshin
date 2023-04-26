import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Caixa = styled.div`
  width: 1200px;
  height: auto;
  background-color: rgb(70, 130, 180);
  position: absolute;
  margin-top: 550px;
  margin-left: 200px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Titulo = styled.h1`
  user-select: none;
  color: white;
  cursor: pointer;
  transition: 1s;
  font-weight: 700;

  :hover {
    color: #00bfff;
  }
`;

export const Textos = styled.p`
  color: white;
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;

export const Cards = styled.div`
  display: flex;
  gap: 20px;
  
`;

export const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: #00BFFF;
`;

export const TextCard = styled.p`
  color: white;
`;