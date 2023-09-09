import { useQuery } from "@tanstack/react-query";
import { useQueryParam } from "../../../common/utils/useQueryParam";
import { getPeopleList, getPersonByQuery } from "../../../common/api/apiRequests";
import Loading from "../../../common/Loading/Loading";
import ErrorPage from "../../../common/ErrorPage/ErrorPage";
import People from "./People/People";

const PeopleList = () => {
  const pageParam = useQueryParam("page");
  const page = pageParam === "" ? 1 : +pageParam;
  const query = useQueryParam("search");
  const { isLoading, isError } = useQuery(["people", page, query], () =>
    query === "" ? getPeopleList(page) : getPersonByQuery(page, query),
  );

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  return <People />;
};

export default PeopleList;
