export default function NewsletterSignup() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-12 lg:gap-8">
      <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
        <h2 className="inline sm:block lg:inline xl:block">
          Want all the news and updates?
        </h2>{" "}
        <p className="inline sm:block lg:inline xl:block">
          Sign up for my newsletter. ✨
        </p>
      </div>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/jpreagan"
        method="post"
        target="popupwindow"
        className="w-full max-w-md lg:col-span-5 lg:pt-2"
      >
        <div className="flex gap-x-4">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-pink-300 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="rounded-md bg-pink-600 bg-gradient-to-r from-purple-800 to-pink-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-pink-500 hover:from-purple-700 hover:to-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-300"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
