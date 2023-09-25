import { useEffect } from "react";
import { useReplaceQueryParameter } from "../../utils/queryParameters";
import { useQueryParam } from "../../utils/useQueryParam";
import { Input, Label, Loupe } from "./search.styled";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQueryParam("search");
  const replaceQueryParameter = useReplaceQueryParameter();
  const setQuery = ({ target }: { target: { value: string } }) => {
    if (location.pathname.includes("movies")) {
      navigate({ pathname: "/movies" });
    }
    if (location.pathname.includes("people")) {
      navigate({ pathname: "/people" });
    }
    replaceQueryParameter({
      key: "search",
      value: target.value.trim() !== "" ? target.value : "",
    });
  };

  return (
    <Label>
      <Loupe />
      <Input
        placeholder={`Search for ${location.pathname.includes("movies") ? "movies" : "people"}...`}
        value={query}
        onChange={setQuery}
      />
    </Label>
  );
};

export default Search;
