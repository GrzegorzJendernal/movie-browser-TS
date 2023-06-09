import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as logo } from "./logo.svg";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    gap: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    gap: 10px;
  }
`;

export const Logo = styled(logo)`
  height: 48px;
  width: 220px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 180px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 150px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    width: 120px;
    height: auto;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    gap: 10px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    padding: 8px 12px;
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.base};
    border-radius: 24px;
  }
`;
