import { useQuery } from "@tanstack/react-query";
import { useIdFromUrl } from "../../../common/utils/useIdFromUrl";
import { getPersonDetails } from "../../../common/api/apiRequests";
import Loading from "../../../common/Loading/Loading";
import ErrorPage from "../../../common/ErrorPage/ErrorPage";
import Person from "./Person/Person";

const PersonDetails = () => {
  const id = useIdFromUrl();
  const { isError, isLoading } = useQuery(["person", id], () => getPersonDetails(id));

  if (isLoading) return <Loading />;

  if (isError) return <ErrorPage />;

  return <Person />;
};

export default PersonDetails;
