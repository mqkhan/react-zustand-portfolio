import useThemeStore from "../store";
import { useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  }, [theme]);

  return <Component {...pageProps} />;
}
