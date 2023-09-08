import { useQuery } from "@tanstack/react-query";
import { getGenres, getMovieList, getMoviesByQuery } from "../../../../common/api/apiRequests";
import { PageHeading, PageWrapper } from "../../../../common/page/page.styled";
import { Container } from "./movies.styled";
import Tile from "../../../../common/Tile/Tile";
import Pagination from "../../../../common/Pagination/Pagination";
import { useQueryParam } from "../../../../common/utils/useQueryParam";
import { getGenreName } from "../../../../common/utils/getGenresName";
import ErrorPage from "../../../../common/ErrorPage/ErrorPage";
import NoResults from "../../../../common/NoResults/NoResults";

const Movies = () => {
  const pageParam = useQueryParam("page");
  const page = pageParam === "" ? 1 : +pageParam;
  const query = useQueryParam("search");
  const { data } = useQuery(["movies", page, query], () =>
    query === "" ? getMovieList(page) : getMoviesByQuery(page, query),
  );
  const genresQuery = useQuery(["genres"], getGenres);

  if (!data) return <ErrorPage />;

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
            path={`/movies/${movie.id}`}
            title={movie.title}
            date={movie.release_date.slice(0, 4)}
            genres={genresQuery.data && movie.genre_ids.map((genreId) => `${getGenreName(genresQuery.data, genreId)}`)}
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
};

export default Movies;
