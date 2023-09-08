import { useQuery } from "@tanstack/react-query";
import { getMovieList, getMoviesByQuery } from "../../../common/api/apiRequests.ts";
import Loading from "../../../common/Loading/Loading.tsx";
import ErrorPage from "../../../common/ErrorPage/ErrorPage.tsx";
import { useQueryParam } from "../../../common/utils/useQueryParam.ts";
import Movies from "./Movies/Movies.tsx";

const MovieList = () => {
  const pageParam = useQueryParam("page");
  const page = pageParam === "" ? 1 : +pageParam;
  const query = useQueryParam("search");
  const { isLoading, isError } = useQuery(["movies", page, query], () =>
    query === "" ? getMovieList(page) : getMoviesByQuery(page, query),
  );

  if (isLoading) return <Loading />;

  if (isError) return <ErrorPage />;

  return <Movies />;
};

export default MovieList;
