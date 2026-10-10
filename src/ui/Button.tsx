import styled, { css } from 'styled-components';
import type { Theme } from '@/theme';

type Variant = keyof Theme['components']['button']['variants'];
type Size = keyof Theme['components']['button']['sizes'];

type Props = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
};

export const Button = styled.button<Props>`
  ${({ theme }) => css(theme.components.button.base as any)};

  ${({ size = 'md', theme }) =>
    css(theme.components.button.sizes[size] as any)};

  ${({ variant = 'primary', theme }) => {
    const v = theme.components.button.variants[variant];
    return css`
      background: ${resolve(theme, v.bg)};
      color: ${resolve(theme, v.color)};
      border-color: ${v.border === 'transparent'
        ? 'transparent'
        : resolve(theme, v.border)};

      &:hover {
        background: ${resolve(theme, v.bgHover)};
      }
      &:active {
        background: ${resolve(theme, v.bgActive)};
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;
  }}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

// утилита: превращает 'action.primary' в theme.colors.action.primary
function resolve(theme: Theme, path: string): string {
  const parts = path.split('.');
  let cur: any = theme.colors;
  for (const p of parts) cur = cur?.[p];
  return cur ?? path;
}
