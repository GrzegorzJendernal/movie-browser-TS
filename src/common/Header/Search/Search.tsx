import { useReplaceQueryParameter } from "../../utils/queryParameters";
import { useQueryParam } from "../../utils/useQueryParam";
import { Input, Label, Loupe } from "./search.styled";

const Search = () => {
  const query = useQueryParam("search");
  const replaceQueryParameter = useReplaceQueryParameter();
  const setQuery = ({ target }: { target: { value: string } }) => {
    replaceQueryParameter({
      key: "search",
      value: target.value.trim(),
    });
  };
  return (
    <Label>
      <Loupe />
      <Input placeholder={"Search for movies..."} value={query} onChange={setQuery} />
    </Label>
  );
};

export default Search;
