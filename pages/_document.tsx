import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white font-body text-gray-700 dark:bg-gray-900 dark:text-gray-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
