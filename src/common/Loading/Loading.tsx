import { PageHeading, PageWrapper } from "../page/page.styled";
import { Spinner, SpinnerBox } from "./loading.styled";

const Loading = () => {
  return (
    <PageWrapper>
      <PageHeading>Search results for “Mulan”</PageHeading>
      <SpinnerBox>
        <Spinner />
      </SpinnerBox>
    </PageWrapper>
  );
};

export default Loading;
