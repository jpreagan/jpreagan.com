import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import React from "react";
import FormattedDate from "~/components/FormattedDate";

import { getPost } from "~/models/post.server";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.post.title },
    { name: "description", content: data?.post.description },
    { property: "og:title", content: data?.post.title },
    { property: "og:description", content: data?.post.description },
    { property: "og:image", content: data?.post.coverImage },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: data?.post.title },
    { name: "twitter:description", content: data?.post.description },
    { name: "twitter:image", content: data?.post.coverImage },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;
  if (!slug) throw new Error("Missing slug");

  const post = await getPost(slug);
  const { code } = post;

  return json({ post, code });
};

export default function Post() {
  const { post, code } = useLoaderData<typeof loader>();

  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <article>
      <header className="post-header">
        <div className="post-meta">
          <h1 className="post-title">{post.title}</h1>
          <p className="post-description">{post.description}</p>

          <div className="author-profile">
            <Link to="/about">
              <img
                src="/images/author_image.jpeg"
                alt="James Reagan"
                className="author-image"
                height={50}
                width={50}
              />
            </Link>
            <div className="author-info">
              <p className="author-name">
                <Link to="/about">James Reagan</Link>
              </p>
              <p className="publication-date">
                <FormattedDate
                  timestamp={post.timestamp}
                  pubDate={post.pubDate}
                />
              </p>
            </div>
          </div>
        </div>
        <figure className="cover-image">
          <img
            src={post.coverImage}
            srcSet={post.srcSet}
            sizes="(max-width: 1248px) 100vw, 1248px"
            width={1248}
            height={653}
            alt={post.coverImageAlt}
          />
        </figure>
      </header>
      <section className="content">
        <Component />
      </section>
    </article>
  );
}
