import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RootStoreProvider } from "../providers";
import { Header } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootStoreProvider hydrationData={pageProps.hydrationData}>
      <>
        <div className="sticky top-0 z-10">
          <Header />
        </div>
        <div>
          <Component {...pageProps} />
        </div>
      </>
    </RootStoreProvider>
  );
}

export default MyApp;
