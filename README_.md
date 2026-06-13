# Apple-com

Учебный проект. Копия главной [https://www.apple.com](https://www.apple.com).

***Deployment on Vercel***: [https://apple-com-zeta.vercel.app/](https://apple-com-zeta.vercel.app/)

[See Demo](https://apple-com-zeta.vercel.app/)

## Технологии

- **Next.js 14** - React фреймворк
- **Media response** - Разные картинки в зависимости от ширины экрана
- Два Swiper slider`s
- Видео в слайдах
- Без глобального адаптива. В основном desktop

## Установка и запуск

### 1. Установка приложения на Next.js

1. Create a new Next.js app named my-app
2. cd my-app and start the dev server.
3. [Visit http://localhost:3000](http://localhost:3000).

```bash
npx create-next-app@latest apple-slider --yes
npx create-next-app@latest my-app --yes
cd my-app
npm run dev
```

`--yes` skips prompts using saved preferences or defaults. The default setup enables TypeScript, Tailwind, App Router, and Turbopack, with import alias @/*.

### 2. Установка зависимостей

```bash
npm install
npm i swiper  // Установка swiper slider
```

### 3. Запуск приложения

```bash
npm run dev
```

### 4. next/font локальных фонтов

```bash
npm i @next/font
```

### 5. Сборка для продакшена

```bash
npm run build
npm start
```

Приложение будет доступно по адресу: `http://localhost:3000`
 _______________________________

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
