import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  AiFillLinkedin as LinkedIn,
  AiOutlineTwitter as Twitter,
  AiFillGithub as GitHub,
  AiFillYoutube as YouTube,
} from "react-icons/ai";

import * as styles from "./aloha.css";

export default function Aloha() {
  const data = useStaticQuery(graphql`
    query IntroQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            linkedin
            github
            youtube
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>
          Aloha, I&apos;m <br />{" "}
          <span className={styles.author}>James Reagan</span>.
        </h2>
        <p className={styles.text}>
          💻 I&apos;m a software engineer 🌴 living in Hawaii.
        </p>
        <p className={styles.text}>
          💕 Lover of 80&apos;s music and 🍜 udon noodles!
        </p>
        <div className={styles.social}>
          <Link
            to={social?.twitter}
            rel="noreferrer"
            target="_blank"
            className={styles.socialLink}
          >
            <Twitter size={40} title="Twitter" />
          </Link>
          <Link
            to={social?.linkedin}
            rel="noreferrer"
            target="_blank"
            className={styles.socialLink}
          >
            <LinkedIn size={40} title="LinkedIn" />
          </Link>
          <Link
            to={social?.github}
            rel="noreferrer"
            target="_blank"
            className={styles.socialLink}
          >
            <GitHub size={40} title="GitHub" />
          </Link>
          <Link
            to={social?.youtube}
            rel="noreferrer"
            target="_blank"
            className={styles.socialLink}
          >
            <YouTube size={40} title="YouTube" />
          </Link>
        </div>
      </div>
      <StaticImage
        src="../images/profile_pic.jpg"
        alt={author}
        loading="eager"
        layout="fixed"
        width={288}
        height={288}
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        quality={90}
        className={styles.image}
        style={{ minWidth: "288px" }}
        imgStyle={{ borderRadius: "100%" }}
      />
    </div>
  );
}
