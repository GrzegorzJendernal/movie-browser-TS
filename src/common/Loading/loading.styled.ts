import { ReactComponent as IconSpinner } from "./iconSpinner.svg";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(IconSpinner)`
  width: 91px;
  height: auto;
  animation: ${rotation} 1.5s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 66px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 35px;
  }
`;

export const SpinnerBox = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    margin-top: 24px;
  }
`;
