import { Link } from "@remix-run/react";

export default function Footer() {
  const today = new Date();

  return (
    <footer className="site-footer">
      <Link to="/">James Reagan</Link> © {today.getFullYear()}
    </footer>
  );
}
