import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import { getPostListings } from "~/models/post.server";
import type { Posts } from "~/types";
import PostCard from "~/components/PostCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Aloha" },
    {
      name: "description",
      content:
        "I'm a software engineer living in Hawaii. Lover of 80's music and udon noodles!",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const limit = 3;
  const recentPosts = await getPostListings(limit);

  return json<Posts>(recentPosts);
};

export default function Index() {
  const recentPosts = useLoaderData<Posts>();

  return (
    <>
      <section className="aloha">
        <p className="site-headline">
          Aloha <span className="wave">👋</span>, I&apos;m
          <br />
          <span className="text-gradient">James Reagan</span>
        </p>
        <div className="site-details">
          <picture>
            <source
              srcSet="/images/jpreagan.webp 1x, /images/jpreagan2x.webp 2x"
              type="image/webp"
              sizes="(max-width: 531px) 100vw, 531px"
            />
            <img
              className="tada profile-picture"
              src="/images/jpreagan.jpeg"
              width="531"
              height="531"
              alt="James Reagan"
            />
          </picture>
          <p>💻 I&apos;m a software engineer 🌴 living in Hawai&#699;i.</p>
          <p>💕 Lover of 80&apos;s music and 🍜 udon noodles!</p>
          <p className="about-me">
            <Link to="/about">
              💡 Learn more about me <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>
      <section className="recent-posts">
        <h2 className="recent-posts-heading">Recent posts</h2>
        <div className="post-grid">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <p className="see-all-posts">
          <Link to="/blog">
            📚 See all posts <span aria-hidden="true">→</span>
          </Link>
        </p>
      </section>
      <section className="newsletter-signup">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <h2>Want all the news and updates?</h2>{" "}
            <p>Sign up for my newsletter. ✨</p>
          </div>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/jpreagan"
            method="post"
            target="popupwindow"
            className="newsletter-form"
          >
            <div className="email-input-section">
              <label htmlFor="email" className="visually-hidden">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="email-input"
                placeholder="Enter your email"
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
