import styled, { css } from "styled-components";
import noPoster from "./noMoviePoster.svg";
import noPicture from "./noPersonPicture.svg";
import { ReactComponent as Star } from "../assets/star.svg";
import { Link } from "react-router-dom";
import { PictureProps, DetailsProps, StyledTileProps, PropertiesProps } from "../types/styledProps";

export const StyledLink = styled(Link)`
  display: flex;
  height: 100%;
  text-decoration: none;
  transition: transform 500ms;

  &:hover {
    transform: translateX(-5px);
  }
`;

export const StyledTile = styled.section<DetailsProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;

  ${({ details: description, twoColumnsOnMobile }) =>
    !description
      ? css`
          display: flex;
          flex-direction: column;
          padding: 16px;

          ${twoColumnsOnMobile
            ? css`
                @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                  display: grid;
                  grid-template-areas:
                    "picture info"
                    "picture rates";
                  grid-template-columns: 1fr 1.5fr;
                  grid-template-rows: auto 1fr;
                  grid-gap: 16px;
                }
              `
            : css`
                @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                  padding: 12px;
                }

                @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
                  padding: 8px;
                }
              `}
        `
      : css`
          display: grid;
          grid-template-areas:
            "picture info"
            "picture rates"
            "picture overview";
          grid-template-columns: 312px 1.5fr;
          grid-template-rows: auto auto 1fr;
          padding: 40px;
          grid-column-gap: 40px;
          grid-row-gap: 24px;
          margin-top: 8px;

          @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
            padding: 30px;
            grid-column-gap: 30px;
            grid-row-gap: 20px;
          }

          @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
            grid-template-columns: 268px 1.5fr;
            padding: 24px;
            grid-column-gap: 24px;
            grid-row-gap: 14px;
          }

          @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            grid-template-areas:
              "picture info"
              "picture rates"
              "overview overview";
            grid-template-columns: 1.2fr 1fr;
            grid-template-rows: auto 1fr;
            padding: 20px;
            grid-column-gap: 20px;
            grid-row-gap: 10px;
          }

          @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
            padding: 16px;
            grid-column-gap: 16px;
            grid-row-gap: 8px;
          }
        `}
`;

export const Picture = styled.div<PictureProps>`
  aspect-ratio: ${({ person }) => (!person ? 421 / 632 : 177 / 231)};
  margin-bottom: 16px;
  border-radius: 5px;
  background-image: ${({ imageUrl, person }) =>
    imageUrl ? `url(${imageUrl})` : `url(${!person ? noPoster : noPicture})`};
  background-repeat: no-repeat;
  background-size: 100%;
  grid-area: picture;
`;

export const Info = styled.article<DetailsProps>`
  display: grid;
  grid-gap: ${({ details: description }) => (!description ? 8 : 24)}px;
  grid-template-columns: 1fr;
  margin-bottom: ${({ details: description }) => (!description ? 8 : 0)}px;
  grid-area: info;
  ${({ people }) =>
    !!people &&
    css`
      margin: 0;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Title = styled.p<DetailsProps>`
  font-weight: 500;
  font-size: ${({ details: description }) => (!description ? 22 : 36)}px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  word-wrap: normal;
  ${({ people, details }) =>
    !!people &&
    !details &&
    css`
      text-align: center;
    `}

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
    font-size: ${({ people }) => (!people ? `16` : `14`)}px;
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

export const Additional = styled.span<DetailsProps>`
  font-weight: 400;
  font-size: ${({ people }) => (!people ? 16 : 18)}px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  ${({ people }) =>
    !!people &&
    css`
      text-align: center;
    `}

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

export const Properties = styled.div<PropertiesProps>`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.primary};
  ${({ mobile }) =>
    mobile === "show" &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: block;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${({ mobile }) =>
      mobile === "hide" &&
      css`
        display: none;
      `}
    font-size: 16px;
    padding: 4px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    font-size: 12px;
  }
`;

export const Property = styled.span<StyledTileProps>`
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 10px;

  ${({ person }) =>
    !person &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
      }
    `}
`;

export const Tags = styled.ul<StyledTileProps>`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: ${({ movie }) => (movie ? 16 : 8)}px;
  margin: 0;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  }
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

export const Rates = styled.div<StyledTileProps>`
  display: flex;
  gap: 12px;
  font-size: 16px;
  line-height: 1.5;
  align-items: center;
  grid-area: rates;
  ${({ movie }) =>
    !movie
      ? css`
          margin-top: auto;
          align-self: flex-start;
        `
      : css`
          margin: unset;
        `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: unset;
    font-size: 15px;
    gap: 8px;
    ${({ movie }) =>
      !!movie &&
      css`
        margin-bottom: auto;
      `}
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 16px;
  }
`;

export const Note = styled.span<StyledTileProps>`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  ${({ movie }) =>
    !!movie &&
    css`
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.3;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 20px;
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
    `}
`;

export const Votes = styled.span<StyledTileProps>`
  font-weight: 400;
  ${({ movie }) =>
    !movie
      ? css`
          color: ${({ theme }) => theme.colors.secondary};
        `
      : css`
          font-size: 14px;
          line-height: 1.2;
          color: ${({ theme }) => theme.colors.primary};

          @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: 18px;
            color: ${({ theme }) => theme.colors.secondary};
          }

          @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
            font-size: 16px;
          }

          @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
            font-size: 13px;
          }
        `}

  ${({ hideOnMobile }) =>
    !!hideOnMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
      }
    `}
`;

export const Overview = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  grid-area: overview;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    font-size: 14px;
  }
`;
