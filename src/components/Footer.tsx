import React from "react";
import { Link } from "gatsby";

import * as styles from "./footer.css";

type FooterProps = {
  author: string;
};

export default function Footer({ author }: FooterProps) {
  return (
    <footer className={styles.container}>
      <p className={styles.paragraph}>
        <Link to="/" className={styles.author}>
          {author}
        </Link>{" "}
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
