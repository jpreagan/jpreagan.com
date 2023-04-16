import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "~/components/header";
import Footer from "~/components/footer";
import "~/styles/globals.css";

export const metadata = {
  icons: {
    shortcut: "/favicon.ico",
  },
};

const inter = Inter({
  variable: "--font-inter",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrains_mono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head />
      <body className="font-body bg-gray-900 text-gray-400">
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
