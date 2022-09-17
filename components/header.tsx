import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Expand } from "@theme-toggles/react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="mx-auto my-8 flex max-w-5xl flex-wrap px-4 tracking-tight">
      <Link href="/">
        <a className="font-display text-xl font-bold text-gray-900 hover:underline dark:text-gray-100 tablet:text-2xl">
          James Reagan
        </a>
      </Link>
      <Expand
        className="ml-auto text-3xl tablet:order-last tablet:ml-4"
        toggled={theme === "dark"}
        onToggle={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
      <nav className="text-lg tablet:ml-auto tablet:text-xl">
        <ul className="my-4 flex gap-2 tablet:m-0">
          <li>
            <Link href="/about">
              <a className="hover:underline">About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="hover:underline">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="hover:underline">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="hover:underline">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
