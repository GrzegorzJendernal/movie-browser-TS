import Tile from "../../../common/Tile/Tile";
import { Container } from "./movieList.styled";
import { PageHeading, PageWrapper } from "../../../common/page/page.styled";
import Pagination from "../../../common/Pagination/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getGenres, getMovieList } from "./getMovieList.ts";
import Loading from "../../../common/Loading/Loading.tsx";
import ErrorPage from "../../../common/ErrorPage/ErrorPage.tsx";
import { getGenreName } from "../../../common/utils/getGenresName.ts";

const MovieList = () => {
	const {isLoading, data} = useQuery(["movies"], getMovieList);
	const genresQuery = useQuery(["genres"], getGenres);

	if (isLoading) return <Loading/>;

  if (data) return (
    <PageWrapper>
      <PageHeading>Popular movies</PageHeading>
      <Container>
	      {data.results.map(movie => (
			      <Tile
				      title={movie.title}
				      date={movie.release_date.slice(0, 4)}
				      genres={movie.genre_ids.map((genreId) => `${getGenreName(genresQuery.data, genreId)}`)}
				      note={movie.vote_average}
				      votes={movie.vote_count}
				      imageUrl={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : undefined}
				      key={movie.id}
			      />
		      ))}
      </Container>
	    <Pagination/>
    </PageWrapper>
  );

	return <ErrorPage/>
};

export default MovieList;
