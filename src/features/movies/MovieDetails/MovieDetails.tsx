import { useQuery } from "@tanstack/react-query";
import { useIdFromUrl } from "../../../common/utils/useIdFromUrl";
import { getMovieDetails } from "../../../common/api/apiRequests";
import ErrorPage from "../../../common/ErrorPage/ErrorPage";
import Loading from "../../../common/Loading/Loading";
import Movie from "./Movie/Movie";

const MovieDetails = () => {
  const id = useIdFromUrl();
  const { isError, isLoading } = useQuery(["movie", id], () => getMovieDetails(id));

  if (isLoading) return <Loading />;

  if (isError) return <ErrorPage />;

  return <Movie />;
};

export default MovieDetails;
