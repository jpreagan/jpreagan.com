import React from "react";
import { Link } from "gatsby";

import * as styles from "./Header.css";

type HeaderProps = {
  siteTitle: string;
};

export default function Header({ siteTitle }: HeaderProps) {
  return (
    <header className={styles.container}>
      <Link to="/" className={styles.title}>
        {siteTitle}
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link
              to="/about"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
