import { defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        },
      ],
    },
    {
      name: "includeInFooter",
      title: "Include in Footer",
      description:
        "Checking this lists the article under Learn section in Footer",
      type: "boolean",
    },
    // optional field which only shows up when includeInFooter is true
    {
      name: "footerName",
      title: "Footer Name",
      description: "3-4 words short name for the article in footer",
      type: "string",
      hidden: ({ parent }) => !parent.includeInFooter,
    },
    {
      name: "overview",
      title: "Overview",
      type: "text",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "readingTime",
      title: "Reading Time",
      type: "string",
    },
  ],
});
