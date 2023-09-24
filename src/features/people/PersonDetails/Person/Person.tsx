import { useQuery } from "@tanstack/react-query";
import { useIdFromUrl } from "../../../../common/utils/useIdFromUrl";
import { getPersonDetails } from "../../../../common/api/apiRequests";
import ErrorPage from "../../../../common/ErrorPage/ErrorPage";
import { PageWrapper } from "../../../../common/page/page.styled";
import Tile from "../../../../common/Tile/Tile";

const Person = () => {
  const id = useIdFromUrl();
  const { data } = useQuery(["person", id], () => getPersonDetails(id));

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
    </PageWrapper>
  );
};

export default Person;
