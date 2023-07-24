import { useEffect, useState } from "react";
import { useQueryParameter } from "./queryParameters";

export const useSearchParameter = () => {
  const queryParameter = useQueryParameter("search");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!queryParameter) return setQuery("");
    setQuery(queryParameter);
  }, [queryParameter]);

  return query;
};
