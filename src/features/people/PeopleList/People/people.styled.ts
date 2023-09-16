import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 18px;
    grid-gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 16px;
    grid-gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 12px;
    grid-gap: 16px;
  }
`;
