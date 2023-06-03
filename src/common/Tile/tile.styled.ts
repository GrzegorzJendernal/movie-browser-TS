import styled from "styled-components";
import noPoster from "./noMoviePoster.svg";
import { ReactComponent as Star } from "./star.svg";

interface PictureProps {
  imageUrl?: string;
}

export const StyledTile = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
	  grid-template-areas: 
  	"picture info"
	  "picture rates"
  ;
	  grid-template-columns: 1fr 1.5fr;
	  grid-template-rows: auto 1fr;
	  grid-gap: 16px;
  }
`;

export const Picture = styled.div<PictureProps>`
  padding-top: calc(100% * 632 / 421);
  margin-bottom: 16px;
  border-radius: 5px;
  background-image: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : `url(${noPoster})`)};
  background-repeat: no-repeat;
  background-size: 100%;
	grid-area: picture;
`;

export const Info = styled.article`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
	  flex-direction: column;
	  gap: 8px;
	  grid-area: info;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  word-wrap: normal;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    font-size: 16px;
  }
`;

export const Additional = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    font-size: 13px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
	  padding: 6px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 12px;
	  padding: 5px 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    font-size: 10px;
	  padding: 4px 8px;
  }
`;

export const Rates = styled.div`
  display: flex;
  gap: 12px;
	grid-area: rates;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
	  align-items: center;
	  align-self: flex-start;
	  font-size: 15px;
	  gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    font-size: 13px;
  }
`;

export const StyledStar = styled(Star)`
  width: 24px;
  height: auto;
`;

export const Note = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Votes = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
`;
