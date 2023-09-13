import { convertDateFormat } from "../utils/convertDateFormat";
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
  YearOfPublication,
  Properties,
  Property,
} from "./tile.styled";

interface TileProps {
  path?: string;
  title: string;
  date?: string;
  genres?: string[];
  note?: number;
  votes?: number;
  imageUrl?: string;
  overview?: string;
  movie?: boolean;
  countries?: [{ iso_3166_1: string; name: string }];
  releaseDate?: string;
}

const Tile = ({
  title,
  date,
  genres,
  note,
  votes,
  imageUrl,
  path,
  overview,
  movie,
  countries,
  releaseDate,
}: TileProps) => {
  const additionalContent = () => {
    if (path) return date;
    return (
      <>
        {!!countries && (
          <>
            <Properties mobile={"hide"}>
              <Property>Production: </Property>
              {countries.map((country, index) => (index + 1 === countries.length ? country.name : `${country.name}, `))}
            </Properties>
            <Properties mobile={"show"}>
              {countries.map((country, index) =>
                index + 1 === countries.length ? country.iso_3166_1 : `${country.iso_3166_1}, `,
              )}
            </Properties>
          </>
        )}
        {!!releaseDate && (
          <Properties>
            <Property>Relase date: </Property>
            {convertDateFormat(releaseDate)}
          </Properties>
        )}
      </>
    );
  };

  const tileContent = (
    <StyledTile details={!path ? true : false}>
      <Picture imageUrl={imageUrl} />
      <Info details={!path ? true : false}>
        <Title details={!path ? true : false}>{title}</Title>
        {!!movie && !!date && <YearOfPublication>{date.slice(0, 4)}</YearOfPublication>}
        <Additional>{additionalContent()}</Additional>
        <Tags movie={movie}>{!!genres && genres.map((genre) => <Tag key={genre}>{genre}</Tag>)}</Tags>
      </Info>
      <Rates movie={movie}>
        <StyledStar />
        {!!note && <Note movie={movie}>{note.toFixed(1)}</Note>}
        {!!movie && (
          <Votes hideOnMobile movie={movie}>
            / 10
          </Votes>
        )}
        <Votes movie={movie}>{votes} votes</Votes>
      </Rates>
      {!!overview && <Overview>{overview}</Overview>}
    </StyledTile>
  );

  return path ? <StyledLink to={path}>{tileContent}</StyledLink> : <>{tileContent}</>;
};

export default Tile;
