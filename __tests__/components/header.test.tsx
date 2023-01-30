import { render, screen } from "@testing-library/react";
import Header from "../../components/header";

describe("Header", () => {
  it("renders the name", () => {
    render(<Header />);
    expect(screen.getByText("James Reagan")).toBeInTheDocument();
  });

  it("renders a nav element", () => {
    render(<Header />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    render(<Header />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
