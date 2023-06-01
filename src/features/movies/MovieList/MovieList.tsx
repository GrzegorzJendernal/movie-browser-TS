import Tile from "../../../common/Tile/Tile";
import { Container } from "./movieList.styled";

const MovieList = () => {
	return (
		<Container>
			<Tile
			title={"Tytuł filmu"}
			date={2020}
			genres={["Action", "Thriller", "Horror"]}
			note={7.5}
			votes={38}
			/>
			<Tile
				title={"Abrakadabra"}
				date={2010}
				note={9}
				votes={999}
			/>
			<Tile
				title={"Tytuł filmu, który jest bardzo długi, żeby zobaczyć co się będzie działo"}
				date={2020}
				genres={["Action", "Thriller", "Horror", "kjshjcsdj", "Action", "Thriller", "Horror", "kjshjcsdj"]}
				note={99}
				votes={125548896}
			/>
			<Tile
				title={"Tytuł filmu"}
				date={2020}
				genres={["Action", "Thriller", "Horror"]}
				note={7.5}
				votes={38}
			/>
			<Tile
				title={"Tytuł filmu"}
				date={2020}
				genres={["Action", "Thriller", "Horror"]}
				note={7.5}
				votes={38}
			/>
			<Tile
				title={"Tytuł filmu"}
				date={2020}
				genres={["Action", "Thriller", "Horror"]}
				note={7.5}
				votes={38}
			/>
			<Tile
				title={"Tytuł filmu"}
				date={2020}
				genres={["Action", "Thriller", "Horror"]}
				note={7.5}
				votes={38}
			/>
			<Tile
				title={"Tytuł filmu"}
				date={2020}
				genres={["Action", "Thriller", "Horror"]}
				note={7.5}
				votes={38}
			/>
		</Container>
	);
};

export default MovieList;