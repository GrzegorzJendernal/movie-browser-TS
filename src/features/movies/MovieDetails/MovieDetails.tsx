import { useIdFromUrl } from "../../../common/utils/useIdFromUrl";

const MovieDetails = () => {
  const id = useIdFromUrl();

  return <div>sialalala {id}</div>;
};

export default MovieDetails;
