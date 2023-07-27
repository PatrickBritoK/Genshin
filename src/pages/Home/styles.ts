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
  margin-left: 150px;
  margin-right: 150px;
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
  height: 150px;
  border-radius: 20px;
  transition: 0.4s;
  cursor: pointer;
  background-color: ${(props) => props.color};

  :hover {
    scale: 1.05;
    box-shadow: 0px 10px 12px -4px ${(props) => props.shadowColor};
  }

  @media (max-width: 1190px) {
    width: 130px;
    height: 130px;
  }

  @media (max-width: 1010px) {
    width: 110px;
    height: 110px;
  }

  @media (max-width: 900px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

export const Personagem = styled.img`
  width: 86px;

  @media (max-width: 1190px) {
    max-width: 66px;
  }
`;

export const Alinhamento = styled.p`
  text-align: center;
`;

export const Text = styled.p`
  font-size: 18px;
  color: white;
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;
