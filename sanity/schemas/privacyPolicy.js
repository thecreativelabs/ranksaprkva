import { defineField, defineType } from "sanity";

export default defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
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
