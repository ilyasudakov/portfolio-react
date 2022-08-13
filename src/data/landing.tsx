import React from 'react';

type projectsListTypes = {
  projectName: string;
  href: string;
  description: string;
  image: string;
  stack?: string[];
  position: number;
}[];

export const projectsList: projectsListTypes = [
  {
    projectName: 'CRM/ERP система',
    href: 'https://github.com/ilyasudakov/CRM_frontend',
    description: 'Фронтенд для системы управления малым предприятием',
    image: '/projects/osfix_crm.png',
    stack: ['React', 'SCSS', 'Jest', 'RTL'],
    position: 1,
  },
  {
    projectName: 'repo.md',
    href: 'https://github.com/ilyasudakov/repo.md',
    description: 'Ваш Github репозиторий как Markdown блог',
    image: '/projects/repo_md.png',
    stack: ['NextJS', 'TS', 'NextAuth', 'TW', 'Jest', 'RTL'],
    position: 2,
  },
  {
    projectName: 'CMS Блог',
    href: 'https://github.com/ilyasudakov/cms_blog',
    description:
      'Блог с авторизацией, возможностью создавать собственные посты',
    image: '/projects/cms_blog.png',
    stack: ['NextJS', 'TS', 'NextAuth', 'TW'],
    position: 3,
  },
  {
    projectName: 'TechStack',
    href: 'https://github.com/ilyasudakov/tech-stack',
    description: 'Соберите свой стек из Github репозиториев',
    image: '/projects/techstack.png',
    stack: ['Redux-Toolkit', 'RTK Query', 'TS', 'TW'],
    position: 4,
  },
  {
    projectName: 'react-base',
    href: 'https://github.com/ilyasudakov/basic-react-boilerplate',
    description: 'Простой шаблон для React-проектов',
    image: '/projects/react_base.png',
    stack: ['React', 'Webpack 5', 'SCSS', 'Jest/RTL'],
    position: 5,
  },
  {
    projectName: 'Weather App',
    href: 'https://github.com/ilyasudakov/weatherApp',
    description:
      'Приложение для просмотра погоды по геолокации пользователя, с возможностью просмотра прогноза на 7 дней',
    image: '/projects/weather_app.png',
    stack: ['React', 'SCSS'],
    position: 6,
  },
  {
    projectName: 'Spotify Statistics',
    href: 'https://github.com/ilyasudakov/music_app',
    description:
      'Приложение для просмотра любимых песен/исполнителей, а также получение списка рекомендаций в Spotify',
    image: '/projects/spotify_stats.png',
    stack: ['React', 'SCSS'],
    position: 7,
  },
  {
    projectName: 'Ocean',
    href: 'https://github.com/ilyasudakov/ThreeJS_test',
    description: 'Простой эксперимент с использованием ThreeJS',
    image: '/projects/ocean_threejs.png',
    stack: ['React', 'React-Three-Fiber'],
    position: 8,
  },
];

const SmallTextPeriod: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <span className="font-normal text-stone-300 text-sm">{children}</span>;
};

type bioPeriodsTypes = { period: React.ReactNode; description: string }[];

export const bioPeriods: bioPeriodsTypes = [
  {
    period: <span>2016 — 2020</span>,
    description:
      'Программная инженерия. Санкт-Петербургский Государственный Университет Телекоммуникаций им. М.А. Бонч-Бруевича. Бакалавр',
  },
  {
    period: (
      <span>
        2020 — 2021 <SmallTextPeriod>март</SmallTextPeriod>
      </span>
    ),
    description:
      'Компания Osfix. Фронтенд-разработчик CRM/ERP-системы, используемой на малом предприятии.',
  },
  {
    period: (
      <span>
        2021 <SmallTextPeriod>май</SmallTextPeriod> — 2022{' '}
        <SmallTextPeriod>май</SmallTextPeriod>
      </span>
    ),
    description: 'Служба по призыву',
  },
];

type skillsListType = { setName: string; skills: string[] }[];

export const skillsList: skillsListType = [
  {
    setName: 'Фронтенд',
    skills: [
      'React',
      'Context API',
      'JavaScript',
      'TypeScript',
      'NextJS',
      'Redux Toolkit',
      'RTK Query',
      'TailwindCSS',
      'NextAuth',
      'CSS/SCSS',
      'HTML',
      'Работа с API',
      'Webpack',
      'Vite',
    ],
  },
  {
    setName: 'Инструменты',
    skills: ['Git', 'GitHub', 'Github Actions', 'Figma', 'Trello'],
  },
  {
    setName: 'Языки',
    skills: ['Русский - родной', 'Английский - B1'],
  },
];
