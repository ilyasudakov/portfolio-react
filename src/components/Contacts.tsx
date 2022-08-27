import OutsideLink from './common/OutsideLink';
import { BlockTitle, TextBlock } from './Layout/Text';

import GithubIcon from '/public/svg/github.svg';
import MailIcon from '/public/svg/mail.svg';
import LinkedInIcon from '/public/svg/linkedin.svg';
import TelegramIcon from '/public/svg/telegram.svg';
import { CONTACTS_ID } from '../data/locales/types';
import useLang from '../hooks/useLang';

const LINKS = [
  {
    href: 'https://github.com/ilyasudakov',
    icon: { size: '16px', Component: GithubIcon },
    text: '@ilyasudakov'
  },
  {
    href: 'mailto:ilyasudakov.dev@gmail.com',
    icon: { size: '20px', Component: MailIcon },
    text: 'ilyasudakov.dev@gmail.com'
  },
  {
    href: 'https://www.linkedin.com/in/ilya-sudakov/',
    icon: { size: '16px', Component: LinkedInIcon },
    text: '@ilya-sudakov'
  },
  {
    href: 'https://t.me/ilyasudakov',
    icon: { size: '16px', Component: TelegramIcon },
    text: '@ilyasudakov'
  }
];

const Contacts = () => {
  const { t } = useLang(CONTACTS_ID);
  if (t.id !== CONTACTS_ID) return null;

  return (
    <TextBlock>
      <BlockTitle>{t.title}</BlockTitle>
      <div className="flex flex-col gap-2">
        {LINKS.map(({ href, text, icon }) => {
          const SVGElement = icon.Component;
          return (
            <OutsideLink className="border-b-2" key={href} href={href}>
              <div className="flex items-center gap-2">
                <SVGElement
                  width={icon.size}
                  height={icon.size}
                  className="w-5 fill-fuchsia-600 dark:fill-fuchsia-400"
                />
                {text}
              </div>
            </OutsideLink>
          );
        })}
      </div>
    </TextBlock>
  );
};

export default Contacts;
