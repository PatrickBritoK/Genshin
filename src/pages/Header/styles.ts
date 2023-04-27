import styled from "styled-components";
import { FaDiscord } from "react-icons/fa";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 10vh;
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
  user-select: none;

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

export const Outro = styled.a`
  user-select: none;
  text-decoration: none;
  font-size: 25px;
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
  scale: 1.2;
`;
