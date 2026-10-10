import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, type Theme } from '@/theme';
import { GlobalStyle } from '@/theme/globalStyle';

type Mode = 'light' | 'dark' | 'system';

type Ctx = { mode: Mode; setMode: (m: Mode) => void; theme: Theme };
const ThemeCtx = createContext<Ctx | null>(null);

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem('theme') as Mode) ?? 'system',
  );

  const resolved = useMemo<'light' | 'dark'>(() => {
    if (mode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return mode;
  }, [mode]);

  const theme = resolved === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem('theme', mode);
    document.documentElement.dataset.theme = resolved;
  }, [mode, resolved]);

  return (
    <ThemeCtx.Provider value={{ mode, setMode, theme }}>
      <SCThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </SCThemeProvider>
    </ThemeCtx.Provider>
  );
}

export const useThemeMode = () => {
  const ctx = useContext(ThemeCtx);
  if (!ctx)
    throw new Error('useThemeMode must be used inside AppThemeProvider');
  return ctx;
};
