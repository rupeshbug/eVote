import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";

export default function App({ Component, pageProps, session }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}></Hydrate>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  );
}
