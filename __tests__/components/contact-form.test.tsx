import { render, screen } from "@testing-library/react";
import ContactForm from "../../components/contact-form";

jest.mock("@formspree/react", () => {
  const originalModule = jest.requireActual("@formspree/react");
  return {
    ...originalModule,
    useForm: jest.fn(() => [{}, jest.fn()]),
  };
});

describe("Contact-form component", () => {
  test("renders an input of type text", () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toHaveAttribute("type", "text");
  });

  test("renders an input of type email", () => {
    render(<ContactForm />);
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute("type", "email");
  });

  test("renders a textarea for the message", () => {
    render(<ContactForm />);
    const messageTextarea = screen.getByLabelText(/message/i);
    expect(messageTextarea).toBeInstanceOf(HTMLTextAreaElement);
  });
});
