import React from "react";
import Page from './page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Include metadata, stylesheets, and scripts here */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
