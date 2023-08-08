import styled from "styled-components";
import { PictureProps } from "../../../common/types/styledProps";

export const Backdrop = styled.div`
  width: 100%;
  height: 769px;
  background-color: ${({ theme }) => theme.colors.backdrop};

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    height: unset;
  }
`;

export const Poster = styled.div<PictureProps>`
  margin: 0 auto;
  width: 1368px;
  height: 100%;
  background-position: center;
  background-size: 100%, contain;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  box-shadow: rgb(0, 0, 0) 0px 0px 75px 75px inset;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    aspect-ratio: 1.78;
    width: auto;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    box-shadow: rgb(0, 0, 0) 0px 0px 30px 30px inset;
  }
`;
