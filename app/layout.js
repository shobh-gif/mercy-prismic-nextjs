import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/globals.css";
import "./styles/static.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
export const metadata = {
  title: "Richbayo | Home",
  description:
    "Achieve digital excellence with a trusted web and app development partner",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="main-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
