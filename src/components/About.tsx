import OutsideLink from './common/OutsideLink';
import { BlockTitle, TextBlock } from './Layout/Text';

const GOOGLE_DRIVE_CV_PDF_URL =
  process.env.NEXT_PUBLIC_GOOGLE_DRIVE_CV_PDF_URL ??
  'https://drive.google.com/file/d/1diMfqmYiNQolebKW7Os1EE6KuwW7zfw2/view?usp=sharing';
const GOOGLE_DRIVE_PORTFOLIO_PDF_URL =
  process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PORTFOLIO_PDF_URL ??
  'https://drive.google.com/file/d/1_5V65DH8ViKQnO1OB_c2cQW1vYQSn7zJ/view?usp=sharing';

const About: React.FC = () => {
  return (
    <TextBlock>
      <BlockTitle>Обо мне</BlockTitle>
      <div className="flex flex-col gap-4">
        <div className="indent-6">
          React-разработчик из Санкт-Петербурга, 24 года. В данный момент ищу
          работу по вакансии junior-разработчик. Вы можете посмотреть{' '}
          <OutsideLink href={GOOGLE_DRIVE_PORTFOLIO_PDF_URL}>
            мое портфолио
          </OutsideLink>{' '}
          или
          <OutsideLink href={GOOGLE_DRIVE_CV_PDF_URL}> скачать CV.</OutsideLink>
        </div>
        <div className="indent-6">
          Ищу возможности получения реального опыта разработки, работы в
          команде, полезного фидбека для улучшения своих навыков и получения
          новых знаний. Быстро обучаем, люблю учиться.
        </div>
      </div>
    </TextBlock>
  );
};

export default About;
