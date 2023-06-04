import { PageWrapper } from "../page/page.styled";
import { Container, Heading, Paragraph, Sign, ToHomepageLink } from "./errorPage.styled";

const ErrorPage = () => (
  <PageWrapper>
    <Container>
      <Sign />
	    <Heading>Ooops! Something went wrong...</Heading>
<Paragraph>Please check your network connection{"\n"} and try again</Paragraph>
	    <ToHomepageLink to={"/movies"}>Back to home page</ToHomepageLink>
    </Container>
  </PageWrapper>
);

export default ErrorPage;
