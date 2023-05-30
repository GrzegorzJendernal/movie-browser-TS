import { ReactNode } from "react";
import { Container, Heading } from "./page.styled";

interface PageProps {
	title?: string;
	content?: ReactNode;
}

const Page = ({title, content}: PageProps) => (
	<Container>
		{!!title && <Heading>{title}</Heading>}
	 {content}
	</Container>
);

export default Page;