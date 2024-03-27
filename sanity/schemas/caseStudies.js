import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "pageMeta",
      title: "Page Meta",
      type: "meta",
    }),
    defineField({
      name: "headerImage",
      title: "Header Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        },
      ],
    }),
    defineField({
      name: "awards",
      title: "Awards",
      type: "array",
      of: [
        {
          name: "award",
          title: "Award",
          type: "reference",
          to: [{ type: "award" }],
        },
      ],
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        defineArrayMember({
          name: "stat",
          title: "Stat",
          type: "object",
          fields: [
            defineField({
              name: "statistic",
              title: "Statistic",
              description: "The statistic to display.",
              type: "string",
            }),
            defineField({
              name: "context",
              title: "Context",
              description:
                'The text to display next to the statistic. For example, "users" or "downloads".',
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
});
