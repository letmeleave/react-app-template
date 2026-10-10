import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import { AboutPage } from '@/pages/AboutPage';
import { ContactsPage } from '@/pages/ContactsPage';
import { TimelinePage } from '@/pages/TimelinePage';
import { BlogPage } from '@/pages/BlogPage';
import { ArticlePage } from '@/pages/ArticlePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: 'contacts', element: <ContactsPage /> },
      { path: 'timeline', element: <TimelinePage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <ArticlePage /> },
    ],
  },
]);
