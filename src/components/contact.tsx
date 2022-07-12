/** @jsx jsx */
import { Heading, Textarea, Label, Input, Button, jsx } from "theme-ui"

function Contact() {
  return (
    <section id="contact" sx={{ my: 6 }}>
      <Heading as="h2" variant="styles.h2" sx={{ mb: 3 }}>
        Get in touch
      </Heading>
      <form name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <Label htmlFor="username">Name</Label>
        <Input name="username" id="username" mb={3} />
        <Label htmlFor="email">Email</Label>
        <Input name="email" id="email" mb={3} />
        <Label htmlFor="message">Message</Label>
        <Textarea name="message" id="message" rows={6} mb={3} />
        <Button>Submit</Button>
      </form>
    </section>
  )
}

export default Contact
