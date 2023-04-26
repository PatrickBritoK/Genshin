import styled from "styled-components";

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
  background-color: #00bfff;
`;

export const TextCard = styled.p`
  color: white;
  text-align: center;
`;
