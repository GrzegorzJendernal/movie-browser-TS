import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  margin: 56px auto;
	padding: 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 48px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin: 36px;
	  padding: 0 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
		margin: 24px;
  }
`;

export const Heading = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 18px  ;
  }
`;
