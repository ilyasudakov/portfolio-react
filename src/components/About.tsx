import useLang from '../hooks/useLang';
import OutsideLink from './common/OutsideLink';
import { BlockTitle, TextBlock } from './Layout/Text';

const GOOGLE_DRIVE_CV_PDF_URL =
  process.env.NEXT_PUBLIC_GOOGLE_DRIVE_CV_PDF_URL ??
  'https://drive.google.com/file/d/1diMfqmYiNQolebKW7Os1EE6KuwW7zfw2/view?usp=sharing';
const GOOGLE_DRIVE_PORTFOLIO_PDF_URL =
  process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PORTFOLIO_PDF_URL ??
  'https://drive.google.com/file/d/1_5V65DH8ViKQnO1OB_c2cQW1vYQSn7zJ/view?usp=sharing';

const About: React.FC = () => {
  const { t } = useLang('about');

  return (
    <TextBlock>
      <BlockTitle>{t.title}</BlockTitle>
      <div className="flex flex-col gap-4">
        <div className="indent-6">
          {t.text1}{' '}
          <OutsideLink href={GOOGLE_DRIVE_PORTFOLIO_PDF_URL}>
            {t.link1}
          </OutsideLink>{' '}
          {t.text2}
          <OutsideLink href={GOOGLE_DRIVE_CV_PDF_URL}>{t.link2}</OutsideLink>
        </div>
        <div className="indent-6">{t.text3}</div>
      </div>
    </TextBlock>
  );
};

export default About;
