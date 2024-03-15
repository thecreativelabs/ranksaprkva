import React from "react";
import Page from './page';
import Gallery from "./gallery";
import Growth from "./growth";
import Mission from "./mission";
import Cultivating from "./cultivating";
import Whoare from "./whoare";
import Howcare from "./howcare";
import Picture from "./picture";
import Opening from "./opening";
import Faq from "./faq";

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
        <Gallery />
        <Growth />
        <Cultivating />
        <Mission />
        <Whoare />
        <Howcare />
        <Picture />
        <Opening />
        <Faq />
      </body>
    </html>
  );
}
