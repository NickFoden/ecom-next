import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import OurStory from "../components/OurStory/OurStory";
import "../styles/fonts.css";
import theme from "../styles/theme";

const Home = () => (
  <div>
    <Head>
      <title>E Com</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Nav />

    <div className="hero">
      <h1>About Us</h1>
      <h4>
        An iterative, interactive prototype of an e‑commerce storefront that
        explores concepts in designing and developing for the web, considering
        accessibility first.
      </h4>
    </div>
    <OurStory />

    <style jsx>{`
      .hero {
        font-family: ${theme.font.Montserrat};
        margin-top: 80px;
        text-align: left;
        padding-left: 150px;
        padding-right: 150px;
      }
      h1 {
        font-size: ${theme.fontSize[10]};
      }
      h4 {
        font-size: ${theme.fontSize[8]};
      }
    `}</style>
  </div>
);

export default Home;
