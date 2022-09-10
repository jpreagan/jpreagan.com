import React from "react";
import { Link } from "gatsby";

import * as styles from "./posts.css";

import { PostType } from "../../types";

type PostProps = {
  posts: PostType[];
};

export default function Post({ posts }: PostProps) {
  return (
    <div className={styles.posts}>
      {posts.map((post: PostType, index: number) => {
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
