import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-[10%] pt-6 sm:pt-[8vh] pb-8 overflow-x-hidden">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
