import { defineType } from "sanity";

export default defineType({
  name: "jobOpening",
  title: "Job Opening",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: [
          {
            title: "Content",
            value: "content",
          },
          {
            title: "SEO",
            value: "seo",
          },
        ],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
});
