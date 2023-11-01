import { Header } from "@/components/Header/component";
import "./globals.css";
import { StoreProvider } from "@/store/provider";
import React from "react";
import { ThemeWrapper } from "@/components/ThemeWrapper/component";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeWrapper>
      <html lang="en">
        <head>
          <title>The Star Wars</title>
          <link rel="icon" href="icon.svg" type="image/x-icon" />
        </head>

        <body>
          <React.StrictMode>
            <StoreProvider>
              <Header />
              <main>{children}</main>
            </StoreProvider>
          </React.StrictMode>
        </body>
      </html>
    </ThemeWrapper>
  );
}
