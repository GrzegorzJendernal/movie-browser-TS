import styled, { css } from "styled-components";
import {ReactComponent as Vector} from "./vector.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
	justify-content: center;
  gap: 24px;
	margin: 40px auto 0;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
	display: flex;
	gap: 8px;
	justify-content: center;
	align-items: center;
  padding: 8px 16px;
	border: none;
  border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.button};
	text-transform: capitalize;
`;

export const Arrow = styled(Vector)<{ rotate?: boolean }>`
  width: 7px;
	color: ${({ theme }) => theme.colors.special};
	
	${({rotate}) => !!rotate && css`
	transform: rotate(180deg)`};
`;