import React from "react";

import Providers from "@utils/provider";
import "./globals.css";

export const metadata = {
  title: "Scribe Website",
  description: "SCRIBE, Scripture editing made simple",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
