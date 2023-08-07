import styled from "styled-components";
import { PictureProps } from "../../../common/types/styledProps";

export const Backdrop = styled.div`
  width: 100%;
  height: 769px;
  background-color: ${({ theme }) => theme.colors.backdrop};
`;

export const Poster = styled.div<PictureProps>`
  margin: 0 200px;
  height: 100%;
  background-position: center;
  background-size: 100%, contain;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  box-shadow: rgb(0, 0, 0) 0px 0px 75px 75px inset;
`;
