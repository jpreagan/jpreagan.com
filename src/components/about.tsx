import React from "react";
import { Link } from "gatsby";

import * as styles from "./about.css";

export default function About() {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        I&apos;m a software engineer living in Hawaii.
      </p>
      <p className={styles.paragraph}>
        I write full stack web applications with a focus on accessibility and
        performance.
      </p>
      <p className={styles.paragraph}>
        My current interests are in TypeScript, software testing, serverless
        technology, and learning new languages. I&apos;m enjoy both front end
        and back end development.
      </p>
      <p className={styles.paragraph}>
        I regularly document my journey on my <Link to="/blog">blog</Link> and{" "}
        <a href="https://www.youtube.com/channel/UCFBAMSjeJOmQ-gLrqczjRbg">
          YouTube
        </a>{" "}
        channel.
      </p>
      <p className={styles.paragraph}>
        If I can be of any help, feel free to{" "}
        <Link to="/contact">reach out</Link>.
      </p>
    </div>
  );
}
