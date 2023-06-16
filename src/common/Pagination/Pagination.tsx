import { Arrow, Button, ButtonsBox, Text, Wrapper } from "./pagination.styled";

const Pagination = () => (
  <Wrapper>
    <ButtonsBox>
      <Button>
        <Arrow rotate={"true"} />
	      <Arrow rotate={"true"} showOnMobile={"true"}/>
        <Text>first</Text>
      </Button>
      <Button>
        <Arrow rotate={"true"} />
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
	      <Arrow showOnMobile={"true"}/>
        <Text>last</Text>
      </Button>
    </ButtonsBox>
  </Wrapper>
);

export default Pagination;
