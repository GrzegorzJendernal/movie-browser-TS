import styled, { css } from "styled-components";
import { ReactComponent as Vector } from "./vector.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: 40px auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap:8px;
    margin: 32px auto 0;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap:8px;
  }
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
	cursor: pointer;
	
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 4px;
	  padding: 8px 12px;
  }
	
	&:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
		cursor: auto;
	}
`;

interface ArrowProps {
	rotate?: boolean;
	mobile?: boolean;
}
export const Arrow = styled(Vector).attrs(({rotate, mobile}: ArrowProps) => ({
	rotate: rotate ? "true" : undefined,
	mobile: mobile ? "true" : undefined,
}))<ArrowProps>`
  width: 7px;
  color: ${({ theme }) => theme.colors.special};
  ${({ rotate }) =>
    !!rotate &&
    css`
      transform: rotate(180deg);
    `};
  ${({ mobile }) =>
    !!mobile &&
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
