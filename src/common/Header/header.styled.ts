import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 94px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
	  gap: 24px;
	  padding: 16px;
  }
`;
