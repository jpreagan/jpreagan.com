import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Posts from "~/components/posts";

export const metadata = {
  title: "Blog",
  description: "Learn about web development with my latest blog posts.",
};

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <>
      <header>
        <h1 className="mx-auto mb-8 max-w-7xl px-4 text-4xl font-bold text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          Blog
        </h1>
      </header>

      <section className="mx-auto mb-16 max-w-7xl px-4 sm:mb-24 lg:mb-32">
        <Posts posts={posts} />
      </section>
    </>
  );
}
