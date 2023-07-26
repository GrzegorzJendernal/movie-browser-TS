import { PageHeading, PageWrapper } from "../page/page.styled";
import { useQueryParam } from "../utils/useQueryParam";
import { Spinner, SpinnerBox } from "./loading.styled";

const Loading = () => {
  const query = useQueryParam("search");
  return (
    <PageWrapper>
      {query !== "" && <PageHeading>Search results for “{query}”</PageHeading>}
      <SpinnerBox>
        <Spinner />
      </SpinnerBox>
    </PageWrapper>
  );
};

export default Loading;
