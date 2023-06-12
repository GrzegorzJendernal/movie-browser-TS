import Tile from "../../../common/Tile/Tile";
import { Container } from "./movieList.styled";
import poster from "../../../assets/poster.png";
import { PageHeading, PageWrapper } from "../../../common/page/page.styled";
import Pagination from "../../../common/Pagination/Pagination";

const MovieList = () => {
  return (
    <PageWrapper>
      <PageHeading>Popular movies</PageHeading>
      <Container>
        <Tile
          title={"Tytuł filmu"}
          date={2020}
          genres={["Action", "Thriller", "Horror"]}
          note={7.5}
          votes={38}
          imageUrl={poster}
        />
        <Tile title={"Abrakadabra"} date={2010} note={9} votes={999} />
        <Tile
          title={"Tytuł filmu, który jest bardzo długi, żeby zobaczyć co się będzie działo"}
          date={2020}
          genres={["Action", "Thriller", "Horror", "kjshjcsdj", "Action", "Thriller", "Horror", "kjshjcsdj"]}
          note={99}
          votes={125548896}
          imageUrl={poster}
        />
        <Tile title={"Tytuł filmu"} date={2020} genres={["Action", "Thriller", "Horror"]} note={7.5} votes={38} />
        <Tile
          title={"Tytuł filmu"}
          date={2020}
          genres={["Action", "Thriller", "Horror"]}
          note={7.5}
          votes={38}
          imageUrl={poster}
        />
        <Tile
          title={"Tytuł filmu"}
          date={2020}
          genres={["Action", "Thriller", "Horror"]}
          note={7.5}
          votes={38}
          imageUrl={poster}
        />
        <Tile title={"Tytuł filmu"} date={2020} genres={["Action", "Thriller", "Horror"]} note={7.5} votes={38} />
        <Tile
          title={"Tytuł filmu"}
          date={2020}
          genres={["Action", "Thriller", "Horror"]}
          note={7.5}
          votes={38}
          imageUrl={poster}
        />
      </Container>
	    <Pagination/>
    </PageWrapper>
  );
};

export default MovieList;
