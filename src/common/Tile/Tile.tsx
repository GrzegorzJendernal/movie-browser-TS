import {
	Date,
	Description,
	Genres,
	GenreTile,
	Note,
	Notes,
	Poster,
	StyledStar,
	StyledTile,
	Title, Votes
} from "./tile.styled";

const Tile = () => {
  return (
    <StyledTile>
      <Poster />
	    <Description>
<Title>
	Tytuł filmu
</Title>
<Date>
	2020
</Date>
<Genres>
	<GenreTile>Action</GenreTile>
	<GenreTile>Drama</GenreTile>
	<GenreTile>Horror</GenreTile>
</Genres>
		    <Notes>
<StyledStar/>
<Note>7,5</Note>
<Votes>38 votes</Votes>
		    </Notes>
	    </Description>
    </StyledTile>
  );
};

export default Tile;
