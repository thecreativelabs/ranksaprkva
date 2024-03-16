import React from "react";
import Page from './page';
import Sets from "./sets";
import Team from "./team"
import Story from "./story";
import Growth from "./growth";
import Feedback from "./feedback";
import Stats from "./stats";
import Gallery from "./gallery";
import Strategy from "@/components/Strategy";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
        <Sets/>
        <Team />
        <Story />
        <Growth />
        <Feedback />
        <Stats />
        {/* <Gallery /> */}
        <Strategy />
      </body>
    </html>
  );
}
