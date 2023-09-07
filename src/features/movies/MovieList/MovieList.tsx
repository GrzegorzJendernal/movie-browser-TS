import { useQuery } from "@tanstack/react-query";
import { getMovieList, getMoviesByQuery } from "../../../common/api/apiRequests.ts";
import Loading from "../../../common/Loading/Loading.tsx";
import ErrorPage from "../../../common/ErrorPage/ErrorPage.tsx";
import NoResults from "../../../common/NoResults/NoResults.tsx";
import { useQueryParam } from "../../../common/utils/useQueryParam.ts";
import Movies from "./Movies/Movies.tsx";

const MovieList = () => {
  const pageParam = useQueryParam("page");
  const page = pageParam === "" ? 1 : +pageParam;
  const query = useQueryParam("search");
  const { isLoading, data } = useQuery(["movies", page, query], () =>
    query === "" ? getMovieList(page) : getMoviesByQuery(page, query),
  );

  if (isLoading) return <Loading />;

  if (data) return data.total_results === 0 ? <NoResults query={query} /> : <Movies />;

  return <ErrorPage />;
};

export default MovieList;
