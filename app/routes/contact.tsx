import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";

import { validateEmail } from "~/utils.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact" },
    {
      name: "description",
      content: "Get in touch with me. How may I help you?",
    },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  type Errors = {
    name: string | null;
    email: string | null;
    subject: string | null;
    message: string | null;
  };
  const errors: Errors = {
    name: name ? null : "Name is required",
    email: email
      ? validateEmail(email)
        ? null
        : "Invalid email format"
      : "Email is required",
    subject: subject ? null : "Subject is required",
    message: message ? null : "Message is required",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json({ success: false, errors });
  }

  const URL = "https://api.sendgrid.com/v3/mail/send";
  const API_KEY = process.env.SENDGRID_API_KEY;
  const MY_EMAIL = process.env.MY_EMAIL;
  const payload = {
    personalizations: [{ to: [{ email: MY_EMAIL }] }],
    from: { email: MY_EMAIL },
    reply_to: { email, name },
    subject,
    content: [{ type: "text/plain", value: message }],
  };
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    return json({ success: true, errors });
  }

  return null;
};

export default function ContactPage() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();

  const errors = actionData?.errors;

  let state: "idle" | "success" | "error" | "submitting" = "idle";

  if (navigation.state === "submitting") {
    state = "submitting";
  } else if (actionData?.success) {
    state = "success";
  } else if (errors) {
    state = "error";
  }

  return (
    <>
      <h1 className="page-title">Contact</h1>
      <section className="contact-section">
        {state === "success" ? (
          <>
            <p>
              ✅ Your message has been sent successfully! Thank you for reaching
              out, and I'll get back to you as soon as possible.
            </p>
            <p>
              Return <Link to="/">home</Link>.
            </p>
          </>
        ) : (
          <>
            <p>Get in touch with me. How may I help you?</p>
            <Form className="contact-form" method="post">
              <label htmlFor="name">
                Name
                {errors?.name && <span className="error">* {errors.name}</span>}
              </label>
              <input id="name" type="text" name="name" autoComplete="name" />
              <label htmlFor="email">
                Email
                {errors?.email && (
                  <span className="error">* {errors.email}</span>
                )}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
              />
              <label htmlFor="subject">
                Subject
                {errors?.subject && (
                  <span className="error">* {errors.subject}</span>
                )}
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                autoComplete="off"
              />
              <label htmlFor="message">
                Message
                {errors?.message && (
                  <span className="error">* {errors.message}</span>
                )}
              </label>
              <textarea
                id="message"
                name="message"
                rows={10}
                autoComplete="off"
              ></textarea>
              <button type="submit">
                {state === "submitting" ? "Sending..." : "Submit"}
              </button>
            </Form>
          </>
        )}
      </section>
    </>
  );
}
