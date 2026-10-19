import { usePageMotion } from "@/components/redesign/Motion";
import "@/styles/globals.css";
import Head from "next/head";
import { Header, Footer } from "@/components/redesign/Clinic";
export default function App({ Component, pageProps, router }) {
  const routeKey = router.asPath.split("#")[0];
  usePageMotion(routeKey);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/image/favicon.webp" />
        <meta name="theme-color" content="#243d32" />
      </Head>
      <Header />
      <main id="main" tabIndex={-1}>
        <div className="page-enter" key={routeKey}>
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  );
}
