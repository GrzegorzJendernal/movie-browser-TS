import { Date, Info, Tags, Tag, Note, Rates, Poster, StyledStar, StyledTile, Title, Votes } from "./tile.styled";

interface TileProps {
	title: string;
	date: number;
	genres?: string[];
	note: number;
	votes: number;
}
const Tile = ({title, date, genres, note, votes}: TileProps) => {
  return (
    <StyledTile>
      <Poster />
      <Info>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Tags>
	        {!!genres && genres.map((genre) => <Tag key={genre}>{genre}</Tag>)}
        </Tags>
        <Rates>
          <StyledStar />
          <Note>{note}</Note>
          <Votes>{votes} votes</Votes>
        </Rates>
      </Info>
    </StyledTile>
  );
};

export default Tile;
