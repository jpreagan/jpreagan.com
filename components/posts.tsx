import Link from "next/link";
import { Post } from "contentlayer/generated";
import Date from "~/components/date";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <div
      className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2"
      role="grid"
    >
      {posts.map((post, index: number) => {
        const even =
          "bg-gradient-to-r from-purple-900 to-pink-700 hover:from-purple-800 hover:to-pink-600";
        const odd =
          "bg-gradient-to-r from-pink-700 to-orange-500 hover:from-pink-600 hover:to-orange-400";
        const linearGradient = index % 2 === 0 ? even : odd;

        return (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            itemProp="url"
            className={`flex items-center justify-center rounded-md px-4 py-16 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1.5 md:px-10 ${linearGradient}`}
          >
            <article itemScope itemType="http://schema.org/Article">
              <header>
                <h2
                  itemProp="headline"
                  className="mb-4 text-xl font-bold tracking-tight text-gray-200 md:text-2xl"
                >
                  {post.title}
                </h2>
                <p className="text-gray-300">
                  <Date dateString={post.date} />
                </p>
              </header>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
