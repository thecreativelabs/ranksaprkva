import { defineField, defineType } from "sanity";

export default defineType({
  name: "termsAndConditions",
  title: "Terms and Conditions",
  type: "document",
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "header",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
  ],
});
