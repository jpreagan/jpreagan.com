/** @jsx jsx */
import { Heading, Box, Textarea, Label, Input, Button, jsx } from "theme-ui"

const Contact = () => {
  return (
    <section sx={{ my: 6 }}>
      <Heading
        as="h2"
        name="contact"
        method="POST"
        data-netlify="true"
        variant="styles.h2"
        sx={{ mb: 2 }}
      >
        Get in touch
      </Heading>
      <Box as="form" onSubmit={e => e.preventDefault()}>
        <Label htmlFor="username">Name</Label>
        <Input name="username" id="username" mb={3} />
        <Label htmlFor="email">Email</Label>
        <Input name="email" id="email" mb={3} />
        <Label htmlFor="comment">Comment</Label>
        <Textarea name="comment" id="comment" rows={6} mb={3} />
        <Button>Submit</Button>
      </Box>
    </section>
  )
}

export default Contact
