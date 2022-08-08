import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold text-stone-50 mb-2">
        Такой страницы не существует
      </h1>
      <Link href="/">
        <span className="text-fuchsia-400 border-b-2 border-b-fuchsia-400 cursor-pointer">
          Вернуться на главную
        </span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
