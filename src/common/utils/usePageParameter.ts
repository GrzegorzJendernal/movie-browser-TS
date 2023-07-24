import { useEffect, useState } from "react";
import { useQueryParameter } from "./queryParameters";

export const usePageParameter = () => {
  const queryParameter = useQueryParameter("page");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!queryParameter) return setPage(1);
    setPage(+queryParameter);
  }, [queryParameter]);

  return page;
};
