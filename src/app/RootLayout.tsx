import { NavLink as RRNavLink, Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Container } from '@/ui/Container';
import { useThemeMode } from './providers/ThemeProvider';
import { useTranslation } from 'react-i18next';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background: ${({ theme }) => theme.colors.bg.page};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
  backdrop-filter: blur(8px);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  height: 64px;
`;

const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 2px;
  }
`;

const Link = styled(RRNavLink)`
  ${({ theme }) => css(theme.components.navLink.base as any)};
  &:hover {
    ${({ theme }) => css(theme.components.navLink.hover as any)};
  }
  &.active {
    ${({ theme }) => css(theme.components.navLink.active as any)};
  }
`;

export function RootLayout() {
  const { t, i18n } = useTranslation();
  const { mode, setMode } = useThemeMode();

  return (
    <>
      <Header>
        <Container>
          <Nav>
            <strong>Your Name</strong>
            <NavList>
              <li>
                <Link to='/'>{t('nav.about')}</Link>
              </li>
              <li>
                <Link to='/timeline'>{t('nav.timeline')}</Link>
              </li>
              <li>
                <Link to='/blog'>{t('nav.blog')}</Link>
              </li>
              <li>
                <Link to='/contacts'>{t('nav.contacts')}</Link>
              </li>
            </NavList>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
              >
                {mode === 'dark' ? '☀️' : '🌙'}
              </button>
              <button
                onClick={() =>
                  i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
                }
              >
                {i18n.language.toUpperCase()}
              </button>
            </div>
          </Nav>
        </Container>
      </Header>
      <main style={{ padding: '32px 0' }}>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
