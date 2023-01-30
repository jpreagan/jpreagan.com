import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../../components/theme-toggle";

let localStorageMock: { [key: string]: string } = {};

function setDeviceTheme(theme: "light" | "dark") {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: theme === "dark",
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

beforeAll(() => {
  global.Storage.prototype.getItem = jest.fn(
    (key: string) => localStorageMock[key]
  );
  global.Storage.prototype.setItem = jest.fn((key: string, value: string) => {
    localStorageMock[key] = value;
  });
});

beforeEach(() => {
  setDeviceTheme("light");
  document.documentElement.style.colorScheme = "";
  document.documentElement.removeAttribute("data-theme");
  document.documentElement.removeAttribute("class");

  localStorageMock = {};
});

describe("theme-toggle component", () => {
  test("light mode on first load when device theme is set to light", () => {
    setDeviceTheme("light");
    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveClass("light");
    expect(document.documentElement.style.colorScheme).toBe("light");
  });

  test("dark mode on first load when device theme is set to dark", () => {
    setDeviceTheme("dark");
    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveClass("dark");
    expect(document.documentElement.style.colorScheme).toBe("dark");
  });

  test("user can toggle between light and dark mode", () => {
    setDeviceTheme("light");
    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: "Toggle theme" });
    fireEvent.click(button);
    expect(document.documentElement).toHaveClass("dark");
    expect(document.documentElement.style.colorScheme).toBe("dark");
    fireEvent.click(button);
    expect(document.documentElement).toHaveClass("light");
    expect(document.documentElement.style.colorScheme).toBe("light");
  });

  test("user can toggle between dark and light mode", () => {
    setDeviceTheme("dark");
    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: "Toggle theme" });
    fireEvent.click(button);
    expect(document.documentElement).toHaveClass("light");
    expect(document.documentElement.style.colorScheme).toBe("light");
    fireEvent.click(button);
    expect(document.documentElement).toHaveClass("dark");
    expect(document.documentElement.style.colorScheme).toBe("dark");
  });

  test("user preference for light theme is applied from localStorage", () => {
    setDeviceTheme("dark");
    localStorageMock.theme = "light";
    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveClass("light");
    expect(document.documentElement.style.colorScheme).toBe("light");
  });

  test("user preference for dark theme is applied from localStorage", () => {
    setDeviceTheme("light");
    localStorageMock.theme = "dark";
    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveClass("dark");
    expect(document.documentElement.style.colorScheme).toBe("dark");
  });

  test("localStorage is updated when user switches to dark theme", () => {
    setDeviceTheme("light");
    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: "Toggle theme" });
    fireEvent.click(button);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  test("localStorage is updated when user switches to light theme", () => {
    setDeviceTheme("dark");
    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: "Toggle theme" });
    fireEvent.click(button);
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
