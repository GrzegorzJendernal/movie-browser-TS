import { useQuery } from "@tanstack/react-query";
import { useIdFromUrl } from "../../../common/utils/useIdFromUrl";
import { getMovieDetails } from "../../../common/api/apiRequests";
import ErrorPage from "../../../common/ErrorPage/ErrorPage";
import Loading from "../../../common/Loading/Loading";
import { PageWrapper } from "../../../common/page/page.styled";
import Backdrop from "./Backdrop/Backdrop";
import Tile from "../../../common/Tile/Tile";

const MovieDetails = () => {
  const id = useIdFromUrl();
  const { data, isLoading } = useQuery(["movie", id], () => getMovieDetails(id));

  if (isLoading) return <Loading />;

  if (data)
    return (
      <>
        <Backdrop path={data.backdrop_path} title={data.title} note={data.vote_average} votes={data.vote_count} />
        <PageWrapper>
          <Tile
            title={data.title}
            date={data.release_date}
            note={data.vote_average}
            votes={data.vote_count}
            imageUrl={data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : undefined}
            overview={data.overview}
          />
        </PageWrapper>
      </>
    );

  return <ErrorPage />;
};

export default MovieDetails;
