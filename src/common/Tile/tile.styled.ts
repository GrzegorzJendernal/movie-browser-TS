import styled from "styled-components";
import noPoster from "./noMoviePoster.svg";
import {ReactComponent as Star} from "./star.svg";

export const StyledTile = styled.div`
  width: 324px;
  height: 650px;
	background-color: ${({ theme }) => theme.colors.base};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: 5px;
	padding: 16px;
`;

export const Poster = styled.div`
  width: 292px;
  height: 434px;
	margin-bottom: 16px;
	border-radius: 5px;
	background-image: url(${noPoster});
	background-repeat: no-repeat;
	background-size: 100%;
`;

export const Description = styled.article`
display: flex;
	gap: 8px;
	flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
	color: ${({ theme }) => theme.colors.primary};
	margin: 0;
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Genres = styled.div`
display: flex;
	flex-direction: row;
	gap: 8px;
`;

export const GenreTile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
	background-color: ${({ theme }) => theme.colors.disabled};
	color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  border-radius: 5px;
`;

export const Notes = styled.div`
display: flex;
	flex-direction: row;
	gap: 12px;
`;

export const StyledStar = styled(Star)`
width: 24px;
height: auto;
`;

export const Note = styled.span`
font-weight: 600;
font-size: 16px;
line-height: 150%;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Votes = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
	color: ${({ theme }) => theme.colors.secondary};
`;