import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import * as styles from "./blog-post.css";

type DataProps = {
  data: {
    markdownRemark: {
      id: string;
      excerpt: string;
      html: string;
      frontmatter: {
        title: string;
        date: string;
        description: string;
      };
    };
    previous: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    } | null;
    next: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    } | null;
  };
};

export default function BlogPostTemplate({
  // eslint-disable-next-line no-unused-vars
  data: { previous, next, markdownRemark: post },
}: DataProps) {
  return (
    <Layout>
      <article itemScope itemType="http://schema.org/Article">
        <header className={styles.heading}>
          <div className={styles.container}>
            <h1 itemProp="headline" className={styles.title}>
              {post.frontmatter.title}
            </h1>
            <p>{post.frontmatter.date}</p>
          </div>
        </header>
        <section
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className={styles.content}
          id="content"
        />
      </article>
      {/* <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  );
}

export function Head({ data: { markdownRemark: post } }: DataProps) {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
