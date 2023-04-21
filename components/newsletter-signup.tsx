export default function NewsletterSignup() {
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/jpreagan"
      method="post"
      target="popupwindow"
      className="max-w-2xl"
    >
      <label htmlFor="email" className="mb-1 block">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        aria-label="Email"
        className="mb-4 block w-full rounded-md border-none bg-gray-700 p-2 text-gray-100 shadow-sm"
      />
      <label htmlFor="first-name" className="mb-1 block">
        First name
      </label>
      <input
        id="first-name"
        type="text"
        name="metadata__first-name"
        required
        aria-label="First Name"
        className="mb-4 block w-full rounded-md border-none bg-gray-700 p-2 text-gray-100 shadow-sm"
      />
      <input type="hidden" value="1" name="embed" />
      <button
        type="submit"
        className="shadown-sm hover:to-pink:500 rounded-md bg-pink-600 bg-gradient-to-r from-purple-800 to-pink-600 px-4 py-4 font-bold text-white hover:bg-pink-500 hover:from-purple-700"
      >
        Subscribe
      </button>
    </form>
  );
}
