const links = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <a href="/" className="site-title">
        James Reagan
      </a>
      <nav className="site-navigation">
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="site-navigation-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
