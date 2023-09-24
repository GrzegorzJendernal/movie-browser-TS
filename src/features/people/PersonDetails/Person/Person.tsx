import { useQuery } from "@tanstack/react-query";
import { useIdFromUrl } from "../../../../common/utils/useIdFromUrl";
import { getGenres, getMovieCredits, getPersonDetails } from "../../../../common/api/apiRequests";
import ErrorPage from "../../../../common/ErrorPage/ErrorPage";
import { PageHeading, PageSection, PageWrapper } from "../../../../common/page/page.styled";
import Tile from "../../../../common/Tile/Tile";
import { getGenreName } from "../../../../common/utils/getGenresName";

const Person = () => {
  const id = useIdFromUrl();
  const { data } = useQuery(["person", id], () => getPersonDetails(id));
  const credits = useQuery(["movieCredits", id], () => getMovieCredits(id));
  const genresQuery = useQuery(["genres"], getGenres);

  if (!data) return <ErrorPage />;

  return (
    <PageWrapper details>
      <Tile
        title={data.name}
        person
        birthdate={data.birthday}
        birthplace={data.place_of_birth}
        overview={data.biography}
        imageUrl={data.profile_path ? `https://image.tmdb.org/t/p/w500/${data.profile_path}` : undefined}
      />
      {!!credits.data && !!credits.data.cast && (
        <>
          <PageHeading details as={"h2"}>
            Movies cast ({credits.data.cast.length})
          </PageHeading>
          <PageSection contents={"movies"}>
            {credits.data.cast.map((movie) => (
              <Tile
                path={`/movies/${movie.id}`}
                title={movie.title}
                date={movie.release_date.slice(0, 4)}
                genres={
                  genresQuery.data && movie.genre_ids.map((genreId) => `${getGenreName(genresQuery.data, genreId)}`)
                }
                note={movie.vote_average}
                votes={movie.vote_count}
                imageUrl={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : undefined}
                key={movie.credit_id}
                job={movie.character}
                movies
              />
            ))}
          </PageSection>
        </>
      )}
    </PageWrapper>
  );
};

export default Person;
