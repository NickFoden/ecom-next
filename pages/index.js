import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">About Us</h1>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        font-size: 48px;
        line-height: 1.15;
        margin: 0;
        padding-top: 80px;
        text-align: center;
        width: 100%;
      }
    `}</style>
  </div>
);

export default Home;
