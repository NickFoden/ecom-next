import React from "react";
import Link from "next/link";
import "../styles/fonts.css";
import theme from "../styles/theme";

const Nav = () => (
  <nav className="main_layout_nav">
    <ul>
      <li>
        <Link href="/">
          <span className="nav_logo_container">
            <img src="/A.png" alt="Logo of A" className="nav_logo" />
            <a className="nav_link_home">
              The <br />
              Accessible <br />
              eStore
            </a>
          </span>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Account</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Cart</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      ul {
        display: flex;
        justify-content: space-between;
        margin: 0;
      }
      nav > ul {
        padding: 32px 36px 0px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a,
      a:visited {
        color: ${theme.colors.navlink};
        cursor: pointer;
        text-decoration: none;
        font-family: ${theme.font.Montserrat};
        font-size: ${theme.fontSize[6]};
      }
      a:hover {
        color: ${theme.colors.linkHover};
      }
      .nav_link_home {
        font-size: ${theme.fontSize[3]};
        margin-left: 8px;
      }
      .main_layout_nav {
        background-color: ${theme.colors.background};
        height: 140px;
      }
      .nav_logo {
        cursor: pointer;
        height: 40px;
        width: 40px;
      }
      .nav_logo:hover {
        opacity: 0.7;
      }
      .nav_logo_container {
        display: flex;
        text-align: left;
      }
    `}</style>
  </nav>
);

export default Nav;
