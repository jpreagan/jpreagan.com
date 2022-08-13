import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import * as styles from "./Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("mdojozdp");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="email">
        Email Address
        <input id="email" type="email" name="email" className={styles.input} />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="name">
        Name
        <input id="name" type="text" name="name" className={styles.input} />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">
        Message
        <textarea id="message" name="message" className={styles.textarea} rows={10} />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} className={styles.button}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
