import { Arrow, Button, ButtonsBox, Wrapper } from "./pagination.styled";

const Pagination = () => (
  <Wrapper>
    <ButtonsBox>
      <Button><Arrow rotate/>first</Button>
      <Button><Arrow/>previous</Button>
    </ButtonsBox>
	  <span>Page 1 of 500</span>
    <ButtonsBox>
      <Button>next<Arrow/></Button>
      <Button>last<Arrow/></Button>
    </ButtonsBox>
  </Wrapper>
);

export default Pagination;
