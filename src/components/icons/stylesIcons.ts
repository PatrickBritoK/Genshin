import styled from "styled-components";

type Props = {
  color: string;
};

export const Icon = styled.img<Props>`
  width: 32px;
  transition: 0.5s;
  border-radius: 50%;

  :hover {
    scale: 1.5;
    box-shadow: 0 0 15px ${(props) => props.color};
  }

  @media (max-width: 900px) {
    width: 25px;
    :hover {
      scale: 1.3;
    }
  }
`;