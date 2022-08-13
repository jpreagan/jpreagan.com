import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Projects from "../components/projects";

import * as styles from "../styles/page.css";

export type Language = {
  id: string;
  color: string;
  name: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  languages: {
    nodes: Language[];
  };
  stargazerCount: number;
  url: string;
};

type ServerDataProps = {
  serverData: {
    data: {
      viewer: {
        pinnedItems: {
          nodes: Project[];
        };
      };
    };
  };
};

export default function ProjectsPage({
  serverData: {
    data: {
      viewer: {
        pinnedItems: { nodes: projects },
      },
    },
  },
}: ServerDataProps) {
  return (
    <Layout>
      <section className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <Projects projects={projects} />
      </section>
    </Layout>
  );
}

export async function getServerData() {
  const url = "https://api.github.com/graphql";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  };
  const gql = `
    query {
      viewer {
        pinnedItems(first: 6) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
                nodes {
                  id
                  color
                  name
                }
              }
              stargazerCount
              homepageUrl
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: gql,
      }),
    });

    if (!response.ok) {
      throw new Error("Response failed");
    }

    return {
      headers: {
        "Cache-Control": `public, max-age=600, s-maxage=604800, stale-while-revalidate=31536000`,
      },
      props: await response.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}

export function Head() {
  return <Seo title="Projects" />;
}
