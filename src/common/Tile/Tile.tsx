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
  YearOfPublication,
  Details,
  Property,
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
  movie?: boolean;
  countries?: [{ iso_3166_1: string; name: string }];
}

const Tile = ({ title, date, genres, note, votes, imageUrl, path, overview, movie, countries }: TileProps) => {
  const additionalContent = () => {
    if (path) return date;
    return (
      <>
        <Details>
          <Property>Production: </Property>
          {!!countries &&
            countries.map((country, index) => (index + 1 === countries.length ? country.name : `${country.name}, `))}
        </Details>
        <Details>
          <Property>Relase date:</Property>
        </Details>
      </>
    );
  };

  const tileContent = (
    <StyledTile description={!path ? true : false}>
      <Picture imageUrl={imageUrl} />
      <Data>
        <Info description={!path ? true : false}>
          <Title description={!path ? true : false}>{title}</Title>
          {!!movie && <YearOfPublication>{date.slice(0, 4)}</YearOfPublication>}
          <Additional>{additionalContent()}</Additional>
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
