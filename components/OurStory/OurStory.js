import React from "react";
import Link from "next/link";
import "../../styles/fonts.css";
import theme from "../../styles/theme";
import { developmentTeam } from "./team";

const OurStory = () => (
  <div className="OurStory_container">
    <nav className="OurStory_nav">
      <p>On this page you will find:</p>
      <ul>
        <li>
          <a href="#our-story">Our Story</a>
        </li>
        <li>
          <a href="#our-team">Our Team</a>
        </li>
        <li>
          <a href="#internet-promise">
            The Unfulfilled Promise of the Internet
          </a>
        </li>
        <li>
          <a href="#store-is">What Our Store Is and What It Is Not</a>
        </li>
      </ul>
    </nav>

    <section className="OurStory_content">
      <div id="our-story">
        <h1>Our Story</h1>
        <p>
          The Accessible eStore is an iterative, interactive prototype of an
          e‑commerce storefront. It explores concepts in designing and
          developing for the web considering accessibility first. Web
          accessibility is more of a journey than a destination. In that spirit,
          this experience will evolve based on our continued learning and user
          feedback.
        </p>
        <p>
          The web needs more examples of accessible and usable design and
          development. We tried to make our store's typical e‑commerce
          components keyboard and screen-reader accessible. We hope our work
          starts a conversation. We want it to lead to action that accelerates
          the creation of accessible and usable web experiences around the
          world. We want to enable everyone to fully participate in online
          activities and engage with their communities.
        </p>
        <p>
          Creating our store was a tremendous undertaking. We began by providing
          screen reader training to our creative and technical teams. This is
          critical. You wouldn't ask someone who had never ridden a bike to
          design or build a bike. But every day designers and developers are
          asked to stretch in exactly this way. The vast majority of designers
          and developers are sighted mouse-pointer users. And yet they are
          tasked with creating experiences that will work with a keyboard and
          assistive technology. We wanted to teach people to ride bicycles
          before we asked them to design or build them.
        </p>
        <p>
          We collaborated with and gained insights from our non-sighted
          colleagues. They helped us understand their major pain points in
          websites that are designed for people who can use a mouse.
        </p>
        <p>
          We then unrolled a curriculum that we call the “Accessibility Deep
          Dive” sessions. Each session focused on accessibility best practices
          for a common e‑commerce website component. For example, the global
          navigation menu, the product listing grid, filters, and sorting
          mechanisms. We considered how each of these should work for people
          using assistive devices.
        </p>
        <p>
          After everyone had enough context, we began creating the store one
          component at a time, via a series of hackathons. In each hackathon, we
          paired 2 user experience designers with 2 front end developers. Each
          team designed and built their assigned component or set of components
          within 4 hours. Post-hackathon, a front-end developer compiled the
          components into a page, and we engaged a visual designer to help us
          with polish.
        </p>
        <p>
          Truly inclusive experiences require both thoughtful design and
          execution. We need to grow these skills in our creative and technical
          teams to finally arrive at a web that is truly accessible. The demand
          for this skillset is growing, but web accessibility compliance
          strategies are not taught in most schools.
        </p>
        <p>
          We wanted to help enable the next generation of designers and
          developers to create accessible experiences. Creating the store helped
          our internal teams. We hope that by posting our work in progress
          online that we have created a resource for the world to use in order
          to explore this important topic.
        </p>
      </div>
      <div id="our-team">
        <h1>Our Team</h1>
        <h5>Development</h5>
        <ul>
          {developmentTeam.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
    <style jsx>{`
      .OurStory_container {
        background-color: ${theme.colors.backgroundStory};
        display: flex;
        padding-left: 150px;
      }
      .OurStory_nav {
        width: 200px;
      }
      .OurStory_content {
        margin-left: 16px;
        max-width: 550px;
      }
    `}</style>
  </div>
);

export default OurStory;
