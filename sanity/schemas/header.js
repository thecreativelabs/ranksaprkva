import { defineField, defineType } from "sanity";

export default defineType({
  name: "header",
  title: "Header",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    defineField({
      name: "topText",
      title: "Top Text",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
