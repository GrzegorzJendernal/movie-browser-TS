import { Container, Logo } from "./header.styled";
import Navigation from "./Navigation/Navigation";
import { Link } from "react-router-dom";

const Header = () => (
  <Container>
    <Link to={"/"}>
      <Logo />
    </Link>
    <Navigation />
  </Container>
);

export default Header;
