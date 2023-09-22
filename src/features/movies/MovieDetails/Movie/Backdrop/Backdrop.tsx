import {
  BigNote,
  BigRating,
  BigStar,
  BigTitle,
  MainInfo,
  NotesWrapper,
  OutOf,
  Poster,
  VotesAmount,
  Wrapper,
} from "./Backdrop.styled";

interface BackdropProps {
  path: string;
  title: string;
  note: number;
  votes: number;
}

const Backdrop = ({ path, title, note, votes }: BackdropProps) => (
  <Wrapper>
    <Poster imageUrl={`https://image.tmdb.org/t/p/original${path}`}>
      <MainInfo>
        <BigTitle>{title}</BigTitle>
        <BigRating>
          <NotesWrapper>
            <BigStar />
            <BigNote>{note.toFixed(1)}</BigNote>
            <OutOf>/ 10</OutOf>
          </NotesWrapper>
          <VotesAmount>{votes} votes</VotesAmount>
        </BigRating>
      </MainInfo>
    </Poster>
  </Wrapper>
);

export default Backdrop;
