import { render, screen } from "@testing-library/react";
import Layout from "../../components/layout";

describe("Layout", () => {
  it("renders the header and footer", () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders the children within the main element", () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders the skip to content link", () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    );
    const skipLink = screen.getByRole("link", { name: "Skip to content" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main");
    expect(skipLink).toHaveClass("sr-only focus:not-sr-only");
  });
});
