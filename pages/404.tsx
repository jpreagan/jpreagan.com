import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <Head>
        <title>404: Not Found</title>
        <meta
          name="description"
          content="Oops! The page you're looking for can't be found."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mx-auto mb-8 max-w-5xl px-4 text-4xl font-bold text-gray-900 dark:text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
        <h1>404: Page not found.</h1>
      </header>

      <section className="prose mx-auto mb-16 max-w-5xl px-4 prose-a:text-sky-600 dark:prose-invert dark:prose-a:text-sky-300 md:prose-lg lg:mb-32 lg:prose-xl">
        <p>
          Return <Link href="/">home</Link>.
        </p>
      </section>
    </Layout>
  );
}
