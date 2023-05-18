import styled from "styled-components";
import logo from "./logo.svg";

export const Container = styled.div`
  width: 100%;
  height: 94px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.img`
  height: 48px;
  width: 220px;
	margin: 23px 80px 23px 293px;
`;

Logo.defaultProps = {
	src: logo,
};
