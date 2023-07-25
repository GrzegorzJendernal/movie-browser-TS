import { PageHeading, PageWrapper } from "../page/page.styled";
import { StyledPicture } from "./noResults.styled";

const NoResults = ({ query }: { query: string }) => (
  <PageWrapper>
    <PageHeading>Sorry, there are no results for “{query}”</PageHeading>
    <StyledPicture />
  </PageWrapper>
);

export default NoResults;
