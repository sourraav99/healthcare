import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const fontScale = PixelRatio.getFontScale();

export const useFontScale = (size) => size / fontScale;

export const usePercentageHeight = (percentage) => {
  return (percentage / 100) * height;
};

export const usePercentageWidth = (percentage) => {
  return (percentage / 100) * width;
};

const fontSizes = {
  normalText : useFontScale(13),
  medium: useFontScale(15),
  large: useFontScale(21),
  xlarge: useFontScale(37),
};


export { width, height, fontSizes };