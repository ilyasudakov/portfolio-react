import Image from 'next/image';

import OutsideLink from './common/OutsideLink';
import { TextBlock } from './Layout/Text';

import HeadshotImg from '/public/headshot.jpg';
import GithubIcon from '/public/svg/github.svg';
import TelegramIcon from '/public/svg/telegram.svg';

const Title: React.FC = () => {
  return (
    <TextBlock>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold dark:text-stone-50">
            Илья Судаков
          </h1>
          <h2>React-разработчик</h2>
          <TitleLinks />
        </div>
        <div className="flex w-[100px] self-end overflow-hidden rounded-full border-2 border-gray-300 dark:border-stone-400 sm:self-center">
          <Image src={HeadshotImg} alt="Profile image" />
        </div>
      </div>
    </TextBlock>
  );
};

const TitleLinks = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <OutsideLink href="https://github.com/ilyasudakov" className="border-b-2">
        <div className="flex items-center gap-2">
          <GithubIcon
            className="fill-fuchsia-600 dark:fill-fuchsia-400"
            width="16px"
            height="16px"
          />
          @ilyasudakov
        </div>
      </OutsideLink>
      <OutsideLink href="https://t.me/ilyasudakov" className="border-b-2">
        <div className="flex items-center gap-2">
          <TelegramIcon
            className="fill-fuchsia-400"
            width="16px"
            height="16px"
          />
          @ilyasudakov
        </div>
      </OutsideLink>
    </div>
  );
};

export default Title;
