import { defineType } from "sanity";
import { camelize } from "../lib/utils";

const blogSection = (name) => ({
  name: camelize(name),
  title: name,
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "blogs",
      title: "Blogs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "article" }],
        },
      ],
    },
  ],
});

export default defineType({
  name: "blogLandingPage",
  title: "Blog Landing Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "featuredBlogs",
      title: "Featured Blogs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "article" }],
        },
      ],
    },

    // Popular Resource Blogs
    blogSection("Popular Resource Blogs"),

    // Link Building Blogs
    blogSection("Link Building Blogs"),
  ],
});
