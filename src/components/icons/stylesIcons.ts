import styled from "styled-components";
import { GiFrostfire, GiLaserSparks, GiSpotedFlower,GiChanterelles } from "react-icons/gi";

export const IconFire = styled(GiFrostfire)`
  scale: 1.5;

  @media (max-width:1100px) {
    scale: 1.1;
  }
`;

export const IconSparks = styled(GiLaserSparks)`
  scale: 1.5;
  @media (max-width:1100px) {
    scale: 1.1;
  }
`;

export const IconFlower = styled(GiSpotedFlower)`
  scale: 1.5;
  @media (max-width:1100px) {
    scale: 1.1;
  }
`;

export const IconChanterelles = styled(GiChanterelles)`
  scale: 1.5;
  @media (max-width:1100px) {
    scale: 1.1;
  }
`;