import styled from "styled-components";
import { ReactComponent as Picture } from "./picture.svg";

export const StyledPicture = styled(Picture)`
  display: block;
  width: 668px;
  height: auto;
  margin: 40px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 200px;
  }
`;
