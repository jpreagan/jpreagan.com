import Link from "next/link";

export default function Header() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="mx-auto my-8 flex max-w-5xl flex-wrap px-4 tracking-tight">
      <Link
        href="/"
        className="font-display text-xl font-bold text-gray-100 hover:underline tablet:text-2xl"
      >
        James Reagan
      </Link>
      <nav className="text-lg tablet:ml-auto tablet:text-xl">
        <ul className="my-4 flex gap-2 tablet:m-0">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
