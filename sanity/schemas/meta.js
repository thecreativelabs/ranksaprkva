import { defineType } from "sanity";

export default defineType({
  name: "meta",
  title: "Meta",
  description: "Meta information for the page.",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    },
  ],
});
