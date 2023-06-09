import styled from "styled-components";
import { ReactComponent as Danger } from "./danger.svg";
import { Link } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 180px;
  text-align: center;

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

export const Sign = styled(Danger)`
  width: 120px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 30px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 14px;
  }
`;

export const ToHomepageLink = styled(Link)`
  padding: 16px 24px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  color: ${({ theme }) => theme.colors.base};
  background-color: ${({ theme }) => theme.colors.special};
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    filter: brightness(1.3);
  }

  &:active {
    filter: brightness(1.6);
  }
`;
