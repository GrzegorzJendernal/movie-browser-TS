import styled from "styled-components";
import loupe from "./loupe.svg";

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 438px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.base};
  border: 1px solid ${({ theme }) => theme.colors.disabled};
  border-radius: 33px;
`;

export const Input = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  border: none;
  outline: none;
  margin: 10px;
`;

export const Loupe = styled.img`
  width: 24px;
  height: auto;
  margin: 12px 16px 12px 24px;
`;

Loupe.defaultProps = {
  src: loupe,
  alt: "loupe",
};
