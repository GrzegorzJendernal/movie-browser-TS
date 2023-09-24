import { useQuery } from "@tanstack/react-query";
import { useIdFromUrl } from "../../../../common/utils/useIdFromUrl";
import { getCredits, getMovieDetails } from "../../../../common/api/apiRequests";
import ErrorPage from "../../../../common/ErrorPage/ErrorPage";
import Backdrop from "./Backdrop/Backdrop";
import { PageHeading, PageSection, PageWrapper } from "../../../../common/page/page.styled";
import Tile from "../../../../common/Tile/Tile";

const Movie = () => {
  const id = useIdFromUrl();
  const { data } = useQuery(["movie", id], () => getMovieDetails(id));
  const credits = useQuery(["credits", id], () => getCredits(id));

  if (!data) return <ErrorPage />;

  return (
    <>
      {!!data.backdrop_path && (
        <Backdrop path={data.backdrop_path} title={data.title} note={data.vote_average} votes={data.vote_count} />
      )}
      <PageWrapper details>
        <Tile
          title={data.title}
          date={data.release_date}
          note={data.vote_average}
          votes={data.vote_count}
          imageUrl={data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : undefined}
          overview={data.overview}
          movie
          countries={data.production_countries}
          releaseDate={data.release_date}
          genres={data.genres.map((genre) => genre.name)}
        />
        {!!credits.data && !!credits.data.cast && (
          <>
            <PageHeading details as={"h2"}>
              Cast
            </PageHeading>
            <PageSection contents="people">
              {credits.data.cast.map((castMember) => (
                <Tile
                  path={`/people/${castMember.id}`}
                  title={castMember.name}
                  imageUrl={
                    castMember.profile_path ? `https://image.tmdb.org/t/p/w500/${castMember.profile_path}` : undefined
                  }
                  key={castMember.credit_id}
                  people
                  job={castMember.character}
                />
              ))}
            </PageSection>
          </>
        )}
        {!!credits.data && !!credits.data.crew && (
          <>
            <PageHeading details as={"h2"}>
              Crew
            </PageHeading>
            <PageSection contents="people">
              {credits.data.crew.map((castMember) => (
                <Tile
                  path={`/people/${castMember.id}`}
                  title={castMember.name}
                  imageUrl={
                    castMember.profile_path ? `https://image.tmdb.org/t/p/w500/${castMember.profile_path}` : undefined
                  }
                  key={castMember.credit_id}
                  people
                  job={castMember.job}
                />
              ))}
            </PageSection>
          </>
        )}
      </PageWrapper>
    </>
  );
};

export default Movie;
