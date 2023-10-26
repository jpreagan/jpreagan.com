import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import React from "react";
import FormattedDate from "~/components/FormattedDate";

import { getPost } from "~/models/post.server";

type LoaderData = {
  title: string;
  description: string;
  timestamp: string;
  pubDate: string;
  coverImage: string;
  coverImageAlt: string;
  srcSet: string;
  code: string;
};

export const meta: MetaFunction = ({ data }) => {
  const { title, description, coverImage } = data as LoaderData;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: coverImage },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: coverImage },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  if (!slug) throw new Error("Missing slug");

  const {
    title,
    description,
    timestamp,
    pubDate,
    coverImage,
    coverImageAlt,
    srcSet,
    code,
  } = await getPost(slug);

  return json<LoaderData>({
    title,
    description,
    timestamp,
    pubDate,
    coverImage,
    coverImageAlt,
    srcSet,
    code,
  });
};

export default function Post() {
  const {
    title,
    description,
    timestamp,
    pubDate,
    coverImage,
    coverImageAlt,
    srcSet,
    code,
  } = useLoaderData<LoaderData>();

  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <article>
      <header className="post-header">
        <div className="post-meta">
          <h1 className="post-title">{title}</h1>
          <p className="post-description">{description}</p>

          <div className="author-profile">
            <a href="/about">
              <img
                src="/images/author_image.jpeg"
                alt="James Reagan"
                className="author-image"
                height={50}
                width={50}
              />
            </a>
            <div className="author-info">
              <p className="author-name">
                <a href="/about">James Reagan</a>
              </p>
              <p className="publication-date">
                <FormattedDate timestamp={timestamp} pubDate={pubDate} />
              </p>
            </div>
          </div>
        </div>
        <figure className="cover-image">
          <img
            src={coverImage}
            srcSet={srcSet}
            sizes="(max-width: 1248px) 100vw, 1248px"
            width={1248}
            height={653}
            alt={coverImageAlt}
          />
        </figure>
      </header>
      <section className="content">
        <Component />
      </section>
    </article>
  );
}
