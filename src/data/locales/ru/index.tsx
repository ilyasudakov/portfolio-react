import { SmallTextPeriod } from '../../landing';
import {
  ABOUT_ID,
  BIO_ID,
  CONTACTS_ID,
  FOOTER_ID,
  HEADER_ID,
  landingPageSectionsType,
  PROJECTS_ID,
  SKILLS_ID,
  TITLE_ID
} from '../types';

const ru: landingPageSectionsType = {
  header: { id: HEADER_ID, sourceCodeLink: 'Посмотреть код' },
  title: {
    id: TITLE_ID,
    fullName: 'Илья Судаков',
    position: 'React разработчик'
  },
  about: {
    id: ABOUT_ID,
    title: 'Обо мне',
    text1:
      'React-разработчик из Санкт-Петербурга, 24 года. В данный момент ищу \
    работу по вакансии junior-разработчик. Вы можете посмотреть',
    link1: 'мое портфолио',
    link2: ' скачать CV.',
    text2: 'или',
    text3:
      'Ищу возможности получения реального опыта разработки, работы в\
    команде, полезного фидбека для улучшения своих навыков и получения\
    новых знаний. Быстро обучаем, люблю учиться.'
  },
  projects: {
    id: PROJECTS_ID,
    title: 'Проекты',
    list: {
      crm: {
        title: 'CRM/ERP система',
        description: 'Фронтенд для системы управления малым предприятием'
      },
      'react-base': {
        title: 'react-base',
        description: 'Простой шаблон для React-проектов'
      },
      techstack: {
        title: 'TechStack',
        description: 'Соберите свой стек из Github репозиториев'
      },
      'repo.md': {
        title: 'repo.md',
        description: 'Ваш Github репозиторий как Markdown блог'
      },
      devhub: {
        title: 'Dev Hub',
        description:
          'Продуктивность и тематические статьи на одном экране. \
        Todo list, список кастомных пользовательских ссылок, Тематические статьи Medium'
      },
      'weather-app': {
        title: 'Weather App',
        description:
          'Приложение для просмотра погоды по \
          геолокации пользователя, с возможностью просмотра прогноза на 7 дней'
      },
      spotify: {
        title: 'Spotify Statistics',
        description:
          'Приложение для просмотра\
         любимых песен/исполнителей, а также получение списка рекомендаций в Spotify'
      },
      ocean: {
        title: 'Ocean',
        description: 'Простой эксперимент с использованием ThreeJS'
      }
    }
  },
  bio: {
    id: BIO_ID,
    title: 'Биография',
    list: [
      {
        period: <span>2016 — 2020</span>,
        description:
          'Программная инженерия. Санкт-Петербургский Государственный Университет Телекоммуникаций им. М.А. Бонч-Бруевича. Бакалавр'
      },
      {
        period: (
          <span>
            2020 — 2021 <SmallTextPeriod>март</SmallTextPeriod>
          </span>
        ),
        description:
          'Компания Osfix. Фронтенд-разработчик CRM/ERP-системы, используемой на малом предприятии.'
      },
      {
        period: (
          <span>
            2021 <SmallTextPeriod>май</SmallTextPeriod> — 2022{' '}
            <SmallTextPeriod>май</SmallTextPeriod>
          </span>
        ),
        description: 'Служба по призыву'
      }
    ]
  },
  skills: {
    id: SKILLS_ID,
    title: 'Навыки',
    list: [
      {
        setName: 'Фронтенд',
        skills: [
          'React',
          'Context API',
          'JavaScript',
          'TypeScript',
          'NextJS',
          'Redux',
          'Redux Toolkit',
          'RTK Query',
          'TailwindCSS',
          'NextAuth',
          'CSS/SCSS',
          'HTML',
          'Работа с API',
          'Webpack',
          'Vite'
        ]
      },
      {
        setName: 'Инструменты',
        skills: ['Git', 'GitHub', 'Github Actions', 'Figma', 'Trello']
      },
      {
        setName: 'Языки',
        skills: ['Русский - родной', 'Английский - B1']
      }
    ]
  },
  contacts: {
    id: CONTACTS_ID,
    title: 'Контакты'
  },
  footer: {
    id: FOOTER_ID,
    madeBy: '© 2022 Илья Судаков.',
    madeWith: 'Сделано с NextJS, TypeScript, Tailwind.'
  }
};
export default ru;
