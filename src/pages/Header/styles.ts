import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { FaDiscord } from "react-icons/fa";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #4169E1;
  }
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: rgb(70, 130, 180);
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin: 5px;
`;

export const Rotas = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  a {
    font-size: 25px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 1s;

    :hover {
      color: #00bfff;
      scale: 1.2;
    }
  }
`;

export const Outro = styled.h1`
  color: white;
  margin-right: 20px;
  transition: 1s;
  :hover {
    color: #00bfff;
    scale: 1.1;
  }
`;

export const DiscordIcon = styled(FaDiscord)`
  color: #00bfff;
  margin-bottom: -5px;
`;

export const Discord = styled.a`
  text-decoration: none;
  
`;