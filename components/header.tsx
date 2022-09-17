import React from "react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="mx-auto my-8 flex max-w-5xl flex-wrap px-4 tracking-tight">
      <Link href="/">
        <a className="font-display text-xl font-bold text-gray-900 hover:underline dark:text-gray-100 tablet:text-2xl">
          James Reagan
        </a>
      </Link>
      <ThemeToggle />
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
