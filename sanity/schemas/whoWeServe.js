import { defineType } from "sanity";

export default defineType({
  name: "whoWeServe",
  title: "Who We Serve",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "header",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
});
