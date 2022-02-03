import { ThemeProvider } from "next-themes";
import "../public/css/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
