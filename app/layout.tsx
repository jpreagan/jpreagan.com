import { Inter, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "~/components/header";
import Footer from "~/components/footer";
import "~/styles/globals.css";
import "~/styles/expand.css";

export const metadata = {
  icons: {
    shortcut: "/favicon.ico",
  },
};

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const ibm_plex_sans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const ibm_plex_mono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "700"],
  style: "normal",
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
      className={`dark ${inter.variable} ${ibm_plex_sans.variable} ${ibm_plex_mono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head />
      <body className="bg-gray-900 font-body text-gray-400">
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
