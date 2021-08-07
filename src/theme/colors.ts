import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#4fe8e3",
  primaryBright: "#4fe8e3",
  primaryDark: "#4fe8e3",
  secondary: "#FFFFFF",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFFFFF",
  backgroundDisabled: "#4fe8e3",
  contrast: "#1c2c3c",
  invertedContrast: "#1d505c",
  input: "#1c2c3c",
  tertiary: "#EFF4F5",
  text: "#FFFFFF",
  textDisabled: "#FFFFFF",
  textSubtle: "#FFFFFF",
  borderColor: "#4fe8e3",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#1e293b",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
