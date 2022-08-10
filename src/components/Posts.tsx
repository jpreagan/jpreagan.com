import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import * as styles from "./Posts.css";

type Post = {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    title: string;
    description: string;
  };
};

export default function Posts() {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.nodes;

  return (
    <div className={styles.posts}>
      {posts.map((post: Post) => {
        const title = post.frontmatter.title || post.fields.slug;

        return (
          <Link
            key={post.fields.slug}
            to={post.fields.slug}
            className={styles.link}
            itemProp="url"
          >
            <article itemScope itemType="http://schema.org/Article">
              <header className={styles.header}>
                <h2 className={styles.title}>
                  <span itemProp="headline">{title}</span>
                </h2>
                <p className={styles.date}>{post.frontmatter.date}</p>
              </header>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
