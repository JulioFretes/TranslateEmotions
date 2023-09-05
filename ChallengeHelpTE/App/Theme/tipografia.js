import { PixelRatio } from "react-native";

const scaleFont = (size) => size * PixelRatio.getFontScale();

export const FONT_SIZE_48 = scaleFont(48);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);