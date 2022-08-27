import { BlockTitle, TextBlock } from './Layout/Text';

import { BIO_ID } from '../data/locales/types';
import useLang from '../hooks/useLang';

const Bio: React.FC = () => {
  const { t } = useLang(BIO_ID);

  return (
    <TextBlock>
      <BlockTitle>{t.title}</BlockTitle>
      <ul className="flex flex-col gap-4">
        {t.list.map(({ period, description }) => (
          <li key={description}>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full text-left font-bold dark:text-stone-100 sm:max-w-[20ch]">
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

export default Bio;
