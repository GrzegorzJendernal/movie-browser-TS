import { useQuery } from "@tanstack/react-query";
import { useIdFromUrl } from "../../../common/utils/useIdFromUrl";
import { getMovieDetails } from "../../../common/api/apiRequests";
import ErrorPage from "../../../common/ErrorPage/ErrorPage";
import Loading from "../../../common/Loading/Loading";
import { PageWrapper } from "../../../common/page/page.styled";
import { Backdrop, Poster } from "./movieDetails.styled";

const MovieDetails = () => {
  const id = useIdFromUrl();
  const { data, isLoading } = useQuery(["movie", id], () => getMovieDetails(id));

  if (isLoading) return <Loading />;

  if (data)
    return (
      <>
        <Backdrop>
          <Poster imageUrl={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}></Poster>
        </Backdrop>
        <PageWrapper></PageWrapper>
      </>
    );

  return <ErrorPage />;
};

export default MovieDetails;
