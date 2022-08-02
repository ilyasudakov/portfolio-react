import type { NextPage } from "next";
import Image from "next/image";
import React from "react";

import { projectsList } from "../data/landing";
import GithubIcon from "/public/svg/github.svg";
import MailIcon from "/public/svg/mail.svg";
import LinkedInIcon from "/public/svg/linkedin.svg";

const FIGMA_PORTFOLIO_URL =
  process.env.FIGMA_PORTFOLIO_URL ??
  "https://www.figma.com/proto/N9A228oZBWtkEzGehdigGe/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE?node-id=1%3A10&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A10";
const GOOGLE_DRIVE_PORTFOLIO_PDF_URL =
  process.env.GOOGLE_DRIVE_PORTFOLIO_PDF_URL ??
  "https://drive.google.com/file/d/1ONZx1O9ax6Omrt9rMSWZNFjkKB6sl6fC/view?usp=sharing";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col text-justify mx-auto max-w-[70ch]">
      <Title />
      <About />
      <Projects />
      <Education />
      <WorkExperience />
    </div>
  );
};
export default Home;

const TextBlock: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({ children, title }) => {
  return (
    <div className="mb-14 flex flex-col text-stone-300">
      <>
        {title ? (
          <div className="text-xl font-bold text-stone-50 mb-2 border-b-4 border-stone-500 w-fit">
            {title}
          </div>
        ) : null}
        {children}
      </>
    </div>
  );
};

const OutsideLink: React.FC<{
  children: React.ReactNode;
  href: string;
}> = ({ children, href }) => {
  return (
    <a
      className="text-fuchsia-500 inline w-fit border-b border-fuchsia-500"
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
      bg-[#E8AEF0] text-stone-900"
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
      <ContactButton href="https://github.com/ilyasudakov">
        <MailIcon width="20px" height="20px" />
        Почта
      </ContactButton>
      <ContactButton href="https://github.com/ilyasudakov">
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
        <div className="flex overflow-hidden rounded-full border-2 border-stone-200">
          <Image
            src="/headshot.jpg"
            className="max-w-full"
            width="100px"
            height="100px"
            alt="Profile image"
          />
        </div>
      </div>
    </TextBlock>
  );
};

const About: React.FC = () => {
  return (
    <TextBlock title="Обо мне">
      <div>
        <pre className="w-fit inline">&#9;&#9;&#9;</pre>
        <span>
          React-разработчик из Санкт-Петербурга, 24 года. В данный момент ищу
          работу по вакансии junior-разработчик. Вы можете посмотреть мое
          портфолио
        </span>{" "}
        <OutsideLink href={FIGMA_PORTFOLIO_URL}>здесь</OutsideLink> или
        <OutsideLink href={GOOGLE_DRIVE_PORTFOLIO_PDF_URL}>
          {" "}
          скачать в формате PDF.
        </OutsideLink>
        <br />
        <br />
        Ищу возможности получения реального опыта разработки, работы в команде,
        полезного фидбека для улучшения своих навыков и получения новых знаний.
      </div>
    </TextBlock>
  );
};

const Projects: React.FC = () => {
  return (
    <TextBlock title="Проекты">
      <ul className="grid sm:grid-cols-2 gap-6 w-full">
        {projectsList.map((project) => (
          <ProjectItem key={project.projectName} project={project} />
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
  };
}> = ({ project }) => {
  const { projectName, href, description, image } = project;
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer noopener">
        <div className="relative aspect-video rounded-lg">
          <Image
            layout="fill"
            src={image}
            className="rounded-lg"
            objectFit="cover"
            alt={`${projectName} image`}
          ></Image>
        </div>
        <div className="px-4 py-2">
          <div className="text-lg text-center text-stone-100">
            {projectName}
          </div>
          <div className="text-sm">{description}</div>
        </div>
      </a>
    </li>
  );
};

const Education: React.FC = () => {
  return (
    <TextBlock title="Образование">
      <ul>
        <li>
          <span className="font-bold text-stone-100">
            Программная инженерия
          </span>{" "}
          — Санкт-Петербургский Государственный Университет Телекоммуникаций им.
          М.А. Бонч-Бруевича. Бакалавр (2016 — 2020)
        </li>
      </ul>
    </TextBlock>
  );
};

const WorkExperience: React.FC = () => {
  return (
    <TextBlock title="Опыт работы">
      <ul>
        <li>
          <span className="font-bold text-stone-100">2020 — 2021</span> -
          компания Osfix. Фронтенд-разработчик CRM/ERP-системы, используемой на
          малом предприятии.
        </li>
      </ul>
    </TextBlock>
  );
};
