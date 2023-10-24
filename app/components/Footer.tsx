const today = new Date();

export default function Footer() {
  return (
    <footer className="site-footer">
      <a href="/">James Reagan</a> © {today.getFullYear()}
    </footer>
  );
}
