```
src/
├── app/
│ ├── App.tsx
│ ├── router.tsx
│ └── providers/
│ ├── ThemeProvider.tsx
│ └── I18nProvider.tsx
├── theme/
│ ├── tokens.ts # примитивы: палитра, размеры, шрифты
│ ├── components.ts # объекты стилей компонентов
│ ├── globalStyle.ts
│ ├── types.ts
│ └── index.ts
├── ui/ # мини ui-kit
│ ├── Button/
│ ├── Card/
│ ├── Container/
│ ├── Stack/
│ ├── Typography/
│ └── index.ts
├── features/
│ ├── about/
│ ├── contacts/
│ ├── timeline/
│ └── blog/
├── shared/
│ ├── hooks/
│ │ └── useMediaQuery.ts
│ └── i18n/
│ ├── index.ts
│ └── locales/
├── pages/
│ ├── HomePage.tsx
│ ├── AboutPage.tsx
│ ├── ContactsPage.tsx
│ ├── TimelinePage.tsx
│ ├── BlogPage.tsx
│ └── ArticlePage.tsx
└── index.tsx
```
