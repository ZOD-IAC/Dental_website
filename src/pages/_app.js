import "@/styles/globals.css";
import Navigation from "@/components/CommonComponents/Navigation";
import Footer from "@/components/CommonComponents/Footer";
import Head from "next/head";
import { Amiri } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/transition/PageTransition";

const amiri = Amiri({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Dental Facets | Your Smile, Our Priority</title>
        <meta
          name="description"
          content="Dental Facets offers expert dental care services including preventive, cosmetic, restorative, and pediatric dentistry in a comfortable and welcoming environment."
        />
        <meta
          name="keywords"
          content="dentist, dental care, dental clinic, cosmetic dentistry, restorative dentistry, pediatric dentistry"
        />
        <meta name="author" content="Dental Facets" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/image/favicon.webp" />
      </Head>

      <main className={`${amiri.className}`}>
        <AnimatePresence mode="wait">
          <PageTransition key={router.asPath}>
            <Navigation />
            <Component {...pageProps} />
            <Footer />
          </PageTransition>
        </AnimatePresence>
      </main>
    </>
  );
}
