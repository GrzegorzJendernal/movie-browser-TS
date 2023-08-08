import { useQuery } from "@tanstack/react-query";
import { useIdFromUrl } from "../../../common/utils/useIdFromUrl";
import { getMovieDetails } from "../../../common/api/apiRequests";
import ErrorPage from "../../../common/ErrorPage/ErrorPage";
import Loading from "../../../common/Loading/Loading";
import { PageWrapper } from "../../../common/page/page.styled";
import {
  Backdrop,
  BigNote,
  BigRating,
  BigStar,
  BigTitle,
  MainInfo,
  OutOf,
  Poster,
  VotesAmount,
} from "./movieDetails.styled";

const MovieDetails = () => {
  const id = useIdFromUrl();
  const { data, isLoading } = useQuery(["movie", id], () => getMovieDetails(id));

  if (isLoading) return <Loading />;

  if (data)
    return (
      <>
        <Backdrop>
          <Poster imageUrl={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}>
            <MainInfo>
              <BigTitle>{data.title}</BigTitle>
              <BigRating>
                <BigStar />
                <BigNote>{data.vote_average}</BigNote>
                <OutOf>/ 10</OutOf>
                <VotesAmount>{data.vote_count} votes</VotesAmount>
              </BigRating>
            </MainInfo>
          </Poster>
        </Backdrop>
        <PageWrapper></PageWrapper>
      </>
    );

  return <ErrorPage />;
};

export default MovieDetails;
