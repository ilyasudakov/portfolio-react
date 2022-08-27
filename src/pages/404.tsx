import Link from 'next/link';

import PageWrapper from '../components/Layout/PageWrapper';

const NotFoundPage: React.FC = () => {
  return (
    <div className="mx-auto">
      <PageWrapper>
        <h1 className="mb-2 text-3xl font-bold text-stone-50">
          Такой страницы не существует
        </h1>
        <Link href="/">
          <span className="cursor-pointer border-b-2 border-b-fuchsia-400 text-fuchsia-400">
            Вернуться на главную
          </span>
        </Link>
      </PageWrapper>
    </div>
  );
};

export default NotFoundPage;
