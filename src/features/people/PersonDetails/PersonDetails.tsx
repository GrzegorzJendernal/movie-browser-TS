import { useQuery } from "@tanstack/react-query";
import { useIdFromUrl } from "../../../common/utils/useIdFromUrl";
import { getPersonDetails } from "../../../common/api/apiRequests";
import Loading from "../../../common/Loading/Loading";
import ErrorPage from "../../../common/ErrorPage/ErrorPage";

const PersonDetails = () => {
  const id = useIdFromUrl();
  const { data, isLoading } = useQuery(["person", id], () => getPersonDetails(id));

  if (isLoading) return <Loading />;

  if (data) return <>sialala</>;

  return <ErrorPage />;
};

export default PersonDetails;
