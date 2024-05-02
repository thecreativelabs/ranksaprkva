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
        {
          name: "color",
          title: "Color",
          type: "string",
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
            defineField({
              name: "color",
              title: "Color",
              description: "The background color.",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "blockContent",
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "blockContent",
    }),
    defineField({
      name: "result",
      title: "Result",
      type: "blockContent",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "testimony",
      title: "Testimony",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "string",
        },
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "designation",
          title: "Designation",
          type: "string",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "services" }], required: true }],
    }),
    defineField({
      name: "featuredCaseStudiesSection",
      title: "Featured Case Studies Section",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "featuredCaseStudies",
          title: "Featured Case Studies",
          type: "array",
          of: [
            {
              type: "reference",
              to: [{ type: "caseStudy" }],
              required: true,
            },
          ],
        }),
      ],
    }),
  ],
});
