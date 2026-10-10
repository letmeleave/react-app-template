import { createGlobalStyle } from 'styled-components';
import type { Theme } from './types';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  *, *::before, *::after { box-sizing: border-box; }

  html, body, #root { height: 100%; }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: ${({ theme }) => theme.lineHeight.normal};
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.bg.page};
    -webkit-font-smoothing: antialiased;
    transition: background-color ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.standard},
                color ${({ theme }) => theme.duration.normal} ${({ theme }) => theme.easing.standard};
  }

  a { color: ${({ theme }) => theme.colors.text.accent}; text-decoration: none; }
  a:hover { text-decoration: underline; }

  ::selection {
    background: ${({ theme }) => theme.colors.action.primary};
    color: ${({ theme }) => theme.colors.action.onPrimary};
  }
`;
