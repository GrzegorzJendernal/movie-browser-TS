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
  movies?: boolean;
  countries?: [{ iso_3166_1: string; name: string }];
  releaseDate?: string;
  people?: boolean;
  person?: boolean;
  job?: string;
  birthdate?: string;
  birthplace?: string;
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
  movies,
  countries,
  releaseDate,
  people,
  person,
  job,
  birthdate,
  birthplace,
}: TileProps) => {
  const additionalContent = () => {
    if (movies) return date;
    if (job) return job;
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
        {!!birthdate && (
          <Properties>
            <Property person>Date of birth: </Property>
            {convertDateFormat(birthdate)}
          </Properties>
        )}
        {!!birthplace && (
          <Properties>
            <Property person>Place of birth: </Property>
            {birthplace}
          </Properties>
        )}
      </>
    );
  };

  const tileContent = (
    <StyledTile details={!path} twoColumnsOnMobile={!people}>
      <Picture imageUrl={imageUrl} person={people || person} />
      <Info details={!path} people={people}>
        <Title details={!path} people={people || person} as={!path ? "h1" : "p"}>
          {title}
        </Title>
        {!!movie && !!date && <YearOfPublication>{date.slice(0, 4)}</YearOfPublication>}
        <Additional people={people}>{additionalContent()}</Additional>
        {!!genres && (
          <Tags movie={movie}>
            {genres.map((genre) => (
              <Tag key={genre}>{genre}</Tag>
            ))}
          </Tags>
        )}
      </Info>
      {!!note && (
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
      )}
      {!!overview && <Overview>{overview}</Overview>}
    </StyledTile>
  );

  return path ? <StyledLink to={path}>{tileContent}</StyledLink> : <>{tileContent}</>;
};

export default Tile;
