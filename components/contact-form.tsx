"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdojozdp");

  if (state.succeeded) {
    return (
      <p>
        Thanks for your submission! I&apos;ll make every effort to get back to
        you in a timely fashion.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <label htmlFor="name" className="mb-1 block">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        autoComplete="name"
        aria-label="Name"
        className="mb-4 block w-full rounded-md border-none bg-gray-800 p-2 text-gray-100 shadow-sm"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email" className="mb-1 block">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        aria-label="Email Address"
        className="mb-4 block w-full rounded-md border-none bg-gray-800 p-2 text-gray-100 shadow-sm"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="mb-1 block">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={10}
        aria-label="Message"
        className="mb-4 block w-full rounded-md border-none border-gray-500 bg-gray-800 p-2 text-gray-100 shadow-sm"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-md bg-pink-600 bg-gradient-to-r from-purple-800 to-pink-600 px-5 py-4 font-semibold text-gray-100 shadow-sm hover:bg-pink-500 hover:from-purple-700 hover:to-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
      >
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
