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
`;