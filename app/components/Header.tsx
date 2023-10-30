import { Link } from "@remix-run/react";

import { pages } from "~/lib/consts";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-title">
        James Reagan
      </Link>
      <nav className="site-navigation">
        <ul>
          {pages.map((pages) => (
            <li key={pages.label}>
              <Link to={pages.href} className="site-navigation-link">
                {pages.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
