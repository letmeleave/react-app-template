import type { Theme } from './types';
import { css } from 'styled-components';

type Path<T, K extends string> = K extends `${infer H}.${infer R}`
  ? H extends keyof T
    ? Path<T[H], R>
    : never
  : K extends keyof T
    ? T[K]
    : never;

export const get =
  <K extends string>(path: K) =>
  ({ theme }: { theme: Theme }): Path<Theme, K> => {
    const parts = path.split('.');
    let cur: any = theme;
    for (const p of parts) cur = cur?.[p];
    return cur;
  };

// Шорткаты для частых случаев
export const color = <K extends string>(path: K) =>
  get(`colors.${path}` as any);

export const space =
  <K extends keyof Theme['spacing']>(k: K) =>
  ({ theme }: { theme: Theme }) =>
    theme.spacing[k];

export const radius =
  <K extends keyof Theme['radii']>(k: K) =>
  ({ theme }: { theme: Theme }) =>
    theme.radii[k];

/*
const Title = styled.h1`
  color: ${color('text.primary')};
  font-size: ${({ theme }) => theme.components.typography.h1.fontSize};
  padding: ${space('lg')};
`;
*/

export const media = {
  xs: (...args: any[]) => css`
    @media (min-width: ${({ theme }: any) => theme.breakpoints.xs}) {
      ${css(args as any)}
    }
  `,
  sm: (...args: any[]) => css`
    @media (min-width: ${({ theme }: any) => theme.breakpoints.sm}) {
      ${css(args as any)}
    }
  `,
  md: (...args: any[]) => css`
    @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
      ${css(args as any)}
    }
  `,
  lg: (...args: any[]) => css`
    @media (min-width: ${({ theme }: any) => theme.breakpoints.lg}) {
      ${css(args as any)}
    }
  `,
  xl: (...args: any[]) => css`
    @media (min-width: ${({ theme }: any) => theme.breakpoints.xl}) {
      ${css(args as any)}
    }
  `,
};
