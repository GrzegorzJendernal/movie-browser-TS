import { useQuery } from "@tanstack/react-query";
import { useIdFromUrl } from "../../../common/utils/useIdFromUrl";
import { getMovieDetails } from "../../../common/api/apiRequests";
import ErrorPage from "../../../common/ErrorPage/ErrorPage";
import Loading from "../../../common/Loading/Loading";
import { PageWrapper } from "../../../common/page/page.styled";
import Backdrop from "./Backdrop/Backdrop";

const MovieDetails = () => {
  const id = useIdFromUrl();
  const { data, isLoading } = useQuery(["movie", id], () => getMovieDetails(id));

  if (isLoading) return <Loading />;

  if (data)
    return (
      <>
        <Backdrop path={data.backdrop_path} title={data.title} note={data.vote_average} votes={data.vote_count} />
        <PageWrapper></PageWrapper>
      </>
    );

  return <ErrorPage />;
};

export default MovieDetails;
