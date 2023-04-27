import styled from "styled-components";

export const Caixa = styled.div`
  width: 1200px;
  height: 1000px;
  background-color: rgb(70, 130, 180);
  position: absolute;
  margin-top: 1200px;
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
  margin-top: 16px;
`;

export const Card = styled.div`
  width: 250px;
  height: 250px;
  background-color: #4169e1;
  border-radius: 20px;
  transition: 0.5s;
  flex-direction: column;
  
  :hover {
    box-shadow: 0px 10px 12px -4px rgba(0,0,0,0.75);
  }
`;

export const TextCard = styled.p`
  color: white;
  text-align: center;
`;

export const Text = styled.p`
  color: white;
  text-align: center;
`;