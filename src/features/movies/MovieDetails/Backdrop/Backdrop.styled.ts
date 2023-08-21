import styled from "styled-components";
import { PictureProps } from "../../../../common/types/styledProps";
import { ReactComponent as Star } from "../../../../common/assets/star.svg";

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
`;

export const BigTitle = styled.h2`
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  margin: 0;
`;

export const BigRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NotesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BigStar = styled(Star)`
  width: 40px;
  height: 40px;
`;

export const BigNote = styled.span`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;

export const OutOf = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding-top: 10px;
`;

export const VotesAmount = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
