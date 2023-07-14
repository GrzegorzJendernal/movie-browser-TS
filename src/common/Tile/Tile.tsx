import { Additional, Info, Tags, Tag, Note, Rates, Picture, StyledStar, StyledTile, Title, Votes } from "./tile.styled";

interface TileProps {
  title: string;
  date: string;
  genres?: number[];
  note: number;
  votes: number;
  imageUrl?: string;
}
const Tile = ({ title, date, genres, note, votes, imageUrl }: TileProps) => {
  return (
    <StyledTile>
      <Picture imageUrl={imageUrl} />
      <Info>
        <Title>{title}</Title>
        <Additional>{date}</Additional>
        <Tags>{!!genres && genres.map((genre) => <Tag key={genre}>{genre}</Tag>)}</Tags>
      </Info>
      <Rates>
        <StyledStar />
        <Note>{note}</Note>
        <Votes>{votes} votes</Votes>
      </Rates>
    </StyledTile>
  );
};

export default Tile;
