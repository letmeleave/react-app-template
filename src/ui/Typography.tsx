import styled, { css } from 'styled-components';
import type { Theme } from '@/theme';

type Variant = keyof Theme['components']['typography'];

const tag: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  small: 'span',
  code: 'code',
};

export const Text = styled.p<{ variant?: Variant; muted?: boolean }>`
  margin: 0;
  ${({ theme, variant = 'body' }) =>
    css(theme.components.typography[variant] as any)};
  ${({ theme, muted }) =>
    muted &&
    css`
      color: ${theme.colors.text.muted};
    `};
`;
