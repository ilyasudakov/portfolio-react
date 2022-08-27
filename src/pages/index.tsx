import React from 'react';
import type { NextPage } from 'next';

import Meta from '../components/Meta';
import Header from '../components/Layout/Header';
import PageWrapper from '../components/Layout/PageWrapper';
import Title from '../components/Title';
import About from '../components/About';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import SkillSet from '../components/SkillSet';
import Contacts from '../components/Contacts';
import { FOOTER_ID } from '../data/locales/types';
import useLang from '../hooks/useLang';

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <PageWrapper>
        <div className="mx-auto flex max-w-[70ch] flex-col text-justify">
          <Title />
          <About />
          <Projects />
          <Bio />
          <SkillSet />
          <Contacts />
          <Copyright />
        </div>
      </PageWrapper>
    </>
  );
};
export default Home;

const Copyright: React.FC = () => {
  const { t } = useLang(FOOTER_ID);
  if (t.id !== FOOTER_ID) return null;

  return (
    <div className="text-center text-sm text-stone-500 dark:text-stone-400">
      <div>{t.madeBy}</div>
      <div>{t.madeWith}</div>
    </div>
  );
};
