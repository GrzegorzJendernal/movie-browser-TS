import Tile from "../../../common/Tile/Tile";
import { Container } from "./movieList.styled";
import { PageHeading, PageWrapper } from "../../../common/page/page.styled";
import Pagination from "../../../common/Pagination/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getMovieList } from "./getMovieList.ts";
import Loading from "../../../common/Loading/Loading.tsx";

const MovieList = () => {
	const {isLoading, data} = useQuery(["movies"], getMovieList);

	if (isLoading) return <Loading/>;

  return (
    <PageWrapper>
      <PageHeading>Popular movies</PageHeading>
      <Container>
	      {data.results.map(movie => (
			      <Tile
				      title={movie.title}
				      date={movie.release_date.slice(0, 4)}
				      genres={movie.genre_ids}
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
};

export default MovieList;
