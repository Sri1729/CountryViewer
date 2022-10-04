import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { RootStoreProvider } from "../providers";
import { Header } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootStoreProvider hydrationData={pageProps.hydrationData}>
      <div className="flex flex-1 flex-col h-full">
        <div className="fixed w-full top-0 z-10">
          <Header />
        </div>
        <div className="relative flex flex-1 p-10 bg-white dark:bg-darkerBlue top-[68px] sm:top-[72px">
          <Component {...pageProps} />
        </div>
      </div>
    </RootStoreProvider>
  );
}

export default MyApp;
