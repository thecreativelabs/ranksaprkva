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
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "overview",
      title: "Overview",
      type: "text",
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
    {
      name: "body",
      title: "Body",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "sections",
          title: "Sections",
          type: "array",
          of: [
            {
              name: "section",
              title: "Section",
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "content",
                  title: "Content",
                  type: "blockContent",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
