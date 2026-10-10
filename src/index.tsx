import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppThemeProvider } from './app/providers/ThemeProvider';
import { router } from './app/router';
import './shared/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  </StrictMode>,
);
