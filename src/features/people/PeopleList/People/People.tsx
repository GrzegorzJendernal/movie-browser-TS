import { useQuery } from "@tanstack/react-query";
import { getPeopleList, getPersonByQuery } from "../../../../common/api/apiRequests";
import { PageHeading, PageWrapper } from "../../../../common/page/page.styled";
import { useQueryParam } from "../../../../common/utils/useQueryParam";
import Pagination from "../../../../common/Pagination/Pagination";
import Tile from "../../../../common/Tile/Tile";
import ErrorPage from "../../../../common/ErrorPage/ErrorPage";

const People = () => {
  const pageParam = useQueryParam("page");
  const page = pageParam === "" ? 1 : +pageParam;
  const query = useQueryParam("search");
  const { data } = useQuery(["people", page, query], () =>
    query === "" ? getPeopleList(page) : getPersonByQuery(page, query),
  );

  if (!data) return <ErrorPage/>;

  return (
    <PageWrapper>
      <PageHeading>
        {query === "" ? `Popular people` : `Search results for “${query}” (${data.total_results})`}
      </PageHeading>
      {/* {data.results.map((person) => (
        <Tile
          path={`/people/${person.id}`}
          title={`a`}
          date={`pa`}
          note={3}
          votes={a}
          imageUrl={person.poster_path ? `https://image.tmdb.org/t/p/w500/${person.poster_path}` : undefined}
          key={person.id}
        />
      ))} */}
      <Pagination totalPages={data.total_pages} />
    </PageWrapper>
  );
};

export default People;
