type fontKeysType = "title" | "subTitle" | "body" | "caption";

type fontWeightType =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type fontType = {
  [key in fontKeysType]: {
    [key: string]: {
      fontSize: number;
      fontWeight: fontWeightType;
      lineHeight: number;
    };
  };
};
export const theme = {
  color: {
    white: "#ffffff",
    black: "#000000",
    backgroundblack: "#181818",
    YELLOW: "#FFEC3E",
    GRAY: {
      50: "#F1F1F2",
      100: "#DDDCDD",
      200: "#C6C5C7",
      300: "#AFADB1",
      400: "#9D9CA0",
      500: "#8C8A8F",
      600: "#848287",
      700: "#79777C",
      800: "#6F6D72",
    },
  },
};

export const font: fontType = {
  title: {
    "40": {
      fontSize: 40,
      fontWeight: "600",
      lineHeight: 52,
    },
    "36": {
      fontSize: 36,
      fontWeight: "600",
      lineHeight: 48,
    },
    "32": {
      fontSize: 32,
      fontWeight: "600",
      lineHeight: 44,
    },
    "24-bold": {
      fontSize: 24,
      fontWeight: "600",
      lineHeight: 36,
    },
    "26-medium": {
      fontSize: 26,
      fontWeight: "500",
      lineHeight: 36,
    },
  },
  subTitle: {
    "20-bold": {
      fontSize: 20,
      fontWeight: "700",
      lineHeight: 36,
    },
    "20-medium": {
      fontSize: 20,
      fontWeight: "500",
      lineHeight: 24,
    },
    "18-bold": {
      fontSize: 18,
      fontWeight: "700",
      lineHeight: 22,
    },
    "18-semibold": {
      fontSize: 18,
      fontWeight: "500",
      lineHeight: 22,
    },
    "18-medium": {
      fontSize: 18,
      fontWeight: "500",
      lineHeight: 22,
    },
    "18-regular": {
      fontSize: 18,
      fontWeight: "400",
      lineHeight: 22,
    },
  },
  body: {
    "16-semibold": {
      fontSize: 16,
      fontWeight: "600",
      lineHeight: 20,
    },
    "16-medium": {
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 20,
    },
    "16-regular": {
      fontSize: 16,
      fontWeight: "400",
      lineHeight: 20,
    },
    "14-semibold": {
      fontSize: 14,
      fontWeight: "600",
      lineHeight: 18,
    },
    "14-medium": {
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 18,
    },
    "14-regular": {
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 18,
    },
  },
  caption: {
    "12-medium": {
      fontSize: 12,
      fontWeight: "500",
      lineHeight: 14,
    },
    "12-regular": {
      fontSize: 12,
      fontWeight: "400",
      lineHeight: 14,
    },
  },
};
