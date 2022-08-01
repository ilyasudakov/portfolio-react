import type { NextPage } from "next";
import React from "react";
import { projectsList } from "../data/landing";

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
      <Contacts />
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
  style?: "default" | "none";
}> = ({ children, href, style = "default" }) => {
  const styles = {
    default: "text-fuchsia-500 inline w-fit border-b border-fuchsia-500",
    none: "",
  };
  return (
    <a
      className={styles[style]}
      target="_blank"
      rel="noreferrer noopener"
      href={href}
    >
      {children}
    </a>
  );
};

const Title: React.FC = () => {
  return (
    <TextBlock>
      <div>
        <div className="text-3xl font-bold text-stone-50 mb-2">
          Илья Судаков
        </div>
        <div>Junior React-разработчик</div>
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
      <ul className="list-none flex flex-col gap-2">
        {projectsList.map(({ projectName, href, description }) => (
          <OutsideLink href={href} style="none" key={projectName}>
            <li className="rounded-lg px-4 py-4 border-stone-500 border-2">
              {`${projectName} — ${description}`}
            </li>
          </OutsideLink>
        ))}
      </ul>
    </TextBlock>
  );
};

const Education: React.FC = () => {
  return (
    <TextBlock title="Образование">
      <ul>
        <li>
          <span>Программная инженерия</span> - Санкт-Петербургский
          Государственный Университет Телекоммуникаций им. М.А. Бонч-Бруевича.
          Бакалавр (2016 — 2020)
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
          <span>2020 — 2021</span> - компания Osfix. Фронтенд-разработчик
          CRM/ERP-системы, используемой на малом предприятии.
        </li>
      </ul>
    </TextBlock>
  );
};

const Contacts: React.FC = () => {
  return (
    <TextBlock title="Обратная связь">
      <div>
        <pre className="w-fit inline">&#9;&#9;&#9;</pre>
        <span className="inline">
          Вы можете связаться со мной по{" "}
          <OutsideLink href="mailto:ilyasudakov.dev@gmail.com">
            почте
          </OutsideLink>
          , а также посмотреть мой профиль на{" "}
          <OutsideLink href="https://github.com/ilyasudakov">
            Github
          </OutsideLink>{" "}
          или{" "}
          <OutsideLink href="https://www.linkedin.com/in/ilya-sudakov/">
            LinkedIn.
          </OutsideLink>
        </span>
      </div>
    </TextBlock>
  );
};
