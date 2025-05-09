import styled from "styled-components";
import { Inter } from "./font-family";
import { myBlack,myGreen,myGray } from "../colors";

const BaseFont = styled.span`
  font-family: ${Inter}, serif;

`;

export const ImgContainerText = styled.p`
  font-family: ${Inter}, serif;
  color: ${myBlack};
  font-weight: 600;
  font-size: 14px;
`;

export const FatInter20 = styled(BaseFont)`
  color: ${myBlack};
  font-weight: 600;
  font-size: 20px;
`;

export const FatInerGreen20 = styled(BaseFont)`
  font-weight: 600;
  font-size: 20px;
  color:${myGreen};
`;

export const Description = styled(BaseFont)`
  font-weight: 400;
  font-size: 16px;
  color:${myGray};
`;

export const OrderText = styled(Description)`
   color:${myBlack};

`

export const SubtitleSmall = styled(BaseFont)`
  color: ${myBlack};
  font-weight:500;
  font-size:20px;
`;