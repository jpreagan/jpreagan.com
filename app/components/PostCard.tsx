import { Link } from "@remix-run/react";

import FormattedDate from "~/components/FormattedDate";
import type { PostListing } from "~/lib/types";

export default function PostCard({ post }: { post: PostListing }) {
  return (
    <Link to={`/blog/${post.slug}`} className="post-card-link">
      <article>
        <figure className="post-card-image">
          <img
            src={post.coverImage}
            srcSet={post.srcSet}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33.33vw, 33.33vw"
            width={1248}
            height={653}
            alt={post.coverImageAlt}
          />
        </figure>
        <h2 className="post-card-title">{post.title}</h2>
        <p className="post-card-publication-date">
          <FormattedDate timestamp={post.timestamp} pubDate={post.pubDate} />
        </p>
        <p className="post-card-description">{post.description}</p>
      </article>
    </Link>
  );
}
