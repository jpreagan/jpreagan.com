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
      <label htmlFor="name" className="my-4 block">
        Name
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="name"
          className="mt-2 block w-full rounded-md border border-gray-500 bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-800 dark:text-gray-100"
        />
      </label>
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email" className="my-4 block">
        Email Address
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          className="mt-2 block w-full rounded-md border border-gray-500 bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-800 dark:text-gray-100"
        />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="my-4 block">
        Message
        <textarea
          id="message"
          name="message"
          rows={10}
          className="mt-2 block w-full rounded-md border border-gray-500 bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-800 dark:text-gray-100"
        />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="shadown-sm rounded-md bg-pink-600 bg-gradient-to-r from-purple-800 to-pink-600 px-4 py-2 font-display text-white"
      >
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
