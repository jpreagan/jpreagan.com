import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPostListings } from "~/models/post.server";
import PostCard from "~/components/PostCard";
import type { Posts } from "~/lib/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog" },
    {
      name: "description",
      content: "Learn about web development with my latest blog posts.",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const posts = await getPostListings();

  return json<Posts>(posts);
};

export default function BlogPage() {
  const posts = useLoaderData<Posts>();

  return (
    <>
      <h1 className="page-title">Blog</h1>
      <section className="blog-section post-grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </>
  );
}
