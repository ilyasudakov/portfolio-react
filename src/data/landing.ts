type projectsListTypes = {
  projectName: string;
  href: string;
  description: string;
  image: string;
}[];

export const projectsList: projectsListTypes = [
  {
    projectName: "CRM/ERP система",
    href: "https://github.com/ilyasudakov/CRM_frontend",
    description: "фронтенд для системы управления малым предприятием",
    image: "/projects/repo.md.png",
  },
  {
    projectName: "CMS Блог",
    href: "https://github.com/ilyasudakov/cms_blog",
    description:
      "Блог с авторизацией, возможностью создавать собственные посты (TypeScript, Next.js, NextAuth.js, Tailwind)",
    image: "/projects/repo.md.png",
  },
  {
    projectName: "react-base",
    href: "https://github.com/ilyasudakov/basic-react-boilerplate",
    description:
      "простой шаблон для React-проектов (React 17 + Webpack 5 + SCSS + Jest/RTL)",
    image: "/projects/repo.md.png",
  },
  {
    projectName: "Weather App",
    href: "https://github.com/ilyasudakov/weatherApp",
    description:
      "приложение для просмотра погоды по геолокации пользователя, с возможностью просмотра прогноза на 7 дней",
    image: "/projects/repo.md.png",
  },
  {
    projectName: "Spotify Statistics",
    href: "https://github.com/ilyasudakov/music_app",
    description:
      "приложение для просмотра любимых песен/исполнителей, а также получение списка рекомендаций в Spotify",
    image: "/projects/repo.md.png",
  },
  {
    projectName: "Torrent",
    href: "https://github.com/ilyasudakov/torrent_app",
    description:
      "позволяет скачивать раздачи с помощью торрент файлов, узнать прогресс скачивания файлов (React + WebTorrent)",
    image: "/projects/repo.md.png",
  },
  {
    projectName: "Ocean",
    href: "https://github.com/ilyasudakov/ThreeJS_test",
    description: "простой эксперимент с использованием ThreeJS",
    image: "/projects/repo.md.png",
  },
];
