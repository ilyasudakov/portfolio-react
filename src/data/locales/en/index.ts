import {
  ABOUT_ID,
  HEADER_ID,
  landingPageSectionsType,
  PROJECTS_ID,
  TITLE_ID
} from '../types';

const en: landingPageSectionsType = {
  header: { id: HEADER_ID, sourceCodeLink: 'Source code' },
  title: {
    id: TITLE_ID,
    fullName: 'Ilya Sudakov',
    position: 'React developer'
  },
  about: {
    id: ABOUT_ID,
    title: 'About me',
    text1:
      'React developer based in Saint-Petersburg, Russia, 24 y.o. Currently \
      looking for a position as a React/Web developer. You can check out ',
    link1: 'my portfolio',
    link2: ' download CV.',
    text2: 'or',
    text3:
      'Searching an opportunity to get a real world dev expirience, working в\
      in team, relevant feedback for improving my skills and\
      acquiring new knowledge. Quick at getting a grip at new things, love to learn new things.'
  },
  projects: {
    id: PROJECTS_ID,
    title: 'Projects',
    list: {
      crm: {
        title: 'CRM/ERP system',
        description: 'Frontend for production management system'
      },
      'react-base': {
        title: 'react-base',
        description: 'Simple template for React projects'
      },
      techstack: {
        title: 'TechStack',
        description: 'Build your stack using Github repos'
      },
      'repo.md': {
        title: 'repo.md',
        description: 'Your Github repo as a Markdown blog'
      },
      devhub: {
        title: 'Dev Hub',
        description:
          "Productivity and articles by interest. \
          Todo list, custom user' link list, Medium articles by interest"
      },
      'weather-app': {
        title: 'Weather App',
        description:
          "Web app for viewing weather info \
          by user's location with ability to view forecast for 7 days"
      },
      spotify: {
        title: 'Spotify Statistics',
        description:
          'Web app for viewing\
          favorite songs/artists, and also recomendations list in Spotify'
      },
      ocean: {
        title: 'Ocean',
        description: 'Simple experiment using ThreeJS'
      }
    }
  }
};

export default en;
