import { projectsIds } from '../landing';

export const TITLE_ID = 'title';
export const HEADER_ID = 'header';
export const ABOUT_ID = 'about';
export const PROJECTS_ID = 'projects';
export type sectionNameType =
  | typeof HEADER_ID
  | typeof TITLE_ID
  | typeof ABOUT_ID
  | typeof PROJECTS_ID;

export type landingPageSectionsType = {
  [HEADER_ID]: headerType;
  [TITLE_ID]: titleType;
  [ABOUT_ID]: aboutType;
  [PROJECTS_ID]: projectsType;
};
export type sectionType = headerType | titleType | aboutType | projectsType;

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
