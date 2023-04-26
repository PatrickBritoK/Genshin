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

export const Titulo = styled.h1`
    color: yellow;
`;

export const Caixa = styled.div`
  width: 1200px;
  height: auto;
  background-color: rgb(70,130,180);
  position: absolute;
  margin-top: 250px;
  margin-left: 200px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;