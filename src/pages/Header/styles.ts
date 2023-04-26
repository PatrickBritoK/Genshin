import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: crimson;
`;

export const Logo = styled.img`
  width: 120px;
  height: 70px;
  position: absolute;
  margin: 5px;
`;

export const Rotas = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-top: 30px;

  a {
    font-size: 25px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 1s;

    :hover {
      color: #00d38c;
      scale: 1.2;
    }
  }
`;

export const Cadastro = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

export const Botao = styled.button`
  width: 90px;
  height: 25px;
  background-color: white !important;
  border: none;
  border-radius: 10px;
  position: relative;
  bottom: 25px;
  right: 25px;
  transition: 0.7s;

  :hover {
    background-color: #00d38c !important;
  }
`;
