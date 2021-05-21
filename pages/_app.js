// import "../styles/global.less";
require("../styles/global.less");

import Head from "next/head";

import { GlobalStyles } from "../components/styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/images/triangle.png" />
        <title>One - React Next.js Ant Design Dashboard</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900|Anonymous+Pro:400,700&display=swap"
          rel="stylesheet"
        />
        {pageProps.ieBrowser && (
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js" />
        )}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
