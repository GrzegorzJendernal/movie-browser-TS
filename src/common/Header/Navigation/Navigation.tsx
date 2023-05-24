import { Item, List, Logo, Nav, StyledNavLink } from "./navigation.styled";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav>
      <Link to={"/"}>
        <Logo />
      </Link>
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
