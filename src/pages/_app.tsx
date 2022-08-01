import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto px-4 lg:px-[10%] py-[5vh]">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
