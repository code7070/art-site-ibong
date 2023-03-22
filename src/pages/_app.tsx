// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import { Merriweather } from "next/font/google";
import "@styles/globals.css";

const fonts = Merriweather({
  weight: ["400", "700", "900"],
  display: "block",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fonts.className}>
      <Component {...pageProps} />
    </main>
  );
}
