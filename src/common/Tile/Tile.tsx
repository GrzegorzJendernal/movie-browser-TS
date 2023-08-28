import {
  Additional,
  Info,
  Tags,
  Tag,
  Note,
  Rates,
  Picture,
  StyledStar,
  StyledTile,
  Title,
  Votes,
  StyledLink,
  Overview,
  Data,
} from "./tile.styled";

interface TileProps {
  path?: string;
  title: string;
  date: string;
  genres?: string[];
  note: number;
  votes: number;
  imageUrl?: string;
  overview?: string;
}

const Tile = ({ title, date, genres, note, votes, imageUrl, path, overview }: TileProps) => {
  const tileContent = (
    <StyledTile description={path ? true : false}>
      <Picture imageUrl={imageUrl} />
      <Data>
        <Info>
          <Title>{title}</Title>
          <Additional>{date}</Additional>
          <Tags>{!!genres && genres.map((genre) => <Tag key={genre}>{genre}</Tag>)}</Tags>
        </Info>
        <Rates>
          <StyledStar />
          <Note>{note.toFixed(1)}</Note>
          <Votes>{votes} votes</Votes>
        </Rates>
      </Data>
      {!!overview && <Overview>{overview}</Overview>}
    </StyledTile>
  );

  return path ? <StyledLink to={path}>{tileContent}</StyledLink> : <>{tileContent}</>;
};

export default Tile;
