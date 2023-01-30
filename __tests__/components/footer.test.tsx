import { render, screen } from "@testing-library/react";
import Footer from "../../components/footer";

describe("Footer", () => {
  it("renders a link to the home page", () => {
    render(<Footer />);
    const homeLink = screen.getByRole("link", { name: "James Reagan" });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("ends with the current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();

    expect(screen.getByText((text) => text.endsWith(year))).toBeInTheDocument();
  });
});
