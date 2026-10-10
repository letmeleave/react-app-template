import {
  spacing,
  radii,
  fontSize,
  fontWeight,
  lineHeight,
  duration,
  easing,
  breakpoints,
  fontFamily,
} from './tokens';

export const button = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.medium,
    border: '1px solid transparent',
    borderRadius: radii.md,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: `background-color ${duration.fast} ${easing.standard}, color ${duration.fast} ${easing.standard}, border-color ${duration.fast} ${easing.standard}`,
    whiteSpace: 'nowrap',
    userSelect: 'none',
  },
  sizes: {
    sm: {
      padding: `${spacing.xs} ${spacing.sm}`,
      fontSize: fontSize.sm,
      minHeight: '32px',
    },
    md: {
      padding: `${spacing.sm} ${spacing.md}`,
      fontSize: fontSize.md,
      minHeight: '40px',
    },
    lg: {
      padding: `${spacing.md} ${spacing.lg}`,
      fontSize: fontSize.lg,
      minHeight: '48px',
    },
  },
  variants: {
    primary: {
      bg: 'action.primary',
      bgHover: 'action.primaryHover',
      bgActive: 'action.primaryActive',
      color: 'action.onPrimary',
      border: 'transparent',
    },
    secondary: {
      bg: 'action.secondary',
      bgHover: 'action.secondaryHover',
      bgActive: 'action.secondaryHover',
      color: 'text.primary',
      border: 'transparent',
    },
    outline: {
      bg: 'transparent',
      bgHover: 'bg.subtle',
      bgActive: 'bg.subtle',
      color: 'text.primary',
      border: 'border.default',
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'bg.subtle',
      bgActive: 'bg.subtle',
      color: 'text.primary',
      border: 'transparent',
    },
  },
} as const;

export const card = {
  base: {
    background: 'bg.surface',
    border: '1px solid',
    borderColor: 'border.subtle',
    borderRadius: radii.lg,
    padding: spacing.lg,
    transition: `box-shadow ${duration.normal} ${easing.standard}, transform ${duration.normal} ${easing.standard}`,
  },
  interactive: {
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'lg',
      transform: 'translateY(-2px)',
    },
  },
} as const;

export const container = {
  base: {
    width: '100%',
    marginInline: 'auto',
    paddingInline: spacing.md,
  },
  sizes: {
    sm: '640px',
    md: '960px',
    lg: '1200px',
    xl: '1400px',
  },
} as const;

export const typography = {
  h1: {
    fontSize: fontSize.xxxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: '-0.02em',
    [`@media (min-width: ${breakpoints.md})`]: { fontSize: fontSize.display },
  },
  h2: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.tight,
    letterSpacing: '-0.01em',
    [`@media (min-width: ${breakpoints.md})`]: { fontSize: fontSize.xxxl },
  },
  h3: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.tight,
  },
  body: {
    fontSize: fontSize.md,
    lineHeight: lineHeight.normal,
  },
  small: {
    fontSize: fontSize.sm,
    lineHeight: lineHeight.normal,
  },
  code: {
    fontFamily: fontFamily.mono,
    fontSize: fontSize.sm,
    padding: `2px 6px`,
    borderRadius: radii.xs,
    background: 'bg.subtle',
  },
} as const;

export const navLink = {
  base: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    color: 'text.secondary',
    textDecoration: 'none',
    padding: `${spacing.xs} ${spacing.sm}`,
    borderRadius: radii.sm,
    transition: `color ${duration.fast} ${easing.standard}, background-color ${duration.fast} ${easing.standard}`,
  },
  active: {
    color: 'text.accent',
    background: 'bg.subtle',
  },
  hover: {
    color: 'text.primary',
    background: 'bg.subtle',
  },
} as const;
