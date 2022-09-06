import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import * as styles from "./posts.css";

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
      {posts.map((post: Post, index: number) => {
        const title = post.frontmatter.title || post.fields.slug;
        const even = "linear-gradient(to right, #6b21a8, #db2777)";
        const odd = "linear-gradient(to right, #db2777, #fb923c)";
        const linearGradient = index % 2 === 0 ? even : odd;

        return (
          <Link
            key={post.fields.slug}
            to={post.fields.slug}
            className={styles.link}
            itemProp="url"
            style={{ background: linearGradient }}
          >
            <article itemScope itemType="http://schema.org/Article">
              <header>
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
