import Head from 'next/head';

type IProps = {
  title?: string;
  description?: string;
};

const Meta: React.FC<IProps> = ({
  title = '@ilyasudakov',
  description = 'Сайт портфолио @ilyasudakov',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="icon" type="favicon" href="favicon.ico" />
      <meta name="theme-color" content="#292929" key="theme-color" />
    </Head>
  );
};

export default Meta;
