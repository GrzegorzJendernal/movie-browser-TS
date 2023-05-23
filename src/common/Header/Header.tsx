import { Container, Logo } from "./header.styled";
import Navigation from "./Navigation/Navigation";
import { Link } from "react-router-dom";
import Search from "./Search/Search";

const Header = () => (
  <Container>
    <Link to={"/"}>
      <Logo />
    </Link>
    <Navigation />
	  <Search/>
  </Container>
);

export default Header;
