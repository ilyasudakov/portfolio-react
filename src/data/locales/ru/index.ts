import {
  ABOUT_ID,
  HEADER_ID,
  landingPageSectionsType,
  PROJECTS_ID,
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
  }
};
export default ru;
