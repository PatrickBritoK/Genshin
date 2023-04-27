import styled from "styled-components";

export const Caixa = styled.div`
  max-width: 1200px;
  height: auto;
  background-color: rgb(70, 130, 180);
  position: absolute;
  margin-top: 700px;
  margin-left: 200px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 15px;

  @media (max-width: 1400px) {
    max-width: 1200px;
    margin-left: 135px;
  }

  @media (max-width: 1390px) {
    max-width: 1100px;
    margin-left: 135px;
  }

  @media (max-width: 1308px) {
    max-width: 1100px;
    margin-left: 100px;
  }

  @media (max-width: 1250px) {
    max-width: 1100px;
    margin-left: 70px;
  }

  @media (max-width: 1190px) {
    max-width: 1000px;
    margin-left: 70px;
  }

  @media (max-width: 1100px) {
    max-width: 900px;
    margin-left: 70px;
  }

  @media (max-width: 1010px) {
    max-width: 800px;
  }

  @media (max-width: 900px) {
    max-width: 700px;
  }

  @media (max-width: 830px) {
    max-width: 650px;
  }

  @media (max-width: 765px) {
    max-width: 600px;
    margin-top: 900px;
  }

  @media (max-width: 730px) {
    max-width: 550px;
  }

  @media (max-width: 690px) {
    max-width: 500px;
  }

  @media (max-width: 630px) {
    max-width: 450px;
  }

  @media (max-width: 590px) {
    max-width: 450px;
    margin-top: 900px;
  }
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

  @media (max-width: 765px) {
    font-size: 26px;
  }
`;

export const Textos = styled.p`
  color: white;
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;

  @media (max-width: 765px) {
    font-size: 16px;
  }
`;

export const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  width: 150px;
  height: 150px;
  background-color: #4169e1;
  border-radius: 20px;
  transition: 0.5s;

  :hover {
    box-shadow: 0px 10px 12px -4px rgba(0, 0, 0, 0.75);
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

export const TextCard = styled.p`
  color: white;
  text-align: center;
`;

export const Text = styled.p`
  color: white;
  text-align: center;
`;
