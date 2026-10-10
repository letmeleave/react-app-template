import styled from 'styled-components';
import type { Theme } from '@/theme';

type Gap = keyof Theme['spacing'];

export const Stack = styled.div<{ gap?: Gap; direction?: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  gap: ${({ theme, gap = 'md' }) => theme.spacing[gap]};
`;
