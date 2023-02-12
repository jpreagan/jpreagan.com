import { ThemeProvider } from "next-themes";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-sans/400-italic.css";
import "@fontsource/ibm-plex-sans/700-italic.css";
import "@fontsource/ibm-plex-mono/400.css";
import "~/styles/globals.css";
import "~/styles/expand.css";
import "~/styles/code.css";
import "~/styles/spotify.css";
import "~/styles/projects.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
