import { PageHeading, PageWrapper } from "../page/page.styled";
import { Container, Paragraph, Sign, ToHomepageLink } from "./errorPage.styled";

const ErrorPage = () => (
  <PageWrapper>
    <Container>
      <Sign />
      <PageHeading>Ooops! Something went wrong...</PageHeading>
      <Paragraph>Please check your network connection{"\n"} and try again</Paragraph>
      <ToHomepageLink to={"/movies"}>Back to home page</ToHomepageLink>
    </Container>
  </PageWrapper>
);

export default ErrorPage;
