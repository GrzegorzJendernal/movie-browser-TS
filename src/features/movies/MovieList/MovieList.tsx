import Tile from "../../../common/Tile/Tile";
import { Container } from "./movieList.styled";
import { PageHeading, PageWrapper } from "../../../common/page/page.styled";
import Pagination from "../../../common/Pagination/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getGenres, getMovieList, getMoviesByQuery } from "../../../common/api/apiRequests.ts";
import Loading from "../../../common/Loading/Loading.tsx";
import ErrorPage from "../../../common/ErrorPage/ErrorPage.tsx";
import { getGenreName } from "../../../common/utils/getGenresName.ts";
import { usePageParameter } from "../../../common/utils/usePageParameter.ts";
import { useSearchParameter } from "../../../common/utils/useSearchParameter.ts";
import NoResults from "../../../common/NoResults/NoResults.tsx";

const MovieList = () => {
  const page = usePageParameter();
  const query = useSearchParameter();
  const { isLoading, data } = useQuery(["movies", page, query], () =>
    query === "" ? getMovieList(page) : getMoviesByQuery(page, query),
  );
  const genresQuery = useQuery(["genres"], getGenres);

  if (isLoading) return <Loading />;

  if (data)
    return data.total_results === 0 ? (
      <NoResults query={query} />
    ) : (
      <PageWrapper>
        <PageHeading>
          {query === "" ? `Popular movies` : `Search results for “${query}” (${data.total_results})`}
        </PageHeading>
        <Container>
          {data.results.map((movie) => (
            <Tile
              title={movie.title}
              date={movie.release_date.slice(0, 4)}
              genres={
                genresQuery.data && movie.genre_ids.map((genreId) => `${getGenreName(genresQuery.data, genreId)}`)
              }
              note={movie.vote_average}
              votes={movie.vote_count}
              imageUrl={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : undefined}
              key={movie.id}
            />
          ))}
        </Container>
        <Pagination totalPages={data.total_pages} />
      </PageWrapper>
    );

  return <ErrorPage />;
};

export default MovieList;
