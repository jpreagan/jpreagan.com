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

export type Artist = {
  id: string;
  name: string;
  url: string;
};

export type Track = {
  artists: Artist[];
  album: string;
  albumUrl: string;
  id: string;
  image: string;
  trackName: string;
  trackUrl: string;
  duration: string;
};
