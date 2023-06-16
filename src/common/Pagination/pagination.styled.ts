import styled, { css } from "styled-components";
import { ReactComponent as Vector } from "./vector.svg";

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
	
	&:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
	}
`;

export const Arrow = styled(Vector)<{ rotate?: "true"; showOnMobile?: "true" }>`
  width: 7px;
  color: ${({ theme }) => theme.colors.special};
  ${({ rotate }) =>
    !!rotate &&
    css`
      transform: rotate(180deg);
    `};
  ${({ showOnMobile }) =>
    !!showOnMobile &&
    css`
      display: none;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: flex;
      }
    `};
	${Button}:disabled & {
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

export const Text = styled.span`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
