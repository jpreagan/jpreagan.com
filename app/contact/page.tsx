import ContactForm from "~/components/contact-form";

export const metadata = {
  title: "Contact",
  description: "How can I help you? Get in touch with me.",
};

export default function ContactPage() {
  return (
    <>
      <header>
        <h1 className="mx-auto mb-8 max-w-5xl px-4 text-4xl font-bold text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          Get in touch
        </h1>
      </header>

      <section className="mx-auto mb-16 max-w-5xl px-4">
        <ContactForm />
      </section>
    </>
  );
}
