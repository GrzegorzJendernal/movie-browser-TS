import { Container } from "./header.styled";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";

const Header = () => (
  <Container>
    <Navigation />
    <Search />
  </Container>
);

export default Header;
