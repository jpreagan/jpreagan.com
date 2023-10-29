import { pages } from "~/lib/consts";

export default function Header() {
  return (
    <header className="site-header">
      <a href="/" className="site-title">
        James Reagan
      </a>
      <nav className="site-navigation">
        <ul>
          {pages.map((pages) => (
            <li key={pages.label}>
              <a href={pages.href} className="site-navigation-link">
                {pages.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
