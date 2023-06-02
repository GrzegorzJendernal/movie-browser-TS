import styled from "styled-components";
import noPoster from "./noMoviePoster.svg";
import { ReactComponent as Star } from "./star.svg";

export const StyledTile = styled.section`
 display: flex;
	flex-direction: column;
	width: 100%;
  background-color: ${({ theme }) => theme.colors.base};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  padding: 16px;
`;

export const Poster = styled.div`
  padding-top: calc(100% * 632/421);
  margin-bottom: 16px;
  border-radius: 5px;
  background-image: url(${noPoster});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Info = styled.article`
  display: grid;
	grid-gap: 8px;
	grid-template-columns: 1fr;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
	word-wrap: normal;
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.secondary};
	margin: 0;
`;

export const Tags = styled.ul`
	list-style: none;
	padding: 0;
  display: flex;
  flex-direction: row;
  gap: 8px;
	margin: 0;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
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

export const Rates = styled.div`
  display: flex;
  gap: 12px;
	margin-top: auto;
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
