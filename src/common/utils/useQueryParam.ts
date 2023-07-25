import { useEffect, useState } from "react";
import { useQueryParameter } from "./queryParameters";

export const useQueryParam = (key: string) => {
  const queryParameter = useQueryParameter(key);
  const [paramValue, setParamValue] = useState("");

  useEffect(() => {
    if (!queryParameter) return setParamValue("");
    setParamValue(queryParameter);
  }, [queryParameter]);

  return paramValue;
};
