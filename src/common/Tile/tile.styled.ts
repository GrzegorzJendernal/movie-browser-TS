import styled, { css } from "styled-components";
import noPoster from "./noMoviePoster.svg";
import { ReactComponent as Star } from "../assets/star.svg";
import { Link } from "react-router-dom";
import { PictureProps, DescriptionProps } from "../types/styledProps";

export const StyledLink = styled(Link)`
  display: flex;
  height: 100%;
  text-decoration: none;
  transition: transform 500ms;

  &:hover {
    transform: translateX(-5px);
  }
`;

export const StyledTile = styled.section<DescriptionProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;

  ${({ description }) =>
    !description
      ? css`
          display: flex;
          flex-direction: column;
          padding: 16px;

          @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            display: grid;
            grid-template-areas: "picture data";
            grid-template-columns: 1fr 1.5fr;
            grid-gap: 16px;
          }
        `
      : css`
          display: grid;
          grid-template-areas:
            "picture data"
            "picture overview";
          grid-template-columns: 312px 1.5fr;
          grid-template-rows: auto 1fr;
          padding: 40px;
          grid-column-gap: 40px;
          margin-top: 8px;
        `}
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

export const Data = styled.div`
  grid-area: data;
`;

export const Info = styled.article<DescriptionProps>`
  display: grid;
  grid-gap: ${({ description }) => (!description ? 8 : 24)}px;
  grid-template-columns: 1fr;
  margin-bottom: 8px;
  grid-area: info;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Title = styled.h2<DescriptionProps>`
  font-weight: 500;
  font-size: ${({ description }) => (!description ? 22 : 36)}px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  word-wrap: normal;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 26px;
  }

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

export const YearOfPublication = styled.span`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 20px;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    font-size: 13px;
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

export const Details = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Property = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
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
  font-size: 16px;
  line-height: 1.5;
  margin-top: auto;
  align-items: center;
  align-self: flex-start;
  grid-area: rates;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: unset;
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

export const Overview = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  grid-area: overview;
`;
