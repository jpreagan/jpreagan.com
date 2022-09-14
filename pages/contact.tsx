import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import ContactForm from "../components/contact-form";

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="My personal website built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="mb-8 text-4xl font-bold text-gray-900 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          Get in touch
        </h1>
      </header>

      <section className="mb-16">
        <ContactForm />
      </section>
    </Layout>
  );
}
