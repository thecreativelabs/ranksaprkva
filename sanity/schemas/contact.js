import { defineField, defineType } from "sanity";

export default defineType({
  name: "sitemap",
  title: "Sitemap",
  type: "document",
  fields: [
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
});
