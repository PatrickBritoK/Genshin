import styled from "styled-components";

type Props = {
  color: string;
};

export const Icon = styled.img<Props>`
  width: 32px;
  transition: 0.4s;
  border-radius: 50%;
  background-color: #6a5acd;

  :hover {
    scale: 1.5;
    box-shadow: 0 0 15px ${(props) => props.color};
  }
`;
