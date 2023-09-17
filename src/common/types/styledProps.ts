export interface PictureProps {
  imageUrl?: string;
  person?: boolean;
}

export interface DetailsProps {
  details?: boolean;
  twoColumnsOnMobile?: boolean;
  people?: boolean;
}

export interface StyledTileProps {
  movie?: boolean;
  hideOnMobile?: boolean;
}

export interface PropertiesProps {
  mobile?: string;
}

export interface PageSectionProps {
  contents: "movies" | "people";
}
