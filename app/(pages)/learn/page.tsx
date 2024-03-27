import React from "react";
import Container from "@/components/Container";
import SlugPage from "../blog/[...page]";
import { client } from "@sanity/lib/client";
import { camelize } from "@sanity/lib/utils";
import { BlogLandingPage } from "@/types/sanity";

export default async function Page() {
  const data = (await client.fetch(`*[_type == "blogLandingPage"][0]{
    ...,
    featuredBlogs[]->,
    ${camelize("Popular Resource Blogs")} {
      ...,
      blogs[]->{
        ...,
        author->
      }
    },
    ${camelize("Link Building Blogs")} {
      ...,
      blogs[]->{
        ...,
        author->
      }
    }
  }`)) as BlogLandingPage;

  return (
    <Container>
      <SlugPage />
    </Container>
  );
}
