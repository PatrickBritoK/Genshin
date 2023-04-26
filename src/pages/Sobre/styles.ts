import styled from "styled-components";

export const Caixa = styled.div`
  width: 1200px;
  height: auto;
  background-color: rgb(70, 130, 180);
  position: absolute;
  margin-top: 250px;
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
