import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import Layout from "../components/layout";
import Project from "../components/project";
import type { Repository } from "../lib/types";

type Props = {
  projects: Repository[];
};

export default function ProjectsPage({ projects }: Props) {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="My personal website built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="mx-auto mb-8 max-w-5xl px-4 text-4xl font-bold text-gray-900 dark:text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          Projects
        </h1>
      </header>

      <section className="mx-auto mb-16 max-w-5xl px-4">
        <div className="grid auto-cols-max grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const endpoint = "https://api.github.com/graphql";

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  const query = gql`
    {
      viewer {
        pinnedItems(first: 6) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              primaryLanguage {
                color
                name
              }
              stargazerCount
            }
          }
        }
      }
    }
  `;

  const {
    viewer: {
      pinnedItems: { nodes: projects },
    },
  } = await client.request(query);

  return { props: { projects } };
}
