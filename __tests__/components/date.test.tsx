import { render, screen } from "@testing-library/react";
import Date from "../../components/date";

describe("Date component", () => {
  test("renders the date in the correct format", () => {
    const dateString = "2022-12-16T10:00:00.000Z";
    render(<Date dateString={dateString} />);
    const dateElement = screen.getByText("December 16, 2022");
    expect(dateElement).toBeInTheDocument();
  });
});
