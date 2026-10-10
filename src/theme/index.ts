import { lightColors, darkColors, lightShadows, darkShadows } from './semantic';
import * as tokens from './tokens';
import { button, card, container, typography, navLink } from './components';
import type { Theme } from './types';

const shared = {
  spacing: tokens.spacing,
  radii: tokens.radii,
  fontSize: tokens.fontSize,
  lineHeight: tokens.lineHeight,
  fontWeight: tokens.fontWeight,
  fontFamily: tokens.fontFamily,
  zIndex: tokens.zIndex,
  breakpoints: tokens.breakpoints,
  duration: tokens.duration,
  easing: tokens.easing,
  components: { button, card, container, typography, navLink },
} as const;

export const lightTheme: Theme = {
  mode: 'light',
  colors: lightColors,
  shadows: lightShadows,
  ...shared,
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: darkColors,
  shadows: darkShadows,
  ...shared,
};

export type { Theme };
