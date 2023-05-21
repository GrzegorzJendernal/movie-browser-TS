interface Common {
  breakpoints: {
    readonly smallest: string;
    readonly tiny: string;
    readonly mobile: string;
    readonly medium: string;
    readonly large: string;
    readonly desktop: string;
    readonly mediumDesktop: string;
  };
  readonly boxShadow: string;
}

interface Colors {
  readonly primary: string;
  readonly base: string;
  readonly secondary: string;
  readonly disabled: string;
  readonly background: string;
  readonly star: string;
  readonly button: string;
  readonly special: string;
  readonly specialHover: string;
  readonly specialActive: string;
  readonly backdrop: string;
  readonly unknown: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends Common {
    readonly colors: Colors;
  }
}

const common = {
  breakpoints: {
    smallest: "324px",
    tiny: "467px",
    mobile: "767px",
    medium: "991px",
    large: "1081px",
    desktop: "1224px",
    mediumDesktop: "1440px",
  },
  boxShadow: "0px 4px 12px rgba(186, 199, 213, 0.5)",
};

const colorNames = {
  white: "#FFFFFF",
  whisper: "#F5F5FA",
  silver: "#C4C4C4",
  mystic: "#E4E6F0",
  waterloo: "#7E839A",
  yellow: "#FCD420",
  lightBlue: "#D6E4FF",
  dodgerBlue: "#3377FF",
  blueRibbon: "#0055FF",
  blue: "#0044CC",
  woodSmoke: "#18181B",
  black: "#000000",
};

export const theme = {
  ...common,
  colors: {
    primary: colorNames.woodSmoke,
    base: colorNames.white,
    secondary: colorNames.waterloo,
    disabled: colorNames.mystic,
    background: colorNames.whisper,
    star: colorNames.yellow,
    unknown: colorNames.silver,
    button: colorNames.lightBlue,
    special: colorNames.blue,
    specialHover: colorNames.dodgerBlue,
    specialActive: colorNames.blueRibbon,
    backdrop: colorNames.black,
  },
};
