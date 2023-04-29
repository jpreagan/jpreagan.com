import { Post } from "~/.contentlayer/generated";
import Date from "~/components/date";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
      {posts.map((post) => (
        <article key={post.slug}>
          <div className="text-sm text-gray-500">
            <Date dateString={post.date} />
          </div>
          <h3 className="mt-3 text-xl font-bold leading-6 text-gray-100">
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </h3>
          <p className="mt-3">{post.description}</p>
        </article>
      ))}
    </div>
  );
}
