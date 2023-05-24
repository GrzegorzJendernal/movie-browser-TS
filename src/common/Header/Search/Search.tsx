import { Input, Label, Loupe } from "./search.styled";

const Search = () => {
  return (
    <Label>
      <Loupe />
      <Input placeholder={"Search for movies..."} />
    </Label>
  );
};

export default Search;
