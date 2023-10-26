export interface Artist {
  url: string;
  id: string;
  name: string;
}

export interface Track {
  artists: Artist[];
  album: string;
  albumUrl: string;
  id: string;
  image: string;
  trackName: string;
  trackUrl: string;
  duration: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  coverImageAlt: string;
  content: string;
}

export interface PostListing
  extends Omit<Post, "id" | "createdAt" | "updatedAt" | "content"> {
  srcSet: string;
  timestamp: string;
  pubDate: string;
}

export interface Posts extends Array<PostListing> {}
