import { render, screen } from "@testing-library/react";
import Project from "../../components/project";

const mockProject = {
  description: "This is my project",
  id: "1",
  primaryLanguage: { name: "JavaScript", color: "#f1e05a" },
  name: "My Project",
  stargazerCount: 10,
  url: "https://example.com",
};

describe("Project", () => {
  it("renders the name of the project", () => {
    render(<Project project={mockProject} />);
    const name = screen.getByText(mockProject.name);
    expect(name).toBeInTheDocument();
  });

  it("renders the description of the project", () => {
    render(<Project project={mockProject} />);
    const description = screen.getByText(mockProject.description);
    expect(description).toBeInTheDocument();
  });

  it("renders the primary language of the project", () => {
    render(<Project project={mockProject} />);
    const primaryLanguage = screen.getByText(mockProject.primaryLanguage.name);
    expect(primaryLanguage).toBeInTheDocument();
  });

  it("renders the number of stargazers for the project", () => {
    render(<Project project={mockProject} />);
    const stargazerCount = screen.getByText(
      mockProject.stargazerCount.toString()
    );
    expect(stargazerCount).toBeInTheDocument();
  });

  it("renders a link to the project's URL", () => {
    render(<Project project={mockProject} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockProject.url);
  });
});
