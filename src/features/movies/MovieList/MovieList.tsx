import Tile from "../../../common/Tile/Tile";
import { Container } from "./movieList.styled";
import { PageHeading, PageWrapper } from "../../../common/page/page.styled";
import Pagination from "../../../common/Pagination/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getGenres, getMovieList } from "./getMovieList.ts";
import Loading from "../../../common/Loading/Loading.tsx";
import ErrorPage from "../../../common/ErrorPage/ErrorPage.tsx";

const MovieList = () => {
	const {isLoading, data} = useQuery(["movies"], getMovieList);
	const genresQuery = useQuery(["genres"], getGenres);
	const getGenreName = (genreId: number) => {
		const genre = genresQuery.data.genres.find((genre:{id: number, name: string}) => genre.id === genreId);
		return genre ? genre.name : "";
	};

	if (isLoading) return <Loading/>;

  if (data) return (
    <PageWrapper>
      <PageHeading>Popular movies</PageHeading>
      <Container>
	      {data.results.map(movie => (
			      <Tile
				      title={movie.title}
				      date={movie.release_date.slice(0, 4)}
				      genres={movie.genre_ids.map((genreId) => `${getGenreName(genreId)}`)}
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
