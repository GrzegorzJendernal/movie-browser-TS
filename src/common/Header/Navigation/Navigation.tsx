import { Item, List, Nav, StyledNavLink } from "./navigation.styled";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <Item>
          <StyledNavLink to={"/movies"}>movies</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={"/people"}>people</StyledNavLink>
        </Item>
      </List>
    </Nav>
  );
};

export default Navigation;
