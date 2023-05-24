import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 94px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: space-evenly;
`;
