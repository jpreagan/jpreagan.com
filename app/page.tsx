import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Aloha from "~/components/aloha";
import Posts from "~/components/posts";
import ContactForm from "~/components/contact-form";

export const metadata = {
  title: "Aloha",
  description:
    "I'm a software engineer living in Hawaii. Lover of 80's music and udon noodles!",
};

export default function Home() {
  const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 4);

  return (
    <>
      <section className="mx-auto my-16 max-w-5xl px-4 lg:my-32">
        <Aloha />
      </section>
      <section className="mx-auto my-16 max-w-5xl px-4 lg:my-32">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100  md:text-3xl lg:text-4xl">
          Recent posts
        </h2>
        <Posts posts={posts} />
        <p className="my-8 md:text-lg lg:text-xl">
          ✨ See{" "}
          <Link
            className="text-sky-600 underline dark:text-sky-300"
            href="/blog"
          >
            all posts
          </Link>
          .
        </p>
      </section>
      <section className="mx-auto my-16 max-w-5xl px-4 lg:my-32">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl lg:text-4xl">
          Get in touch
        </h2>
        <ContactForm />
      </section>
    </>
  );
}
