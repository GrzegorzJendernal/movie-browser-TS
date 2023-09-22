import styled from "styled-components";
import { PictureProps } from "../../../../../common/types/styledProps";
import { ReactComponent as Star } from "../../../../../common/assets/star.svg";

export const Wrapper = styled.section`
  width: 100%;
  height: 769px;
  background-color: ${({ theme }) => theme.colors.backdrop};

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    height: unset;
  }
`;

export const Poster = styled.div<PictureProps>`
  display: flex;
  justify-self: center;
  align-items: flex-end;
  margin: 0 auto;
  width: 1368px;
  height: 100%;
  background-position: center;
  background-size: 100%, contain;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  box-shadow: rgb(0, 0, 0) 0px 0px 75px 75px inset;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    aspect-ratio: 1.78;
    width: auto;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    box-shadow: rgb(0, 0, 0) 0px 0px 30px 30px inset;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${({ theme }) => theme.colors.base};
  line-height: 1.2;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    margin-left: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 20px;
    margin-bottom: 46px;
    margin-left: 46px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 16px;
    margin-bottom: 36px;
    margin-left: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 10px;
    margin-bottom: 10px;
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    gap: 5px;
    margin-bottom: 8px;
  }
`;

export const BigTitle = styled.h2`
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 54px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 44px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 34px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 24px;
  }
`;

export const BigRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
    flex-direction: row;
    align-items: center;
  }
`;

export const NotesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BigStar = styled(Star)`
  width: 40px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 33px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 16px;
  }
`;

export const BigNote = styled.span`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 14px;
  }
`;

export const OutOf = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
    padding-top: 7px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    padding-top: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 10px;
    padding-top: 5px;
  }
`;

export const VotesAmount = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    padding-top: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 10px;
    padding-top: 5px;
  }
`;
