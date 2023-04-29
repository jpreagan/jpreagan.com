import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto my-8 max-w-7xl px-4 text-sm md:text-base lg:text-lg">
      <Link href="/" className="hover:underline">
        James Reagan
      </Link>{" "}
      © {year}
    </footer>
  );
}
