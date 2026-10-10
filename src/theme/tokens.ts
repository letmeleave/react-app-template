export const palette = {
  // Нейтральные
  gray0: '#ffffff',
  gray50: '#f8f9fa',
  gray100: '#f1f3f5',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#868e96',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
  gray950: '#0d0f12',

  // Акцент — приглушённый синий, читаемый в обеих темах
  accent300: '#7cb1ff',
  accent400: '#4f92ff',
  accent500: '#2f7bff',
  accent600: '#1e63e0',
  accent700: '#1450b5',

  // Семантика
  success: '#2f9e44',
  warning: '#f08c00',
  danger: '#e03131',
  info: '#1971c2',
} as const;

export const spacing = {
  xxs: '4px',
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',
} as const;

export const radii = {
  xs: '4px',
  sm: '6px',
  md: '10px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
} as const;

export const fontSize = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '22px',
  xxl: '28px',
  xxxl: '36px',
  display: '48px',
} as const;

export const lineHeight = {
  tight: 1.2,
  normal: 1.5,
  loose: 1.7,
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const fontFamily = {
  sans: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
  mono: `'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, monospace`,
} as const;

export const shadows = {
  xs: '0 1px 2px rgba(0,0,0,0.04)',
  sm: '0 2px 4px rgba(0,0,0,0.06)',
  md: '0 4px 12px rgba(0,0,0,0.08)',
  lg: '0 8px 24px rgba(0,0,0,0.12)',
  xl: '0 16px 48px rgba(0,0,0,0.16)',
} as const;

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
} as const;

export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export const duration = {
  fast: '120ms',
  normal: '200ms',
  slow: '320ms',
} as const;

export const easing = {
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
} as const;
