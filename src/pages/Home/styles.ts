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
  width: 500px;
  height: 500px;
  background-color: blue;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  border-radius: 20px;
`;

export const Container = styled.p`
  color: blue;
`;
