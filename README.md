# Portfolio Website - Stefanus Tan Jaya

This is my personal portfolio website, built to introduce who I am, showcase selected projects, highlight organizational and academic experiences, and provide a simple way to contact me. The site is designed as a focused single-page portfolio with a cinematic opening hero, structured profile section, project carousel, experience cards, and contact form.

The project was adapted from the Magic Portfolio template by Once UI and redesigned into a custom identity for myself.

## Features

- Full-screen opening hero with an optimized WebM background video
- Single-page navigation for About, Projects, Experiences, and Contact
- About Me section with education, interests, and music previews
- Project slideshow with synchronized image, description, tech stack, and links
- Experience cards with organization logos and concise descriptions
- Contact form that opens the user's email client with a prefilled message
- Responsive dark-mode layout for desktop and mobile

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Once UI](https://once-ui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Development Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build the production version:

```bash
npm run build
```

## Project Structure

```text
src/app/page.tsx                    Main single-page portfolio
src/app/page.module.scss            Page-level layout and section styling
src/components/about                About section components
src/components/contact              Contact form component
src/components/projects             Project slideshow component
src/resources                       Site metadata, theme, icons, and content config
public/media                        Portfolio images, logos, audio, and project assets
public/videos                       Optimized hero background video
```

## Credits

- Portfolio template foundation: [Once UI Magic Portfolio](https://once-ui.com/products/magic-portfolio)
- Design inspiration: [Daniel Liman Portfolio](https://dnlmn.vercel.app/)
- Background video: [Firefly Astral Express Train Honkai Star Rail Live Wallpaper](https://moewalls.com/anime/firefly-astral-express-train-honkai-star-rail-live-wallpaper/)
- Firefly sticker: [Honkai: Star Rail Wiki - Sticker PPG 15 Firefly 03](https://honkai-star-rail.fandom.com/wiki/File:Sticker_PPG_15_Firefly_03.png)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)

## License

This project is a personal portfolio built on top of Once UI Magic Portfolio. Please refer to the original Once UI license terms for template usage and attribution requirements.