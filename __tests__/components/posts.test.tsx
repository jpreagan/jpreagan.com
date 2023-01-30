import { render, screen } from "@testing-library/react";
import Posts from "../../components/posts";

describe("Posts", () => {
  const allPostsData = [
    {
      title: "Post 1",
      date: "2202-01-01",
      description: "This is a post",
      slug: "post-1",
    },
    {
      title: "Post 2",
      date: "2202-01-02",
      description: "This is another post",
      slug: "post-2",
    },
  ];

  it("renders a grid of post links", () => {
    render(<Posts allPostsData={allPostsData} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("renders the correct number of post links", () => {
    render(<Posts allPostsData={allPostsData} />);
    expect(screen.getAllByRole("link")).toHaveLength(allPostsData.length);
  });

  it("renders the correct title for each post", () => {
    render(<Posts allPostsData={allPostsData} />);

    allPostsData.forEach(({ title }, index) => {
      expect(screen.getAllByRole("link")[index]).toHaveTextContent(title);
    });
  });

  it("renders the correct slug for each post", () => {
    render(<Posts allPostsData={allPostsData} />);

    allPostsData.forEach(({ slug }, index) => {
      expect(screen.getAllByRole("link")[index]).toHaveAttribute(
        "href",
        `/blog/${slug}`
      );
    });
  });
});
