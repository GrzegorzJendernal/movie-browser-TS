import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1368px;
  margin: 56px auto 0;
  padding: 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 48px;
    padding: unset;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 36px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    margin: 14px;
  }
`;

export const PageHeading = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 18px;
  }
`;
