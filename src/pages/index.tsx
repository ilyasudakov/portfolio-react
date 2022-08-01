import type { NextPage } from "next";
import React from "react";

const FIGMA_PORTFOLIO_URL =
  "https://www.figma.com/proto/N9A228oZBWtkEzGehdigGe/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE?node-id=1%3A10&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A10";
const GOOGLE_DRIVE_PORTFOLIO_PDF_URL =
  "https://drive.google.com/file/d/1ONZx1O9ax6Omrt9rMSWZNFjkKB6sl6fC/view?usp=sharing";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
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
    <div className="my-2 flex flex-col text-stone-300">
      <>
        {title ? (
          <div className="text-xl font-bold text-stone-50">{title}</div>
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
      className="text-indigo-500 inline w-fit"
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
    <TextBlock title="Илья Судаков">
      <div>Junior React-разработчик</div>
    </TextBlock>
  );
};

const About: React.FC = () => {
  return (
    <TextBlock title="Обо мне">
      <div>
        React-разработчик из Санкт-Петербурга, 23 года. В данный момент ищу
        работу по вакансии junior-разработчик. Вы можете посмотреть мое
        портфолио <OutsideLink href={FIGMA_PORTFOLIO_URL}>здесь</OutsideLink>{" "}
        или
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
      <ul>
        <li>
          <OutsideLink href="https://github.com/ilyasudakov/CRM_frontend">
            CRM/ERP система
          </OutsideLink>{" "}
          — фронтенд для системы управления малым предприятием
        </li>
        <li>
          <OutsideLink href="https://github.com/ilyasudakov/cms_blog">
            CMS Блог
          </OutsideLink>{" "}
          — Блог с авторизацией, возможностью создавать собственные посты
          (TypeScript, Next.js, NextAuth.js, Tailwind)
        </li>
        <li>
          <OutsideLink href="https://github.com/ilyasudakov/basic-react-boilerplate">
            react-base
          </OutsideLink>{" "}
          — простой шаблон для React-проектов (React 17 + Webpack 5 + SCSS +
          Jest/RTL)
        </li>
        <li>
          <OutsideLink href="https://github.com/ilyasudakov/weatherApp">
            Weather App
          </OutsideLink>{" "}
          — приложение для просмотра погоды по геолокации пользователя, с
          возможностью просмотра прогноза на 7 дней
        </li>
        <li>
          <OutsideLink href="https://github.com/ilyasudakov/music_app">
            Spotify Statistics
          </OutsideLink>{" "}
          — приложение для просмотра любимых песен/исполнителей, а также
          получение списка рекомендаций в Spotify
        </li>
        <li>
          <OutsideLink href="https://github.com/ilyasudakov/torrent_app">
            Torrent
          </OutsideLink>{" "}
          — позволяет скачивать раздачи с помощью торрент файлов, узнать
          прогресс скачивания файлов (React + WebTorrent)
        </li>
        <li>
          <OutsideLink href="https://github.com/ilyasudakov/ThreeJS_test">
            Ocean
          </OutsideLink>{" "}
          — простой эксперимент с использованием ThreeJS
        </li>
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
        Вы можете связаться со мной по{" "}
        <OutsideLink href="mailto:ilyasudakov.dev@gmail.com">почте</OutsideLink>
        , а также посмотреть мой профиль на{" "}
        <OutsideLink href="https://github.com/ilyasudakov">Github</OutsideLink>{" "}
        или{" "}
        <OutsideLink href="https://www.linkedin.com/in/ilya-sudakov/">
          LinkedIn.
        </OutsideLink>
      </div>
    </TextBlock>
  );
};
