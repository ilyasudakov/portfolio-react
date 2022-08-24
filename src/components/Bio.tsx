import { BlockTitle, TextBlock } from './Layout/Text';

import { bioPeriods } from '../data/landing';

const Bio: React.FC = () => {
  return (
    <TextBlock>
      <BlockTitle>Биография</BlockTitle>
      <ul className="flex flex-col gap-4">
        {bioPeriods.map(({ period, description }) => (
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
