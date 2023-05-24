import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80px;
`;

export const Logo = styled.img`
  height: 48px;
  width: 220px;
`;

Logo.defaultProps = {
  src: logo,
  alt: "logo",
};

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Item = styled.li`
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 13.5px 24px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.base};

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.base};
    border-radius: 24px;
  }
`;
