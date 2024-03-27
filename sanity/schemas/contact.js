import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Text",
          type: "string",
        }),
        defineField({
          name: "link",
          title: "Link",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "contactInfo",
      title: "Contact Info",
      type: "object",
      fields: [
        defineField({
          name: "email",
          title: "Email",
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Text",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "string",
            }),
          ],
        }),
        defineField({
          name: "phone",
          title: "Phone",
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Text",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
});
