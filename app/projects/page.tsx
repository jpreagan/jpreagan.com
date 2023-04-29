import { GraphQLClient, gql } from "graphql-request";

export const metadata = {
  title: "Projects",
  description: "My projects and open source contributions.",
};

export const revalidate = 60;

type Repository = {
  description: string;
  id: string;
  primaryLanguage: {
    name: string;
    color: string;
  };
  name: string;
  stargazerCount: number;
  url: string;
};

type PinnedItemsResponse = {
  viewer: {
    pinnedItems: {
      nodes: Repository[];
    };
  };
};

async function getProjects(): Promise<Repository[]> {
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
  }: { viewer: { pinnedItems: { nodes: Repository[] } } } =
    await client.request<PinnedItemsResponse>(query);

  return projects;
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <header>
        <h1 className="mx-auto mb-8 max-w-7xl px-4 text-4xl font-bold text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          Projects
        </h1>
      </header>

      <section className="mx-auto mb-16 max-w-7xl px-4">
        <div className="grid auto-cols-max grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              className="block cursor-pointer rounded-md border border-gray-700 p-4 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1.5"
            >
              <article>
                <h2 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {project.name}
                  </span>
                </h2>
                <p className="my-2">{project.description}</p>
                <p>
                  <span
                    style={{ backgroundColor: project.primaryLanguage.color }}
                    className="relative top-px inline-block h-3 w-3 rounded-full"
                  />{" "}
                  <span itemProp="programmingLanguage">
                    {project.primaryLanguage.name}
                  </span>
                  {project.stargazerCount > 0 && (
                    <span>
                      <span role="img" aria-label="star" className="pl-4 pr-1">
                        ⭐️
                      </span>
                      {project.stargazerCount}
                    </span>
                  )}
                </p>
              </article>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
