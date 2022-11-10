import "@fontsource/poppins";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/global-style.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import NextNProgress from "nextjs-progressbar";

import { ThemeProvider, CssBaseline } from "@mui/material";

import { Layout, SnackbarProvider } from "components";
import { store } from "state-management";
import { theme } from "styles";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <Layout>
            <NextNProgress color="#818cf8" />
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
