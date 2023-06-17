import { Arrow, Button, ButtonsBox, Text, Wrapper } from "./pagination.styled";

const Pagination = () => (
  <Wrapper>
    <ButtonsBox>
      <Button>
        <Arrow rotate />
        <Arrow rotate mobile />
        <Text>first</Text>
      </Button>
      <Button>
        <Arrow rotate />
        <Text>previous</Text>
      </Button>
    </ButtonsBox>
    <span>Page 1 of 500</span>
    <ButtonsBox>
      <Button>
        <Arrow />
        <Text>next</Text>
      </Button>
      <Button>
        <Arrow />
        <Arrow mobile />
        <Text>last</Text>
      </Button>
    </ButtonsBox>
  </Wrapper>
);

export default Pagination;
