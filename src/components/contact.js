/** @jsx jsx */
import { Heading, Box, Textarea, Label, Input, Button, jsx } from "theme-ui"

const Contact = () => {
  return (
    <section sx={{ my: 6 }}>
      <Heading as="h2" variant="styles.h2" sx={{ mb: 2 }}>
        Get in touch
      </Heading>
      <Box as="form" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <Label htmlFor="username">Name</Label>
        <Input name="username" id="username" mb={3} />
        <Label htmlFor="email">Email</Label>
        <Input name="email" id="email" mb={3} />
        <Label htmlFor="message">Message</Label>
        <Textarea name="message" id="message" rows={6} mb={3} />
        <Button>Submit</Button>
      </Box>
    </section>
  )
}

export default Contact
