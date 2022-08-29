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

const header: landingPageSectionsType[typeof HEADER_ID] = {
  id: HEADER_ID,
  sourceCodeLink: 'Source code'
};
const title: landingPageSectionsType[typeof TITLE_ID] = {
  id: TITLE_ID,
  fullName: 'Ilya Sudakov',
  position: 'React developer'
};
const about: landingPageSectionsType[typeof ABOUT_ID] = {
  id: ABOUT_ID,
  title: 'About me',
  text1:
    'React developer based in Saint-Petersburg, Russia, 24 y.o. Currently \
    looking for a position as a React/Frontend developer. You can check out ',
  link1: 'my portfolio',
  link2: ' download CV.',
  text2: 'or',
  text3:
    'Searching an opportunity to get a real world dev expirience, working \
    in team, relevant feedback for improving my skills and\
    acquiring new knowledge. Quick at getting a grip at new things, love to learn new things.'
};
const projects: landingPageSectionsType[typeof PROJECTS_ID] = {
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
};
const bio: landingPageSectionsType[typeof BIO_ID] = {
  id: BIO_ID,
  title: 'Bio',
  list: [
    {
      period: <span>2016 — 2020</span>,
      description:
        'Software Engineer. The Bonch-Bruevich Saint Petersburg State University of Telecommunications. Bachelor degree'
    },
    {
      period: (
        <span>
          2020 — 2021 <SmallTextPeriod>march</SmallTextPeriod>
        </span>
      ),
      description:
        "Company 'Osfix'. Frontend developer of CRM/ERP-system, used on small production factory."
    },
    {
      period: (
        <span>
          2021 <SmallTextPeriod>may</SmallTextPeriod> — 2022{' '}
          <SmallTextPeriod>may</SmallTextPeriod>
        </span>
      ),
      description: 'Service on conscription'
    }
  ]
};

const skills: landingPageSectionsType[typeof SKILLS_ID] = {
  id: SKILLS_ID,
  title: 'Skills',
  list: [
    {
      setName: 'Frontend',
      skills: [
        'React',
        'Context API',
        'JavaScript',
        'TypeScript',
        'NextJS',
        'Redux',
        'Jest/RTL',
        'Redux Toolkit',
        'RTK Query',
        'TailwindCSS',
        'NextAuth',
        'CSS/SCSS',
        'HTML',
        'API',
        'Webpack',
        'Vite'
      ]
    },
    {
      setName: 'Tools',
      skills: ['Git', 'GitHub', 'Github Actions', 'Figma', 'Trello']
    },
    {
      setName: 'Languages',
      skills: ['Russian - native', 'English - B2']
    }
  ]
};
const contacts: landingPageSectionsType[typeof CONTACTS_ID] = {
  id: CONTACTS_ID,
  title: 'Contacts'
};
const footer: landingPageSectionsType[typeof FOOTER_ID] = {
  id: FOOTER_ID,
  madeBy: '© 2022 Ilya Sudakov.',
  madeWith: 'Made with NextJS, TypeScript, Tailwind.'
};
const en: landingPageSectionsType = {
  header,
  title,
  about,
  projects,
  bio,
  skills,
  contacts,
  footer
};

export default en;
