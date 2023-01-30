import { render, screen } from "@testing-library/react";
import Aloha from "../../components/aloha";

describe("Aloha component", () => {
  it("renders a heading", () => {
    render(<Aloha />);

    const heading = screen.getByRole("heading", {
      name: /aloha/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
