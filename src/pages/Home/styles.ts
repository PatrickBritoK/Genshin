import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Caixa = styled.div`
  width: 75vw;
  height: auto;
  background-color: #6a5acd;
  margin-top: 100px;
  margin-left: 23vh;
  margin-right: 23vw;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 15px;
  text-align: center;
  justify-content: center;
  flex: 1;
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

export const Pesquisar = styled.input`
  color: white;
  width: 250px;
  height: 30px;
  font-size: 15px;
  background-color: #4169e1;
  border: none;
  border-radius: 10px;
  padding-left: 15px;
  outline: 0;

  ::placeholder {
    color: white;
  }
`;

export const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 10px;
`;

export interface Props {
  shadowColor?: string;
}

export const Card = styled.div<Props>`
  width: 12vw;
  height: 12vw;
  border-radius: 20px;
  transition: 0.4s;
  cursor: pointer;
  background-color: ${(props) => props.color};
  margin-top: 15px;
  margin-bottom: 25px;

  :hover {
    scale: 1.05;
    box-shadow: 0px 10px 12px -4px ${(props) => props.shadowColor};
  }
`;

export const Personagem = styled.img`
  width: 95px;
`;

export const Alinhamento = styled.p`
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.5vw;
  color: white;
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;
