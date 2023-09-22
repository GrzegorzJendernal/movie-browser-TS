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
  person?: boolean;
}

export interface PropertiesProps {
  mobile?: "hide" | "show";
}

export interface PageSectionProps {
  contents: "movies" | "people";
}
