export default function Footer() {
  const today = new Date();

  return (
    <footer className="site-footer">
      <a href="/">James Reagan</a> © {today.getFullYear()}
    </footer>
  );
}
