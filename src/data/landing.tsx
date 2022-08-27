import React from 'react';
import { StaticImageData } from 'next/image';

import OsfixCRMImage from '/public/projects/osfix_crm.webp';
import DevHubImage from '/public/projects/devhub.webp';
import OceanImage from '/public/projects/ocean_threejs.webp';
import ReactBaseImage from '/public/projects/react_base.webp';
import RepoMDImage from '/public/projects/repo_md.webp';
import TechStackImage from '/public/projects/techstack.webp';
import SpotifyImage from '/public/projects/spotify_stats.webp';
import WeatherImage from '/public/projects/weather_app.webp';

export const projectsIds = [
  'crm',
  'repo.md',
  'devhub',
  'techstack',
  'react-base',
  'weather-app',
  'spotify',
  'ocean'
] as const;

export type projectType = {
  id: typeof projectsIds[number];
  href: string;
  image: StaticImageData;
  stack?: string[];
  position: number;
};

export const projectsList: projectType[] = [
  {
    id: 'crm',
    href: 'https://github.com/ilyasudakov/CRM_frontend',
    image: OsfixCRMImage,
    stack: ['React', 'SCSS', 'Jest', 'RTL'],
    position: 1
  },
  {
    id: 'repo.md',
    href: 'https://github.com/ilyasudakov/repo.md',
    image: RepoMDImage,
    stack: ['NextJS', 'TS', 'NextAuth', 'TW', 'Jest', 'RTL'],
    position: 2
  },
  {
    id: 'devhub',
    href: 'https://github.com/ilyasudakov/dev-hub',
    image: DevHubImage,
    stack: ['React', 'TS', 'Redux', 'Redux-Toolkit', 'TW'],
    position: 3
  },
  {
    id: 'techstack',
    href: 'https://github.com/ilyasudakov/tech-stack',
    image: TechStackImage,
    stack: ['Redux-Toolkit', 'RTK Query', 'TS', 'TW'],
    position: 4
  },
  {
    id: 'react-base',
    href: 'https://github.com/ilyasudakov/basic-react-boilerplate',
    image: ReactBaseImage,
    stack: ['React', 'Webpack 5', 'SCSS', 'Jest/RTL'],
    position: 5
  },
  {
    id: 'weather-app',
    href: 'https://github.com/ilyasudakov/weatherApp',
    image: WeatherImage,
    stack: ['React', 'SCSS'],
    position: 6
  },
  {
    id: 'spotify',
    href: 'https://github.com/ilyasudakov/music_app',
    image: SpotifyImage,
    stack: ['React', 'SCSS'],
    position: 7
  },
  {
    id: 'ocean',
    href: 'https://github.com/ilyasudakov/ThreeJS_test',
    image: OceanImage,
    stack: ['React', 'React-Three-Fiber'],
    position: 8
  }
];

export const SmallTextPeriod: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <span className="text-sm font-normal text-stone-500 dark:text-stone-300">
      {children}
    </span>
  );
};
