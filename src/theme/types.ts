import type {
  palette,
  spacing,
  radii,
  fontSize,
  lineHeight,
  fontWeight,
  fontFamily,
  shadows,
  zIndex,
  breakpoints,
  duration,
  easing,
} from './tokens';
import type { lightColors, darkColors, darkShadows } from './semantic';
import type {
  button,
  card,
  container,
  typography,
  navLink,
} from './components';

export type Theme = {
  mode: 'light' | 'dark';
  colors: typeof lightColors | typeof darkColors;
  spacing: typeof spacing;
  radii: typeof radii;
  fontSize: typeof fontSize;
  lineHeight: typeof lineHeight;
  fontWeight: typeof fontWeight;
  fontFamily: typeof fontFamily;
  shadows: typeof shadows | typeof darkShadows;
  zIndex: typeof zIndex;
  breakpoints: typeof breakpoints;
  duration: typeof duration;
  easing: typeof easing;
  components: {
    button: typeof button;
    card: typeof card;
    container: typeof container;
    typography: typeof typography;
    navLink: typeof navLink;
  };
};
