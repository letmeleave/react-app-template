import styled from 'styled-components';
import type { Theme } from '@/theme';

export const Container = styled.div<{
  size?: keyof Theme['components']['container']['sizes'];
}>`
  ${({ theme }) => theme.components.container.base};
  max-width: ${({ theme, size = 'lg' }) =>
    theme.components.container.sizes[size]};
`;
