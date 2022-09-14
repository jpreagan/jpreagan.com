export type Frontmatter = {
  title: string;
  date: string;
  description: string;
};

export type PostData = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

export type Repository = {
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
