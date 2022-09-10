export type PostType = {
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

export type PostProps = {
  allMarkdownRemark: {
    nodes: PostType[];
  };
};
