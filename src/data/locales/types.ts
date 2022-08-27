import { projectsIds } from '../landing';

export const TITLE_ID = 'title';
export const HEADER_ID = 'header';
export const ABOUT_ID = 'about';
export const PROJECTS_ID = 'projects';
export const BIO_ID = 'bio';
export const SKILLS_ID = 'skills';
export type sectionNameType =
  | typeof HEADER_ID
  | typeof TITLE_ID
  | typeof ABOUT_ID
  | typeof PROJECTS_ID
  | typeof SKILLS_ID
  | typeof BIO_ID;

export type landingPageSectionsType = {
  [HEADER_ID]: headerType;
  [TITLE_ID]: titleType;
  [ABOUT_ID]: aboutType;
  [PROJECTS_ID]: projectsType;
  [BIO_ID]: bioType;
  [SKILLS_ID]: skillsType;
};
export type sectionType =
  | headerType
  | titleType
  | aboutType
  | projectsType
  | bioType
  | skillsType;

export type headerType = {
  id: typeof HEADER_ID;
  sourceCodeLink: string;
};
export type titleType = {
  id: typeof TITLE_ID;
  fullName: string;
  position: string;
};
export type aboutType = {
  id: typeof ABOUT_ID;
  title: string;
  text1: string;
  link1: string;
  link2: string;
  text2: string;
  text3: string;
};
export type projectsType = {
  id: typeof PROJECTS_ID;
  title: string;
  list: {
    [id in typeof projectsIds[number]]: {
      title: string;
      description: string;
    };
  };
};
export type bioType = {
  id: typeof BIO_ID;
  title: string;
  list: { period: React.ReactNode; description: string }[];
};
export type skillsType = {
  id: typeof SKILLS_ID;
  title: string;
  list: { setName: string; skills: string[] }[];
};
