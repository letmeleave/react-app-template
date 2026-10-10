import { palette, shadows } from './tokens';

export const lightColors = {
  bg: {
    page: palette.gray50,
    surface: palette.gray0,
    subtle: palette.gray100,
    inverse: palette.gray900,
  },
  text: {
    primary: palette.gray900,
    secondary: palette.gray700,
    muted: palette.gray600,
    inverse: palette.gray0,
    accent: palette.accent600,
  },
  border: {
    default: palette.gray300,
    subtle: palette.gray200,
    strong: palette.gray400,
    accent: palette.accent500,
  },
  action: {
    primary: palette.accent500,
    primaryHover: palette.accent600,
    primaryActive: palette.accent700,
    onPrimary: palette.gray0,
    secondary: palette.gray100,
    secondaryHover: palette.gray200,
  },
} as const;

export const darkColors = {
  bg: {
    page: palette.gray950,
    surface: palette.gray900,
    subtle: palette.gray800,
    inverse: palette.gray0,
  },
  text: {
    primary: palette.gray100,
    secondary: palette.gray400,
    muted: palette.gray500,
    inverse: palette.gray900,
    accent: palette.accent300,
  },
  border: {
    default: palette.gray700,
    subtle: palette.gray800,
    strong: palette.gray600,
    accent: palette.accent400,
  },
  action: {
    primary: palette.accent400,
    primaryHover: palette.accent300,
    primaryActive: palette.accent500,
    onPrimary: palette.gray950,
    secondary: palette.gray800,
    secondaryHover: palette.gray700,
  },
} as const;

export const lightShadows = shadows;

export const darkShadows = {
  ...shadows,
  md: '0 4px 12px rgba(0,0,0,0.5)',
  lg: '0 8px 24px rgba(0,0,0,0.6)',
  xl: '0 16px 48px rgba(0,0,0,0.7)',
} as const;
