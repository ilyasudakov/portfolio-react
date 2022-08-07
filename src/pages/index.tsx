import type { NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { bioPeriods, projectsList, skillsList } from '../data/landing';
import Meta from '../components/Meta';

import GithubIcon from '/public/svg/github.svg';
import MailIcon from '/public/svg/mail.svg';
import LinkedInIcon from '/public/svg/linkedin.svg';
import HeadshotImg from '/public/headshot.jpg';

const GOOGLE_DRIVE_CV_PDF_URL =
  process.env.GOOGLE_DRIVE_CV_PDF_URL ??
  'https://drive.google.com/file/d/1diMfqmYiNQolebKW7Os1EE6KuwW7zfw2/view?usp=sharing';
const GOOGLE_DRIVE_PORTFOLIO_PDF_URL =
  process.env.GOOGLE_DRIVE_PORTFOLIO_PDF_URL ??
  'https://drive.google.com/file/d/1_5V65DH8ViKQnO1OB_c2cQW1vYQSn7zJ/view?usp=sharing';

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <div className="flex flex-col text-justify mx-auto max-w-[70ch]">
        <Title />
        <AnimationWrapper>
          <About />
        </AnimationWrapper>
        <Projects />
        <AnimationWrapper>
          <Bio />
        </AnimationWrapper>
        <AnimationWrapper>
          <SkillSet />
        </AnimationWrapper>
        <Copyright />
      </div>
    </>
  );
};
export default Home;

const AnimationWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { ref, inView } = useInView();
  const [wasInView, setWasInView] = useState(false);

  useEffect(() => {
    if (wasInView) return;
    if (inView) setWasInView(true);
  }, [inView, wasInView]);

  return (
    <div
      ref={ref}
      className={`transition duration-1000 ${
        inView || wasInView
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-20'
      }`}
    >
      {children}
    </div>
  );
};

const BlockTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="text-xl font-bold text-stone-50 mb-2 border-b-4 border-stone-500 w-fit">
      {children}
    </div>
  );
};

const TextBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mb-14 flex flex-col text-stone-300">{children}</div>;
};

const OutsideLink: React.FC<{
  children: React.ReactNode;
  href: string;
}> = ({ children, href }) => {
  return (
    <a
      className="text-fuchsia-400 inline w-fit border-b border-fuchsia-400"
      target="_blank"
      rel="noreferrer noopener"
      href={href}
    >
      {children}
    </a>
  );
};

const ContactButton: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="rounded px-4 py-1 flex justify-center items-center w-fit gap-1
      transition bg-[#E8AEF0] text-stone-900 hover:bg-[#ffb8fe]"
    >
      {children}
    </a>
  );
};

const ContactsList = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      <ContactButton href="https://github.com/ilyasudakov">
        <GithubIcon width="15px" height="15px" />
        Github
      </ContactButton>
      <ContactButton href="mailto:ilyasudakov.dev@gmail.com">
        <MailIcon width="20px" height="20px" />
        Почта
      </ContactButton>
      <ContactButton href="https://www.linkedin.com/in/ilya-sudakov/">
        <LinkedInIcon width="15px" height="15px" />
        LinkedIn
      </ContactButton>
    </div>
  );
};

const Title: React.FC = () => {
  return (
    <TextBlock>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold text-stone-50">Илья Судаков</div>
          <div>React-разработчик</div>
          <ContactsList />
        </div>
        <div className="flex w-[100px] self-end sm:self-center overflow-hidden rounded-full border-2 border-stone-200">
          <Image src={HeadshotImg} alt="Profile image" />
        </div>
      </div>
    </TextBlock>
  );
};

const About: React.FC = () => {
  return (
    <TextBlock>
      <BlockTitle>Обо мне</BlockTitle>
      <div>
        <div className="indent-6">
          React-разработчик из Санкт-Петербурга, 24 года. В данный момент ищу
          работу по вакансии junior-разработчик. Вы можете посмотреть{' '}
          <OutsideLink href={GOOGLE_DRIVE_PORTFOLIO_PDF_URL}>
            мое портфолио
          </OutsideLink>{' '}
          или
          <OutsideLink href={GOOGLE_DRIVE_CV_PDF_URL}> скачать CV.</OutsideLink>
        </div>
        <br />
        Ищу возможности получения реального опыта разработки, работы в команде,
        полезного фидбека для улучшения своих навыков и получения новых знаний.
        Быстро обучаем, люблю учиться.
      </div>
    </TextBlock>
  );
};

const Projects: React.FC = () => {
  return (
    <TextBlock>
      <AnimationWrapper>
        <BlockTitle>Проекты</BlockTitle>
      </AnimationWrapper>
      <ul className="grid sm:grid-cols-2 gap-6 w-full">
        {projectsList.map((project) => (
          <li key={project.projectName}>
            <AnimationWrapper>
              <ProjectItem project={project} />
            </AnimationWrapper>
          </li>
        ))}
      </ul>
    </TextBlock>
  );
};

const ProjectItem: React.FC<{
  project: {
    projectName: string;
    href: string;
    description: string;
    image: string;
    stack?: string[];
  };
}> = ({ project }) => {
  const { projectName, href, description, image, stack } = project;
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      <div className="relative mx-auto max-w-[100%] aspect-video [&_span]:rounded-lg">
        <Image
          layout="fill"
          src={image}
          className="transition duration-500 hover:scale-[1.05]"
          objectFit="cover"
          alt={`${projectName} image`}
        />
      </div>
      <div className="px-4 py-2">
        <div className="text-lg text-center text-stone-100">{projectName}</div>
        <div className="text-sm">{description}</div>
        {stack ? (
          <div className="text-sm flex px-3 py-1 w-fit mx-auto flex-wrap items-center justify-center">
            {stack.map((tool) => (
              <div key={tool} className="px-1 text-stone-400">
                {tool}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  );
};

const Bio: React.FC = () => {
  return (
    <TextBlock>
      <BlockTitle>Биография</BlockTitle>
      <ul className="flex flex-col gap-4">
        {bioPeriods.map(({ period, description }) => (
          <li key={description}>
            <div className="flex flex-col sm:flex-row">
              <div className="font-bold text-stone-100 text-left w-full sm:max-w-[20ch]">
                {period}
              </div>
              <div className="text-left">{description}</div>
            </div>
          </li>
        ))}
      </ul>
    </TextBlock>
  );
};

const SkillItem: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <div
      className="rounded border border-stone-400 px-4 py-1 text-sm cursor-pointer 
    transition hover:bg-stone-700"
    >
      {skill}
    </div>
  );
};

const SkillListItem: React.FC<{
  skillSetItem: { setName: string; skills: string[] };
}> = ({ skillSetItem }) => {
  const { setName, skills } = skillSetItem;
  return (
    <li>
      <div className="flex flex-col sm:flex-row">
        <div className="font-bold text-stone-100 text-left w-full mb-1 sm:mb-0 sm:max-w-[20ch]">
          {setName}
        </div>
        <div className="text-left flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillItem key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </li>
  );
};

const SkillSet: React.FC = () => {
  return (
    <TextBlock>
      <BlockTitle>Навыки</BlockTitle>
      <ul className="flex flex-col gap-1 sm:gap-4">
        {skillsList.map((skillSetItem) => (
          <SkillListItem
            skillSetItem={skillSetItem}
            key={skillSetItem.setName}
          />
        ))}
      </ul>
    </TextBlock>
  );
};

const Copyright: React.FC = () => {
  return (
    <div className="text-center text-sm text-stone-400">
      <div>© 2022 Илья Судаков.</div>
      <div>Сделано с NextJS, TypeScript, Tailwind.</div>
    </div>
  );
};
